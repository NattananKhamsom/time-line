<template>
  <div class="quiz-overlay" v-if="isOpen" @click.self="closeQuiz">
    <div class="quiz-modal" :class="{ 'result-mode': showResult }">
      <!-- Quiz Header -->
      <div class="quiz-header">
        <h2>{{ quiz?.eraTitle }} - แบบทดสอบ</h2>
        <button class="close-btn" @click="closeQuiz">✕</button>
      </div>

      <!-- Progress Bar -->
      <div class="quiz-progress" v-if="!showResult">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
        <span class="progress-text">{{ currentIndex + 1 }} / {{ totalQuestions }}</span>
      </div>

      <!-- Question -->
      <div class="quiz-body" v-if="!showResult && currentQuestion">
        <p class="question-text">{{ currentQuestion.question }}</p>
        <div class="options-list">
          <button
            v-for="(option, idx) in currentQuestion.options"
            :key="idx"
            class="option-btn"
            :class="{
              selected: selectedAnswer === idx,
              correct: answered && idx === currentQuestion.correctIndex,
              wrong: answered && selectedAnswer === idx && idx !== currentQuestion.correctIndex
            }"
            @click="selectAnswer(idx)"
            :disabled="answered"
          >
            <span class="option-letter">{{ optionLetters[idx] }}</span>
            <span class="option-text">{{ option }}</span>
          </button>
        </div>

        <!-- Explanation (shown after answering) -->
        <div class="explanation" v-if="answered">
          <div class="explanation-icon" :class="{ correct: isCorrect, wrong: !isCorrect }">
            {{ isCorrect ? '✓' : '✗' }}
          </div>
          <p>{{ currentQuestion.explanation }}</p>
        </div>

        <!-- Next/Submit Button -->
        <button
          v-if="answered"
          class="parchment-btn btn-quiz next-btn"
          @click="nextQuestion"
        >
          {{ isLastQuestion ? 'ดูผลคะแนน' : 'ข้อถัดไป →' }}
        </button>
      </div>

      <!-- Result -->
      <div class="quiz-result" v-if="showResult">
        <div class="result-score-circle">
          <svg viewBox="0 0 120 120" class="score-ring">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#e8d5b7" stroke-width="8"/>
            <circle
              cx="60" cy="60" r="52" fill="none"
              stroke="#c9a96e" stroke-width="8"
              stroke-linecap="round"
              :stroke-dasharray="circumference"
              :stroke-dashoffset="circumference - (circumference * score / totalQuestions)"
              class="score-ring-fill"
            />
          </svg>
          <div class="score-number">{{ score }}/{{ totalQuestions }}</div>
        </div>

        <h3 class="result-title">{{ resultMessage }}</h3>
        <p class="result-desc">คุณตอบถูก {{ score }} จาก {{ totalQuestions }} ข้อ</p>

        <div class="result-actions">
          <button class="parchment-btn btn-quiz" @click="retryQuiz">ทำแบบทดสอบอีกครั้ง</button>
          <button class="parchment-btn btn-outline" @click="closeQuiz">ปิด</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { quizData, type QuizQuestion, type EraQuiz } from '../data/quiz-data';
import { saveQuizScore } from '../../auth/firestore-service';
import { firebaseAuth } from '../../auth/auth-web';

const props = defineProps<{
  eraId: string;
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
  (e: 'completed', score: number): void;
}>();

const optionLetters = ['ก', 'ข', 'ค', 'ง'];
const circumference = 2 * Math.PI * 52;

const quiz = ref<EraQuiz | null>(null);
const currentIndex = ref(0);
const selectedAnswer = ref<number | null>(null);
const answered = ref(false);
const score = ref(0);
const showResult = ref(false);

const totalQuestions = computed(() => quiz.value?.questions.length || 0);
const currentQuestion = computed<QuizQuestion | null>(() => {
  if (!quiz.value) return null;
  return quiz.value.questions[currentIndex.value] || null;
});
const progressPercent = computed(() => ((currentIndex.value + 1) / totalQuestions.value) * 100);
const isCorrect = computed(() => selectedAnswer.value === currentQuestion.value?.correctIndex);
const isLastQuestion = computed(() => currentIndex.value === totalQuestions.value - 1);

const resultMessage = computed(() => {
  const pct = score.value / totalQuestions.value;
  if (pct === 1) return '🏆 ยอดเยี่ยม! คะแนนเต็ม!';
  if (pct >= 0.8) return '🎉 เก่งมาก!';
  if (pct >= 0.6) return '👍 ดีมาก!';
  if (pct >= 0.4) return '📚 พอใช้ ลองอีกครั้ง!';
  return '💪 ลองอ่านเนื้อหาแล้วทำใหม่นะ!';
});

watch(() => props.isOpen, (val) => {
  if (val) {
    initQuiz();
  }
});

watch(() => props.eraId, () => {
  if (props.isOpen) {
    initQuiz();
  }
});

function initQuiz() {
  quiz.value = quizData[props.eraId] || null;
  currentIndex.value = 0;
  selectedAnswer.value = null;
  answered.value = false;
  score.value = 0;
  showResult.value = false;
}

