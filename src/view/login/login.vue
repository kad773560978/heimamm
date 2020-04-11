<template>
  <div id="login">
    <div class="left">
      <div class="left_top">
        <img src="@/assets/img/login_logo.png" alt />
        <span class="titleName">黑马面面</span>
        <span class="titlel">|</span>
        <span class="titleName2">用户登录</span>
      </div>

      <div class="left_btn">
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item prop="name">
            <el-input v-model="form.name" prefix-icon="el-icon-user" placeholder="请输入手机号"></el-input>
          </el-form-item>

          <el-form-item prop="pass">
            <el-input
              v-model="form.pass"
              show-password
              prefix-icon="el-icon-lock"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>

          <el-form-item prop="yanz">
            <el-row>
              <el-col :span="18">
                <el-input prefix-icon="el-icon-key" v-model="form.yanz" placeholder="请输入验证码"></el-input>
              </el-col>
              <el-col :span="6">
                <img src="@/assets/img/10121447.png" alt class="keyt" />
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="form.checked">
              我已阅读并同意
              <el-link type="primary">用户协议</el-link>和
              <el-link type="primary">隐私条款</el-link>
            </el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" class="btn_primary">登录</el-button>
            <br />
            <el-button type="primary" class="btn_primary">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/img/login_banner_ele.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pass: "",
        yanz: "",
        type: "",
        checked: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "change" },
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "change" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        yanz: [
          { required: true, message: "请输入验证码", trigger: "change" },
        ]
      }
    };
  }
};
</script>

<style lang='less'>
#login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );

  .left {
    width: 478px;
    height: 550px;
    background: rgba(245, 245, 245, 1);
    padding: 48px 43px 0 43px;

    .left_top {
      line-height: 24px;
      .titleName {
        margin: 0 16px;
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .titlel {
        color: rgba(199, 199, 199, 1);
      }
      .titleName2 {
        margin: 0 16px;
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .left_btn {
      margin-top: 28px;
      .keyt {
        width: 100%;
        height: 40px;
      }
      .btn_primary {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
  .right {
  }
}
</style>