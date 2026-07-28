<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        aria-hidden="true" />

      <div class="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-32 sm:pb-20 lg:px-8">
        <div class="fade-in-element">
          <div class="h-20 w-20 overflow-hidden rounded-2xl ring-1 ring-white/10 hover-scale">
            <img :src="data.profile.avatar" class="h-full w-full object-cover" />
          </div>
          <h1 class="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{{ data.profile.name }}</h1>
          <p class="mt-4 max-w-xl text-base leading-7 text-gray-300">{{ data.profile.description }}</p>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 fade-in-element animation-delay-150">
          <a v-for="link in data.links" :key="link.name" :href="link.href" target="_blank" rel="noopener"
            class="link-hover text-sm font-medium text-gray-200">
            {{ link.name }} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <dl class="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4 fade-in-element animation-delay-300">
          <div v-for="stat in data.stats" :key="stat.name">
            <dt class="text-xs uppercase tracking-widest text-gray-400">{{ stat.name }}</dt>
            <dd class="mt-2 text-sm font-medium text-gray-100">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="mx-auto max-w-6xl px-6 pb-12 lg:px-8">
      <div class="lg:grid lg:grid-cols-[1fr_180px] lg:gap-16">
        <main>
          <!-- Projects -->
          <section id="projects" class="scroll-reveal scroll-mt-24 py-12">
            <div class="flex items-baseline gap-3">
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">01</span>
              <h3 class="text-lg font-semibold text-white">Projects</h3>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <a v-for="project in data.projects" :key="project.url" :href="project.url" target="_blank" rel="noopener"
                class="project-card group">
                <div class="flex items-center justify-between gap-4">
                  <h4 class="text-sm font-semibold text-gray-50 group-hover:text-violet-200">{{ project.name }}</h4>
                  <span aria-hidden="true" class="text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-violet-200">&rarr;</span>
                </div>
                <p class="mt-2 text-sm leading-6 text-gray-300">{{ project.description }}</p>
                <p class="mt-3 text-xs text-gray-400">{{ project.url.replace(/^https?:\/\//, '').replace(/\/$/, '') }}</p>
              </a>
            </div>
          </section>

          <!-- Timeline sections: Works / Experiences / Communities / Photography -->
          <section v-for="(section, sIndex) in timelineSections" :key="section.title" :id="section.id"
            class="scroll-reveal scroll-mt-24 py-12">
            <div class="flex items-baseline gap-3">
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{{ String(sIndex + 2).padStart(2, '0') }}</span>
              <h3 class="text-lg font-semibold text-white">{{ section.title }}</h3>
            </div>
            <dl class="mt-8 divide-y divide-white/10 border-t border-white/10">
              <div v-for="item in section.items" :key="item[section.key]"
                class="item-hover grid grid-cols-1 gap-3 py-6 lg:grid-cols-[1fr,2fr] lg:gap-6">
                <dt class="text-sm font-medium text-gray-100">{{ item[section.key] }}</dt>
                <div class="space-y-2">
                  <dd v-for="position in item.positions" :key="position.period"
                    class="flex flex-wrap items-center gap-x-2 text-sm leading-6 text-gray-300">
                    <span :class="['period-badge', { 'period-badge--active': position.active }]">{{ position.period }}</span>
                    {{ position.title }}
                  </dd>
                </div>
              </div>
            </dl>
          </section>
        </main>

        <aside class="hidden lg:block">
          <nav class="sticky top-24 relative border-l border-white/10 pl-5">
            <span class="toc-indicator" aria-hidden="true" :style="{ transform: `translateY(${activeIndex * 32}px)` }" />
            <a v-for="item in tocItems" :key="item.id" :href="`#${item.id}`"
              :class="['toc-link', { 'toc-link--active': activeSection === item.id }]">
              {{ item.label }}
            </a>
          </nav>
        </aside>
      </div>

      <!-- 保留空間，避免內容被固定 footer 遮住 -->
      <div class="h-28 sm:h-16" aria-hidden="true" />
    </div>

    <footer class="footer-bar fixed inset-x-0 bottom-0 z-30 bg-black/90 backdrop-blur">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-3 text-sm text-gray-400 sm:flex-row sm:justify-between lg:px-8">
        <p>
          &copy; 2019 - {{ new Date().getFullYear() }}
          <a href="https://littlechin.tw" class="text-gray-400 hover:text-violet-200">littlechin.tw</a>. All rights reserved.
        </p>
        <nav class="flex gap-4">
          <a href="https://www.linkedin.com/in/littlechin" target="_blank" rel="noopener" class="social-icon-hover text-gray-500 hover:text-violet-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a href="https://github.com/littlechintw" target="_blank" rel="noopener" class="social-icon-hover text-gray-500 hover:text-violet-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="mailto:littlechintw+page@gmail.com" target="_blank" rel="noopener" class="social-icon-hover text-gray-500 hover:text-violet-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current">
              <path
                d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'
import jsonData from './data.json'

const data = reactive(jsonData)

const timelineSections = computed(() => [
  { id: 'works', title: 'Works', items: data.works, key: 'company' },
  { id: 'experiences', title: 'Experiences', items: data.experiences, key: 'organization' },
  { id: 'communities', title: 'Communities', items: data.communities, key: 'organization' },
  { id: 'photography', title: 'Photography', items: data.photography, key: 'organization' },
])

const tocItems = computed(() => [
  { id: 'projects', label: 'Projects' },
  ...timelineSections.value.map(section => ({ id: section.id, label: section.title })),
])

const activeSection = ref('projects')
const activeIndex = computed(() => {
  const index = tocItems.value.findIndex(item => item.id === activeSection.value)
  return index === -1 ? 0 : index
})

onMounted(() => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(element => {
    revealObserver.observe(element);
  });

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  document.querySelectorAll('main section[id]').forEach(element => {
    spyObserver.observe(element);
  });
});
</script>

<style scoped>
/* 漸顯動畫 */
.fade-in-element {
  opacity: 0;
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.animation-delay-150 {
  animation-delay: 150ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

/* 滾動顯示動畫 */
.scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* 懸停縮放效果 */
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* 項目懸停效果 */
.item-hover {
  transition: background-color 0.2s ease, padding-left 0.2s ease, box-shadow 0.2s ease;
  padding-left: 0;
  padding-right: 0;
  border-radius: 0.5rem;
}

.item-hover:hover {
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: inset 3px 0 0 rgba(196, 181, 253, 0.7);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.item-hover:hover dt {
  color: rgb(255 255 255);
  text-shadow: 0 0 0.3px currentColor, 0 0 0.3px currentColor;
}

/* 連結懸停效果 */
.link-hover {
  position: relative;
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.link-hover::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -3px;
  left: 0;
  background: rgb(196 181 253);
  transition: width 0.25s ease;
}

.link-hover:hover {
  color: #ffffff;
  text-shadow: 0 0 0.35px currentColor, 0 0 0.35px currentColor;
}

.link-hover:hover::after {
  width: 100%;
}

/* 社交圖標動畫 */
.social-icon-hover {
  transition: transform 0.2s ease, color 0.2s ease, filter 0.2s ease;
}

.social-icon-hover:hover {
  transform: translateY(-2px);
  filter: drop-shadow(0 0 6px rgba(196, 181, 253, 0.5));
}

/* Project 卡片 */
.project-card {
  display: block;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background-color: rgba(255, 255, 255, 0.03);
  padding: 1.25rem;
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: rgba(196, 181, 253, 0.8);
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 0 1px rgba(196, 181, 253, 0.8);
  transform: translateY(-2px);
}

/* 時間區間標籤 */
.period-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0.125rem 0.625rem;
  font-size: 0.75rem;
  line-height: 1.25rem;
  color: rgb(209 213 219);
  white-space: nowrap;
}

.period-badge--active {
  border-color: rgba(196, 181, 253, 0.6);
  background-color: rgba(167, 139, 250, 0.15);
  color: rgb(216 204 254);
}

/* 右側目錄 */
.toc-link {
  display: flex;
  align-items: center;
  height: 2rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgb(156 163 175);
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.toc-link:hover {
  color: rgb(243 244 246);
  text-shadow: 0 0 0.3px currentColor, 0 0 0.3px currentColor;
}

.toc-link--active {
  color: rgb(221 214 254);
  text-shadow: 0 0 0.3px currentColor, 0 0 0.3px currentColor;
}

.toc-indicator {
  position: absolute;
  left: -1.5px;
  top: 0;
  width: 3px;
  height: 2rem;
  border-radius: 9999px;
  background: rgb(196 181 253);
  box-shadow: 0 0 8px rgba(196, 181, 253, 0.6);
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

/* Footer 上緣 */
.footer-bar::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(196, 181, 253, 0.6), transparent);
}
</style>
