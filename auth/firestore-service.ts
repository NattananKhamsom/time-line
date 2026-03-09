import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, where, Timestamp } from "firebase/firestore";
import { firebaseApp } from "./auth-web";

const db = getFirestore(firebaseApp);

export interface QuizScore {
  userId: string;
  displayName: string;
  photoUrl: string | null;
  eraId: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  photoUrl: string | null;
  totalScore: number;
  totalQuestions: number;
  erasCompleted: number;
  lastUpdated: Date;
}

/**
 * Save or update a user's quiz score for a specific era
 */
export async function saveQuizScore(
  userId: string,
  eraId: string,
  score: number,
  totalQuestions: number,
  displayName: string,
  photoUrl: string | null
): Promise<void> {
  // Save individual era score
  const scoreRef = doc(db, "scores", `${userId}_${eraId}`);
  await setDoc(scoreRef, {
    userId,
    displayName,
    photoUrl,
    eraId,
    score,
    totalQuestions,
    completedAt: Timestamp.now()
  });

  // Update aggregated leaderboard entry
  await updateLeaderboardEntry(userId, displayName, photoUrl);
}

/**
 * Update the leaderboard entry for a user by aggregating all their era scores
 */
async function updateLeaderboardEntry(
  userId: string,
  displayName: string,
  photoUrl: string | null
): Promise<void> {
  const scoresQuery = query(
    collection(db, "scores"),
    where("userId", "==", userId)
  );
  const snapshot = await getDocs(scoresQuery);

  let totalScore = 0;
  let totalQuestions = 0;
  let erasCompleted = 0;

  snapshot.forEach((doc) => {
    const data = doc.data();
    totalScore += data.score;
    totalQuestions += data.totalQuestions;
    erasCompleted++;
  });

  const leaderboardRef = doc(db, "leaderboard", userId);
  await setDoc(leaderboardRef, {
    userId,
    displayName,
    photoUrl,
    totalScore,
    totalQuestions,
    erasCompleted,
    lastUpdated: Timestamp.now()
  });
}

/**
 * Get the top leaderboard entries
 */
export async function getLeaderboard(maxResults: number = 20): Promise<LeaderboardEntry[]> {
  const leaderboardQuery = query(
    collection(db, "leaderboard"),
    orderBy("totalScore", "desc"),
    limit(maxResults)
  );

  const snapshot = await getDocs(leaderboardQuery);
  const entries: LeaderboardEntry[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    entries.push({
      userId: data.userId,
      displayName: data.displayName,
      photoUrl: data.photoUrl,
      totalScore: data.totalScore,
      totalQuestions: data.totalQuestions,
      erasCompleted: data.erasCompleted,
      lastUpdated: data.lastUpdated?.toDate() || new Date()
    });
  });
  return entries;
}

/**
 * Get all scores for a specific user
 */
export async function getUserScores(userId: string): Promise<QuizScore[]> {
  const scoresQuery = query(
    collection(db, "scores"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(scoresQuery);
  const scores: QuizScore[] = [];
  snapshot.forEach((doc) => {
    const data = doc.data();
    scores.push({
      userId: data.userId,
      displayName: data.displayName,
      photoUrl: data.photoUrl,
      eraId: data.eraId,
      score: data.score,
      totalQuestions: data.totalQuestions,
      completedAt: data.completedAt?.toDate() || new Date()
    });
  });
  return scores;
}

/**
 * Get score for a specific user and era
 */
export async function getUserEraScore(userId: string, eraId: string): Promise<QuizScore | null> {
  const scoreRef = doc(db, "scores", `${userId}_${eraId}`);
  const scoreDoc = await getDoc(scoreRef);

  if (!scoreDoc.exists()) return null;

  const data = scoreDoc.data();
  return {
    userId: data.userId,
    displayName: data.displayName,
    photoUrl: data.photoUrl,
    eraId: data.eraId,
    score: data.score,
    totalQuestions: data.totalQuestions,
    completedAt: data.completedAt?.toDate() || new Date()
  };
}
