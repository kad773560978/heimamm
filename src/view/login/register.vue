<template>
  <el-dialog :visible.sync="outerVisible">
    <div slot="title" class="titles">用户注册</div>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="头像" :hide-required-asterisk="true">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item label="昵称" prop="name" :hide-required-asterisk="true">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" :hide-required-asterisk="true"></el-input>
      </el-form-item>

      <el-form-item label="手机" prop="phone">
        <el-input v-model="ruleForm.phone" :hide-required-asterisk="true"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item label="图形码" prop="imgCode">
        <el-row>
          <el-col :span="16">
            <el-input v-model="ruleForm.imgCode"></el-input>
          </el-col>
          <el-col :span="6">
            <img src="@/assets/img/10121447.png" alt class="keyt" />
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="验证码" prop="verCode">
        <el-row>
          <el-col :span="16">
             <el-input v-model="ruleForm.verCode"></el-input>
          </el-col>
          <el-col :span="6">
            <el-button class="keys">获取用户验证码</el-button>
          </el-col>
        </el-row>

       
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="outerVisible = !outerVisible">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      outerVisible: false,
      imageUrl: "",
      ruleForm: {
        head: "",
        name: "",
        email: "",
        phone: "",
        password: "",
        imgCode: "",
        verCode: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        phone: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        password: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],

        imgCode: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],

        verCode: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>


// scoped 是用来 防止全局样式污染的 , 比如这里面的样式 导入到全局后,有同名的就很容易冲突
// 这里有个注意点,因为 element 插件 里面的标签有一些是隐藏的 , scoped只能隔绝看得到的
// 标签和 有class的 标签 , 
// 所以在这里 有2 种 处理方法:
// 1, 把隐藏的标签提取出来,重新弄一个style样式表 , 反正这里面可以无限加样式

// 2, 给最大的父盒子 设置 class 类名, 然后less 样式里面 套用父子关系,这样不会乱



<style lang='less' >
.titles {
  width: 100%;
  height: 53px;
  text-align: center;
  line-height: 53px;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );

  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(254, 254, 254, 1);
}
.el-dialog__header {
  padding: 0;
}
.el-dialog {
  border-radius: 6px;
  overflow: hidden;
}

//用户头像
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.keyt,.keys {
  width: 100%;
  height: 40px;
  margin-left: 30px;
}

.el-upload{
   text-align: center;
}
</style>