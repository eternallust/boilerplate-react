import { AxiosInstance } from "axios";

export const interceptResponse = (host: AxiosInstance) => {
  host.interceptors.response.use(
    (response) => response,
    (error) => {
      const { status } = error.response;
      if (status === 401) {
        localStorage.setItem("token", "");
        window.location.href = "/";
      }
      return Promise.reject(error);
    }
  );
  host.interceptors.request.use(
    (config: any) => {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
      )}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
