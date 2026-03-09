<template>
  <ion-page class="parchment-page">
    <div class="scroll-progress"></div>
    <ion-content ref="contentRef" :fullscreen="true" scroll-events="true">

      <div class="parchment-container">
        <div class="paper-texture"></div>
        <div class="animated-fog"></div>
        <div class="floating-elements">
          <div class="particle p1"></div>
          <div class="particle p2"></div>
          <div class="particle p3"></div>
        </div>
        
        <div class="era-page">
          <NavBar :showBack="true" eraTitle="ยุคข้อมูลข่าวสาร" />

          <div class="era-hero" data-aos="zoom-in">
            <div class="hero-decoration left"></div>
            <div class="hero-decoration right"></div>
            
            <p class="era-subtitle">The Digital Revolution</p>
            <h1 class="era-main-title">ยุคข้อมูลข่าวสาร</h1>
            <p class="era-main-date">ค.ศ. 1945 — ปัจจุบัน</p>

            <div class="era-badge-hero">
              <span class="badge-number">06</span>
              <span class="badge-title">Information Age</span>
            </div>
          </div>

          <div class="era-content">
            <div class="content-section" data-aos="fade-up">
              <h2 class="section-label">📖 ปฐมบทแห่งดิจิทัล</h2>
              <div class="intro-card">
                <p>
                  <strong>ยุคข้อมูลข่าวสาร (Information Age)</strong> คือจุดเปลี่ยนผ่านที่สำคัญที่สุดของมนุษยชาติ จากเศรษฐกิจฐานอุตสาหกรรมสู่เศรษฐกิจฐานความรู้ 
                  เริ่มต้นในช่วงกลางศตวรรษที่ 20 เมื่อ "ข้อมูล" กลายเป็นทรัพยากรที่มีค่ามากกว่าน้ำมัน
                </p>
                <p>
                  โลกถูกเชื่อมต่อกันด้วยรหัส 0 และ 1 เปลี่ยนวิถีการสื่อสารจากจดหมายสู่ความเร็วแสง 
                  ทำลายกำแพงเรื่องระยะทางและเวลาให้หมดไปอย่างสิ้นเชิง
                </p>
              </div>
            </div>

            <div class="content-section" data-aos="fade-up">
              <h2 class="section-label">🖼 นวัตกรรมเปลี่ยนโลก</h2>
              <div class="image-grid">
                <div class="image-card">
                  <div class="img-wrapper"><img src="/images/internet.jpg" alt="Internet" /></div>
                  <div class="card-body">
                    <h3>อินเทอร์เน็ต</h3>
                    <p>ใยแมงมุมระดับโลกที่เชื่อมโยงทุกสรรพสิ่งเข้าด้วยกัน</p>
                  </div>
                </div>

                <div class="image-card">
                  <div class="img-wrapper"><img src="/images/smartphone.jpg" alt="Smartphone" /></div>
                  <div class="card-body">
                    <h3>สมาร์ทโฟน</h3>
                    <p>ย่อโลกทั้งใบและห้องสมุดความรู้มาไว้ในฝ่ามือ</p>
                  </div>
                </div>

                <div class="image-card">
                  <div class="img-wrapper"><img src="/images/ai.jpg" alt="AI" /></div>
                  <div class="card-body">
                    <h3>ปัญญาประดิษฐ์</h3>
                    <p>สมองกลที่เรียนรู้และตัดสินใจได้เยี่ยงมนุษย์</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-section" data-aos="fade-up">
              <h2 class="section-label">🎯 เสาหลักของยุคสมัย</h2>
              <div class="key-points">
                <div class="key-point-card" v-for="(point, i) in keyPoints" :key="i">
                  <div class="point-icon">{{ point.icon }}</div>
                  <div class="point-info">
                    <h3>{{ point.title }}</h3>
                    <p>{{ point.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-section" data-aos="fade-up">
              <h2 class="section-label">📍 บันทึกประวัติศาสตร์</h2>
              <div class="era-timeline">
                <div class="era-tl-item" v-for="(event, idx) in timelineEvents" :key="idx">
                  <div class="tl-dot"></div>
                  <div class="era-tl-year">{{ event.year }}</div>
                  <div class="era-tl-content">
                    <h3>{{ event.title }}</h3>
                    <p>{{ event.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="content-section impact-box" data-aos="flip-up">
               <h2 class="section-label">🌐 ผลกระทบต่อโลก</h2>
               <div class="impact-grid">
                 <div class="impact-item">
                   <strong>สังคม:</strong> เกิดการเชื่อมต่อไร้พรมแดน แต่ต้องรับมือกับข่าวปลอม (Fake News)
                 </div>
                 <div class="impact-item">
                   <strong>เศรษฐกิจ:</strong> เกิดธุรกิจรูปแบบใหม่ (E-commerce) และสกุลเงินดิจิทัล
                 </div>
               </div>
            </div>

            <div class="quiz-cta" data-aos="zoom-in">
              <div class="quiz-decoration"></div>
              <h2>📜 บททดสอบนักปราชญ์</h2>
              <p>คุณมีความเข้าใจในกลไกของยุคข้อมูลข่าวสารมากเพียงใด?</p>

              <button class="parchment-btn btn-quiz" @click="showQuiz = true">
                เริ่มต้นการทดสอบ →
              </button>

              <div class="previous-score" v-if="previousScore !== null">
                <p>เกียรติยศล่าสุด: {{ previousScore.score }}/{{ previousScore.totalQuestions }} คะแนน</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuizModal
        eraId="information"
        :isOpen="showQuiz"
        @close="showQuiz = false"
        @completed="onQuizCompleted"
      />
      <!-- GUIDE CHARACTER -->
<div class="guide-character" @click="nextGuideTip">

  <div class="guide-bubble">
    {{ guideText }}
  </div>

  <div class="guide-body">
    🤖
  </div>

</div>
    </ion-content>
  </ion-page>
  
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const contentRef = ref()
import { IonPage, IonContent } from '@ionic/vue'
import NavBar from '../components/NavBar.vue'
import QuizModal from '../components/QuizModal.vue'
import { getUserEraScore, type QuizScore } from '../../auth/firestore-service'
import { firebaseAuth } from '../../auth/auth-web'

const showQuiz = ref(false)
const previousScore = ref<QuizScore | null>(null)

const keyPoints = [
  { icon: '🌐', title: 'World Wide Web', desc: 'การปฏิวัติการเข้าถึงข้อมูลจากระบบปิดสู่ระบบเปิดที่ทุกคนเข้าถึงได้' },
  { icon: '📱', title: 'Mobile Revolution', desc: 'การพกพาอินเทอร์เน็ตไปทุกที่ เปลี่ยนพฤติกรรมมนุษย์แบบ 24/7' },
  { icon: '🤖', title: 'AI & Big Data', desc: 'การนำข้อมูลมหาศาลมาวิเคราะห์เพื่อคาดการณ์อนาคตและสร้างความฉลาดเทียม' }
]

const timelineEvents = [
  { year: '1945', title: 'ENIAC', desc: 'คอมพิวเตอร์ดิจิทัลเครื่องแรกที่สามารถโปรแกรมได้' },
  { year: '1969', title: 'ARPANET', desc: 'ต้นกำเนิดอินเทอร์เน็ตที่เชื่อมต่อเครือข่ายข้ามพื้นที่' },
  { year: '1989', title: 'The Web', desc: 'Tim Berners-Lee มอบ HTML และ HTTP ให้โลกใบนี้' },
  { year: '2007', title: 'Smart Era', desc: 'การเปิดตัว iPhone ที่ทำให้มือถือเป็นมากกว่าแค่โทรศัพท์' },
  { year: '2022', title: 'Generative AI', desc: 'การก้าวกระโดดของ AI ที่สามารถสร้างสรรค์เนื้อหาได้เอง' }
]

const onQuizCompleted = () => { loadPreviousScore() }

const loadPreviousScore = async () => {
  try {
    const user = firebaseAuth.currentUser
    if (user) {
      previousScore.value = await getUserEraScore(user.uid, 'information')
    }
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {

  loadPreviousScore()

  if ((window as any).AOS) {
    ;(window as any).AOS.init({
      duration: 1000,
      once: true
    })
  }

  /* ---------- SCROLL PROGRESS ---------- */

const progressBar = document.querySelector('.scroll-progress') as HTMLElement

const updateProgress = async () => {

  const el = await contentRef.value.$el.getScrollElement()

  el.addEventListener('scroll', () => {

    const scrollTop = el.scrollTop
    const scrollHeight = el.scrollHeight - el.clientHeight

    const progress = (scrollTop / scrollHeight) * 100

    if (progressBar) {
      progressBar.style.width = progress + '%'
    }

  })
}

updateProgress()

  /* ---------- CURSOR SPARK ---------- */

  document.addEventListener('mousemove', (e) => {

    const spark = document.createElement('div')
    spark.className = 'cursor-spark'

    spark.style.left = e.pageX + 'px'
    spark.style.top = e.pageY + 'px'

    document.body.appendChild(spark)

    setTimeout(() => {
      spark.remove()
    }, 800)

  })
  /* 3D CARD EFFECT */

const cards = document.querySelectorAll('.image-card')

cards.forEach((card:any) => {

  card.addEventListener('mousemove', (e:any) => {

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / 10) * -1
    const rotateY = (x - centerX) / 10

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`

  })

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'rotateX(0deg) rotateY(0deg) scale(1)'

  })

})

})
/* ---------------- GUIDE CHARACTER ---------------- */

const guideTips = [
  "ลองเลื่อนลงดู Timeline 📜",
  "การ์ดสามารถ hover ได้นะ ✨",
  "ท้ายหน้ามี Quiz ทดสอบความรู้ 🧠",
  "ยุคข้อมูลข่าวสารคือยุคของ AI 🤖"
]

const guideIndex = ref(0)

const guideText = ref(guideTips[0])

const nextGuideTip = () => {
  guideIndex.value = (guideIndex.value + 1) % guideTips.length
  guideText.value = guideTips[guideIndex.value]
}

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