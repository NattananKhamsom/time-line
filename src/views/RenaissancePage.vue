<template>
  <ion-page class="parchment-page">
    <ion-content :fullscreen="true">
      <div class="era-page parchment-bg">
        <NavBar :showBack="true" eraTitle="ยุคฟื้นฟูศิลปวิทยา" />

        <div class="era-hero">
          <h1 class="era-main-title">ยุคฟื้นฟูศิลปวิทยาและการสำรวจ</h1>
          <p class="era-main-date">ค.ศ. 1450 - ค.ศ. 1750</p>
          <div class="era-badge-hero">
            <span class="badge-number">04</span>
            <span class="badge-title">ยุคฟื้นฟูศิลปวิทยา</span>
          </div>
        </div>

        <div class="era-content">
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">📖 บทนำ</h2>
            <p>
              ยุคฟื้นฟูศิลปวิทยา (Renaissance) เป็นช่วงแห่งการตื่นรู้ทางปัญญา เริ่มต้นในอิตาลี 
              มนุษย์หันกลับมาสนใจศิลปะ วิทยาศาสตร์ และปรัชญาของกรีก-โรมัน การค้นพบดินแดนใหม่ 
              การปฏิรูปศาสนา และแท่นพิมพ์เปลี่ยนโลกอย่างสิ้นเชิง
            </p>
          </div>

          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">🎯 ประเด็นสำคัญ</h2>
            <div class="key-points">
              <div class="key-point-card">
                <h3>ศิลปะและวิทยาศาสตร์</h3>
                <p>เลโอนาร์โด ดา วินชี ไมเคิลแองเจโล จาลิเลโอ และโคเปอร์นิคัส ปฏิวัติความรู้ของมนุษย์</p>
              </div>
              <div class="key-point-card">
                <h3>ยุคแห่งการสำรวจ</h3>
                <p>โคลัมบัส วาสโก ดา กามา และมาเจลลัน ค้นพบเส้นทางใหม่ เชื่อมโลกเข้าด้วยกัน</p>
              </div>
              <div class="key-point-card">
                <h3>แท่นพิมพ์กูเทนเบิร์ก</h3>
                <p>การคิดค้นแท่นพิมพ์ทำให้ความรู้แพร่กระจายอย่างรวดเร็ว เกิดการปฏิรูปศาสนา</p>
              </div>
            </div>
          </div>

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

          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">💡 ข้อมูลเพิ่มเติม</h2>
            <p>
              ยุคฟื้นฟูศิลปวิทยาเป็นสะพานเชื่อมระหว่างยุคกลางกับโลกสมัยใหม่ ความคิดเรื่องมนุษยนิยม 
              (Humanism) ทำให้มนุษย์เริ่มให้ความสำคัญกับศักยภาพของตนเอง
            </p>
          </div>

          <div class="quiz-cta" data-aos="fade-up">
            <h2>📝 ทดสอบความรู้</h2>
            <p>คุณพร้อมทดสอบความรู้เกี่ยวกับยุคฟื้นฟูศิลปวิทยาแล้วหรือยัง?</p>
            <button class="parchment-btn btn-quiz" @click="showQuiz = true">เริ่มทำแบบทดสอบ →</button>
            <div class="previous-score" v-if="previousScore !== null">
              <p>คะแนนครั้งก่อน: {{ previousScore.score }}/{{ previousScore.totalQuestions }}</p>
            </div>
          </div>
        </div>
      </div>

      <QuizModal eraId="renaissance" :isOpen="showQuiz" @close="showQuiz = false" @completed="onQuizCompleted" />
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
  { year: 'ค.ศ. 1440', title: 'แท่นพิมพ์กูเทนเบิร์ก', desc: 'โยฮันเนส กูเทนเบิร์กคิดค้นแท่นพิมพ์ตัวเรียง ปฏิวัติการเผยแพร่ความรู้' },
  { year: 'ค.ศ. 1492', title: 'โคลัมบัสถึงอเมริกา', desc: 'คริสโตเฟอร์ โคลัมบัสเดินทางถึงทวีปอเมริกา เปิดยุคแห่งการสำรวจ' },
  { year: 'ค.ศ. 1503', title: 'โมนาลิซ่า', desc: 'เลโอนาร์โด ดา วินชีเริ่มวาดภาพโมนาลิซ่า ผลงานศิลปะที่โด่งดังที่สุดในโลก' },
  { year: 'ค.ศ. 1517', title: 'การปฏิรูปศาสนา', desc: 'มาร์ติน ลูเธอร์ติดข้อโต้แย้ง 95 ข้อ เริ่มต้นการปฏิรูปศาสนาในยุโรป' },
  { year: 'ค.ศ. 1687', title: 'Principia Mathematica', desc: 'ไอแซก นิวตันตีพิมพ์กฎแห่งการเคลื่อนที่ วางรากฐานฟิสิกส์สมัยใหม่' }
];

