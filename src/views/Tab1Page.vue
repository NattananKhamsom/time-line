<template>
  <div class="timeline-page-wrapper parchment-bg">
    <div class="timeline-page">
      <!-- Navigation -->
      <NavBar />

      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content" data-aos="zoom-in">
          <h1 class="hero-title">TIMELINEE</h1>
          <p class="hero-subtitle">"The Human Odyssey: A Journey Through Every Era"</p>
          <div class="scroll-arrow scroll-indicator" @click="scrollToTimeline">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M20 5 L20 50 M8 40 L20 52 L32 40" stroke="#3a2a1a" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </section>

      <!-- Timeline Container -->
      <section class="timeline-section" id="timeline-section">
        <div class="section-heading">
          <span class="section-line"></span>
          <h2>การเดินทางของมนุษยชาติ</h2>
          <span class="section-line"></span>
        </div>

        <div class="timeline-container">
          <div class="timeline-vertical-line"></div>

          <!-- 01 Prehistoric Era -->
          <div class="tl-item tl-right">

            <!-- Decorative elements -->
            <div class="era-deco deco-prehistoric">
              <span class="deco-icon" title="เครื่องมือหิน">🪨</span>
              <span class="deco-icon" title="ไฟ">🔥</span>
              <span class="deco-icon" title="สัตว์ยุคโบราณ">🦣</span>
              <div class="deco-scratch"></div>
            </div>

            <!-- Image -->
            <div class="tl-image tl-left">
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*KJUF9co1Yndb2i7ebxxFnQ.jpeg"
                alt="Lascaux Cave Painting">
            </div>

            <div class="tl-dot dot-01"></div>

            <div class="tl-card" @click="navigateTo('prehistoric')">
              <div class="era-badge badge-01">
                <span class="badge-number">01</span>
                <span class="badge-title">ยุคก่อนประวัติศาสตร์</span>
              </div>

              <p class="tl-date">📅 2.5 ล้านปีก่อน – 3,000 ปีก่อน ค.ศ.</p>

              <p class="tl-desc">
                มนุษย์ถือกำเนิด เรียนรู้การใช้ไฟ สร้างเครื่องมือหิน
                และเริ่มต้นการดำรงชีวิตในฐานะสายพันธุ์ที่มีสติปัญญา
              </p>

              <div class="tl-tags">
                <span class="tag">Homo Sapiens</span>
                <span class="tag">Stone Tools</span>
                <span class="tag">Cave Art</span>
              </div>

              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>

          </div>

          <!-- 02 Ancient Civilizations -->
          <div class="tl-item tl-left">
            <div class="era-deco deco-ancient deco-left">
              <span class="deco-icon" title="พีระมิด">🏛️</span>
              <span class="deco-icon" title="อักษรอียิปต์">📜</span>
              <span class="deco-icon" title="เรือ">⚓</span>
              <div class="deco-column"></div>
            </div>

            <div class="tl-image">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/01_khafre_north.jpg"
                alt="Ancient Civilizations">
            </div>

            <div class="tl-dot dot-02"></div>
            <div class="tl-card" @click="navigateTo('ancient')">
              <div class="era-badge badge-02">
                <span class="badge-number">02</span>
                <span class="badge-title">อารยธรรมโบราณ</span>
              </div>
              <p class="tl-date">📅 3,000 ปีก่อน ค.ศ. – ค.ศ. 500</p>
              <p class="tl-desc">มนุษย์ส่งต่อร่องรอยการเดินทางผ่านอักษร กฎหมาย ศิลปะ และสถาปัตยกรรมอันยิ่งใหญ่
                ตั้งแต่อียิปต์ถึงกรีก-โรมัน</p>
              <div class="tl-tags">
                <span class="tag">Egypt</span>
                <span class="tag">Greece</span>
                <span class="tag">Rome</span>
              </div>
              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>
          </div>

          <!-- 03 Middle Ages -->
          <div class="tl-item tl-right">
            <div class="era-deco deco-medieval">
              <span class="deco-icon" title="ปราสาท">🏰</span>
              <span class="deco-icon" title="กางเขน">✝️</span>
              <span class="deco-icon" title="ดาบ">⚔️</span>
              <div class="deco-cross"></div>
            </div>

             <div class="tl-image">
              <img src="https://mad.hypotheses.org/files/2014/12/viallon-destriers-Fig-4-550x304.gif"
                alt="Ancient Civilizations">
            </div>
            <div class="tl-dot dot-03"></div>
            <div class="tl-card" @click="navigateTo('middle-ages')">
              <div class="era-badge badge-03">
                <span class="badge-number">03</span>
                <span class="badge-title">ยุคกลาง</span>
              </div>
              <p class="tl-date">📅 ค.ศ. 500 – ค.ศ. 1450</p>
              <p class="tl-desc">ศาสนา อำนาจ และความเชื่อครอบงำสังคม ยุคแห่งอัศวิน ปราสาท สงครามครูเสด
                และกาฬโรคที่เปลี่ยนโฉมหน้ายุโรป</p>
              <div class="tl-tags">
                <span class="tag">Feudalism</span>
                <span class="tag">Crusades</span>
                <span class="tag">Black Death</span>
              </div>
              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>
          </div>

          <!-- 04 Renaissance -->
          <div class="tl-item tl-left">
            <div class="era-deco deco-renaissance deco-left">
              <span class="deco-icon" title="งานศิลปะ">🎨</span>
              <span class="deco-icon" title="กล้องโทรทรรศน์">🔭</span>
              <span class="deco-icon" title="หนังสือ">📖</span>
              <div class="deco-compass"></div>
            </div>
             <div class="tl-image">
              <img src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,ar_2,w_3840,h_1920,g_auto/dpr_auto/f_auto/q_auto:eco/v1/renaissance-gettyimages-1309914466?_a=BAVAZGB00"
                alt="Ancient Civilizations">
            </div>
            <div class="tl-dot dot-04"></div>
            <div class="tl-card" @click="navigateTo('renaissance')">
              <div class="era-badge badge-04">
                <span class="badge-number">04</span>
                <span class="badge-title">ยุคฟื้นฟูศิลปวิทยา</span>
              </div>
              <p class="tl-date">📅 ค.ศ. 1450 – ค.ศ. 1750</p>
              <p class="tl-desc">ยุคแห่งการตื่นรู้และการสำรวจ ศิลปินและนักวิทยาศาสตร์ผู้ยิ่งใหญ่อย่าง Da Vinci, Galileo
                เปลี่ยนโลกทัศน์ของมนุษย์</p>
              <div class="tl-tags">
                <span class="tag">Da Vinci</span>
                <span class="tag">Exploration</span>
                <span class="tag">Science</span>
              </div>
              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>
          </div>

          <!-- 05 Industrial Revolution -->
          <div class="tl-item tl-right">
            <div class="era-deco deco-industrial">
              <span class="deco-icon" title="รถไฟ">🚂</span>
              <span class="deco-icon" title="โรงงาน">🏭</span>
              <span class="deco-icon" title="ฟันเฟือง">⚙️</span>
              <div class="deco-gear-ring"></div>
            </div>

             <div class="tl-image">
              <img src="https://www.mmthailand.com/wp-content/uploads/2024/08/Industrial-Revolution.jpg"
                alt="Ancient Civilizations">
            </div>
            <div class="tl-dot dot-05"></div>
            <div class="tl-card" @click="navigateTo('industrial')">
              <div class="era-badge badge-05">
                <span class="badge-number">05</span>
                <span class="badge-title">การปฏิวัติอุตสาหกรรม</span>
              </div>
              <p class="tl-date">📅 ค.ศ. 1750 – ค.ศ. 1900</p>
              <p class="tl-desc">เครื่องจักรไอน้ำเปลี่ยนโลก การผลิตขนาดใหญ่ รถไฟ โทรเลข
                และการขยายตัวของเมืองอุตสาหกรรมทั่วโลก</p>
              <div class="tl-tags">
                <span class="tag">Steam Engine</span>
                <span class="tag">Railways</span>
                <span class="tag">Urbanization</span>
              </div>
              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>
          </div>

          <!-- 06 Information Age -->
          <div class="tl-item tl-left">
            <div class="era-deco deco-digital deco-left">
              <span class="deco-icon" title="คอมพิวเตอร์">💻</span>
              <span class="deco-icon" title="อินเทอร์เน็ต">🌐</span>
              <span class="deco-icon" title="AI">🤖</span>
              <div class="deco-circuit"></div>
            </div>
             <div class="tl-image">
              <img src="https://image.springnews.co.th/uploads/images/contents/w1024/2024/09/hlNSq52CBxNiyHnieJki.webp?x-image-process=style/lg-webp"
                alt="Ancient Civilizations">
            </div>
            <div class="tl-dot dot-06"></div>
            <div class="tl-card" @click="navigateTo('information')">
              <div class="era-badge badge-06">
                <span class="badge-number">06</span>
                <span class="badge-title">ยุคข้อมูลข่าวสาร</span>
              </div>
              <p class="tl-date">📅 ค.ศ. 1945 – ปัจจุบัน</p>
              <p class="tl-desc">เทคโนโลยีและดิจิทัลครองโลก อินเทอร์เน็ต สมาร์ทโฟน และ AI เปลี่ยนวิธีที่มนุษย์เรียนรู้
                สื่อสาร และดำรงชีวิต</p>
              <div class="tl-tags">
                <span class="tag">Internet</span>
                <span class="tag">AI</span>
                <span class="tag">Digital Age</span>
              </div>
              <span class="tl-link">คลิกเพื่อดูรายละเอียด →</span>
            </div>
          </div>

        </div>
      </section>

      <!-- Leaderboard Link Section -->
      <section class="leaderboard-section" data-aos="fade-up">
        <h2>🏆 กระดานคะแนน</h2>
        <p>ทำแบบทดสอบในแต่ละยุคเพื่อสะสมคะแนนและแข่งกับเพื่อน!</p>
        <button class="parchment-btn btn-quiz" @click="$router.push('/leaderboard')">
          ดูกระดานคะแนน →
        </button>
      </section>

      <!-- Enhanced Footer -->
      <footer class="parchment-footer">
        <div class="footer-inner">
          <div class="footer-top">
            <div class="footer-brand">
              <span class="footer-logo">⏳ TIMELINE</span>
              <p class="footer-tagline">The Human Odyssey — A Journey Through Every Era</p>
              <p class="footer-desc">เว็บแอปพลิเคชันสื่อการเรียนรู้แบบ Interactive
                Scrolling<br>สำรวจประวัติศาสตร์มนุษยชาติตั้งแต่ยุคก่อนประวัติศาสตร์จนถึงปัจจุบัน</p>
            </div>
            <div class="footer-col">
              <h4>ยุคสมัย</h4>
              <ul>
                <li v-for="era in eras" :key="era.id">
                  <a @click="navigateTo(era.id)">{{ era.icon }} {{ era.label }}</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>เกี่ยวกับโครงงาน</h4>
              <ul>
                <li><a>📋 รายงานโครงงาน</a></li>
                <li><a>🔗 GitHub Repository</a></li>
                <li><a>🏆 กระดานคะแนน</a></li>
                <li><a>📊 สถิติผู้เรียน</a></li>
              </ul>
              <h4 style="margin-top:20px">เทคโนโลยี</h4>
              <div class="footer-tech">
                <span class="tech-badge">Ionic</span>
                <span class="tech-badge">Vue 3</span>
                <span class="tech-badge">Firebase</span>
                <span class="tech-badge">TypeScript</span>
              </div>
            </div>
          </div>

          <div class="footer-divider-line">
            <span class="fd-ornament">✦ ✦ ✦</span>
          </div>

          <div class="footer-bottom">
            <p class="footer-copy">© 2024 <strong>Timeline — The Human Odyssey</strong> |
              ออกแบบเพื่อการเรียนรู้ประวัติศาสตร์</p>
            <div class="footer-team">
              <span class="team-label">พัฒนาโดย</span>
              <span class="team-names">กลุ่มนักศึกษา · Ionic Framework · KKU</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import NavBar from '../components/NavBar.vue';

