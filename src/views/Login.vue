<template>


  <el-row type="flex" class="row-bg" justify="center">

    <el-col :xl="6" :lg="7">
      <div class="login-form">
        <h2>欢迎登录游戏电子商城</h2>
        <el-image
            style="width: 180px; height: 180px"
            :src="require('@/assets/logo.png')"
        ></el-image>
        <p>

        </p>
      </div>
    </el-col>

    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>

    <el-col :xl="6" :lg="7">
      <el-form label-position="right" :rules="rules" label-width="80px" :model="loginForm" ref="loginForm">

        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username" @input="change($event)"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input type="password" v-model="loginForm.password" @input="change($event)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="getPass">注册</el-button>
          <el-button @click="goBack">返回首页</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-row>


</template>

<script>
import qs from 'qs'
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],


      },
    }
  },

  methods: {
    goBack() {
      console.log('go back');
      this.$router.push('/home');
    },
    //强制刷新解决input无法输入问题
    change(){
      this.$forceUpdate();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let psd = this.$md5(this.loginForm.password);
          this.loginForm.password=psd;
          this.$axios.get('/user/login', {params:{

            username:this.loginForm.username,
            password:this.loginForm.password,
            }}).then(res => {
            //返回的信息
            console.log(res.status)

            if(res.data.status === 200) {
              if(res.status === 200) {
                this.$message({
                  showClose: true,
                  message: '登录成功',
                  type: 'success',
                });
              }
              // 将用户的id和身份存到store里
              this.$store.commit('set_userId',res.data.userId);
              this.$store.commit('set_role',res.data.role);
              //判断身份
              if(res.data.role ===0){
                this.$router.push("/home1");
              }else{
                this.$router.push("/userManage");
              }
            }
            else {

              alert ('error submit!!');
              return false;
            }
          })
        }
        else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getPass() {
      this.$router.push("/register");
    },
  },
}
</script>

<style scoped>
.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
.el-row {
  height: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
/*分割线*/
.el-divider {
  height: 200px;
}
.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}
</style>