<template>
  <div>
      {{text}}
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Dtail',
    setup() {
        return {
            text: 123,
        };
    },
});
</script>

<style scoped lang="less">

</style>
