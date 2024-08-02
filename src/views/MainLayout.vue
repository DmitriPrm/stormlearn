<template>
  <div class="layout">
    <left-menu/>
    <div class="layout__main">
      <top-bar/>
      <router-view/>
    </div>
  </div>
</template>

<script setup lang="ts">

import LeftMenu from "@/components/ui/LeftMenu.vue";
import TopBar from "@/components/ui/TopBar.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  &__main {
    width: 100%;
    background-color: #EFEFEF;
  }
}
</style>