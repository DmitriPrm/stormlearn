<template>
  <el-card class="base-card">
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