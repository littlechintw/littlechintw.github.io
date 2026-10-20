<template>
  <div ref="root">
    <!-- Hero -->
    <div class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        aria-hidden="true" />

      <div class="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:px-8">
        <div class="fade-in-element">
          <div class="h-20 w-20 overflow-hidden rounded-2xl ring-1 ring-white/10 hover-scale">
            <img :src="data.profile.avatar" :alt="`${data.profile.name} 的頭像`" width="80" height="80" class="h-full w-full object-cover" />
          </div>
          <h1 class="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{{ data.profile.name }}</h1>
          <p class="mt-4 max-w-xl text-base leading-7 text-gray-300">{{ data.profile.description }}</p>
          <p v-if="data.profile.intro" class="mt-3 max-w-2xl text-base leading-7 text-gray-400">{{ data.profile.intro }}</p>
        </div>

        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 fade-in-element animation-delay-150">
          <a v-for="link in data.links" :key="link.name" :href="link.href" target="_blank" rel="noopener"
            class="link-hover text-sm font-medium text-gray-200" data-ga="social_click" :data-ga-label="link.name">
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
        <div>
          <!-- Writing -->
          <section id="writing" class="scroll-reveal scroll-mt-24 py-12">
            <div class="flex items-baseline justify-between gap-4">
              <div class="flex items-baseline gap-3">
                <span class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">01</span>
                <h2 class="text-lg font-semibold text-white">Writing</h2>
              </div>
              <a href="/blog/" class="link-hover text-sm font-medium text-gray-300" data-ga="nav_click" data-ga-label="所有文章">
                所有文章<span v-if="totalPosts">（{{ totalPosts }}）</span> <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <a v-for="post in posts" :key="post.href" :href="post.href" class="project-card group"
                data-ga="post_click" :data-ga-label="post.title">
                <div class="flex flex-wrap items-center gap-x-3 text-xs text-gray-400">
                  <time :datetime="post.isoDate">{{ post.date }}</time>
                  <span aria-hidden="true">·</span>
                  <span>約 {{ post.minutes }} 分鐘</span>
                </div>
                <h3 class="mt-2 text-sm font-semibold text-gray-50 group-hover:text-violet-200">{{ post.title }}</h3>
                <p class="mt-2 text-sm leading-6 text-gray-300">{{ post.description }}</p>
                <p v-if="post.tags.length" class="mt-3 text-xs text-gray-400">{{ post.tags.map(tag => '#' + tag).join('　') }}</p>
              </a>
            </div>
          </section>

          <!-- Projects -->
          <section id="projects" class="scroll-reveal scroll-mt-24 py-12">
            <div class="flex items-baseline gap-3">
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">02</span>
              <h2 class="text-lg font-semibold text-white">Projects</h2>
            </div>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <a v-for="project in data.projects" :key="project.url" :href="project.url" target="_blank" rel="noopener"
                class="project-card group" data-ga="project_click" :data-ga-label="project.name">
                <div class="flex items-center justify-between gap-4">
                  <h3 class="text-sm font-semibold text-gray-50 group-hover:text-violet-200">{{ project.name }}</h3>
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
              <span class="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">{{ String(sIndex + 3).padStart(2, '0') }}</span>
              <h2 class="text-lg font-semibold text-white">{{ section.title }}</h2>
            </div>
            <dl class="mt-8 divide-y divide-white/10 border-t border-white/10">
              <div v-for="item in section.items" :key="item[section.key]"
                class="item-hover grid grid-cols-1 gap-3 py-6 lg:grid-cols-[1fr,2fr] lg:gap-6">
                <dt class="text-sm font-medium text-gray-100">{{ item[section.key] }}</dt>
                <div class="space-y-2">
                  <dd v-for="position in item.positions" :key="position.period + position.title"
                    class="flex flex-wrap items-center gap-x-2 text-sm leading-6 text-gray-300">
                    <span :class="['period-badge', { 'period-badge--active': position.active }]">{{ position.period }}</span>
                    {{ position.title }}
                  </dd>
                </div>
              </div>
            </dl>
          </section>
        </div>

        <aside class="hidden lg:block">
          <nav class="sticky top-24 relative border-l border-white/10 pl-5" aria-label="頁內目錄">
            <span class="toc-indicator" aria-hidden="true" :style="{ transform: `translateY(${activeIndex * 32}px)` }" />
            <a v-for="item in tocItems" :key="item.id" :href="`#${item.id}`"
              :class="['toc-link', { 'toc-link--active': activeSection === item.id }]">
              {{ item.label }}
            </a>
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref, onMounted } from 'vue'
import jsonData from '../data.json'

const props = defineProps({
  posts: { type: Array, default: () => [] },
  totalPosts: { type: Number, default: 0 },
})

const data = reactive(jsonData)
const root = ref(null)

const timelineSections = computed(() => [
  { id: 'works', title: 'Works', items: data.works, key: 'company' },
  { id: 'experiences', title: 'Experiences', items: data.experiences, key: 'organization' },
  { id: 'communities', title: 'Communities', items: data.communities, key: 'organization' },
  { id: 'photography', title: 'Photography', items: data.photography, key: 'organization' },
])

const tocItems = computed(() => [
  { id: 'writing', label: 'Writing' },
  { id: 'projects', label: 'Projects' },
  ...timelineSections.value.map(section => ({ id: section.id, label: section.title })),
])

const activeSection = ref('writing')
const activeIndex = computed(() => {
  const index = tocItems.value.findIndex(item => item.id === activeSection.value)
  return index === -1 ? 0 : index
})

onMounted(() => {
  const el = root.value
  if (!el) return

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
      }
    })
  }, { threshold: 0.1 })

  el.querySelectorAll('.scroll-reveal').forEach(element => {
    revealObserver.observe(element)
  })

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 })

  el.querySelectorAll('section[id]').forEach(element => {
    spyObserver.observe(element)
  })
})
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

/* 滾動顯示動畫；沒有 JS 時維持可見 */
.scroll-reveal {
  opacity: 1;
  transform: none;
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

@media (scripting: enabled) {
  .scroll-reveal:not(.revealed) {
    opacity: 0;
    transform: translateY(24px);
  }
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

/* 卡片 */
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
</style>
