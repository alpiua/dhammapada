<template>
  
  <div class="relative min-h-screen overflow-visible bg-gradient-to-b from-yellow-50 to-white text-gray-800 flex">
    <!-- Sidebar (vertical menu) -->
    <aside class="z-10 w-64 shrink-0 bg-sky-50/70 border-r border-sky-200 hidden md:block sticky top-0 h-screen overflow-y-auto">
      <div class="px-4 py-4 border-b">
        <NuxtLink to="/" class="inline-flex items-center gap-2 text-2xl font-bold text-sky-500">
          <img src="/logo.svg" alt="Логотип" class="h-7 w-7" />
          <span>Dhammapada</span>
        </NuxtLink>
      </div>
      <nav class="p-2">
        <ul class="space-y-0.5">
          <li v-for="item in menu" :key="item.link">
            <NuxtLink :to="item.link" class="block px-2 py-0.5 rounded hover:bg-yellow-100 hover:text-yellow-700">{{ item.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Mobile header -->
    <div class="md:hidden fixed top-0 left-0 right-0 z-20 bg-sky-50/90 border-b border-sky-200">
      <div class="container mx-auto relative flex items-center h-14 px-3">
        <!-- Left: logo -->
        <NuxtLink to="/" class="inline-flex items-center text-sky-500">
          <img src="/logo.svg" alt="Логотип" class="h-6 w-6" />
        </NuxtLink>
        <!-- Center: title -->
        <NuxtLink to="/" class="absolute left-1/2 -translate-x-1/2 text-xl font-bold text-sky-500">Dhammapada</NuxtLink>
        <!-- Right: hamburger -->
        <button @click="isOpen = !isOpen" aria-label="Відкрити меню" class="ml-auto text-sky-500 focus:outline-none text-2xl p-2">☰</button>
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="fixed top-14 left-0 right-0 bottom-0 bg-black/20 z-20" @click="isOpen=false" />
      </transition>
      <transition name="fade">
        <nav v-if="isOpen" class="fixed top-14 left-0 right-0 bottom-0 overflow-y-auto p-3 border-t bg-sky-50 z-30">
          <ul class="space-y-1">
            <li v-for="item in menu" :key="item.link">
              <NuxtLink @click="isOpen=false" :to="item.link" class="block px-2 py-1 rounded hover:bg-sky-100 hover:text-sky-600">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </transition>
    </div>

    <!-- Main Content -->
    <main class="relative flex-1 min-w-0 min-h-screen md:ml-0 container mx-auto p-4 md:pl-6 md:pr-6 pt-16 md:pt-6">
      <div class="fixed top-0 bottom-0 left-0 right-0 md:left-64 pointer-events-none z-0 flex justify-center">
        <div
          class="w-full h-full max-w-screen-lg md:max-w-screen-xl bg-center bg-no-repeat opacity-30"
          style="background-image: url('/wheel.webp'); background-size: 85% auto;"
          aria-hidden="true"
        />
      </div>
      <div class="relative z-10">
        <NuxtPage />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'
const isOpen = ref(false)
// Lock background scroll when mobile menu is open
watch(isOpen, (val) => {
  if (typeof window === 'undefined') return
  document.body.style.overflow = val ? 'hidden' : ''
})
onBeforeUnmount(() => { if (typeof window !== 'undefined') document.body.style.overflow = '' })
const menu = [
  { name: '1. Пари', link: '/rozdil_1_pari' },
  { name: '2. Незапаморочення', link: '/rozdil_2_nezapamorochenya' },
  { name: '3. Розум', link: '/rozdil_3_rozum' },
  { name: '4. Квіти', link: '/rozdil_4_kviti' },
  { name: '5. Дурень', link: '/rozdil_5_duren' },
  { name: '6. Освічений', link: '/rozdil_6_osvicheniy' },
  { name: '7. Арахант', link: '/rozdil_7_arahant' },
  { name: '8. Тисячі', link: '/rozdil_8_tisachi' },
  { name: '9. Зло', link: '/rozdil_9_zlo' },
  { name: '10. Насильство', link: '/rozdil_10_nasilstvo' },
  { name: '11. Старість', link: '/rozdil_11_starist' },
  { name: '12. Про себе', link: '/rozdil_12_pro_sebe' },
  { name: '13. Світ', link: '/rozdil_13_svit' },
  { name: '14. Пробуджений', link: '/rozdil_14_probudzheniy' },
  { name: '15. Щастя', link: '/rozdil_15_schastya' },
  { name: '16. Милe', link: '/rozdil_16_mile' },
  { name: '17. Лють', link: '/rozdil_17_lut' },
  { name: '18. Нечисті', link: '/rozdil_18_nechisti' },
  { name: '19. Справедливий', link: '/rozdil_19_spravedliviy' },
  { name: '20. Шлях', link: '/rozdil_20_shlyah' },
  { name: '21. Різне', link: '/rozdil_21_rizne' },
  { name: '22. Пекло', link: '/rozdil_22_peklo' },
  { name: '23. Слон', link: '/rozdil_23_slon' },
  { name: '24. Жадання', link: '/rozdil_24_zhadannya' },
  { name: '25. Послушник', link: '/rozdil_25_poslushnik' },
  { name: '26. Брахман', link: '/rozdil_26_brahman' },
  { name: 'Вступ від Максима Копаниці', link: '/vstup-vid-maksyma-kopanytsi' }
]
</script>

<style>
body {
  font-family: 'Noto Serif', serif;
}
</style>
