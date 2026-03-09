<template>
  <ion-page class="parchment-page">
    <ion-content :fullscreen="true" class="login-content">
      <div class="login-page parchment-bg">
        <div class="login-wrapper">
          <!-- Logo Section -->
          <div class="login-header">
            <h1 class="login-title">TIMELINE</h1>
            <p class="login-subtitle">"The Human Odyssey: A Journey Through Every Era"</p>
          </div>

          <!-- Login Card -->
          <div class="login-card">
            <h2>ยินดีต้อนรับ</h2>
            <p class="login-desc">เข้าสู่ระบบด้วย Google เพื่อเริ่มการเดินทาง</p>

            <button
              class="google-login-btn"
              @click="loginWithGoogle"
              :disabled="isLoading"
            >
              <span class="spinner" v-if="isLoading"></span>
              <svg v-else class="google-icon" viewBox="0 0 24 24" width="22" height="22">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              {{ isLoading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบด้วย Google' }}
            </button>

            <p class="terms">
              การเข้าสู่ระบบถือว่าคุณยอมรับ
              <a href="#">ข้อกำหนดการใช้งาน</a> และ
              <a href="#">นโยบายความเป็นส่วนตัว</a>
            </p>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonPage, IonContent } from '@ionic/vue';
import { authService } from '../../auth/auth-service';

const router = useRouter();
const isLoading = ref(false);

const loginWithGoogle = async () => {
  isLoading.value = true;
  try {
    await authService.loginWithGoogle();
    router.push('/tabs/tab1');
  } catch (error) {
    console.error('Google login failed:', error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-content {
  --background: #c5a882;
}

.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit', sans-serif;
}

.login-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 24px;
  max-width: 440px;
  width: 100%;
}

.login-header {
  text-align: center;
  margin-bottom: 48px;
}

.login-title {
  font-family: 'Cinzel', serif;
  font-size: 4.5rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 2px #a88b6a;
  text-shadow: 3px 3px 0 rgba(168, 139, 106, 0.3);
  letter-spacing: 10px;
  line-height: 1;
  margin: 0;
}

.login-subtitle {
  font-size: 0.95rem;
  font-weight: 300;
  color: #6b5744;
  margin-top: 12px;
  letter-spacing: 1px;
}

.login-card {
  width: 100%;
  background: rgba(232, 213, 183, 0.6);
  padding: 40px 32px;
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138, 112, 84, 0.2);
}

.login-card h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #2d1e0f;
  margin: 0 0 8px;
}

.login-desc {
  font-size: 0.95rem;
  color: #6b5744;
  margin: 0 0 32px;
}

.google-login-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: #2d1e0f;
  color: #e8d5b7;
  border: none;
  padding: 16px 24px;
  border-radius: 12px;
  font-family: 'Kanit', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.google-login-btn:hover:not(:disabled) {
  background: #4a3728;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(45, 30, 15, 0.3);
}

.google-login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.google-icon {
  flex-shrink: 0;
}

.spinner {
  width: 22px;
  height: 22px;
  border: 2px solid rgba(232, 213, 183, 0.3);
  border-top-color: #e8d5b7;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.terms {
  font-size: 0.8rem;
  color: #8a7a6a;
  margin-top: 24px;
  line-height: 1.5;
}

.terms a {
  color: #4a3728;
  text-decoration: underline;
}

.terms a:hover {
  color: #2d1e0f;
}

@media (max-width: 480px) {
  .login-title {
    font-size: 3rem;
    letter-spacing: 6px;
  }
  .login-card {
    padding: 32px 24px;
  }
}
</style>
