<script setup>
import BlogCard from "~/components/blogs/BlogCard.vue";
import FeaturedBlog from "~/components/blogs/FeaturedBlog.vue";
import { blogs } from "~/stores/blogs.js";
</script>
<template>
  <div>
    <section class="block pb-3 mt-5">
      <div class="container ps-lg-0 pe-lg-4">
        <section id="featuredBlog" class="block pb-0">
          <div v-for="blog in blogs" :key="blog.id">
            <FeaturedBlog v-if="blog.isFeatured" :blog="blog" />
          </div>
        </section>
      </div>
    </section>

    <section id="blogList" class="mt-5">
      <div class="container px-0 px-md-auto">
        <div class="row flex-flow-scroll gap-0 justify-content-start pb-0">
          <div v-for="blog in blogs" :key="blog.id" class="col-md-4">
            <BlogCard :blog="blog" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/scss/variables.scss";
@import "~/assets/scss/mixin.scss";

.blog-tabs {
  ul {
    li {
      .nav-link {
        width: max-content !important;
      }
    }
  }
}

.blog-link {
  text-decoration: none;
  color: unset;
}
</style>
