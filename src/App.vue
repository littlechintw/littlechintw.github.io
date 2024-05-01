<template>
  <!-- Dark mode enabled -->
  <html class="dark bg-black">

  <body>
    <!-- Will be black -->
    <div class="bg-black">
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <!-- <img src="{img url}" alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" /> -->
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true">
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <div class="avatar">
              <div class="w-24 rounded-xl">
                <img src="https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a" />
              </div>
            </div>
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              littlechin</h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">我是小群，但，你怎麼在這？</p>
          </div>
          <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div
              class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a v-for="link in links" :key="link.name" :href="link.href" target="_blank">{{ link.name }} <span
                  aria-hidden="true">&rarr;</span></a>
            </div>
            <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
                <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
                <dd class="text-2xl font-bold leading-9 tracking-tight text-white">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">
        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Works</h3>
        </kbd>
        <!-- <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Work experience</p> -->
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">HP Inc.</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022/07 - 2023/07</div> Software Testing Intern
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent">2024/03 - </div> Software / System Engineer
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">行政院公共數位創新空間 PDIS</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021/07 - 2021/08</div> Ray 5.0 見習生
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <div style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">

        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Experiences</h3>
        </kbd>
        <!-- <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Work experience</p> -->
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700" display="flex" flex-wrap="wrap" justify-content="flex-start">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">行政院國家資通安全網路攻防演練</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020</div> 109 學研攻擊手
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021</div> 110 學研攻擊手
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022</div> 111 學研攻擊手
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2023</div> 112 學研攻擊手
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">臺灣好厲駭高階資安人才培訓計畫</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2019/09 - 2020/08</div> 第四屆學員 結業
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020/09 - 2021/08</div> 第五屆學員 結業
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021/09 - 2022/08</div> 第六屆學員 結業
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022/09 - 2023/08</div> 第七屆學員 結業
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">AIS3 新型態資安實務主題課程</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2019/07 - 2019/08</div> 數位鑑識組 結業
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">國立臺北大學 三峽校區 學生會</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2019/07 - 2020/06</div> 第 20 屆 資訊部 副部長
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020/07 - 2021/06</div> 第 21 屆 資訊部 部長
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <div class="divider"></div>

    <div style="margin-left: 10%; margin-right: 10%; margin-top: 20px;">
      <div class="px-4 sm:px-0">

        <kbd class="kbd kbd-md bg-black">
          <h3 class="text-base font-semibold leading-7 text-gray-100"
            style="background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Communities</h3>
        </kbd>
        <!-- <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Work experience</p> -->
      </div>
      <div class="mt-6 border-t border-gray-600">
        <dl class="divide-y divide-gray-700" display="flex" flex-wrap="wrap" justify-content="flex-start">
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">Developer Student Clubs Google 學生開發者社群</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2019 – 2020</div> NTPU Lead
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">SITCON 學生計算機年會</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2017</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2018</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020</div> 場務組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021</div> 攝影組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022</div> 紀錄組 組長
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2023</div> Camp 紀錄組 小天使
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2024</div> 紀錄組 組員
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">COSCUP 開源人年會</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021</div> 紀錄組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022</div> 紀錄組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2023</div> 紀錄組 組員
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">Hacks In Taiwan Conference (HITCON) 台灣駭客年會</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021</div> 平面攝影組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022</div> 攝影組 組員
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2023</div> 攝影組 組員
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">CYBERSEC 臺灣資安大會</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2022</div> 會眾
            </dd>
            <dt class="text-sm font-medium leading-6 text-gray-100"></dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2023</div> 會眾
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">g0v 台灣零時政府 黑客松</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2021/03</div> Hackath43n 攝影
            </dd>
          </div>
          <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-100">GDG DevFest</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-300 sm:col-span-2 sm:mt-0">
              <div class="mx-2 badge badge-accent badge-outline">2020</div> Taipei 工作人員
            </dd>
          </div>
        </dl>
      </div>


    </div>

  </body>

  <footer class="mt-2 footer items-center p-4 bg-neutral text-neutral-content">
    <aside class="items-center grid-flow-col">
      <div class="avatar">
        <div class="w-8 rounded-xl">
          <img src="https://www.gravatar.com/avatar/c87cbee0a4a96655bd7366b56be7a18a" />
        </div>
      </div>
      <p>&copy; 2019 - {{ new Date().getFullYear() }} Copyright
        <a href="https://littlechin.tw">littlechin.tw</a>. All rights
        reserved.
      </p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a href="https://www.linkedin.com/in/littlechin" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <a href="https://github.com/littlechintw" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg></a>
      <a href="mailto:littlechintw+page@gmail.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24"
          height="24" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
        </svg></a>
    </nav>
  </footer>

  </html>
</template>

<!-- <script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      message: 'Hello, Vue3!',
      theme: 'light',
    };
  },
  methods: {
    toggleTheme() {
      console.log('toggleTheme');
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
  },
});
</script> -->

<script setup>
// import { PaperClipIcon } from '@heroicons/vue/20/solid'

const links = [
  { name: 'Resume', href: 'resume' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/littlechin' },
  { name: 'GitHub', href: 'https://github.com/littlechintw' },
  { name: 'Email', href: 'mailto:littlechintw+page@gmail.com' },
]
const stats = [
  { name: 'Me', value: 'Photographer, Coder' },
  { name: 'Work', value: 'Software Engineer, SQA Engineer' },
  // { name: 'Education', value: '' },
  { name: 'Future?', value: 'Unlimited' },
]
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
</style>
