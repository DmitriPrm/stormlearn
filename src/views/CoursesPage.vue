<template>
  <div class="courses container">
    <h1 class="courses__title">Ваши курсы</h1>
    <div class="cards-layout">
      <course-info-card
          v-for="card in infoPlug"
          :key="card.title"
          v-bind="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CourseInfoCard from "@/components/ui/CourseInfoCard.vue";

const infoPlug = [
  {
  title: "Математика",
  availableTasks: 5,
  averageGrade: 4.5,
  expiredTasks: 3,
  },
  {
    title: "Математика",
    availableTasks: 5,
    averageGrade: 4.5,
    expiredTasks: 3,
  },
  {
    title: "Математика",
    availableTasks: 5,
    averageGrade: 4.5,
    expiredTasks: 3,
  },
  {
    title: "Математика",
    availableTasks: 5,
    averageGrade: 4.5,
    expiredTasks: 3,
  },
  {
    title: "Математика",
    availableTasks: 5,
    averageGrade: 4.5,
    expiredTasks: 3,
  },
];
</script>

<style lang="scss" scoped>
.courses {
  &__title {
    margin-bottom: 2rem;
  }
}
.cards-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  @media(max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 680px) {
    grid-template-columns: 1fr;
  }
}
</style>