<template>
  <div id="app">
    <TopTabbar></TopTabbar>
    <HeaderTabbar></HeaderTabbar>
    <router-view/>
    <FooterTabbar></FooterTabbar>
  </div>
</template>

<script>
import TopTabbar from "@/components/TopTabbar";
import HeaderTabbar from "@/components/HeaderTabbar";
import FooterTabbar from "@/components/FooterTabbar";

export default {
  components: {
    TopTabbar,
    HeaderTabbar,
    FooterTabbar
  }
};
</script>

<style>
</style>
