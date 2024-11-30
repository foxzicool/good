<template>
  <v-card>
    <ThImage v-if="src" data-test="image" :src :alt="title" width="100%" height="auto" />
    <ThTypography variant="h3">{{ title }}</ThTypography>
    <slot />
  </v-card>
</template>

<script setup lang="ts">
import ThImage from './ThImage.vue';

type Props = {
  title: string;
  imgSrc?: string;
};

const { imgSrc: src, title } = defineProps<Props>();
</script>
