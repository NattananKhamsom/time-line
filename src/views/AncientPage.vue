<template>
  <ion-page class="parchment-page">
    <ion-content :fullscreen="true">
      <div class="era-page parchment-bg">
        <NavBar :showBack="true" eraTitle="อารยธรรมโบราณ" />

        <div class="era-hero">
          <h1 class="era-main-title">อารยธรรมโบราณ</h1>
          <p class="era-main-date">3,000 ปีก่อน ค.ศ. - ค.ศ. 500</p>
          <div class="era-badge-hero">
            <span class="badge-number">02</span>
            <span class="badge-title">อารยธรรมโบราณ</span>
          </div>
        </div>

        <div class="era-content">
          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">📖 บทนำ</h2>
            <p>
              ยุคอารยธรรมโบราณเป็นช่วงที่มนุษย์เริ่มสร้างสังคมที่ซับซ้อน มีระบบการเขียน กฎหมาย ศาสนา 
              และการปกครอง อารยธรรมสำคัญ ได้แก่ เมโสโปเตเมีย อียิปต์ กรีก โรม จีน และอินเดีย
            </p>
          </div>

          <div class="content-section" data-aos="fade-up">
            <h2 class="section-label">🎯 ประเด็นสำคัญ</h2>
            <div class="key-points">
              <div class="key-point-card">
                <h3>ระบบการเขียนและกฎหมาย</h3>
                <p>อักษรคูนิฟอร์มของสุเมเรียน ประมวลกฎหมายฮัมมูราบี และอักษรเฮียโรกลิฟิกของอียิปต์</p>
              </div>
              <div class="key-point-card">
                <h3>ประชาธิปไตยกรีก</h3>
                <p>นครรัฐเอเธนส์เป็นต้นแบบประชาธิปไตย รวมถึงปรัชญา วิทยาศาสตร์ และศิลปะ</p>
              </div>
              <div class="key-point-card">
                <h3>จักรวรรดิโรมัน</h3>
                <p>จักรวรรดิที่ยิ่งใหญ่ที่สุดในประวัติศาสตร์ตะวันตก ด้วยระบบกฎหมาย ถนน และสถาปัตยกรรม</p>
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
              อารยธรรมโบราณวางรากฐานให้โลกสมัยใหม่ ทั้งระบบตัวเลข ปฏิทิน การแพทย์ ดาราศาสตร์ 
              และปรัชญา ซึ่งยังคงมีอิทธิพลมาจนถึงปัจจุบัน
            </p>
          </div>

          <div class="quiz-cta" data-aos="fade-up">
            <h2>📝 ทดสอบความรู้</h2>
            <p>คุณพร้อมทดสอบความรู้เกี่ยวกับอารยธรรมโบราณแล้วหรือยัง?</p>
            <button class="parchment-btn btn-quiz" @click="showQuiz = true">เริ่มทำแบบทดสอบ →</button>
            <div class="previous-score" v-if="previousScore !== null">
              <p>คะแนนครั้งก่อน: {{ previousScore.score }}/{{ previousScore.totalQuestions }}</p>
            </div>
          </div>
        </div>
      </div>

      <QuizModal eraId="ancient" :isOpen="showQuiz" @close="showQuiz = false" @completed="onQuizCompleted" />
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
  { year: '~3,400 ปีก่อน ค.ศ.', title: 'กำเนิดอักษรคูนิฟอร์ม', desc: 'ชาวสุเมเรียนคิดค้นระบบการเขียนแรกของโลก' },
  { year: '~3,100 ปีก่อน ค.ศ.', title: 'รวมอียิปต์เป็นหนึ่ง', desc: 'ฟาโรห์นาร์เมอร์รวมอียิปต์บนและล่างเป็นอาณาจักรเดียว' },
  { year: '~500 ปีก่อน ค.ศ.', title: 'ประชาธิปไตยเอเธนส์', desc: 'นครรัฐเอเธนส์เริ่มใช้ระบอบประชาธิปไตยโดยตรง' },
  { year: '~221 ปีก่อน ค.ศ.', title: 'รวมจีนเป็นหนึ่ง', desc: 'จิ๋นซีฮ่องเต้รวมจีนเป็นจักรวรรดิเดียว เริ่มสร้างกำแพงเมืองจีน' },
  { year: 'ค.ศ. 476', title: 'จักรวรรดิโรมันตะวันตกล่มสลาย', desc: 'สิ้นสุดยุคอารยธรรมโบราณ เริ่มต้นยุคกลางของยุโรป' }
];

const onQuizCompleted = () => { loadPreviousScore(); };
const loadPreviousScore = async () => {
  try {
    const user = firebaseAuth.currentUser;
    if (user) previousScore.value = await getUserEraScore(user.uid, 'ancient');
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
.badge-number { font-size: 1.2rem; font-weight: 700; }
.badge-title { font-size: 1rem; }
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
.previous-score { margin-top: 16px; }
.previous-score p { font-size: 0.95rem; color: #4a3728; margin: 0; }
@media (max-width: 600px) { .era-main-title { font-size: 1.8rem; } .era-content { padding: 0 16px; } }
</style>
