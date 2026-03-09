<template>
  <ion-page class="parchment-page">
    <ion-content :fullscreen="true">
      <div class="leaderboard-page parchment-bg">
        <NavBar :showBack="true" eraTitle="กระดานคะแนน" />

        <div class="lb-header">
          <h1>🏆 กระดานคะแนน</h1>
          <p>ผู้เล่นที่ได้คะแนนสูงสุดจากแบบทดสอบทุกยุค</p>
        </div>

        <!-- Loading -->
        <div class="lb-loading" v-if="loading">
          <div class="spinner-ring"></div>
          <p>กำลังโหลด...</p>
        </div>

        <!-- Podium (Top 3) -->
        <div class="podium" v-if="!loading && entries.length >= 3">
          <div class="podium-item second">
            <div class="podium-avatar">
              <img v-if="entries[1]?.photoUrl" :src="entries[1].photoUrl" alt="" />
              <span v-else class="avatar-placeholder">{{ entries[1]?.displayName?.charAt(0) || '?' }}</span>
            </div>
            <p class="podium-name">{{ entries[1]?.displayName || 'ไม่ทราบชื่อ' }}</p>
            <div class="podium-score">{{ entries[1]?.totalScore || 0 }}</div>
            <div class="podium-block">2</div>
          </div>
          <div class="podium-item first">
            <div class="crown">👑</div>
            <div class="podium-avatar gold">
              <img v-if="entries[0]?.photoUrl" :src="entries[0].photoUrl" alt="" />
              <span v-else class="avatar-placeholder">{{ entries[0]?.displayName?.charAt(0) || '?' }}</span>
            </div>
            <p class="podium-name">{{ entries[0]?.displayName || 'ไม่ทราบชื่อ' }}</p>
            <div class="podium-score">{{ entries[0]?.totalScore || 0 }}</div>
            <div class="podium-block gold-block">1</div>
          </div>
          <div class="podium-item third">
            <div class="podium-avatar">
              <img v-if="entries[2]?.photoUrl" :src="entries[2].photoUrl" alt="" />
              <span v-else class="avatar-placeholder">{{ entries[2]?.displayName?.charAt(0) || '?' }}</span>
            </div>
            <p class="podium-name">{{ entries[2]?.displayName || 'ไม่ทราบชื่อ' }}</p>
            <div class="podium-score">{{ entries[2]?.totalScore || 0 }}</div>
            <div class="podium-block">3</div>
          </div>
        </div>

        <!-- Full List -->
        <div class="lb-list" v-if="!loading">
          <div
            class="lb-row"
            v-for="(entry, idx) in entries"
            :key="entry.userId"
            :class="{ 'my-row': entry.userId === currentUserId }"
          >
            <div class="lb-rank">
              <span v-if="idx === 0" class="rank-medal">🥇</span>
              <span v-else-if="idx === 1" class="rank-medal">🥈</span>
              <span v-else-if="idx === 2" class="rank-medal">🥉</span>
              <span v-else class="rank-number">{{ idx + 1 }}</span>
            </div>
            <div class="lb-avatar">
              <img v-if="entry.photoUrl" :src="entry.photoUrl" alt="" />
              <span v-else class="avatar-sm">{{ entry.displayName?.charAt(0) || '?' }}</span>
            </div>
            <div class="lb-info">
              <span class="lb-name">{{ entry.displayName || 'ไม่ทราบชื่อ' }}</span>
              <span class="lb-meta">{{ entry.erasCompleted }} ยุค</span>
            </div>
            <div class="lb-score">{{ entry.totalScore }} <small>คะแนน</small></div>
          </div>

          <div class="lb-empty" v-if="entries.length === 0">
            <p>ยังไม่มีข้อมูลคะแนน</p>
            <p>ทำแบบทดสอบในแต่ละยุคเพื่อขึ้นกระดานคะแนน!</p>
            <button class="parchment-btn btn-quiz" @click="$router.push('/tabs/tab1')">กลับหน้าหลัก →</button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import NavBar from '../components/NavBar.vue';
