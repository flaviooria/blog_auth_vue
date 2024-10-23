type Error = {
  detail: string;
};

type ResponseFetch<T = any> = {
  data: T;
  error: Error | null;
};

type FetchFunction = <T = any>(
  url: string,
  data?: any,
  method?: "GET" | "POST" | "PUT" | "DELETE"
) => Promise<ResponseFetch<T>>;

type FetchParameters = {
  url: string;
} & FetchOptions;

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
};

export type {
  Error,
  FetchFunction,
  FetchOptions,
  FetchParameters,
  ResponseFetch,
};
