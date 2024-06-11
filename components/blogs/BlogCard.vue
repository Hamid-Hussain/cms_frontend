<script setup>
const props = defineProps({
  blog: {
    type: Object,
    required: true,
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
  return body.split(" ").splice(0, 30).join(" ");
};
</script>
<template>
  <div class="card p-4 w-100" @click="() => navigateTo(`/blogs/${blog.id}`)">
    <div class="blog-header">
      <h1 class="blog-title">{{ blog?.title }}</h1>
      <p class="blog-meta">
        <span
          >By <strong>{{ blog?.author }}</strong></span
        >
        |
        <span
          >Published on
          <strong>{{ formatDate(blog?.publication_date) }}</strong></span
        >
      </p>
    </div>
    <div class="blog-body">
      <p>
        {{ truncateBody(blog?.body) }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.blogjustify-content-center-header {
  margin-bottom: 20px;
}
.blog-title {
  font-size: 2rem;
  font-weight: bold;
}
.blog-meta {
  color: #6c757d;
}
.blog-body {
  margin-top: 20px;
}
.edit-button {
  margin-top: 20px;
}
</style>
