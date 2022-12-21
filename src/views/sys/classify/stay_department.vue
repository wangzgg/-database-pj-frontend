<template>
  <div>
    <div style="text-align: center">
      <el-form :inline="true" style="margin-top:5px ">
        <el-form-item>
          <el-input
              v-model="search"
              placeholder="输入院系名称"
              align="right"
              height="80px">
          </el-input>
          <br>
          <el-input
              style="margin-top: 5px"
              v-model="search1"
              placeholder="输入要查询的天数"
              align="right"
              height="80px">
          </el-input>
        </el-form-item>
      </el-form>
      <div style="text-align: center">
        <el-button type="primary" @click.native="getdays" >查询</el-button>
      </div>
    </div>
    <br>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange">
      <el-table-column
          prop="stu_number"
          label="学号"
      >
      </el-table-column>
      <el-table-column
          prop="stu_name"
          label="姓名">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  name: "stay_department",
  data(){
    return{
      search:'',
      search1:'',
      tableData:[]
    }
  },
  methods:{
    getdays(){
      this.$axios.get('/root/stay/department',{
        params:{
          department_name:this.search,
          days:this.search1
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