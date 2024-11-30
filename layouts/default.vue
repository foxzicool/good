<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import useGoogleAnalytics from '~/composables/useGoogleAnalytics';

const {
  public: { gaMeasurementId },
} = useRuntimeConfig();
useGoogleAnalytics(gaMeasurementId);
</script>
