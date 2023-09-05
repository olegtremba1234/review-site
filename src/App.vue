<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const shouldHideHeader = route.meta.hideHeader || false;
const shouldHideFooter = route.meta.hideFooter || false;
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header v-if="!shouldHideHeader" />
    <router-view />
    <Footer v-if="!shouldHideFooter" />
  </div>
</template>
