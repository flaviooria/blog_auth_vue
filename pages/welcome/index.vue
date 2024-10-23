<template>
  <div v-if="user" class="flex flex-col justify-center items-center my-3">
    <pre>{{ user }}</pre>
  </div>
</template>

<script lang="ts" setup>
import type { UserResponse } from "~/interfaces/auth";

definePageMeta({
  middleware: ["auth"],
  layout: "header",
});

const user = ref<UserResponse | null>();
const { currentUser } = useAuth();

onMounted(async () => {
  try {
    const { data, error } = await currentUser<UserResponse>("auth/me", {});

    if (error) {
      throw error;
    }

    user.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<style></style>
