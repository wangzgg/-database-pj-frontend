<template>
  <div>

    <el-form :inline="true" style="margin-top: 5px">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入要查询的n的天数"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getdays" ></el-button>
        </el-input>
      </el-form-item>
    </el-form>

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
      this.$axios.get('/class/stay',{
        params:{
          days:this.search,
          id: +sessionStorage.getItem('classAdmin')
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