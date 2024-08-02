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
        <router-link class="left-menu__link" :to="menuItem.path">{{ menuItem.title }}</router-link>
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
  &__link {
    display: block;
    width: 100%;
    height: 100%;
  }
  &__menu-item {
    text-align: center;
    width: 100%;
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 1.25rem;
    a {
      color: white;
      text-decoration: none;
    }
    &--active {
      background-color: #0149B4;
    }
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>