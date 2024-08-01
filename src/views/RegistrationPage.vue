<template>
  <div class="container page">
    <h1 class="page__title">Регистрация</h1>
    <base-card>
      <form class="card-wrap">
        <el-input placeholder="Логин"/>
        <el-input placeholder="Пароль"/>
        <base-button>Далее</base-button>
        <p>Забыли пароль? <a>Восстановить пароль</a></p>
      </form>
    </base-card>
  </div>
</template>

<script setup lang="ts">

import BaseCard from "@/shared/ui/card/BaseCard.vue";
import BaseButton from "@/shared/ui/button/BaseButton.vue";
</script>

<style lang="scss" scoped>
.page {
  &__title {
    display: flex;
    align-items: center;
    height: 150px;
  }
}
.card-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 500px;
  margin: auto;
}
</style>