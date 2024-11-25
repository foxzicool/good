<template>
  <img class="th-icon" :src :alt="icon" >
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { icons } from './constants';

/**
 * @privateRemark
 * To add new icon:
 * 1. Add icon SVG to public/svg/
 * 2. Extend `icons` by the SVG filename
 */
type IconName = (typeof icons)[number];

type Props = {
  icon: IconName;
};

const { icon } = defineProps<Props>();
const src = computed<string>(() => `/svg/${icon}.svg`);
</script>

<style lang="css" scoped>
.th-icon {
  width: 24px;
  height: 24px;
}
</style>
