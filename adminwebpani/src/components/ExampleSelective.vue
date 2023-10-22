<!-- Directivas selectivas -->
<template>
<!-- Directiva v-show -->
<!-- <h2 v-show="loteria == 2" >Es la mayor</h2>  
<h2 v-show="loteria != 2" >Es la menor</h2>   -->
<!-- Directiva if-else -->
<h2 v-if="loteria == 2" >Es la mayor</h2>  
<h2 v-else>Es la menor</h2>  

</template>
<script lang="ts" setup>
   let loteria = 2;
</script>

<style scoped>
</style>


