<template>
  <div>
    <input type="text" name="name" v-model="name"/>
    <input type="password" v-model="password"/>
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {

    }
  }
}
</script>

<style scoped>

</style>
