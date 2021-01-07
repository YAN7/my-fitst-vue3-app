<template>
  <router-view v-slot="{ Component }">
  <transition name="fold-left">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<script lang='ts'>
export default {
    name: 'App',
};
</script>
