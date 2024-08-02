<template>
  <base-card class="info-card">
    <template #header v-if="$slots['header']">
      <slot name="header"></slot>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </base-card>
</template>

<script setup lang="ts">

import BaseCard from "@/shared/ui/card/BaseCard.vue";
</script>

<style lang="scss" scoped>
.info-card {
  max-width: 300px;
  height: 250px;
}
</style>