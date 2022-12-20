<template>
  <div>
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入学号搜索"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <!--    表格-->
    <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search || data.stu_number === +search)"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
    >

      <el-table-column
          prop="stu_number"
          label="学号">
      </el-table-column>

      <el-table-column
          prop="stu_name"
          label="姓名">
      </el-table-column>
      <el-table-column
          prop="leave_time"
          label="过去一年离校时间">
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
export default {
  name: "leaveTime_da",
  data() {
    return {
      search:'',
      tableData: [
      ],

    }
  },
  created(){
    this.getGameList();
  },
  methods:{
    getGameList() {
      this.$axios.get('/department/leave/time',{
        params:{
          id: +sessionStorage.getItem('department')
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    },
  }
}
</script>

<style scoped>

</style>