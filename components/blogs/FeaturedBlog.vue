<script setup>
defineProps({
  featuredBlog: {
    type: Object,
    default: {},
  },
});
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
const truncateBody = (body) => {
  return body?.split(" ")?.splice(0, 50)?.join(" ");
};
</script>
<template>
  <div
    class="card p-4 w-100"
    @click="() => navigateTo(`/blogs/${featuredBlog.id}`)"
  >
    <div class="blog-header">
      <h1 class="blog-title">{{ featuredBlog?.title }}</h1>
      <p class="blog-meta">
        <span
          >By <strong>{{ featuredBlog?.author }}</strong></span
        >
        |
        <span
          >Published on
          <strong>{{
            formatDate(featuredBlog?.publication_date)
          }}</strong></span
        >
      </p>
    </div>
    <div class="blog-body">
      <p>
        {{ truncateBody(featuredBlog?.body) }}
      </p>
    </div>
  </div>
</template>
