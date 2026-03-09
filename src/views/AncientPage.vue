<template>
  <ion-page class="parchment-page">

    <div class="scroll-progress"></div>

    <ion-content ref="contentRef" :fullscreen="true">

      <div class="parchment-container">
        <div class="paper-texture"></div>
        <div class="animated-fog"></div>

        <div class="floating-elements">
          <div class="particle p1"></div>
          <div class="particle p2"></div>
          <div class="particle p3"></div>
        </div>

        <div class="era-page parchment-bg">

          <NavBar :showBack="true" eraTitle="อารยธรรมโบราณ" />

          <!-- HERO -->
          <div class="era-hero" data-aos="zoom-in">

            <p class="era-subtitle">Ancient Civilization</p>

            <h1 class="era-main-title">
              อารยธรรมโบราณ
            </h1>

            <p class="era-main-date">
              3,000 ปีก่อน ค.ศ. — ค.ศ. 500
            </p>

            <div class="era-badge-hero">
              <span class="badge-number">02</span>
              <span class="badge-title">Ancient</span>
            </div>

          </div>

          <div class="era-content">

            <!-- INTRO -->
            <div class="content-section" data-aos="fade-up">

              <h2 class="section-label">📖 บทนำ</h2>

              <div class="intro-card">

                <p>
                  ยุคอารยธรรมโบราณเป็นช่วงที่มนุษย์เริ่มสร้างสังคมขนาดใหญ่
                  มีระบบกฎหมาย ศาสนา การปกครอง และการเขียน
                </p>

                <p>
                  อารยธรรมสำคัญ ได้แก่ เมโสโปเตเมีย อียิปต์ กรีก โรม จีน
                  และอินเดีย ซึ่งวางรากฐานให้โลกสมัยใหม่
                </p>

              </div>

            </div>

            <!-- IMAGE GRID -->
            <div class="content-section" data-aos="fade-up">

              <h2 class="section-label">🖼 อารยธรรมสำคัญ</h2>

              <div class="image-grid">

                <div class="image-card">
                  <div class="img-wrapper">
                    <img src="/images/train.jpg">
                  </div>
                  <div class="card-body">
                    <h3>เมโสโปเตเมีย</h3>
                    <p>อารยธรรมแรกของโลก เกิดระหว่างแม่น้ำไทกริสและยูเฟรติส</p>
                  </div>
                </div>

                <div class="image-card">
                  <div class="img-wrapper">
                    <img src="/images/train.jpg">
                  </div>
                  <div class="card-body">
                    <h3>อียิปต์</h3>
                    <p>อารยธรรมลุ่มแม่น้ำไนล์ มีพีระมิดและฟาโรห์</p>
                  </div>
                </div>

                <div class="image-card">
                  <div class="img-wrapper">
                    <img src="/images/train.jpg">
                  </div>
                  <div class="card-body">
                    <h3>กรีก</h3>
                    <p>กำเนิดปรัชญา วิทยาศาสตร์ และประชาธิปไตย</p>
                  </div>
                </div>

              </div>

            </div>

            <!-- KEY POINTS -->
            <div class="content-section" data-aos="fade-up">

              <h2 class="section-label">🎯 ประเด็นสำคัญ</h2>

              <div class="key-points">

                <div
                class="key-point-card"
                v-for="(point,i) in keyPoints"
                :key="i">

                  <div class="point-icon">
                    {{ point.icon }}
                  </div>

                  <div class="point-info">
                    <h3>{{ point.title }}</h3>
                    <p>{{ point.desc }}</p>
                  </div>

                </div>

              </div>

            </div>

            <!-- TIMELINE -->
            <div class="content-section" data-aos="fade-up">

              <h2 class="section-label">📍 เหตุการณ์สำคัญ</h2>

              <div class="era-timeline">

                <div
                class="era-tl-item"
                v-for="(event, idx) in timelineEvents"
                :key="idx">

                  <div class="tl-dot"></div>

                  <div class="era-tl-year">
                    {{ event.year }}
                  </div>

                  <div class="era-tl-content">
                    <h3>{{ event.title }}</h3>
                    <p>{{ event.desc }}</p>
                  </div>

                </div>

              </div>

            </div>

            <!-- IMPACT -->
            <div class="content-section impact-box" data-aos="flip-up">

              <h2 class="section-label">🌍 ผลกระทบต่อโลก</h2>

              <div class="impact-grid">

                <div class="impact-item">
                  <strong>การปกครอง:</strong>
                  การกำเนิดกฎหมายและรัฐชาติ
                </div>

                <div class="impact-item">
                  <strong>วัฒนธรรม:</strong>
                  ปรัชญา ศาสนา และศิลปะโบราณ
                </div>

              </div>

            </div>

            <!-- QUIZ -->
            <div class="quiz-cta" data-aos="zoom-in">

              <h2>📝 ทดสอบความรู้</h2>

              <p>
                คุณเข้าใจอารยธรรมโบราณมากแค่ไหน?
              </p>

              <button
              class="parchment-btn btn-quiz"
              @click="showQuiz=true">

                เริ่มทำแบบทดสอบ →

              </button>

              <div
              class="previous-score"
              v-if="previousScore!==null">

                <p>
                  คะแนนครั้งก่อน:
                  {{ previousScore.score }}/{{ previousScore.totalQuestions }}
                </p>

              </div>

            </div>

          </div>
        </div>
      </div>

      <QuizModal
      eraId="ancient"
      :isOpen="showQuiz"
      @close="showQuiz=false"
      @completed="onQuizCompleted"/>

      <!-- GUIDE CHARACTER -->
      <div class="guide-character" @click="nextGuideTip">

        <div class="guide-bubble">
          {{ guideText }}
        </div>

        <div class="guide-body">
          🏺
        </div>

      </div>

    </ion-content>
  </ion-page>
