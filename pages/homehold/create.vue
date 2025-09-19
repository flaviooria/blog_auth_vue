<template>
  <div class="w-[50%] mx-auto p-5">
    <form action="" class="flex flex-col gap-4">
      <h1 class="my-3">Crear grupo de hogar</h1>
      <FloatLabel>
        <InputText v-model="name" id="name" type="text" class="w-full mb-3" />
        <label for="name">Nombre: </label>
      </FloatLabel>
      <FloatLabel>
        <Textarea v-model="description" rows="3" cols="30" id="description" class="w-full mb-3" auto-resize />
        <label for="description">Descripción: </label>
      </FloatLabel>
      <Button type="submit" label="Crear" class="w-full" />
    </form>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
  layout: "dashboard",
});

const name = ref("");
const description = ref("");



</script>

<style></style>