<template>
  <v-img :src :height :width :alt />
</template>

<script setup lang="ts">
type Props = {
  src: string;
  height: string | number;
  width: string | number;
  alt?: string;
};

const { src, height, width, alt = '' } = defineProps<Props>();
</script>