</template>
<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'

import NavBar from '../components/NavBar.vue'
import QuizModal from '../components/QuizModal.vue'

import { getUserEraScore, type QuizScore } from '../../auth/firestore-service'
import { firebaseAuth } from '../../auth/auth-web'

const contentRef = ref()

const showQuiz = ref(false)

const previousScore = ref<QuizScore | null>(null)

const keyPoints=[

{
icon:'📜',
title:'ระบบการเขียน',
desc:'อักษรคูนิฟอร์มและเฮียโรกลิฟิกเป็นระบบเขียนแรกของโลก'
},

{
icon:'⚖️',
title:'กฎหมาย',
desc:'ประมวลกฎหมายฮัมมูราบีเป็นกฎหมายโบราณที่สำคัญ'
},

{
icon:'🏛️',
title:'จักรวรรดิ',
desc:'จักรวรรดิโรมันและอารยธรรมกรีกมีอิทธิพลต่อโลกตะวันตก'
}

]

const timelineEvents=[

{
year:'~3400 BC',
title:'กำเนิดอักษรคูนิฟอร์ม',
desc:'ชาวสุเมเรียนสร้างระบบเขียนแรก'
},

{
year:'~3100 BC',
title:'รวมอียิปต์',
desc:'ฟาโรห์นาร์เมอร์รวมอียิปต์'
},

{
year:'500 BC',
title:'ประชาธิปไตยกรีก',
desc:'เอเธนส์พัฒนาระบอบประชาธิปไตย'
},

{
year:'221 BC',
title:'รวมจีน',
desc:'จิ๋นซีฮ่องเต้รวมจีนเป็นจักรวรรดิ'
},

{
year:'476 AD',
title:'โรมันล่มสลาย',
desc:'สิ้นสุดยุคอารยธรรมโบราณ'
}

]

const guideTips=[

"เลื่อนดู Timeline 📜",
"ลองเอาเมาส์วางบนการ์ด ✨",
"ท้ายหน้ามี Quiz 🧠"

]

const guideIndex=ref(0)

const guideText=ref(guideTips[0])

const nextGuideTip=()=>{

guideIndex.value=(guideIndex.value+1)%guideTips.length
guideText.value=guideTips[guideIndex.value]

}

const onQuizCompleted=()=>{

loadPreviousScore()

}

const loadPreviousScore=async()=>{

const user=firebaseAuth.currentUser

if(user){

previousScore.value=await getUserEraScore(user.uid,'ancient')

}

}

onMounted(()=>{

loadPreviousScore()

if((window as any).AOS){

(window as any).AOS.init({

duration:1000,
once:true

})

}

/* PROGRESS BAR */

const progressBar=document.querySelector('.scroll-progress') as HTMLElement

const updateProgress=async()=>{

const el=await contentRef.value.$el.getScrollElement()

el.addEventListener('scroll',()=>{

const scrollTop=el.scrollTop
const scrollHeight=el.scrollHeight-el.clientHeight

const progress=(scrollTop/scrollHeight)*100

if(progressBar){

progressBar.style.width=progress+"%"

}

})

}

updateProgress()

/* CURSOR SPARK */

document.addEventListener('mousemove',(e)=>{

const spark=document.createElement('div')

spark.className='cursor-spark'

spark.style.left=e.pageX+"px"
spark.style.top=e.pageY+"px"

document.body.appendChild(spark)

setTimeout(()=>{

spark.remove()

},800)

})

})

