<template>
  <MyHeader></MyHeader>
  <RouterView></RouterView>
  <MyFooter></MyFooter>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import { RouterView } from "vue-router";
</script>