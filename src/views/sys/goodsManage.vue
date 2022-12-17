<template>

  <div>
    <el-form :inline="true" style="margin-top:5px ">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入学号查询"
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
  name: "goodsManage",
  data() {
    return {
      search:'',
      fileList: [],
fileList1: [],
      forbiddenForm: {
        userId:'',
        status:''
      },

      total: 0,
      size: 100,
      current: 1,
      dialogVisible:false,
      dialogVisible1:false,
      editForm: {
        gameId:'',
        saleCount:'',
        gameName:'',
        price:'',
        gameImg:'',
        description:'',
        gameType:'',
      },
      editForm1: {
        gameId:'',
        saleCount:'',
        gameName:'',
        price:'',
        gameImg:'',
        description:'',
        gameType:'',
      },
      editFormRules: {
        saleCount: [
          {required: true, message: '请输入折扣', trigger: 'blur'}
        ],
        gameName: [
          {required: true, message: '请输入游戏名称', trigger: 'blur'}
        ],
        price: [
          {required: true, message: '请输入价格', trigger: 'blur'}
        ],
        gameType: [
          {required: true, message: '请输入游戏类型', trigger:'blur'}
        ],
        description: [
          {required: true, message: '请输入游戏描述', trigger: 'blur'}
        ],

      },
      editFormRules1: {
        saleCount: [
          {required: true, message: '请输入折扣', trigger: 'blur'}
        ],
        gameName: [
          {required: true, message: '请输入游戏名称', trigger: 'blur'}
        ],
        price: [
          {required: true, message: '请输入价格', trigger: 'blur'}
        ],
        gameType: [
          {required: true, message: '请输入游戏类型', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '请输入游戏描述', trigger: 'blur'}
        ],

      },

      tableData: [
      ],

    }
  },
  created(){
    this.getGameList();
  },
  methods:{
    filterTag(value, row) {
      return row.gameType === value;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    deleteGame(gameId){
      this.$axios.get('/game/delete/'+gameId).then(res => {
        if(res.data.status === 200){
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success',
            onClose: () => {
              this.getGameList()
            }
          });
        }
      })
    },
    editHandle(row){
    this.editForm1=row
      this.dialogVisible1 = true;
    },
    submitForm1(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$axios.post('/game/modify' , this.editForm1)
                .then(res => {

                  if(res.data.status === 200) {
                    this.$message({
                      showClose: true,
                      message: '修改成功',
                      type: 'success',
                      onClose: () => {
                        this.getGameList()
                      }
                    });
                  }

                  this.dialogVisible1 = false
                })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getGameList() {
      this.$axios.get('/root/access').then(res => {
        this.tableData = res.data.data
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.fileList.length ===0 || this.fileList1.length ===0){
            this.$message({
              showClose: true,
              message: '请至少上传一张主图和一张详情图'+this.fileList1+this.fileList1.length,
              type: 'error',
            });
          }else{
            this.$axios.post('/game/add' , this.editForm)
                .then(res => {

                  if(res.data.status === 200) {
                    this.$message({
                      showClose: true,
                      message: '新增成功',
                      type: 'success',
                      onClose: () => {
                        this.getGameList()
                      }
                    });
                  }

                  this.dialogVisible = false
                })
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
      this.editForm = {}
      this.fileList=[]
      this.fileList1=[]
    },
    resetForm1(formName) {
      this.dialogVisible1 = false
    },
    handleClose() {
      this.resetForm('editForm')
    },
    handleClose1() {
      this.resetForm1('editForm1')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size=val;
      this.getGameList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.current=val;
      this.getGameList();
    }
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