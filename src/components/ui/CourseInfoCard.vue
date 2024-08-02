<template>
  <base-info-card>
    <template #header>
      <h5>{{ title }}</h5>
    </template>
    <div class="info-cards">
      <base-card
          v-for="card in cardsInfo"
          :key="card.title"
          :style="{'background-color': card.color}"
      >
        <div class="card-info">
          <p>{{ card.title }}</p>
          <span>{{ card.value }}</span>
        </div>
      </base-card>
    </div>
  </base-info-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import BaseInfoCard from "@/shared/ui/info-card/BaseInfoCard.vue";
import BaseCard from "@/shared/ui/card/BaseCard.vue";

const props = defineProps<{
  title: string;
  averageGrade: number;
  availableTasks: number;
  expiredTasks: number;
}>();

const cardsInfo = computed(() => ([
  {
    title: "Средний балл",
    value: props.availableTasks,
    color: "#198754",
  },
  {
    title: "Доступно заданий",
    value: props.availableTasks,
    color: "#0D6EFD",
  },
  {
    title: "Просроченных заданий",
    value: props.expiredTasks,
    color: "#DC3545",
  }
]));
</script>

<style lang="scss" scoped>
:deep(.el-card__body) {
  padding: 0.7rem 0.55rem;
}
:deep(.el-card__header) {
  padding: 0.75rem 1rem;
}
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.35rem;
}
.card-info {
  display: flex;
  justify-content: space-between;
  color: white;
  p {
    margin-bottom: 0;
  }
}
</style>