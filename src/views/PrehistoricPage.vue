<template>
  <ion-page class="parchment-page">
    <ion-content :fullscreen="true">
      <div class="era-page parchment-bg">
        <!-- Navigation -->
        <NavBar :showBack="true" eraTitle="ยุคก่อนประวัติศาสตร์" />

        <!-- Hero Header -->
        <div class="era-hero">
          <h1 class="era-main-title">ยุคก่อนประวัติศาสตร์</h1>
          <p class="era-main-date">2.5 ล้านปีก่อน - 3,000 ปีก่อน ค.ศ.</p>
          <div class="era-badge-hero">
            <span class="badge-number">01</span>
            <span class="badge-title">ยุคก่อนประวัติศาสตร์</span>
          </div>
        </div>

        <!-- Content -->
        <div class="era-content">
          <!-- Introduction -->
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">📖 บทนำ</h2>
            <p>
              จุดเริ่มต้นของเผ่าพันธุ์ Homo sapiens ในทวีปแอฟริกา มนุษย์เริ่มเรียนรู้การใช้ไฟ การสร้างเครื่องมือหิน 
              และการอยู่ร่วมกันเป็นสังคมล่าสัตว์และหาของป่า แล้วค่อยๆ พัฒนาไปสู่ยุคเกษตรกรรม เป็นจุดเปลี่ยนครั้งใหญ่ 
              ที่ทำให้มนุษย์เริ่มสร้างสรรค์อารยธรรมอย่างแท้จริง
            </p>
          </div>

          <!-- Key Points -->
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">🎯 ประเด็นสำคัญ</h2>
            <div class="key-points">
              <div class="key-point-card">
                <h3>การปฏิวัติเกษตรกรรม</h3>
                <p>มนุษย์เริ่มปลูกพืชและเลี้ยงสัตว์แทนการล่าสัตว์ เปลี่ยนจากชีวิตเร่ร่อนมาเป็นการตั้งถิ่นฐาน</p>
              </div>
              <div class="key-point-card">
                <h3>การตั้งถิ่นฐานครั้งแรกในเมโสโปเตเมีย</h3>
                <p>หุบเขาแม่น้ำไทกรีส-ยูเฟรตส์เป็นแหล่งอารยธรรมแรกของมนุษยชาติที่มีเขตเมืองและระบบการเกษตร</p>
              </div>
              <div class="key-point-card">
                <h3>การประดิษฐ์ล้อและเครื่องปั้นดินเผา</h3>
                <p>ล้อได้มาจากไม่รู้จักของป่า และช่วยให้การขนส่งและดำเนินการเกษตรสะดวกขึ้นมาก</p>
              </div>
            </div>
          </div>

          <!-- Timeline Events -->
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">📍 เหตุการณ์สำคัญ</h2>
            <div class="era-timeline">
              <div class="era-tl-item" v-for="(event, idx) in timelineEvents" :key="idx">
                <div class="era-tl-year">{{ event.year }}</div>
                <div class="era-tl-content">
                  <h3>{{ event.title }}</h3>
                  <p>{{ event.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">💡 ข้อมูลเพิ่มเติม</h2>
            <p>
              ยุคก่อนประวัติศาสตร์เป็นช่วงเวลาที่ยาวนานที่สุดในประวัติศาสตร์มนุษย์ ตั้งแต่ประมาณ 2.5 ล้านปีก่อนปัจจุบัน 
              จึงเหลือเวลาเพียง 3,000 ปีเท่านั้น (ก่อนที่มนุษย์จะมีการเขียนบันทึก)
            </p>
            <p>
              ในช่วงเวลานี้ มนุษย์ได้พัฒนาจากสัตว์สายพันธุ์มนุษย์ไปเป็นมนุษย์สมบูรณ์ที่มีสติปัญญาและความสามารถสูง
            </p>
          </div>

          <!-- Quiz Section -->
          <div class="quiz-cta" data-aos="fade-up">
            <h2>📝 ทดสอบความรู้</h2>
            <p>คุณพร้อมทดสอบความรู้เกี่ยวกับยุคก่อนประวัติศาสตร์แล้วหรือยัง?</p>
            <button class="parchment-btn btn-quiz" @click="showQuiz = true">
              เริ่มทำแบบทดสอบ →
            </button>
            <div class="previous-score" v-if="previousScore !== null">
              <p>คะแนนครั้งก่อน: {{ previousScore.score }}/{{ previousScore.totalQuestions }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Quiz Modal -->
      <QuizModal 
        eraId="prehistoric"
        :isOpen="showQuiz"
        @close="showQuiz = false"
        @completed="onQuizCompleted"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import NavBar from '../components/NavBar.vue';
import QuizModal from '../components/QuizModal.vue';
import { getUserEraScore, type QuizScore } from '../../auth/firestore-service';
import { firebaseAuth } from '../../auth/auth-web';

const showQuiz = ref(false);
const previousScore = ref<QuizScore | null>(null);

const timelineEvents = [
  { year: '~2.5 ล้านปีก่อน', title: 'แนวมนุษย์เกิดขึ้น', desc: 'ปรากฏตัวของ Homo habilis - มนุษย์ที่มีความสามารถในการใช้เครื่องมือ' },
  { year: '~1.5 ล้านปีก่อน', title: 'ยุคหินเก่า (Paleolithic Age)', desc: 'การใช้ไฟเพิ่มขึ้น มนุษย์เริ่มอบอาหารและให้ความอบอุ่นมากขึ้น' },
  { year: '~10,000 ปีก่อน', title: 'การปฏิวัติเกษตรกรรม (Neolithic Age)', desc: 'มนุษย์เริ่มปลูกพืชและเลี้ยงสัตว์ เปลี่ยนมาจากอาชีพล่าสัตว์' },
  { year: '~5,000 ปีก่อน', title: 'เจริญเติบโตของเมืองแรก', desc: 'มนุษย์สร้างเมืองเล็กๆ ในเมโสโปเตเมีย และค่อยๆ พัฒนาระบบการปกครอง' },
  { year: '~3,000 ปีก่อน', title: 'ก่อนประวัติศาสตร์สิ้นสุด', desc: 'มนุษย์เริ่มมีการเขียนบันทึก (Writing System) ซึ่งทำให้เข้าสู่ยุคประวัติศาสตร์' }
];

const onQuizCompleted = (score: number) => {
  loadPreviousScore();
};

const loadPreviousScore = async () => {
  try {
    const user = firebaseAuth.currentUser;
    if (user) {
      previousScore.value = await getUserEraScore(user.uid, 'prehistoric');
    }
  } catch (e) { console.error(e); }
};

onMounted(() => {
  loadPreviousScore();
  if ((window as any).AOS) {
    (window as any).AOS.init({ duration: 1000, once: true });
  }
});
</script>

<style scoped>
.era-page {
  font-family: 'Kanit', sans-serif;
  color: #2d1e0f;
  min-height: 100vh;
  padding-bottom: 60px;
}

/* Hero */
.era-hero {
  text-align: center;
  padding: 60px 20px 40px;
  position: relative;
}

.era-main-title {
  font-family: 'Kanit', sans-serif;
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d1e0f;
  margin: 0 0 8px;
}

.era-main-date {
  font-size: 1.1rem;
  color: #6b5744;
  font-weight: 300;
  margin: 0 0 20px;
}

.era-badge-hero {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #2d1e0f;
  color: #e8d5b7;
  padding: 10px 24px;
  border-radius: 10px;
  font-weight: 600;
}

.badge-number { font-size: 1.2rem; font-weight: 700; }
.badge-title { font-size: 1rem; }

/* Content */
.era-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.content-section {
  margin-bottom: 48px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(138, 112, 84, 0.2);
}

.section-label {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #c9a96e;
  display: inline-block;
}

.content-section p {
  font-size: 1rem;
  line-height: 1.9;
  color: #4a3728;
  margin-bottom: 12px;
  text-align: justify;
}

/* Key Points */
.key-points {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.key-point-card {
  background: rgba(232, 213, 183, 0.6);
  padding: 20px 24px;
  border-left: 5px solid #c9a96e;
  border-radius: 0 8px 8px 0;
}

.key-point-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 8px;
}

.key-point-card p {
  margin: 0;
  font-size: 0.95rem;
  color: #6b5744;
}

/* Era Timeline */
.era-timeline {
  position: relative;
  padding-left: 40px;
}

.era-timeline::before {
  content: '';
  position: absolute;
  left: 9px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #c9a96e;
}

.era-tl-item {
  position: relative;
  margin-bottom: 28px;
  padding-left: 36px;
}

.era-tl-item::before {
  content: '';
  position: absolute;
  left: -31px;
  top: 5px;
  width: 18px;
  height: 18px;
  background: #c9a96e;
  border: 3px solid #c5a882;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #c9a96e;
}

.era-tl-year {
  font-weight: 700;
  color: #c9a96e;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.era-tl-content h3 {
  margin: 6px 0;
  color: #2d1e0f;
  font-size: 1.1rem;
}

.era-tl-content p {
  margin: 6px 0 0;
  color: #6b5744;
  font-size: 0.95rem;
}

/* Quiz CTA */
.quiz-cta {
  text-align: center;
  padding: 40px 24px;
  background: rgba(232, 213, 183, 0.5);
  border-radius: 16px;
  margin-top: 20px;
}

.quiz-cta h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 8px;
}

.quiz-cta p {
  font-size: 1rem;
  color: #6b5744;
  margin: 0 0 24px;
}

.parchment-btn.btn-quiz {
  background: #c9a96e;
  color: #2d1e0f;
  font-size: 1.1rem;
  padding: 14px 36px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;
  transition: all 0.3s;
}

.parchment-btn.btn-quiz:hover {
  background: #a88b6a;
  box-shadow: 0 6px 20px rgba(201, 169, 110, 0.4);
  transform: translateY(-2px);
}

.previous-score {
  margin-top: 16px;
}

.previous-score p {
  font-size: 0.95rem;
  color: #4a3728;
  margin: 0;
}

/* Responsive */
@media (max-width: 600px) {
  .era-main-title { font-size: 1.8rem; }
  .era-content { padding: 0 16px; }
  .section-label { font-size: 1.2rem; }
}
</style>
