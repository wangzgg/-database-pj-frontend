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
        :data="tableData.filter(data => !search1 || data.stu_number === +search1)"
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

<!--过去n天填报信息-->
      <el-table-column type="expand" label="填报信息" width="100">
        <template slot-scope="props">
          <el-table
              :data="props.row.infoList"
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
        </template>
      </el-table-column>

      <el-table-column
          align="right"
          width="220"
      >
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search1"
              size="mini"
              placeholder="输入学号查询">
            <el-button slot="append" icon="el-icon-search" style="float: left"></el-button>
          </el-input>
        </template>
      </el-table-column>

    </el-table>


  </div>
</template>

<script>
export default {
  name: "userManage",
  data() {
    return {
      search:'',
      search1:'',
      forbiddenForm: {
        userId:'',
        status:''
      },

      total: 0,
      size: 100,
      current: 1,

      dialogVisible:false,
      editForm: {
        username:'',
        password:'',
        email:'',
        role:''
      },
      editFormRules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '请输入邮箱', trigger: 'blur'}
        ],
        ban: [
          {required: true, message: '', trigger: 'blur'}
        ],

      },

      tableData: [
      ],

    }
  },

  methods:{

    getAll(){
      this.$axios.get(
          '/root/info',{
        params:{
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