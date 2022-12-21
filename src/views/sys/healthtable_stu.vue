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
        tooltip-effect="dark"
        border
        stripe
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="date"
          label="填写日期">
      </el-table-column>

      <el-table-column
          prop="temperature"
          label="体温">
      </el-table-column>

      <el-table-column
          prop="location"
          label="所在位置">
      </el-table-column>
      <el-table-column
          prop="time"
          label="填写时间">
      </el-table-column>
      <el-table-column
          prop="other_message"
          label="其他信息">
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
export default {
  name: "healthtable_ca",
  data() {
    return {
      search:'',
      search1:'',
      tableData: [
      ],

    }
  },

  methods:{

    getAll(){
      this.$axios.get(
          '/stu/health',{
        params:{
          id: +sessionStorage.getItem('stu'),
          days:this.search
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    }
  }
}
</script>

<style scoped>

.el-pagination {
  float: right;
  margin-top: 22px;
}

</style>