<template>
  <header class="flex flex-row justify-between items-center p-3 bg-secondary">
    <h2 class="text-2xl font-semibold">Lista de compras</h2>
    <Button label="Cerrar Sesion" @click.once="logout" />
  </header>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
const { clearUser } = userStore;
const { logout: logoutAuth } = useAuth();

const logout = async () => {
  clearUser();

  await logoutAuth("auth/logout");
  await navigateTo("/");
};
</script>