const router = useRouter();

const eras = [
  { id: 'prehistoric', label: 'ยุคก่อนประวัติศาสตร์', icon: '🪨' },
  { id: 'ancient', label: 'อารยธรรมโบราณ', icon: '🏛️' },
  { id: 'middle-ages', label: 'ยุคกลาง', icon: '🏰' },
  { id: 'renaissance', label: 'ยุคฟื้นฟูศิลปวิทยา', icon: '🎨' },
  { id: 'industrial', label: 'การปฏิวัติอุตสาหกรรม', icon: '🚂' },
  { id: 'information', label: 'ยุคข้อมูลข่าวสาร', icon: '💻' },
];


const navigateTo = (era: string) => {
  router.push(`/era/${era}`);
};

const scrollToTimeline = () => {
  const el = document.getElementById('timeline-section');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

onMounted(() => {
  if ((window as any).AOS) {
    (window as any).AOS.init({ duration: 1000, once: false, mirror: true });
  }
  if ((window as any).lucide) {
    (window as any).lucide.createIcons();
  }
});
</script>

<style scoped>
.timeline-page-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

.timeline-page {
  font-family: 'Kanit', sans-serif;
  color: #2d1e0f;
  min-height: 100vh;
}

/* ===== HERO ===== */
.hero {
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-family: 'Cinzel', serif;
  font-size: 8rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #a88b6a;
  text-shadow: 4px 4px 0 rgba(168, 139, 106, 0.3);
  letter-spacing: 15px;
  line-height: 1;
  margin: 0;
  position: relative;
}

.hero-title::after {
  content: 'TIMELINE';
  position: absolute;
  top: 3px;
  left: 3px;
  right: 0;
  color: rgba(197, 168, 130, 0.5);
  -webkit-text-stroke: 0;
  z-index: -1;
}

.hero-subtitle {
  font-family: 'Kanit', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: #6b5744;
  margin-top: 16px;
  letter-spacing: 2px;
}

.scroll-arrow {
  margin-top: 50px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-arrow:hover {
  opacity: 1;
}

/* ===== SECTION HEADING ===== */
.section-heading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 60px;
}

.section-heading h2 {
  font-family: 'Kanit', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #2d1e0f;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 2px;
}

.section-line {
  display: block;
  height: 2px;
  width: 100px;
  background: linear-gradient(90deg, transparent, #a88b6a, transparent);
}

/* ===== TIMELINE SECTION ===== */
.timeline-section {
  padding: 80px 20px;
  position: relative;
}

.timeline-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-vertical-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #2d1e0f;
  transform: translateX(-50%);
}

.tl-image {
  width: 42%;
  display: flex;
  align-items: center;
}

.tl-image img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
  transition: transform 0.4s ease;
}

