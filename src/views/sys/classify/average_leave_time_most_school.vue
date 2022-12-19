<template>
  <div>
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="查询前n个"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getdays"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
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
          prop="average_leave_time"
          label="平均离校时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "average_leave_time_most_school",
  data() {
    return {
      search:'',
      tableData: [
      ],
    }
  },
  methods:{
    getdays(){
      this.$axios.get('/root/leave/most/school',{
        params:{
          num:this.search
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    }
  }
}
</script>

<style scoped>

</style>