<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <img 
        :src="linkGenerator" 
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
    import { ref, computed } from 'vue'
  
    
    
    const pictureNumber = (()=> Math.floor(Math.random()*32));
  
    const number = ref(pictureNumber());
  
    const linkGenerator = computed(() => `https://chubarich.fvs.app/${number.value}.png`
    );
  
    
  
    const changePicture = function() {
      number.value = pictureNumber(); 
    }
    
  </script>