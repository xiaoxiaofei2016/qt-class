<template>
  <div class="toast" v-show="visiable">
    <p class="toast-msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    visiable: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.toast-msg {
  text-align: center;
}
</style>
