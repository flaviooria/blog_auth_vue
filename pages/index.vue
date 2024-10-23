<template>
  <section class="flex items-center justify-center w-full h-full">
    <FormSignInOrUp type="signin" />
  </section>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["already-auth"],
});
</script>

<style></style>
