import axios from "axios";

const token = window.localStorage.getItem("auth-token");
const headers = { Authorization: `Bearer ${token}` };
export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();
  const axiosInstance = axios.create({
    baseURL: runtimeConfig.public.baseUrl,
  });
  axiosInstance.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.set(headers);
      }

      console.log("reqqq configgg", config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    // success
    (response) => {
      console.log("responseeeeeee", response);
      if (response.status === 200 || response.status === 201)
        return Promise.resolve(response);
    },
    // error handle
    async (error) => {
      // console.log("ERROR RECEIVED BY AXIOS", error);
      if (error?.code === "ERR_NETWORK") {
        // eslint-disable-next-line no-console
        console.log("internet issue", error);
        return Promise.reject(error);
      } else {
        return Promise.reject(error.response.data);
      }
    }
  );

  return {
    provide: { axios: axiosInstance },
  };
});
