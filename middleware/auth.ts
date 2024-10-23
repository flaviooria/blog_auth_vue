export default defineNuxtRouteMiddleware(async (to, from) => {
  const userStore = useUserStore();

  if (!userStore.isAuthenticated) {
    return await navigateTo("/");
  }
});
