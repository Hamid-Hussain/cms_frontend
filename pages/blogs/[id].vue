<script setup>
const { currentBlog } = storeToRefs(useRootStore());
const articleId = ref(1);
const route = useRoute();
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const editArticle = () => {
  if (process.client) {
    if (localStorage.getItem("auth-token")) {
    } else {
      navigateTo("/auth/login");
    }
  }
};
onMounted(() => {
  useRootStore().getArticleById(route.params.id);
});
</script>
<template>
  <div class="container align-items-start">
    <div class="">
      <div class="">
        <div class="p-4">
          <div class="blog-header">
            <h1 class="blog-title">{{ currentBlog?.title }}</h1>
            <p class="blog-meta">
              <span
                >By <strong>{{ currentBlog?.author }}</strong></span
              >
              |
              <span
                >Published on
                <strong>{{
                  formatDate(currentBlog.publication_date)
                }}</strong></span
              >
            </p>
          </div>
          <div class="blog-body">
            <p>
              {{ currentBlog?.body }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end w-100">
      <button class="btn btn-primary" @click="editArticle">Edit</button>
      <button
        class="btn btn-danger ms-2"
        @click="useRootStore().deleteArticle(currentBlog.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>
<style lang="scss">
.blog-container {
  margin-top: 20px;
  margin-bottom: 20px;
}
.blog-header {
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
