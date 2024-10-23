export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUserStore();

  if (user.isAuthenticated) {
    return await navigateTo("/welcome");
  }
});
