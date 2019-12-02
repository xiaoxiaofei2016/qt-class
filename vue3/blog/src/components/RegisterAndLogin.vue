<template>
  <el-dialog title="登录" :visible.sync="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password"></el-input>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) visible!: boolean;

  private params: any = {
    email: '',
    password: ''
  }
  get dialogVisible(): boolean {
    // 计算属性
    return this.visible;
  }
  @Emit() // 往父组件抛出方法,返回值作为参数
  private cancel(): boolean {
    return false;
  }
}
</script>

<style scoped>
</style>
