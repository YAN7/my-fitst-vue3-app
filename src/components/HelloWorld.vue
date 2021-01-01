<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <div class="box">
    <div>hello</div>
    <div>world</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      msg: 123123,
    },
  },
};

</script>

<style lang="less" scoped>
h1 {
  color : green;
}
.box {
  display: flex;
}
</style>
