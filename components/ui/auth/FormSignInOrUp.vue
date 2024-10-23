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
  <pre>{{ user }}</pre>
</template>

<script lang="ts" setup>
import { useAuth } from "~/composables/auth";
import type {
  SignInInterface,
  SignUpInterface,
  UserResponse,
} from "~/interfaces/auth";

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
const user = ref<UserResponse>();

const { login, register } = useAuth();
const userStore = useUserStore();
const { setUser } = userStore;

const getDataForm = async () => {
  const userData: SignInInterface | SignUpInterface = {
    email: email.value,
    password: password.value,
    name: username.value,
  };

  if (props.type == "signin") {
    try {
      const { data, error } = await login<UserResponse>("auth/signin", {
        email: userData.email,
        password: userData.password,
      });

      if (error) {
        throw error;
      }

      user.value = data;

      // Añadir al store global el usuario logeado
      setUser(user.value);

      await navigateTo("/welcome");
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const { data, error } = await register<UserResponse>("auth/signup", {
        email: userData.email,
        password: userData.password,
        name: userData.name,
      });

      if (error) {
        throw error;
      }

      user.value = data;

      // Añadir al store global el usuario logeado
      setUser(user.value);

      await navigateTo("/welcome");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style></style>
