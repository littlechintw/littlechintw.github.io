<template>
  <html class="dark bg-black">
  <body>
    <div class="bg-black">
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <!-- <img src="{img url}" alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> -->
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl animate-pulse-slow"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu animate-pulse-slow animation-delay-1000"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0 fade-in-element">
            <div class="avatar">
              <div class="w-24 rounded-xl hover-scale">
                <img :src="data.profile.avatar" />
              </div>
            </div>
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-gradient-text"
              style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              {{ data.profile.name }}</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">{{ data.profile.description }}</p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none fade-in-element animation-delay-300">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a v-for="link in data.links" :key="link.name" :href="link.href" target="_blank" class="link-hover">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div v-for="stat in data.stats" :key="stat.name" class="flex flex-col-reverse slide-up">
                <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Works Section -->
    <div class="scroll-reveal" style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">
        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100 animate-gradient-text"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Works</h3>
        </kbd>
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700">
          <div v-for="(work, index) in data.works" :key="work.company" 
               class="px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 item-hover"
               :class="index > 0 ? 'animation-delay-' + (index * 100) : ''">
            <dt class="text-sm font-medium leading-6 text-gray-100">{{ work.company }}</dt>
            <div class="space-y-2">
              <dd v-for="position in work.positions" :key="position.period" class="text-sm leading-6 text-gray-300">
                <div :class="['mx-2 badge badge-accent', {'badge-outline': !position.active}]">{{ position.period }}</div> {{ position.title }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Experiences Section -->
    <div class="scroll-reveal" style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">
        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100 animate-gradient-text"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Experiences</h3>
        </kbd>
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700">
          <div v-for="(exp, index) in data.experiences" :key="exp.organization" 
               class="px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 item-hover"
               :class="index > 0 ? 'animation-delay-' + (index * 100) : ''">
            <dt class="text-sm font-medium leading-6 text-gray-100">{{ exp.organization }}</dt>
            <div class="space-y-2">
              <dd v-for="position in exp.positions" :key="position.period" class="text-sm leading-6 text-gray-300">
                <div :class="['mx-2 badge badge-accent', {'badge-outline': !position.active}]">{{ position.period }}</div> {{ position.title }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Communities Section -->
    <div class="scroll-reveal" style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">
        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100 animate-gradient-text"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Communities</h3>
        </kbd>
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700">
          <div v-for="(community, index) in data.communities" :key="community.organization" 
               class="px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 item-hover"
               :class="index > 0 ? 'animation-delay-' + (index * 100) : ''">
            <dt class="text-sm font-medium leading-6 text-gray-100">{{ community.organization }}</dt>
            <div class="space-y-2">
              <dd v-for="position in community.positions" :key="position.period" class="text-sm leading-6 text-gray-300">
                <div :class="['mx-2 badge badge-accent', {'badge-outline': !position.active}]">{{ position.period }}</div> {{ position.title }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Photography Section -->
    <div class="scroll-reveal" style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">
        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100 animate-gradient-text"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Photography</h3>
        </kbd>
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700">
          <div v-for="(photo, index) in data.photography" :key="photo.organization" 
               class="px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-4 item-hover"
               :class="index > 0 ? 'animation-delay-' + (index * 100) : ''">
            <dt class="text-sm font-medium leading-6 text-gray-100">{{ photo.organization }}</dt>
            <div class="space-y-2">
              <dd v-for="position in photo.positions" :key="position.period" class="text-sm leading-6 text-gray-300">
                <div :class="['mx-2 badge badge-accent', {'badge-outline': !position.active}]">{{ position.period }}</div> {{ position.title }}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>

    <footer class="mt-2 footer items-center p-4 bg-neutral text-neutral-content">
      <aside class="items-center grid-flow-col">
        <div class="avatar">
          <div class="w-8 rounded-xl hover-scale">
            <img src="https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a" />
          </div>
        </div>
        <p>&copy; 2019 - {{ new Date().getFullYear() }} Copyright
          <a href="https://littlechin.tw">littlechin.tw</a>. All rights
          reserved.
        </p>
      </aside>
      <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/littlechin" target="_blank" class="social-icon-hover"><svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="https://github.com/littlechintw" target="_blank" class="social-icon-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg></a>
        <a href="mailto:littlechintw+page@gmail.com" target="_blank" class="social-icon-hover"><svg xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" class="fill-current">
            <path
              d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
          </svg></a>
      </nav>
    </footer>
  </body>
  </html>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import jsonData from './data.json'

const data = reactive(jsonData)

onMounted(() => {
  // 設置滾動觀察者，用於滾動動畫
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  // 監控所有需要滾動顯示的元素
  document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
  });
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 動畫效果 */

/* 漸顯動畫 */
.fade-in-element {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

/* 滾動顯示動畫 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s, transform 0.8s;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* 脈衝動畫 */
.animate-pulse-slow {
  animation: pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulseSlow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.3;
  }
}

/* 懸停縮放效果 */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.1);
}

/* 項目懸停效果 */
.item-hover {
  transition: all 0.3s ease;
}

.item-hover:hover {
  background-color: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

/* 連結懸停效果 */
.link-hover {
  position: relative;
  transition: all 0.3s ease;
}

.link-hover::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(to right, #ef5350, #f48fb1);
  transition: width 0.3s ease;
}

.link-hover:hover::after {
  width: 100%;
}

/* 社交圖標動畫 */
.social-icon-hover {
  transition: transform 0.3s ease, filter 0.3s ease;
}

.social-icon-hover:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 0 5px #ffffff80);
}

/* 漸變文字動畫 */
.animate-gradient-text {
  background-size: 300%;
  animation: gradientText 8s linear infinite;
}

@keyframes gradientText {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 為列表項添加漸進式顯示 */
.animation-delay-0 { animation-delay: 0ms; }
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }

/* 滑入效果 */
.slide-up {
  animation: slideUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