.tl-item:hover .tl-image img {
  transform: scale(1.05);
}



/* positioning */

.tl-right .tl-image {
  order: 1;
  margin-right: auto;
}

.tl-right .tl-card {
  order: 2;
}

.tl-left .tl-card {
  order: 1;
}

.tl-left .tl-image {
  order: 2;
  margin-left: auto;
}

@media (max-width: 900px) {

  .tl-item {
    flex-direction: column;
    align-items: center;
  }

  .tl-image {
    display: none;
  }

  .tl-card {
    width: 90%;
  }

}

/* Timeline Items */
.tl-item {
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 100px;
}

.tl-dot {
  position: absolute;
  left: 50%;
  top: 24px;
  width: 18px;
  height: 18px;
  background: #2d1e0f;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px #c5a882, 0 0 0 6px #2d1e0f;
  transition: all 0.3s ease;
}

.tl-item:hover .tl-dot {
  box-shadow: 0 0 0 4px #c5a882, 0 0 0 6px #2d1e0f, 0 0 20px rgba(201, 169, 110, 0.5);
  background: #c9a96e;
}


.tl-image img {
  width: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.tl-right .tl-image {
  margin-right: auto;
}

.tl-left .tl-image {
  margin-left: auto;
}



.tl-card {
  width: 42%;
  padding: 28px;
  cursor: pointer;
  transition: all 0.4s ease;
  border-radius: 12px;
  position: relative;
}

.tl-card:hover {
  transform: translateY(-6px);
  background: rgba(232, 213, 183, 0.4);
  box-shadow: 0 8px 30px rgba(45, 30, 15, 0.12);
}

.tl-right .tl-card {
  margin-left: auto;
  margin-right: 0;
  padding-left: calc(8% + 28px);
}

.tl-left .tl-card {
  margin-right: auto;
  margin-left: 0;
  text-align: left;
}

.tl-date {
  font-size: 0.9rem;
  color: #6b5744;
  margin: 12px 0 8px;
  font-weight: 300;
}

.tl-desc {
  font-size: 0.95rem;
  color: #4a3728;
  margin: 0 0 14px;
  line-height: 1.7;
}

/* Tags */
.tl-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 16px;
}

