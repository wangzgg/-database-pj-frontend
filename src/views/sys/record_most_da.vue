<template>
  <div>
    <el-form :inline="true" style="margin-top: 5px">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入要查询的天数"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getAll" ></el-button>
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
          prop="department_name"
          label="学院"
      >
      </el-table-column>
      <el-table-column
          prop="campus_name"
          label="出入最多的校区">
      </el-table-column>

    </el-table>


  </div>
</template>

<script>
export default {
  name: "record_most_root",
  data() {
    return {
      search:'',
      tableData: [
      ],

    }
  },

  methods:{

    getAll(){
      this.$axios.get(
          '/department/record/most',{
            params:{
              id: +sessionStorage.getItem('department'),
              days:this.search
            }
          }).then(res => {
            this.tableData=[];
        this.tableData.push(res.data.data);
      })
    }
  }
}
</script>

<style scoped>

</style>