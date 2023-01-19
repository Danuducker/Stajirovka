<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <img 
      :src="iteamImage" 
      class="w-[32rem] rounded-md object-cover aspect-video"
    >
    <button 
      class="mt-4 bg-indigo-500 rounded-md p-2 text-white shadow-md text-center" 
      @click="changePicture"
      >
      Новый чубарыч
    </button>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  let iteamImage = ref("https://chubarich.fvs.app/0.png");
  const changePicture = function() {
    let indexNumber=Math.floor(Math.random()*32);
    iteamImage.value = `https://chubarich.fvs.app/${indexNumber}.png`;
  }
</script>
