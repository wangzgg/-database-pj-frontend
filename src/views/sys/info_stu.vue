<template>
<div>
  <el-descriptions title="个人信息" direction="vertical" :column="4" border>
    <el-descriptions-item label="学号" :span="2">{{this.data.stu_number}}</el-descriptions-item>
    <el-descriptions-item label="姓名" :span="2">{{this.data.stu_name}}</el-descriptions-item>
    <el-descriptions-item label="手机号" :span="2">{{this.data.phone_number}}</el-descriptions-item>
    <el-descriptions-item label="邮箱" :span="2">{{this.data.email}}</el-descriptions-item>


    <el-descriptions-item label="住址" :span="2">{{this.data.address}}</el-descriptions-item>
    <el-descriptions-item label="家庭地址" :span="2">{{this.data.family_address}}</el-descriptions-item>
    <el-descriptions-item label="证件类型" :span="2">{{this.data.id_card_type}}</el-descriptions-item>
    <el-descriptions-item label="证件号码" :span="2">{{this.data.id_card_number}}</el-descriptions-item>
    <el-descriptions-item label="入校权限" :span="2">{{this.data.access}}</el-descriptions-item>
    <el-descriptions-item label="过去一年离校总时长" :span="2">{{this.data.leave_time}}</el-descriptions-item>
  </el-descriptions>
  <div style="text-align: center">
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-button type="primary" @click="dialogVisible = true">修改个人信息</el-button>
      </el-form-item>
    </el-form>
  </div>

  <!--编辑对话框-->
  <el-dialog
      title="修改个人信息"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="handleClose">

    <el-form :model="data" :rules="editFormRules" ref="editForm" label-width="100px" class="demo-editForm">

      <el-form-item label="手机号" prop="phone_number" label-width="100px">
        <el-input v-model="data.phone_number" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="邮箱" prop="email" label-width="100px">
        <el-input v-model="data.email" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="address" label-width="100px">
        <el-input v-model="data.address" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="家庭住址" prop="family_address" label-width="100px">
        <el-input v-model="data.family_address" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="证件类型" prop="id_card_type" label-width="100px">
        <el-input v-model="data.id_card_type" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="证件号码" prop="id_card_number" label-width="100px">
        <el-input v-model="data.id_card_number" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('editForm')">确认修改</el-button>
        <el-button @click="resetForm('editForm')">取消</el-button>
      </el-form-item>
    </el-form>



  </el-dialog>

</div>
</template>

<script>
export default {
  name: "info_stu",
  data(){
    return{
      dialogVisible:false,
      data:{},
      editFormRules: {
        phone_number: [
          {required: true, message: '请输入手机号', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'}
        ],
        address: [
          {required: true, message: '请输入住址', trigger: 'blur'}
        ],
        family_address: [
          {required: true, message: '请输入家庭地址', trigger:'blur'}
        ],
        id_card_type: [
          {required: true, message: '请选择证件类型', trigger: 'blur'}
        ],
        id_card_number: [
          {required: true, message: '请输入证件号码', trigger: 'blur'}
        ],

      },
    }

  },
  created(){
    this.getOrderList()
  },
  methods:{
    submitForm(formName) {
      //上传表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/stu/info/modify' , this.data)
              .then(res => {
                if(res.data.code === 200) {
                  this.$message({
                    showClose: true,
                    message: '修改成功',
                    type: 'success',
                  });
                  this.getOrderList();
                }
                this.dialogVisible = false
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getOrderList(){
      this.$axios.get(
          '/stu/info',{
            params:{
              id: +sessionStorage.getItem('stu'),
            }
          }).then(res => {
        this.data = res.data.data
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
      this.editForm = {}
    },
    handleClose() {
      this.resetForm('editForm')
    },
  }
}
</script>

<style scoped>

</style>