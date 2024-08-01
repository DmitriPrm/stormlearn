<template>
  <div class="page-layout">
    <header class="about-header bg-primary">
      <div class="about-header__wrap container">
        <h2 class="about-header__title"><a href="./">StormLearn</a></h2>
      </div>
    </header>
    <main class="container">
      <div class="top-actions">
        <base-button :to="appRoutes.REGISTRATION.path">Войти</base-button>
        <base-button :to="appRoutes.REGISTRATION.path">Регистрация</base-button>
        <el-dropdown >
      <span class="el-dropdown-link">
        Язык: Русский
      </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Русский</el-dropdown-item>
              <el-dropdown-item>Английский</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="header-info">
        <h1 class="header-info__header">StormLearn</h1>
        <p class="header-info__text">Учиться легко!</p>
        <base-button :to="appRoutes.REGISTRATION.path">Начать</base-button>
      </div>

      <div class="info-block">
        <div class="info-block__img">
          <img src="/src/assets/views/about-1.jpg">
        </div>
        <div class="info-block__info">
          <h2>Легко</h2>
          <div class="info-block__separator"/>
          <p class="info-block__text">Учиться будет легко, если все, что требуется - это выход в интернет</p>
        </div>
      </div>
      <div class="info-block">
        <div class="info-block__img">
          <img src="/src/assets/views/about-2.jpg">
        </div>
        <div class="info-block__info">
          <h2>Интересно</h2>
          <div class="info-block__separator"/>
          <p class="info-block__text">Подобранная для вас программа сделает процесс очень увлекательным и интересным</p>
        </div>
      </div>
      <div class="info-block">
        <div class="info-block__img">
          <img src="/src/assets/views/about-3.jpg">
        </div>
        <div class="info-block__info">
          <h2>Интерактивно</h2>
          <div class="info-block__separator"/>
          <p class="info-block__text">Задания представлены в электронном виде, что позволит вам не пользоваться ручкой и бумагой</p>
        </div>
      </div>

      <div class="start-today">
        <h2 class="start-today__title">Начните учиться уже сегодня!</h2>
        <base-button :to="appRoutes.REGISTRATION.path">Попробовать</base-button>
      </div>
    </main>
    <footer class="about-footer bg-secondary">
      <div class="container about-footer__container">
        <p class="about-footer__text"> StormLearn, 2024</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

import BaseButton from "@/shared/ui/button/BaseButton.vue";
import {appRoutes} from "@/shared/lib/helpers/navigation/routes";
</script>

<style lang="scss" scoped>
.about-header {
  height: 75px;
  width: 100%;
  &__wrap {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  &__title {
    a {
      color: white;
      text-decoration: none;
    }
  }
}
.about-footer {
  height: 75px;
  width: 100%;
  &__text {
    color: white;
  }
  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }
}
.top-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;
  margin-right: 3rem;
  gap: 1rem;
  @media(max-width: 576px) {
    margin-right: 0;
    justify-content: center;
  }
}
.header-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 650px;
  &__header {
    font-size: 4rem;
  }
  &__text {
    font-size: 1.5rem;
  }
}

.info-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.5rem;
  gap: 1.5rem;
  @media(max-width: 576px) {
    flex-direction: column-reverse !important;
    gap: 1rem;
  }
  &:nth-child(2n) {
    flex-direction: row-reverse;
  }
  &__img {
    flex: 1 1;
    max-width: 600px;
    height: 330px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.75rem;
      object-fit: cover;
    }
  }
  &__info {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  &__separator {
    width: 80px;
    height: 1px;
    background-color: black;
  }
  &__text {
    max-width: 360px;
  }
}
.start-today {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 10rem 0;
  &__title {
    font-size: 48px;
  }
}
</style>