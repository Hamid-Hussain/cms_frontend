<script setup>
import BlogCard from "~/components/blogs/BlogCard.vue";
// import { useBlogs } from "~/composables/useBlogs";
import FeaturedBlog from "~/components/blogs/FeaturedBlog.vue";
// import Header from "~/components/common/Header.vue";

const store = useRootStore();
const { blogs } = storeToRefs(store);

onMounted(async () => {
  console.log("mountedddd");
  await useRootStore().getArticles("");
});
</script>
<template>
  <div>
    <section class="block pb-3 mt-5">
      <div v-if="blogs.length" class="container ps-lg-0 pe-lg-4">
        <FeaturedBlog :featured-blog="blogs[0]" />
      </div>
      <div v-else>
        <div class="no-blogs-message">
          <p>No blogs available at the moment. Be the first to write a blog!</p>
          <button
            @click="() => navigateTo('/blogs/create')"
            class="create-blog-button"
          >
            Write Your First Blog
          </button>
        </div>
      </div>
    </section>

    <section id="blogList" class="mt-4">
      <div class="container align-items-start px-0 px-md-auto">
        <div class="row w-100">
          <div v-for="blog in blogs" :key="blog.id" class="col-md-4 mb-4">
            <BlogCard :blog="blog" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
