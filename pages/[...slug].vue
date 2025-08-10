<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(`doc:${route.path}`,
  () => queryContent(route.path).findOne()
)

// Apply SEO meta from content frontmatter when available
watchEffect(() => {
  if (doc.value) {
    useHead({
      title: doc.value.title,
      meta: [
        { name: 'description', content: doc.value.description },
        { property: 'og:title', content: doc.value.title },
        { property: 'og:description', content: doc.value.description },
      ],
    })
  }
})

// Scroll to hash anchor after content is rendered
const scrollToHash = async () => {
  if (!route.hash) return
  const id = decodeURIComponent(route.hash.substring(1))
  await nextTick()
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(scrollToHash)
watch(() => route.hash, scrollToHash)
</script>

<template>
  <article class="prose prose-zinc lg:prose-lg max-w-3xl mx-auto p-4 prose-p:leading-8 prose-headings:mt-8 prose-headings:mb-4 prose-h4:text-center prose-h1:text-center prose-h1:text-2xl md:prose-h1:text-3xl prose-headings:scroll-mt-16 prose-h4:scroll-mt-16 prose-h1:scroll-mt-16">
    <ContentRenderer v-if="doc" :value="doc" />
    <p v-else>Сторінку не знайдено.</p>
  </article>
</template>