.tag {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 20px;
  background: rgba(201, 169, 110, 0.25);
  border: 1px solid rgba(138, 112, 84, 0.3);
  font-size: 0.78rem;
  font-weight: 500;
  color: #4a3728;
  letter-spacing: 0.5px;
}

.tl-link {
  display: inline-block;
  background: #2d1e0f;
  color: #e8d5b7;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
}

.tl-link:hover {
  background: #4a3728;
  box-shadow: 0 4px 12px rgba(45, 30, 15, 0.2);
}

.era-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #2d1e0f;
  color: #e8d5b7;
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: 600;
}

.badge-number {
  font-size: 1.2rem;
  font-weight: 700;
}

.badge-title {
  font-size: 1rem;
}

/* ===== DECORATIVE ERA ELEMENTS ===== */
.era-deco {
  position: absolute;
  top: 0;
  right: 52%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px 16px;
  opacity: 0.6;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.era-deco.deco-left {
  right: auto;
  left: 52%;
}

.tl-item:hover .era-deco {
  opacity: 1;
}

.deco-icon {
  font-size: 2rem;
  display: block;
  animation: decoFloat 4s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(45, 30, 15, 0.15));
}

.deco-icon:nth-child(1) {
  animation-delay: 0s;
}

.deco-icon:nth-child(2) {
  animation-delay: 1.2s;
}