function selectAnswer(idx: number) {
  if (answered.value) return;
  selectedAnswer.value = idx;
  answered.value = true;
  if (idx === currentQuestion.value?.correctIndex) {
    score.value++;
  }
}

async function nextQuestion() {
  if (isLastQuestion.value) {
    showResult.value = true;
    // Save score to Firebase
    try {
      const user = firebaseAuth.currentUser;
      if (user) {
        await saveQuizScore(
          user.uid,
          props.eraId,
          score.value,
          totalQuestions.value,
          user.displayName || 'Unknown',
          user.photoURL
        );
      }
    } catch (err) {
      console.error('Failed to save score:', err);
    }
    emit('completed', score.value);
  } else {
    currentIndex.value++;
    selectedAnswer.value = null;
    answered.value = false;
  }
}

function retryQuiz() {
  initQuiz();
}

function closeQuiz() {
  emit('close');
}
</script>

<style scoped>
.quiz-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(45, 30, 15, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.quiz-modal {
  background:
    linear-gradient(135deg,
      rgba(197, 168, 130, 0.95) 0%,
      rgba(212, 184, 150, 0.98) 50%,
      rgba(197, 168, 130, 0.95) 100%
    );
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: slideUp 0.4s ease;
  font-family: 'Kanit', sans-serif;
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px 16px;
  border-bottom: 2px solid rgba(138, 112, 84, 0.2);
}

.quiz-header h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0;
}

.close-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(45, 30, 15, 0.1);
  color: #2d1e0f;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(45, 30, 15, 0.2);
}

.quiz-progress {
  padding: 16px 28px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: rgba(232, 213, 183, 0.8);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #c9a96e, #a88b6a);
  border-radius: 4px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a3728;
  white-space: nowrap;
}

.quiz-body {
  padding: 8px 28px 28px;
}

.question-text {
  font-size: 1.15rem;
  font-weight: 600;
  color: #2d1e0f;
  line-height: 1.7;
  margin-bottom: 24px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border: 2px solid rgba(138, 112, 84, 0.3);
  border-radius: 12px;
  background: rgba(232, 213, 183, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Kanit', sans-serif;
  text-align: left;
  width: 100%;
}

.option-btn:hover:not(:disabled) {
  border-color: #c9a96e;
  background: rgba(201, 169, 110, 0.2);
  transform: translateX(4px);
}

.option-btn.selected {
  border-color: #c9a96e;
  background: rgba(201, 169, 110, 0.3);
}

.option-btn.correct {
  border-color: #4a7c59;
  background: rgba(74, 124, 89, 0.15);
}

.option-btn.wrong {
  border-color: #8b3a3a;
  background: rgba(139, 58, 58, 0.15);
}

.option-letter {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #2d1e0f;
  color: #e8d5b7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
  flex-shrink: 0;
}

.option-btn.correct .option-letter {
  background: #4a7c59;
}

.option-btn.wrong .option-letter {
  background: #8b3a3a;
}

.option-text {
  font-size: 1rem;
  color: #2d1e0f;
  line-height: 1.5;
}

.explanation {
  margin-top: 20px;
  padding: 16px 20px;
  background: rgba(232, 213, 183, 0.7);
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  animation: fadeIn 0.3s ease;
}

.explanation-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.explanation-icon.correct {
  background: #4a7c59;
  color: white;
}

.explanation-icon.wrong {
  background: #8b3a3a;
  color: white;
}

.explanation p {
  margin: 0;
  font-size: 0.95rem;
  color: #4a3728;
  line-height: 1.6;
}

.next-btn {
  margin-top: 24px;
  width: 100%;
  justify-content: center;
  font-size: 1.1rem;
  padding: 14px;
}

/* Result Styles */
.quiz-result {
  padding: 40px 28px;
  text-align: center;
}

.result-score-circle {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 24px;
}

.score-ring {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.score-ring-fill {
  transition: stroke-dashoffset 1.5s ease;
}

.score-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  font-weight: 800;
  color: #2d1e0f;
}

.result-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 8px;
}

.result-desc {
  font-size: 1rem;
  color: #6b5744;
  margin: 0 0 32px;
}

.result-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.result-actions .parchment-btn {
  width: 100%;
  justify-content: center;
}

.parchment-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: none;
  border-radius: 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.parchment-btn.btn-quiz {
  background: #c9a96e;
  color: #2d1e0f;
  font-size: 1.05rem;
  padding: 14px 36px;
  font-weight: 600;
}

.parchment-btn.btn-quiz:hover {
  background: #a88b6a;
  box-shadow: 0 6px 20px rgba(201, 169, 110, 0.4);
}

.parchment-btn.btn-outline {
  background: transparent;
  border: 2px solid #2d1e0f;
  color: #2d1e0f;
}

.parchment-btn.btn-outline:hover {
  background: #2d1e0f;
  color: #e8d5b7;
}

@media (max-width: 480px) {
  .quiz-modal {
    width: 95%;
    border-radius: 16px;
  }
  .quiz-header, .quiz-body, .quiz-result {
    padding-left: 20px;
    padding-right: 20px;
  }
  .quiz-progress {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
