import { defineStore } from "pinia";
import type { UserResponse } from "~/interfaces/auth";

export const useUserStore = defineStore("user", () => {
  // State
  const user = useCookie<UserResponse | null>("user", {
    maxAge: 60 * 60 * 24 * 1,
  });

  // Getters
  const isAuthenticated = computed(() => {
    return !!user.value;
  });

  const getUser = computed(() => user.value);

  // Actions
  function setUser(userResponse: UserResponse | null) {
    user.value = userResponse;
  }

  function clearUser() {
    user.value = null;
  }

  return { user, setUser, isAuthenticated, getUser, clearUser };
});
