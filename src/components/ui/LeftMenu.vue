<template>
  <div class="left-menu bg-primary">
    <h3 class="left-menu__title">StormLearn</h3>
    <ul class="left-menu__list">
      <li
        v-for="menuItem in MenuLayoutConfig"
        :key="menuItem.title"
        class="left-menu__menu-item"
        :class="{'left-menu__menu-item--active': menuItem.active}"
      >
        {{ menuItem.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {MenuLayoutConfig} from "@/shared/lib/helpers/menu/menu-layout";
</script>

<style lang="scss" scoped>
.left-menu {
  width: 200px;
  height: 100vh;
  color: white;
  &__title {
    padding: 1rem 0;
    text-align: center;
  }
  &__list {
    list-style: none;
    padding: 0;
  }
  &__menu-item {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.25rem;
    &--active {
      background-color: #0149B4;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>