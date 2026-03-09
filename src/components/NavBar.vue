<template>
  <nav class="parchment-nav">
    <div class="nav-back" v-if="showBack" @click="goBack">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
    </div>
    <div class="nav-era-title" v-if="eraTitle">{{ eraTitle }}</div>
    <div class="nav-links">
      <a href="#" @click.prevent="$router.push('/tabs/tab1')">About</a>
      <!-- Era Dropdown -->
      <div class="nav-dropdown" @mouseenter="eraOpen = true" @mouseleave="eraOpen = false">
        <a href="#" @click.prevent="eraOpen = !eraOpen" class="dropdown-trigger">
          Era
          <svg class="dropdown-chevron" :class="{ rotated: eraOpen }" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </a>
        <Transition name="dropdown">
          <div class="dropdown-menu" v-if="eraOpen">
            <a
              v-for="era in eraList"
              :key="era.id"
              class="dropdown-item"
              @click.prevent="goToEra(era.id); eraOpen = false"
            >
              <span class="dropdown-icon">{{ era.icon }}</span>
              <span class="dropdown-label">{{ era.label }}</span>
              <span class="dropdown-date">{{ era.date }}</span>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item dropdown-leaderboard" @click.prevent="$router.push('/leaderboard'); eraOpen = false">
              <span class="dropdown-icon">🏆</span>
              <span class="dropdown-label">กระดานคะแนน</span>
            </a>
          </div>
        </Transition>
      </div>
      <a href="#" @click.prevent>Contact</a>
    </div>
    <div class="nav-dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps<{
  showBack?: boolean;
  eraTitle?: string;
}>();

const router = useRouter();
const eraOpen = ref(false);

const eraList = [
  { id: 'prehistoric', label: 'ยุคก่อนประวัติศาสตร์', icon: '🪨', date: '2.5M - 3,000 BCE' },
  { id: 'ancient', label: 'อารยธรรมโบราณ', icon: '🏛️', date: '3,000 BCE - 500 CE' },
  { id: 'middle-ages', label: 'ยุคกลาง', icon: '🏰', date: '500 - 1450 CE' },
  { id: 'renaissance', label: 'ยุคฟื้นฟูศิลปวิทยา', icon: '🎨', date: '1450 - 1750 CE' },
  { id: 'industrial', label: 'การปฏิวัติอุตสาหกรรม', icon: '🚂', date: '1750 - 1900 CE' },
  { id: 'information', label: 'ยุคข้อมูลข่าวสาร', icon: '💻', date: '1945 - Present' },
];

const goBack = () => {
  router.back();
};

const goToEra = (id: string) => {
  router.push(`/era/${id}`);
};
</script>

<style scoped>
.parchment-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 40px;
  position: relative;
  z-index: 100;
  font-family: 'Kanit', sans-serif;
}

.nav-back {
  position: absolute;
  left: 30px;
  cursor: pointer;
  color: var(--text-secondary, #4a3728);
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-back:hover {
  transform: translateX(-4px);
}

.nav-era-title {
  position: absolute;
  left: 70px;
  font-family: 'Kanit', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary, #4a3728);
}

.nav-links {
  display: flex;
  gap: 50px;
  align-items: center;
}

.nav-links > a,
.dropdown-trigger {
  color: var(--text-secondary, #4a3728);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: color 0.3s ease;
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-links > a:hover,
.dropdown-trigger:hover {
  color: var(--text-primary, #2d1e0f);
}

.nav-links > a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--text-primary, #2d1e0f);
  transition: width 0.3s ease;
}

.nav-links > a:hover::after {
  width: 100%;
}

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-chevron {
  transition: transform 0.3s ease;
  margin-top: 1px;
}

.dropdown-chevron.rotated {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 300px;
  background:
    linear-gradient(135deg,
      rgba(212, 184, 150, 0.98) 0%,
      rgba(197, 168, 130, 0.98) 100%
    );
  border: 1px solid rgba(138, 112, 84, 0.3);
  border-radius: 14px;
  box-shadow: 0 12px 40px rgba(45, 30, 15, 0.25);
  padding: 8px;
  backdrop-filter: blur(16px);
  z-index: 999;
}

.dropdown-menu::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: rgba(212, 184, 150, 0.98);
  border-left: 1px solid rgba(138, 112, 84, 0.3);
  border-top: 1px solid rgba(138, 112, 84, 0.3);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  text-decoration: none;
  color: #2d1e0f;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.92rem;
}

.dropdown-item:hover {
  background: rgba(201, 169, 110, 0.3);
  transform: translateX(4px);
}

.dropdown-icon {
  font-size: 1.2rem;
  width: 28px;
  text-align: center;
  flex-shrink: 0;
}

.dropdown-label {
  flex: 1;
  font-weight: 500;
}

.dropdown-date {
  font-size: 0.75rem;
  color: #8a7a6a;
  font-weight: 300;
  white-space: nowrap;
}

.dropdown-divider {
  height: 1px;
  background: rgba(138, 112, 84, 0.2);
  margin: 6px 10px;
}

.dropdown-leaderboard {
  font-weight: 600;
}

/* Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.nav-dots {
  position: absolute;
  right: 40px;
  display: flex;
  gap: 6px;
}

.nav-dots span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--parchment-light, #d4b896);
}

@media (max-width: 768px) {
  .parchment-nav {
    padding: 14px 20px;
  }
  .nav-links {
    gap: 30px;
  }
  .nav-links > a,
  .dropdown-trigger {
    font-size: 0.85rem;
  }
  .nav-era-title {
    display: none;
  }
  .dropdown-menu {
    min-width: 250px;
  }
}
</style>
