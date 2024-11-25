<template>
  <component :is="variant" :class="defaultClasses[variant]" :style="defaultStyles[variant]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type TypographyVariants = Extract<keyof HTMLElementTagNameMap, 'h1' | 'h2' | 'h3' | 'p'>;
const { variant } = defineProps<{
  /** Typography variant */
  variant: TypographyVariants;
}>();

const defaultClasses = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  p: 'text-body-1',
};

const defaultStyles = {
  h1: {},
  h2: {},
  h3: {},
  p: {},
};
</script>
