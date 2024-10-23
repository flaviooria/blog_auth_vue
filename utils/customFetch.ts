export const customFetch = $fetch.create({
  credentials: "include",
  onResponseError({ response: responseError }) {
    throw responseError;
  },
});