.deco-icon:nth-child(3) {
  animation-delay: 2.4s;
}

@keyframes decoFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-8px);
  }
}

/* Deco shapes */
.deco-scratch,
.deco-column,
.deco-cross,
.deco-compass,
.deco-gear-ring,
.deco-circuit {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 8px;
  opacity: 0.4;
  animation: decoSpin 12s linear infinite;
}

.deco-scratch {
  border: 2px dashed #8a7054;
  border-radius: 0;
  transform: rotate(15deg);
}

.deco-column {
  border: 2px solid #8a7054;
  border-radius: 4px;
  width: 20px;
  height: 50px;
}

.deco-cross {
  width: 30px;
  height: 30px;
  border: 2px solid #8a7054;
  border-radius: 0;
  transform: rotate(45deg);
}

.deco-compass {
  border: 2px solid #8a7054;
  width: 36px;
  height: 36px;
  position: relative;
}

.deco-compass::after {
  content: '✦';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.8rem;
  color: #8a7054;
}

.deco-gear-ring {
  border: 3px dotted #8a7054;
  animation: decoSpin 8s linear infinite;
}

.deco-circuit {
  border: 2px solid #8a7054;
  border-radius: 8px;
  position: relative;
}

.deco-circuit::before,
.deco-circuit::after {
  content: '';
  position: absolute;
  background: #8a7054;
  border-radius: 2px;
}