</script>
<style scoped>
/* --- แก้ไขเฉพาะ BACKGROUND ANIMATION ให้พรีเมียมขึ้น --- */
.parchment-container {
  position: relative;
  background: #f5ecd7; 
  /* เพิ่ม Gradient หลายชั้นให้ดูเหมือนกระดาษจริงมีเงาขอบ */
  background-image: 
    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 100%),
    radial-gradient(circle at center, #f5ecd7 0%, #d4bc8e 100%);
  min-height: 100vh;
  overflow: hidden;
}

.paper-texture {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-image: url('https://www.transparenttextures.com/patterns/papyrus-dark.png');
  opacity: 0.35;
  pointer-events: none;
  z-index: 1;
  /* เพิ่ม Blend Mode ให้กลืนกับสีพื้นหลัง */
  mix-blend-mode: multiply;
}

.animated-fog {
  position: fixed;
  top: -50%; left: -50%; width: 200%; height: 200%;
  /* ปรับ Fog ให้ละมุนขึ้น */
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 60%);
  animation: drift 25s ease-in-out infinite alternate;
  z-index: 2;
  pointer-events: none;
  filter: blur(40px);
}

/* เพิ่มละอองฝุ่นลอยเล็กๆ (Particles) */
.floating-elements .particle {
  position: absolute;
  background: rgba(140, 106, 74, 0.1);
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
}
.p1 { width: 150px; height: 150px; top: 10%; left: 5%; animation: float 15s infinite; }
.p2 { width: 200px; height: 200px; bottom: 10%; right: 5%; animation: float 20s infinite reverse; }
.p3 { width: 100px; height: 100px; top: 40%; right: 15%; animation: float 18s infinite 2s; }

@keyframes drift {
  from { transform: translate(-10%, -10%) rotate(0deg); }
  to { transform: translate(5%, 5%) rotate(5deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-40px) translateX(20px); }
}
/* -------------------------------------------------- */

/* LAYOUT */
.era-page {
  position: relative;
  z-index: 10;
  font-family: 'Kanit', sans-serif;
  color: #3d2b1f;
  padding-bottom: 80px;
}

/* HERO */
.era-hero {
  text-align: center;
  padding: 80px 20px 60px;
  position: relative;
}

.era-subtitle {
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.9rem;
  color: #8c6a4a;
  margin-bottom: 10px;
}

