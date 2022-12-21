<template>

  <div>

    <el-row>
      <el-col :span="8">
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
      </el-col>
      <el-col :span="8">
        <el-form :inline="true" style="margin-top: 5px">
            <el-form-item>
              <el-button type="primary" @click="dialogVisible = true">填写健康日报</el-button>
            </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <!--填写对话框-->
    <el-dialog
        title="填写健康日报"
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


        <el-form-item>
          <el-button type="primary" @click="submitForm('editForm')">提交</el-button>
          <el-button @click="resetForm('editForm')">重置</el-button>
        </el-form-item>
      </el-form>



    </el-dialog>



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
      dialogVisible:false,
      search:'',
      search1:'',
      tableData: [
      ],
      editForm:{
        stu_number:'',
        stu_name:'',
        leave_reason:'',
        destination:'',
        departure_date:'',
        estimated_return_time:''
      },
      editFormRules: {
        stu_number: [
          {required: true, message: '请输入学号', trigger: 'blur'}
        ],
        stu_name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        leave_reason: [
          {required: true, message: '请输入离校原因', trigger: 'blur'}
        ],
        destination: [
          {required: true, message: '请输入目的地', trigger:'blur'}
        ],
        departure_date: [
          {required: true, message: '请选择离校日期', trigger: 'blur'}
        ],
        estimated_return_time: [
          {required: true, message: '请选择预计返校时间', trigger: 'blur'}
        ],

      },
    }
  },

  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
      this.editForm = {}
    },
    handleClose() {
      this.resetForm('editForm')
    },
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