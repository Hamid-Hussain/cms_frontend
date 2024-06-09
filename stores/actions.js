import { articleRoutes } from "~/constants/routes";
export default {
  async addArticle(payload) {
    try {
      const { data } = await useNuxtApp().$axios.post(
        articleRoutes.addBlog,
        payload
      );
    } catch (error) {
      console.log("error =>", error);
    }
  },
  async getArticles(title) {
    try {
      let apiURL = articleRoutes.getBlogs;
      if (title !== "") {
        apiURL += "?title=" + title;
      }
      const { data } = await useNuxtApp().$axios.get(apiURL);
      this.$patch({
        blogs: data.data.blogs,
      });
    } catch (error) {
      console.log("error => ", error);
    }
  },
  async getArticleById(articleId) {
    try {
      const { data } = await useNuxtApp().$axios.get(
        `${articleRoutes.articleByID}/${articleId}`
      );
      this.$patch({
        currentBlog: data,
      });
    } catch (error) {
      console.log("error => ", error);
    }
  },
  async deleteArticle(articleId) {
    try {
      console.log("getblogssss");
      await useNuxtApp().$axios.delete(`${articleRoutes.delete}/${articleId}`);
      navigateTo("/");
    } catch (error) {
      console.log("error => ", error);
    }
  },
  async searchArticle(title) {
    try {
      console.log("getblogssss titleeee", title);
      const { data } = await useNuxtApp().$axios.get(
        `${articleRoutes.search}?title=${title}`
      );
      console.log("inactionssss", data);
      this.$patch({
        blogs: data,
      });
    } catch (error) {
      console.log("error => ", error);
    }
  },
};
