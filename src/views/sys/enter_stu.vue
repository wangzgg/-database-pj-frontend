<template>

  <div>
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-button type="primary" @click="dialogVisible = true">新增申请</el-button>
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
          prop="pipeline_id"
          label="申请编号">
      </el-table-column>
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
          prop="status"
          label="处理状态"
          :filters="[{ text: '待审核', value: '待审核' },{ text: '已同意', value: '已同意' },{ text: '已拒绝', value: '已拒绝' }]"
          :filter-method="filterTag1"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.status === '待审核'" >待审核</el-tag>
          <el-tag size="small" v-else-if="scope.row.status === '已同意' " type="success">已同意</el-tag>
          <el-tag size="small" v-else-if="scope.row.status === '已拒绝' " type="danger">已拒绝</el-tag>
        </template>
      </el-table-column>

    </el-table>



    <!--新增对话框-->
    <el-dialog
        title="新增游戏"
        :visible.sync="dialogVisible"
        width="600px"
        :before-close="handleClose">

      <el-form :model="editForm" :rules="editFormRules" ref="editForm" label-width="100px" class="demo-editForm">

        <el-form-item label="学号" prop="stu_number" label-width="100px">
          <el-input v-model="editForm.stu_number" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="姓名" prop="stu_name" label-width="100px">
          <el-input v-model="editForm.stu_name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="进校原因" prop="return_school_reason" label-width="100px">
          <el-input type="textarea" v-model="editForm.return_school_reason" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="预计进校时间" prop="estimated_return_school_time" label-width="110px">
          <el-date-picker
              v-model="editForm.estimated_return_school_time"
              type="datetime"
              value-format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="七天内所到地" prop="location_of_seven_days" label-width="110px">
          <el-input v-model="editForm.location_of_seven_days" autocomplete="off"></el-input>
        </el-form-item>

<!--        <el-form-item label="离校日期" prop="departure_date" label-width="110px">-->
<!--          <el-date-picker-->
<!--              v-model="editForm.departure_date"-->
<!--              type="date"-->
<!--              placeholder="选择日期">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->

<!--        <el-form-item label="预计返校时间" prop="estimated_return_time" label-width="110px">-->
<!--          <el-date-picker-->
<!--              v-model="editForm.estimated_return_time"-->
<!--              type="date"-->
<!--              placeholder="选择日期">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->

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
  name: "enterApply_da",
  data() {
    return {
      editForm:{
        stu_number:'',
        stu_name:'',
        return_school_reason:'',
        estimated_return_school_time:'',
        location_of_seven_days:'',
      },
      editFormRules: {
        stu_number: [
          {required: true, message: '请输入学号', trigger: 'blur'}
        ],
        stu_name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        return_school_reason: [
          {required: true, message: '请输入进校原因', trigger: 'blur'}
        ],
        estimated_return_school_time: [
          {required: true, message: '请选择预计进校时间', trigger:'blur'}
        ],
        location_of_seven_days: [
          {required: true, message: '请输入七天内所到地', trigger: 'blur'}
        ],

      },
      dialogVisible:false,
      total:-1,
      search:'',
      tableData: [
      ],

    }
  },
  created(){
    this.getOrderList();

  },
  methods:{
    submitForm(formName) {
      this.editForm.stu_number= +this.editForm.stu_number;
      //上传表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/stu/enter/add' , this.editForm)
              .then(res => {
                if(res.data.code === 200) {
                  this.$message({
                    showClose: true,
                    message: '提交成功',
                    type: 'success',
                  });
                  this.getOrderList();
                  this.editForm={};
                }
                this.dialogVisible = false
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    filterTag1(value, row) {
      return row.status === value;
    },
    getOrderList() {
      this.$axios.get('/stu/enter',{
        params:{
          id: +sessionStorage.getItem('stu')
        }
      }).then(res => {
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