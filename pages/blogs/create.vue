<script setup>
const article = ref({
  title: "",
  body: "",
  author: "",
  date: "",
});

const addArticle = async () => {
  const payload = {
    title: article.value.title,
    author: article.value.author,
    publication_date: article.value.date,
    body: article.value.body,
  };
  await useRootStore().addArticle(payload);
};
</script>
<template>
  <div class="blog-wrapper mt-5">
    <h1 class="mb-4">Write a Blog</h1>
    <div>
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>

        <input
          v-model="article.title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter the title of your blog"
          required
        />
        {{ "titleeee " + article.title }}
      </div>
      <div class="mb-3">
        <label for="author" class="form-label">Author</label>
        <input
          v-model="article.author"
          type="text"
          class="form-control"
          id="author"
          placeholder="Enter the author's name"
          required
        />
      </div>
      <div class="mb-3">
        <label for="publication_date" class="form-label"
          >Publication Date</label
        >
        <input
          v-model="article.date"
          type="date"
          class="form-control"
          id="publication_date"
          required
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">Body</label>
        <textarea
          v-model="article.body"
          class="form-control"
          id="body"
          rows="10"
          placeholder="Write your blog content here"
          required
        ></textarea>
      </div>
      <button @click="addArticle" type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  </div>
</template>
