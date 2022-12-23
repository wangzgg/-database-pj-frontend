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
              <el-button type="primary" @click="fill">填写健康日报</el-button>
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

        <el-form-item label="体温" prop="temperature" label-width="100px">
          <el-input v-model="editForm.temperature" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="位置" prop="location" label-width="100px">
          <el-input v-model="editForm.location" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="其他信息" prop="other_message" label-width="100px">
          <el-input type="textarea" v-model="editForm.other_message" autocomplete="off"></el-input>
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
          prop="report_time"
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
        date:'',
        temperature:'',
        location:'',
        time:'',
        other_message:''
      },
      editFormRules: {
        stu_number: [
          {required: true, message: '请输入学号', trigger: 'blur'}
        ],
        stu_name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        temperature: [
          {required: true, message: '请输入体温', trigger:'blur'}
        ],
        location: [
          {required: true, message: '请输入位置', trigger: 'blur'}
        ],


      },
    }
  },

  methods:{
    submitForm(formName) {
      var myDate=new Date();
      this.editForm.date=myDate.toLocaleDateString(); //获取当前日期
      this.editForm.time=myDate.toLocaleTimeString(); //获取当前时间
      this.editForm.stu_number= +this.editForm.stu_number;
      //上传表单
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/stu/health/add' , this.editForm)
              .then(res => {
                if(res.data.code === 200) {
                  this.$message({
                    showClose: true,
                    message: '提交成功',
                    type: 'success',
                  });
                  this.dialogVisible = false
                  this.editForm.location='';
                  this.editForm.temperature='';
                  this.editForm.other_message='';
                }
              })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    fill(){
      this.dialogVisible = true;
      this.$axios.get(
          '/stu/info',{
            params:{
              id: +sessionStorage.getItem('stu'),
            }
          }).then(res => {
        this.editForm.stu_name = res.data.data.stu_name
        this.editForm.stu_number = res.data.data.stu_number
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
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