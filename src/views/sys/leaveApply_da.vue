<template>

  <div>
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="查询过去n天尚未批准的申请"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getdays"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
<div style="text-align: center" v-if="this.total !== -1">共{{this.total}}条</div>
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
          prop="leave_reason"
          label="出校原因">
      </el-table-column>

      <el-table-column
          prop="destination"
          label="目的地">
      </el-table-column>

      <el-table-column
          prop="departure_date"
          label="计划离校时间">
      </el-table-column>

      <el-table-column
          prop="estimated_return_time"
          label="预计返校时间">
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
          prop="status"
          label="处理状态"
          :filters="[{ text: '待审核', value: '待审核' },{ text: '已同意', value: '已同意' },{ text: '已拒绝', value: '已拒绝' }]"
          :filter-method="filterTag1"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.status === '待审核'" >待审核</el-tag>
          <el-button v-if="scope.row.status === '待审核'" type="text" size="small" class="button" @click="check(scope.row.pipeline_id)">去审核>></el-button>
          <el-tag size="small" v-else-if="scope.row.status === '已同意' " type="success">已同意</el-tag>
          <el-tag size="small" v-else-if="scope.row.status === '已拒绝' " type="danger">已拒绝</el-tag>
        </template>
      </el-table-column>

    </el-table>


    <!--对话框-->
    <el-dialog
        title="审核出入校申请"
        :visible.sync="dialogVisible"
        width="600px"
        :before-close="handleClose">

      <el-form :model="editForm" :rules="editFormRules" ref="editForm" label-width="100px" class="demo-editForm">

        <el-form-item label="处理意见" prop="suggestion" label-width="100px">
          <el-select v-model="editForm.suggestion" placeholder="选择处理意见">
            <el-option label="同意" value="同意"></el-option>
            <el-option label="拒绝" value="拒绝"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="理由" prop="reason" label-width="100px">
          <el-input v-model="editForm.reason" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('editForm')">提交</el-button>
          <el-button @click="resetForm('editForm')">重置</el-button>
        </el-form-item>
      </el-form>



    </el-dialog>


  </div>
</template>

<script>
export default {
  name: "leaveApply_da",
  data() {
    return {
      dialogVisible:false,
      total:-1,
      search:'',
      tableData: [
      ],
      editForm:{
        pipeline_id:0,
        id: +sessionStorage.getItem('department'),
        suggestion:'',
        reason:''
      },
      editFormRules: {
        suggestion: [
          {required: true, message: '请选择处理意见', trigger: 'blur'}
        ],
      },
    }
  },
  created(){
    this.getOrderList();

  },
  methods:{
    submitForm(formName) {
      if(this.editForm.suggestion === '拒绝' && this.editForm.reason===''){
        this.$message({
          showClose: true,
          message: '请填写理由',
          type: 'error',
        });
        return false;
      }
      //上传表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/department/handle' , this.editForm)
              .then(res => {
                if(res.data.code === 200) {
                  this.$message({
                    showClose: true,
                    message: '审核成功',
                    type: 'success',
                  });
                  this.dialogVisible = false;
                  this.editForm.suggestion='';
                  this.editForm.reason='';
                }
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    check(id){
      this.dialogVisible=true;
      this.editForm.pipeline_id=id;
    },
    getdays(){
      this.$axios.get('/department/leave/noPass',{
        params:{
          id: +sessionStorage.getItem('department'),
          days:this.search
        }
      }).then(res => {
        this.tableData = res.data.data.list
        this.total=res.data.data.total
      })
    },
    filterTag1(value, row) {
      return row.status === value;
    },
    getOrderList() {
      this.$axios.get('/department/leave',{
        params:{
          id: +sessionStorage.getItem('department')
        }}).then(res => {
        this.tableData = res.data.data
      })
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.$axios.post('/user/add' , this.editForm)
    //           .then(res => {
    //
    //             if(res.data.status === 200) {
    //               this.$message({
    //                 showClose: true,
    //                 message: '恭喜你，操作成功',
    //                 type: 'success',
    //                 onClose: () => {
    //                   this.getUserList()
    //                 }
    //               });
    //             }
    //
    //             this.dialogVisible = false
    //           })
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
      this.editForm.suggestion='';
      this.editForm.reason='';
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