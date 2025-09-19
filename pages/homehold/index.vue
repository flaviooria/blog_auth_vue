<template>
  <article class="flex flex-col gap-1">
    <span class="text-xl">¿Hola {username}, aun no tienes un grupo?, Que esperas a crear uno!
    </span>
    <div class="w-[50%]  p-5">
      <form action="" class="flex flex-col gap-4">
        <h1 class="mb-3">Crear grupo de hogar</h1>
        <FloatLabel>
          <InputText v-model="name" id="name" type="text" class="w-full mb-3" />
          <label for="name">Nombre: </label>
        </FloatLabel>
        <FloatLabel>
          <Textarea v-model="description" rows="3" cols="30" id="description" class="w-full mb-3" auto-resize />
          <label for="description">Descripción: </label>
        </FloatLabel>
        <div class="flex items-center mb-3">
          <Checkbox v-model="canChangue" inputId="changueAdmin" name="changueAdmin" binary
            @update:model-value="listenEventCheckbox" />
          <label for="changueAdmin" class="ml-2"> Cambiar administrador: {{ canChangue }} </label>
        </div>
        <FloatLabel class="w-full md:w-56">
          <Select v-model="user" inputId="user_admin" :options="users" optionLabel="label" class="w-full"
            :disabled="!changueAdmin" />
          <label for="user_admin">Administrador del grupo</label>
        </FloatLabel>
        <Button type="submit" label="Crear" class="w-full" />
      </form>
    </div>
  </article>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});

const name = ref("");
const description = ref("");
const changueAdmin = ref(false)
const canChangue = ref(false);

const user = ref({
  label: "Flavio",
  value: "325235-235235-23523523"
});

const users = ref([
  { label: "Flavio", value: "325235-235235-23523523" }
]);

function listenEventCheckbox() {
  changueAdmin.value = canChangue.value;

}
</script>

<style></style>
