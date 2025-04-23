<script setup>
//icons
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-center items-center my-4">
    <div
      class="w-full p-6 rounded-lg shadow-lg hover:bg-gray-400 ease-in-out transform hover:scale-102 transition-shadow duration-300"
    >
      <div class="flex items-center justify-between gap-3">
        <!-- icono -->
        <Icon :icon="icon" class="w-10 h-10" />
        <!-- name y link -->
        <div class="flex flex-1 justify-between items-center">
          <span class="text-lg font-bold">
            {{ name }}
          </span>
          <a :href="link" target="_blank" class="ml-4 text-secondary-500 hover:text-secondary-600 flex items-center gap-1">
            Ver certificado
            <Icon icon="heroicons:arrow-top-right-on-square-20-solid" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
