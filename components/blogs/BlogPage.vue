<template>
  <div>
    <section class="block pb-3">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-11 col-lg-9 col-xl-7 pt-lg-4">
            <h2 class="mt-5 mb-0 mt-lg-0 mb-lg-4">
              <span class="secondary-c tagline"> Knowledge Center </span>
              <span
                data-aos="fade-left"
                data-aos-duration="400"
                data-aos-delay="200"
              >
                Discover our latest blogs and articles.
              </span>
            </h2>
          </div>
        </div>
        <section id="featuredBlog" class="block pb-0">
          <div class="row">
            <div v-for="blog in featuredBlogs" :key="blog.id" class="col-12">
              <BlogCard :blog="blog" />
            </div>
          </div>
        </section>
      </div>
    </section>

    <section id="blogList" class="mt-5">
      <div class="container">
        <div class="row">
          <div
            v-for="blog in blogs"
            :key="blog.id"
            class="col-xl-4 col-lg-6 col-md-7 col-11 mb-4"
          >
            <BlogCard :blog="blog" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard.vue";
import { computed } from "vue";
import blogsData from "~/stores/index.js";

export default {
  components: {
    BlogCard,
  },
  setup() {
    const blogs = computed(() => blogsData);
    const featuredBlogs = computed(() =>
      blogsData.filter((blog) => blog.featured)
    );

    return {
      blogs,
      featuredBlogs,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../scss/styles.scss";

.block {
  padding-bottom: 3rem;
}

.container {
  padding-left: 0;
  padding-right: 0;
}

.row {
  margin-top: 5rem;
}

h2 {
  margin-top: 5rem;
  margin-bottom: 0;
  margin-top: 0;
  margin-bottom: 4rem;
  display: grid;

  .tagline {
    color: $secondary-color;
  }
}
</style>
