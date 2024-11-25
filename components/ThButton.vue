<template>
  <v-btn>
    {{ label }}
    <ThIcon v-if="icon" :icon />
  </v-btn>
</template>

<script setup lang="ts">
import ThIcon, { type icons } from './icon';

type Props = {
  label: string;
  icon?: (typeof icons)[number];
};

const { label, icon } = defineProps<Props>();
</script>
