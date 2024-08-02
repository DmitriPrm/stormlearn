<template>
  <el-card class="base-card">
    <template #header v-if="$slots['header']">
      <slot name="header"></slot>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">

import { useSlots } from "vue";

const slots = useSlots();
// TODO Header and footer slots

</script>

<style lang="scss" scoped>
.base-card {
  border-radius: 0.5rem;
}
</style>