import { getLeaderboard, type LeaderboardEntry } from '../../auth/firestore-service';
import { firebaseAuth } from '../../auth/auth-web';

const loading = ref(true);
const entries = ref<LeaderboardEntry[]>([]);
const currentUserId = ref('');

onMounted(async () => {
  try {
    currentUserId.value = firebaseAuth.currentUser?.uid || '';
    entries.value = await getLeaderboard(20);
  } catch (e) {
    console.error('Failed to load leaderboard:', e);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.leaderboard-page {
  font-family: 'Kanit', sans-serif;
  color: #2d1e0f;
  min-height: 100vh;
  padding-bottom: 60px;
}

.lb-header {
  text-align: center;
  padding: 50px 20px 30px;
}

.lb-header h1 {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 8px;
}

.lb-header p {
  font-size: 1rem;
  color: #6b5744;
  margin: 0;
}

/* Loading */
.lb-loading {
  text-align: center;
  padding: 60px 20px;
}

.spinner-ring {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(138, 112, 84, 0.3);
  border-top-color: #c9a96e;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* Podium */
.podium {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 12px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto 40px;
}

.podium-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.podium-avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #a88b6a;
  background: rgba(232, 213, 183, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.podium-avatar.gold {
  width: 68px;
  height: 68px;
  border-color: #c9a96e;
  box-shadow: 0 0 20px rgba(201, 169, 110, 0.4);
}

.podium-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d1e0f;
}

.crown {
  font-size: 1.6rem;
  margin-bottom: -4px;
}

.podium-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #2d1e0f;
  margin: 0;
  max-width: 100px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.podium-score {
  font-size: 1.2rem;
  font-weight: 800;
  color: #c9a96e;
}

.podium-block {
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: #e8d5b7;
  background: #4a3728;
  border-radius: 8px 8px 0 0;
}

.first .podium-block { height: 80px; }
.second .podium-block { height: 56px; }
.third .podium-block { height: 40px; }

.gold-block {
  background: linear-gradient(135deg, #c9a96e 0%, #a88b6a 100%);
  color: #2d1e0f;
}

/* List */
.lb-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;
}

.lb-row {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 8px;
  background: rgba(232, 213, 183, 0.4);
  transition: all 0.2s;
}

.lb-row:hover {
  background: rgba(232, 213, 183, 0.7);
}

.lb-row.my-row {
  background: rgba(201, 169, 110, 0.3);
  border: 2px solid #c9a96e;
}

.lb-rank {
  width: 36px;
  text-align: center;
}

.rank-medal {
  font-size: 1.4rem;
}

.rank-number {
  font-size: 1.1rem;
  font-weight: 700;
  color: #6b5744;
}

.lb-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: rgba(232, 213, 183, 0.8);
  border: 2px solid #a88b6a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.lb-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-sm {
  font-size: 1rem;
  font-weight: 700;
  color: #2d1e0f;
}

.lb-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.lb-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #2d1e0f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lb-meta {
  font-size: 0.8rem;
  color: #8a7a6a;
}

.lb-score {
  font-size: 1.2rem;
  font-weight: 800;
  color: #c9a96e;
  text-align: right;
}

.lb-score small {
  font-size: 0.7rem;
  font-weight: 400;
  color: #8a7a6a;
  display: block;
}

/* Empty State */
.lb-empty {
  text-align: center;
  padding: 40px 20px;
}

.lb-empty p {
  color: #6b5744;
  margin: 0 0 8px;
}

.parchment-btn.btn-quiz {
  background: #c9a96e;
  color: #2d1e0f;
  font-size: 1rem;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;
  transition: all 0.3s;
  margin-top: 20px;
}

.parchment-btn.btn-quiz:hover {
  background: #a88b6a;
  transform: translateY(-2px);
}

@media (max-width: 480px) {
  .podium-block { width: 60px; }
  .lb-header h1 { font-size: 1.8rem; }
}
</style>
