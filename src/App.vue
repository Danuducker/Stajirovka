<template>
  <nav class="flex justify-center items-center bg-blue-400 h-14">
    <router-link to = '/chub' class="mr-5">чубарыч</router-link>
    <router-link to = '/converter'>конвертер</router-link>
  </nav>
  
  <router-view></router-view> 
</template>

<style>
  a.router-link-active, li.router-link-active>a {
  border-radius: 7%;
  background-color: white;
  color: blue;
  padding: 5px;
}
</style>

<script setup>
  
</script>
