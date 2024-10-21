<template>
  <section class="flex items-center justify-center w-full h-full">
    <form
      action=""
      @submit.prevent="getDataForm"
      class="form w-[360px] h-[400px] flex flex-col place-content-center gap-6 rounded-md px-3"
    >
      <h2 class="text-center font-bold text-[24px]">Iniciar Sesión</h2>
      <FloatLabel>
        <InputText v-model="email" id="email" type="email" class="w-full" />
        <label for="email">Correo Electronico</label>
      </FloatLabel>
      <FloatLabel>
        <Password
          class="w-full"
          v-model="password"
          id="password"
          toggle-mask
          :feedback="false"
        />
        <label for="password">Contraseña</label>
      </FloatLabel>
      <span>
        No tienes cuenta aun,
        <NuxtLink
          href="/register"
          class="hover:border-b-2 hover:border-b-component"
          >registrate</NuxtLink
        >
      </span>
      <Button type="submit" class="w-full">Iniciar Sesión</Button>
    </form>
  </section>
</template>

<style scoped>
.form {
  background: var(--secondary-color);
  border-radius: 16px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
}
</style>

<script lang="ts" setup>
const email = ref("");
const password = ref("");

const getDataForm = (e: Event) => {
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());
  console.log(data);
};
</script>

<style></style>
