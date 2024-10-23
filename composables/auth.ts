import type {
  Error,
  FetchFunction,
  FetchParameters,
  ResponseFetch,
} from "~/types";

const fetchApi = async <T = any>({ url, method, data }: FetchParameters) => {
  const baseURL = useRuntimeConfig().public.API_URL;

  const response: ResponseFetch = {
    data: null,
    error: null,
  };
  try {
    const result = await customFetch(url, {
      baseURL,
      method,
      body: data,
    });

    response.data = result as T;
  } catch (error) {
    response.error = error as Error;
  }

  return response;
};

export const useAuth = () => {
  const login: FetchFunction = <T = any>(
    ...args: Parameters<FetchFunction>
  ) => {
    const [url, data] = args;

    return fetchApi<T>({ url, data, method: "POST" });
  };

  const register: FetchFunction = <T = any>(
    ...args: Parameters<FetchFunction>
  ) => {
    const [url, data] = args;

    return fetchApi<T>({ url, data, method: "POST" });
  };

  const logout = (url: string) => fetchApi({ url, method: "POST" });

  const currentUser: FetchFunction = async <T = any>(url: string) =>
    fetchApi<T>({ url });

  return {
    login,
    register,
    logout,
    currentUser,
  };
};
