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
</div>
</template>

<script>
export default {
  name: "info_stu",
  data(){
    return{
      data:{}
    }

  },
  created(){
    this.$axios.get(
        '/stu/info',{
          params:{
            id: +sessionStorage.getItem('stu'),
          }
        }).then(res => {
      this.data = res.data.data
    })
  }
}
</script>

<style scoped>

</style>