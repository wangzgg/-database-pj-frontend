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
          prop="access"
          label="入校权限">
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
export default {
  name: "access_da",
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
      this.$axios.get('/class/access',{
        params:{
          id: +sessionStorage.getItem('classAdmin')
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    },
  }
}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-pagination {
  float: right;
  margin-top: 22px;
}

</style>