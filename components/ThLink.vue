<template>
  <NuxtLink :to :target="external ? '_blank' : null">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
type Props = {
  to: string;
  external?: boolean;
};

const { to, external } = defineProps<Props>();
</script>
