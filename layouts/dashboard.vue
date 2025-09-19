<template>
  <div class="flex flex-col min-h-screen m-2 gap-2">
    <Header />
    <main class="flex gap-2">
      <aside class="flex min-h-screen bg-secondary w-[250px] rounded-md">
        <ul class="w-full flex flex-col gap-1 p-1">
          <li>
            <NuxtLink to="/homehold"
              class="w-full flex items-center justify-between text-[16px] cursor-pointer p-3 mt-1 bg-[var(--secondary-color-hover)] transition-colors duration-300 rounded-lg hover:bg-primary hover:font-semibold">
              Hogar
              <i class="pi pi-home text-[24px]"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-full flex items-center justify-between text-[16px] cursor-pointer p-3 mt-1 bg-[var(--secondary-color-hover)] transition-colors duration-300 rounded-lg hover:bg-primary hover:font-semibold">
              Lista de compras
              <i class="pi pi-shopping-bag text-[24px]"></i>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="w-full flex items-center justify-between text-[16px] cursor-pointer p-3 mt-1 bg-[var(--secondary-color-hover)] transition-colors duration-300 rounded-lg hover:bg-primary hover:font-semibold">
              Lista de tareas
              <i class="pi pi-list-check text-[24px]"></i>
            </NuxtLink>
          </li>
        </ul>
      </aside>
      <section class="w-full bg-secondary rounded-md p-3">
        <slot />
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
const visible = ref(true);
</script>

<style></style>
