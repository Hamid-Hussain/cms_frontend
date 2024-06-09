<script setup>
import BlogCard from "~/components/blogs/BlogCard.vue";
// import { useBlogs } from "~/composables/useBlogs";
import FeaturedBlog from "~/components/blogs/FeaturedBlog.vue";
// import Header from "~/components/common/Header.vue";

// const { blogs } = useBlogs();
import { blogs } from "~/stores/blogs.js";
onMounted(() => {
  console.log("blogssss", blogs);
});
</script>
<template>
  <!-- <Header /> -->
  <div>
    <section class="block pb-3 mt-5">
      <div class="container ps-lg-0 pe-lg-4">
        <!-- <div class="row mt-5">
          <div class="col-md-11 col-lg-9 col-xl-7 pt-lg-4">
            <h2 class="mt-5 mb-0 mt-lg-0 mb-lg-4 d-grid">
              <span class="secondary-c tagline"> Knowledge Center </span>
              <span
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay="200"
              >
                Discover our latest articles and insights
              </span>
            </h2>
          </div>
        </div> -->
        <section id="featuredBlog" class="block pb-0">
          <!-- <div class="row"> -->
          <div v-for="blog in blogs" :key="blog.id">
            <FeaturedBlog v-if="blog.isFeatured" :blog="blog" />
          </div>
          <!-- </div> -->
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