.era-main-title {
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  background: linear-gradient(45deg, #2d1e0f, #8c6a4a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow{
  from{
    text-shadow:0 0 5px rgba(201,169,110,0.4);
  }
  to{
    text-shadow:0 0 20px rgba(201,169,110,0.8);
  }
}
.era-main-title::after{
  content:"";
  position:absolute;
  top:0;
  left:-100%;
  width:100%;
  height:100%;
  background:linear-gradient(
    120deg,
    transparent,
    rgba(255,255,255,0.6),
    transparent
  );
  animation: shimmer 5s infinite;
}

@keyframes shimmer{
  0%{left:-100%}
  100%{left:100%}
}

.era-main-date {
  font-size: 1.2rem;
  color: #6b5744;
  margin: 15px 0;
  font-style: italic;
}

.era-badge-hero {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  background: rgba(45, 30, 15, 0.9);
  color: #e8d5b7;
  padding: 12px 28px;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.badge-number { font-size: 1.5rem; font-weight: bold; border-right: 1px solid #c9a96e; padding-right: 12px; }

/* CONTENT */
.era-content { max-width: 900px; margin: auto; padding: 0 24px; }

.content-section { margin-bottom: 70px; }

.section-label {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 30px;
  color: #2d1e0f;
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-label::after {
  content: "";
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, #c9a96e, transparent);
}

.intro-card {
  background: rgba(255, 255, 255, 0.4);
  padding: 30px;
  border-radius: 20px;
  border: 1px solid rgba(201, 169, 110, 0.3);
  line-height: 1.8;
  backdrop-filter: blur(5px);
}

/* IMAGE GRID */
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; }

.image-card {
  background: #fdf8ef;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  transition: all 0.4s ease;
  border: 1px solid rgba(201, 169, 110, 0.2);
}

.image-card:hover { transform: translateY(-10px) rotate(1deg);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15),
              0 0 20px rgba(201,169,110,0.4); }

.img-wrapper { overflow: hidden; height: 180px; }
.image-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
.image-card:hover img { transform: scale(1.1); }

.card-body { padding: 20px; }
.card-body h3 { margin: 0 0 10px; color: #2d1e0f; font-weight: 700; }
.card-body p { font-size: 0.95rem; color: #5c4633; margin: 0; }

/* KEY POINTS */
.key-points { display: grid; gap: 20px; }
.key-point-card {
  display: flex;
  gap: 20px;
  background: rgba(255,255,255,0.5);
  padding: 25px;
  border-radius: 15px;
  align-items: center;
  transition: 0.3s;
}
.key-point-card:hover { background: rgba(255,255,255,0.8);
  transform: translateX(8px); }
.point-icon { font-size: 2.5rem; }
.point-info h3 { margin: 0 0 5px; font-size: 1.2rem; }

/* TIMELINE */
.era-timeline {
  position: relative;
  padding-left: 40px;
}
.era-timeline::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: #c9a96e;
  border-radius: 2px;
}

.era-tl-item{
  position: relative;
  margin-bottom: 40px;
  opacity:0;
  transform:translateX(-40px);
  animation:timelineFade 0.8s forwards;
}

.era-tl-item:nth-child(1){animation-delay:0.2s}
.era-tl-item:nth-child(2){animation-delay:0.4s}
.era-tl-item:nth-child(3){animation-delay:0.6s}
.era-tl-item:nth-child(4){animation-delay:0.8s}
.era-tl-item:nth-child(5){animation-delay:1s}

@keyframes timelineFade{
  to{
    opacity:1;
    transform:translateX(0);
  }
}
.tl-dot {
  position: absolute;
  left: -48px; top: 5px;
  width: 20px; height: 20px;
  background: #2d1e0f;
  border: 4px solid #c9a96e;
  border-radius: 50%;
  animation: pulseDot 2.5s infinite;
}

@keyframes pulseDot {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(201,169,110,0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(201,169,110,0); }
  100% { transform: scale(1); }
}

.era-tl-year { font-weight: 900; color: #8c6a4a; font-size: 1.2rem; margin-bottom: 5px; }
.era-tl-content {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* IMPACT BOX */
.impact-box {
  background: #2d1e0f;
  color: #e8d5b7;
  padding: 40px;
  border-radius: 30px;
}
.impact-box .section-label { color: #e8d5b7; }
.impact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
.impact-item { background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; }

/* QUIZ CTA */
.quiz-cta {
  text-align: center;
  background: linear-gradient(135deg, #f2e6d0 0%, #d9c5a0 100%);
  padding: 50px 30px;
  border-radius: 25px;
  position: relative;
  border: 2px dashed #8c6a4a;
}

.parchment-btn {
  background: #2d1e0f;
  color: #e8d5b7;
  border: none;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.parchment-btn:hover {
  transform: scale(1.05);
  background: #4a3520;
}

.previous-score { margin-top: 20px; font-weight: bold; color: #2d1e0f; }

@media (max-width: 600px) {
  .era-main-title { font-size: 2.2rem; }
  .impact-grid { grid-template-columns: 1fr; }
}
.cursor-spark{
  position: absolute;
  width:6px;
  height:6px;
  background:#c9a96e;
  border-radius:50%;
  pointer-events:none;
  animation:sparkFade 0.8s linear;
}

@keyframes sparkFade{
  0%{opacity:1; transform:scale(1)}
  100%{opacity:0; transform:scale(3)}
}
.scroll-progress{
  position:fixed;
  top:0;
  left:0;
  height:5px;
  width:0%;
  background:linear-gradient(90deg,#c9a96e,#8c6a4a);
  z-index:99999;
  box-shadow:0 0 10px rgba(201,169,110,0.8);
  transition:width 0.1s;
}
/* ---------------- GUIDE CHARACTER ---------------- */

.guide-character{
  position:fixed;
  right:25px;
  bottom:25px;
  z-index:9999;
  display:flex;
  align-items:flex-end;
  gap:10px;
  cursor:pointer;
}

.guide-body{
  font-size:60px;
  animation:guideFloat 3s ease-in-out infinite;
}

.guide-bubble{
  background:white;
  padding:10px 15px;
  border-radius:12px;
  font-size:14px;
  max-width:180px;
  box-shadow:0 5px 15px rgba(0,0,0,0.2);
  position:relative;
}

.guide-bubble::after{
  content:"";
  position:absolute;
  bottom:10px;
  right:-8px;
  width:0;
  height:0;
  border-top:8px solid transparent;
  border-bottom:8px solid transparent;
  border-left:8px solid white;
}

@keyframes guideFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}
.card{
  transition: transform 0.2s ease;
  transform-style: preserve-3d;
}
.image-card{
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  transform-style: preserve-3d;
}

.image-card:hover{
  box-shadow:
    0 20px 40px rgba(0,0,0,0.15),
    0 0 25px rgba(201,169,110,0.5);
}
</style>