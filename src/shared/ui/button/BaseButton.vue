<template>
  <el-button class="base-button" v-bind="props" @click="handleClick">
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
import type {RouteLocationRaw} from "vue-router";
import {useRouter} from "vue-router";

const router = useRouter();

const props = defineProps<{
  disabled?: boolean;
  to?: RouteLocationRaw
}>();

function handleClick() {
  if(props.to) {
    router.push(props.to);
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  margin: 0;
}
</style>