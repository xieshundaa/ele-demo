<template>
  <div class="login">
    <el-row>
      <el-col :span="6" :offset="6">
        <div class="login-container">
          <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px">
            <el-form-item label="昵称" prop="username">
              <el-input type="text" v-model.trim="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="loginForm.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="remenberMe">
              <el-checkbox label="记住密码" v-model="loginForm.remenberMe"></el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%;">登录</el-button>
              <!--<el-button @click="resetForm('loginForm')">重置</el-button>-->
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'));
        } else {
          callback();
        }
        // setTimeout(() => {
        //   if (!Number.isInteger(value)) {
        //     callback(new Error('请输入数字值'));
        //   } else {
        //     if (value < 18) {
        //       callback(new Error('必须年满18岁'));
        //     } else {
        //       callback();
        //     }
        //   }
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.loginForm.checkPass !== '') {
            this.$refs.loginForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.loginForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          pass: '',
          checkPass: '',
          username: '',
          remenberMe: false
        },
        loginRules: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          username: [
            {validator: checkUser, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '登陆中...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
              this.$router.push('/workspace');
            }, 1000);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // }
    }
  };
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    background: #f7f7f7;
    .login-container {
      width: 500px;
      margin-top: 40%;
      padding: 30px;
      color: #fff;
    }
  }
</style>