.deco-circuit::before {
  width: 2px;
  height: 14px;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
}

.deco-circuit::after {
  width: 14px;
  height: 2px;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
}

@keyframes decoSpin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* ===== LEADERBOARD SECTION ===== */
.leaderboard-section {
  text-align: center;
  padding: 60px 20px 80px;
}

.leaderboard-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 12px;
}

.leaderboard-section p {
  font-size: 1rem;
  color: #6b5744;
  margin: 0 0 28px;
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

/* ===== ENHANCED FOOTER ===== */
.parchment-footer {
  border-top: 1px solid rgba(138, 112, 84, 0.3);
  padding: 0;
}

.footer-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 50px 30px 30px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 40px;
  text-align: left;
}

.footer-brand {}

.footer-logo {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #2d1e0f;
  letter-spacing: 3px;
}

.footer-tagline {
  font-size: 0.85rem;
  font-weight: 300;
  color: #6b5744;
  margin: 8px 0 12px;
  font-style: italic;
}

.footer-desc {
  font-size: 0.82rem;
  color: #8a7a6a;
  line-height: 1.7;
  margin: 0;
}

.footer-col h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid #c9a96e;
  display: inline-block;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col ul li {
  margin-bottom: 8px;
}

.footer-col ul li a {
  font-size: 0.88rem;
  color: #4a3728;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;
}

.footer-col ul li a:hover {
  color: #2d1e0f;
  transform: translateX(4px);
}

.footer-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-badge {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(45, 30, 15, 0.08);
  border: 1px solid rgba(138, 112, 84, 0.25);
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 500;
  color: #4a3728;
  letter-spacing: 0.3px;
}

.footer-divider-line {
  text-align: center;
  margin: 36px 0 24px;
  position: relative;
}

.footer-divider-line::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(138, 112, 84, 0.3), transparent);
}

.fd-ornament {
  position: relative;
  background: #c5a882;
  padding: 0 16px;
  font-size: 0.8rem;
  color: #a88b6a;
  letter-spacing: 6px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-copy {
  font-size: 0.82rem;
  color: #6b5744;
  margin: 0;
}

.footer-copy strong {
  font-weight: 600;
  color: #2d1e0f;
}

.footer-team {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
}

.team-label {
  color: #8a7a6a;
}

.team-names {
  color: #4a3728;
  font-weight: 500;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
  .hero-title {
    font-size: 4rem;
    letter-spacing: 8px;
  }

  .timeline-vertical-line {
    left: 30px;
  }

  .tl-dot {
    left: 30px;
  }

  .tl-card {
    width: calc(100% - 70px);
    margin-left: 70px !important;
    padding-left: 28px !important;
  }

  .tl-right .tl-card,
  .tl-left .tl-card {
    margin-left: 70px !important;
    margin-right: 0;
    text-align: left;
  }

  .era-deco,
  .era-deco.deco-left {
    display: none;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 2.8rem;
    letter-spacing: 4px;
    -webkit-text-stroke: 1.5px #a88b6a;
  }

  .hero-subtitle {
    font-size: 0.9rem;
    padding: 0 20px;
  }

  .section-heading h2 {
    font-size: 1.2rem;
  }

  .section-line {
    width: 50px;
  }
}
</style>
