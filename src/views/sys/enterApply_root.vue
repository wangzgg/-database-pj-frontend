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
          prop="return_school_reason"
          label="入校原因">
      </el-table-column>

      <el-table-column
          prop="estimated_return_school_time"
          label="预计返校时间">
      </el-table-column>

      <el-table-column
          prop="location_of_seven_days"
          label="七天内所到地">
      </el-table-column>

      <el-table-column
          prop="handlers"
          label="处理人">
      </el-table-column>

      <el-table-column
          prop="handle_time"
          label="处理时间">
      </el-table-column>

      <el-table-column
          prop="suggestion"
          label="处理意见">
      </el-table-column>

      <el-table-column
          prop="handle_reason"
          label="理由">
      </el-table-column>

      <el-table-column
          prop="final_suggestion"
          label="最终意见">
      </el-table-column>

      <el-table-column
          prop="handle_status"
          label="处理状态"
          :filters="[{ text: '待审核', value: 0 },{ text: '已同意', value: 1 },{ text: '已拒绝', value: 2 }]"
          :filter-method="filterTag1"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.handle_status === 0" >待审核</el-tag>
          <el-tag size="small" v-else-if="scope.row.handle_status === 1" type="success">已同意</el-tag>
          <el-tag size="small" v-else-if="scope.row.handle_status === 2" type="danger">已拒绝</el-tag>
        </template>
      </el-table-column>

    </el-table>





  </div>
</template>

<script>
export default {
  name: "enterApply_root",
  data() {
    return {
      search:'',
      tableData: [
      ],

    }
  },
  created(){
    this.getOrderList();

  },
  methods:{
    filterTag1(value, row) {
      return row.handle_status === value;
    },
    getOrderList() {
      this.$axios.get('/root/enter').then(res => {
        this.tableData = res.data.data
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size=val;
      this.getOrderList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.current=val;
      this.getOrderList();
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