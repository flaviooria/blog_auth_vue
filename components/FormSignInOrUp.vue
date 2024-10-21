<template>
  <form
    action=""
    @submit.prevent="getDataForm"
    class="w-[360px] h-[400px] flex flex-col place-content-center gap-6 px-3 bg-secondary rounded-2xl shadow-md"
  >
    <h2 class="text-center font-bold text-[24px]">
      {{ props.type == "signin" ? "Iniciar Sesión" : "Registrarse" }}
    </h2>
    <FloatLabel v-if="props.type == 'signup'">
      <InputText v-model="username" id="username" type="text" class="w-full" />
      <label for="username">Nombre: </label>
    </FloatLabel>
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
      {{
        props.type == "signin"
          ? "¿No tienes cuenta aún?, "
          : "¿Ya tienes cuenta?, "
      }}
      <NuxtLink
        :href="props.type == 'signin' ? '/register' : '/'"
        class="hover:border-b-2 hover:border-b-component"
        >{{ props.type == "signin" ? "registrate" : "inicia sesión" }}</NuxtLink
      >
    </span>
    <Button type="submit" class="w-full">{{
      props.type == "signin" ? "Iniciar Sesion" : "Registrarse"
    }}</Button>
  </form>
</template>

<script lang="ts" setup>
type TypeForm = "signin" | "signup";

interface Props {
  type: TypeForm;
}

// Remenber the props is only readonl by default, for to get the value from prop use ref or reactive
const props = withDefaults(defineProps<Props>(), {
  type: "signin",
});

const username = ref("");
const email = ref("");
const password = ref("");

const getDataForm = () => {
  console.log({
    email: email.value,
    password: password.value,
    username: username.value,
  });
};
</script>

<style></style>