const onQuizCompleted = () => { loadPreviousScore(); };
const loadPreviousScore = async () => {
  try {
    const user = firebaseAuth.currentUser;
    if (user) previousScore.value = await getUserEraScore(user.uid, 'renaissance');
  } catch (e) { console.error(e); }
};

onMounted(() => {
  loadPreviousScore();
  if ((window as any).AOS) (window as any).AOS.init({ duration: 1000, once: true });
});
</script>

<style scoped>
.era-page { font-family: 'Kanit', sans-serif; color: #2d1e0f; min-height: 100vh; padding-bottom: 60px; }
.era-hero { text-align: center; padding: 60px 20px 40px; }
.era-main-title { font-family: 'Kanit', sans-serif; font-size: 2.5rem; font-weight: 800; color: #2d1e0f; margin: 0 0 8px; }
.era-main-date { font-size: 1.1rem; color: #6b5744; font-weight: 300; margin: 0 0 20px; }
.era-badge-hero { display: inline-flex; align-items: center; gap: 12px; background: #2d1e0f; color: #e8d5b7; padding: 10px 24px; border-radius: 10px; font-weight: 600; }
.badge-number { font-size: 1.2rem; font-weight: 700; } .badge-title { font-size: 1rem; }
.era-content { max-width: 800px; margin: 0 auto; padding: 0 24px; }
.content-section { margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid rgba(138, 112, 84, 0.2); }
.section-label { font-size: 1.4rem; font-weight: 700; color: #2d1e0f; margin: 0 0 20px; padding-bottom: 10px; border-bottom: 3px solid #c9a96e; display: inline-block; }
.content-section p { font-size: 1rem; line-height: 1.9; color: #4a3728; margin-bottom: 12px; text-align: justify; }
.key-points { display: flex; flex-direction: column; gap: 16px; }
.key-point-card { background: rgba(232, 213, 183, 0.6); padding: 20px 24px; border-left: 5px solid #c9a96e; border-radius: 0 8px 8px 0; }
.key-point-card h3 { font-size: 1.05rem; font-weight: 700; color: #2d1e0f; margin: 0 0 8px; }
.key-point-card p { margin: 0; font-size: 0.95rem; color: #6b5744; }
.era-timeline { position: relative; padding-left: 40px; }
.era-timeline::before { content: ''; position: absolute; left: 9px; top: 0; bottom: 0; width: 2px; background: #c9a96e; }
.era-tl-item { position: relative; margin-bottom: 28px; padding-left: 36px; }
.era-tl-item::before { content: ''; position: absolute; left: -31px; top: 5px; width: 18px; height: 18px; background: #c9a96e; border: 3px solid #c5a882; border-radius: 50%; box-shadow: 0 0 0 2px #c9a96e; }
.era-tl-year { font-weight: 700; color: #c9a96e; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
.era-tl-content h3 { margin: 6px 0; color: #2d1e0f; font-size: 1.1rem; }
.era-tl-content p { margin: 6px 0 0; color: #6b5744; font-size: 0.95rem; }
.quiz-cta { text-align: center; padding: 40px 24px; background: rgba(232, 213, 183, 0.5); border-radius: 16px; margin-top: 20px; }
.quiz-cta h2 { font-size: 1.5rem; font-weight: 700; color: #2d1e0f; margin: 0 0 8px; }
.quiz-cta p { font-size: 1rem; color: #6b5744; margin: 0 0 24px; }
.parchment-btn.btn-quiz { background: #c9a96e; color: #2d1e0f; font-size: 1.1rem; padding: 14px 36px; border-radius: 10px; font-weight: 600; border: none; cursor: pointer; font-family: 'Kanit', sans-serif; transition: all 0.3s; }
.parchment-btn.btn-quiz:hover { background: #a88b6a; box-shadow: 0 6px 20px rgba(201, 169, 110, 0.4); transform: translateY(-2px); }
.previous-score { margin-top: 16px; } .previous-score p { font-size: 0.95rem; color: #4a3728; margin: 0; }
@media (max-width: 600px) { .era-main-title { font-size: 1.8rem; } .era-content { padding: 0 16px; } }
</style>
