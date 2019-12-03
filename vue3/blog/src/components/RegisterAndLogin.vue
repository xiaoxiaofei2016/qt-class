<template>
  <el-dialog title="登录" :visible.sync="dialogVisible" @close="cancel">
    <el-form label-width="80px">
      <el-form-item label="邮箱">
        <el-input v-model="params.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="params.password" placeholder="密码" ></el-input>
      </el-form-item>
      <el-formItem v-if="handleFlag === 'register'" label="昵称" >
        <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="手机" >
        <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
      </el-formItem>
      <el-formItem v-if="handleFlag === 'register'" label="简介" >
        <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <div class="dialog-footer" slot="footer">
      <el-button type="success" @click="handleOAuto">github 授权登录</el-button>
      <el-button type="primary" @click="handleOK" v-if="handleFlag === 'register'">注册</el-button>
      <el-button type="primary" @click="handleOK" v-else>登录</el-button>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component
export default class RegisterAndLogin extends Vue {
  @Prop({ default: false }) private visible!: boolean;
  @Prop({ default: '' }) private handleFlag!: string;
  private params: any = {
    email: "",
    password: "",
    name: "",
    phone: "",
    desc: ""
  };
  get dialogVisible(): boolean {
    // 计算属性
    return this.visible;
  }

  private handleOAuto(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name: this.$route.name,
      query: this.$route.query
    };
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory);
    window.location.href =
      "https://github.com/login/oauth/authorize?client_id=3bc6f04dde8893c629a7";
  }

  private handleOK(): void {
    const reg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$");
    if (!reg.test(this.params.email)) {
      this.$message.error("请输入正确的邮箱格式");
    } else {
      if (!this.params.password) {
        this.$message.error("密码不能为空");
      }
    }
    // 登录操作
    this.submit()
  }
  private async submit(): Promise<void> {
    let data: any = '';
    if (this.handleFlag === 'register') {
      data = await this.$https.post(this.urls.register, this.params)
    } else {
      data = await this.$https.post(this.urls.login, this.params)
    }

  }

  @Emit() // 往父组件抛出方法,返回值作为参数
  private cancel(): boolean {
    return false;
  }
}
</script>

<style scoped>
</style>
