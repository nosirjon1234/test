<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
    <navbar v-if="$route.name != 'login'" />
    <RouterView/>
    <Footer v-if="$route.name != 'login'"/>

</template>

<style scoped>

</style>
                                                                                                                                                                                                                                                                                        