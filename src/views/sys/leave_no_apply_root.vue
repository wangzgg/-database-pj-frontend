<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe>

      <el-table-column
          prop="stu_number"
          label="学号">
      </el-table-column>

      <el-table-column
          prop="stu_name"
          label="姓名">
      </el-table-column>

      <el-table-column
          prop="phone_number"
          label="电话">
      </el-table-column>

      <el-table-column
          prop="email"
          label="邮箱">
      </el-table-column>

      <el-table-column
          prop="address"
          label="住址">
      </el-table-column>

      <el-table-column
          prop="family_address"
          label="家庭地址">
      </el-table-column>

      <el-table-column
          prop="id_card_type"
          label="证件类型">
      </el-table-column>

      <el-table-column
          prop="id_card_number"
          label="证件号码">
      </el-table-column>

    </el-table>
    <div style="text-align: center" v-if="this.total !== -1">共{{this.total}}条</div>
  </div>
</template>

<script>
export default {
  name: "leave_no_apply_root",
  data() {
    return {
      total:-1,
      tableData: [
      ],
    }
  },
  created() {
    this.getList()
  },
  methods:{
    getList(){
      this.$axios.get('/root/leave/noApply').then(res => {
        this.tableData = res.data.data.list
        this.total=res.data.data.total
      })
    }
  }
}
</script>

<style scoped>

</style>