<template>
  <el-container>

    <el-aside width="200px" color="#3a4249">
      <el-menu
          :default-active="path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#3a4249"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect">

        <el-menu-item index="Index">
          <template slot="title">
            <i style="font-size: 30px; " class="el-icon-s-home"></i>
            <span style="margin-left: 5px;font-size: 21px">A大学</span>
          </template>
        </el-menu-item>

        <router-link to="/healthtable_da">
          <el-menu-item index="/healthtable_da">
            <span slot="title">查询过去n天填报信息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/access_da">
          <el-menu-item index="/access_da">
            <span slot="title">查询入校权限</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveApply_da" @click="this.$store.active=3">
          <el-menu-item index="/leaveApply_da">
            <span slot="title">查询出校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enterApply_da" @click="this.$store.active=3">
          <el-menu-item index="/enterApply_da">
            <span slot="title">查询入校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveTime_da" @click="this.$store.active=3">
          <el-menu-item index="/leaveTime_da">
            <span slot="title">查询过去一年离校总时长</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enter_most_department_da" @click="this.$store.active=3">
          <el-menu-item index="/enter_most_department_da">
            <span slot="title">查询入校申请最多的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/average_leave_time_most_department_da" @click="this.$store.active=3">
          <el-menu-item index="/average_leave_time_most_department_da">
            <span slot="title">查询平均离校时长最长的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaving_da" @click="this.$store.active=3">
          <el-menu-item index="/leaving_da">
            <span slot="title">查询处于离校状态的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leave_no_apply_da" @click="this.$store.active=3">
          <el-menu-item index="/leave_no_apply_da">
            <span slot="title">未申请但离校超过24h的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/apply_no_leave_da" @click="this.$store.active=3">
          <el-menu-item index="/apply_no_leave_da">
            <span slot="title">申请出校但未离校的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/stay_department_da" @click="this.$store.active=3">
          <el-menu-item index="/stay_department_da">
            <span slot="title">一直在校未曾出校的学生</span>
          </el-menu-item>

        </router-link>
        <router-link to="/same_da" @click="this.$store.active=3">
          <el-menu-item index="/same_da">
            <span slot="title">填写健康日报完全一致的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/record_most_da" @click="this.$store.active=3">
          <el-menu-item index="/record_most_da">
            <span slot="title">学生出入最多的校区</span>
          </el-menu-item>
        </router-link>


      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 55px;  ">
        <el-row>
          <el-col :span="8">
            <div style="width: 200px">
              <el-input size="mini" v-model="department" autocomplete="off" placeholder="输入你的工号" >
                <el-button slot="append" style="float: left" @click="queren">确认</el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="text-align: center">
              <strong style="font-size: 20px;text-align: center">学生进出校管理系统</strong>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="float: right">
              <el-dropdown>
          <span class="el-dropdown-link" >
            院系管理员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :underline="false">
                    <router-link to="/">
                      超级用户
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false">
                    <router-link to="/da">
                      院系管理员
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false">
                    <router-link to="/ca">
                      班级辅导员
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false">
                    <router-link to="/stu">
                      学生
                    </router-link>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div></el-col>
        </el-row>
      </el-header>
      <el-main>
        <div style="margin: 0 15px">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>

<!--    <el-dialog title="请输入你的工号" :visible.sync="dialogFormVisible">-->
<!--      <el-form :model="form">-->
<!--        <el-form-item label="活动名称" :label-width="formLabelWidth">-->
<!--          <el-input v-model="form.name" autocomplete="off"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="活动区域" :label-width="formLabelWidth">-->
<!--          <el-select v-model="form.region" placeholder="请选择活动区域">-->
<!--            <el-option label="区域一" value="shanghai"></el-option>-->
<!--            <el-option label="区域二" value="beijing"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->


  </el-container>
</template>

<script>
export default {
  name: "collegeAdmin",
  data(){
    return{
      path:sessionStorage.getItem('key'),
      department:sessionStorage.getItem('department'),
      department_num:'',
      dialogFormVisible: true,
    }
  },
  methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        sessionStorage.setItem("key",key)
    },
    queren(){
      sessionStorage.setItem("department",this.department);
      this.$message({
        showClose: true,
        message: '确认成功',
        type: 'success',
      });
    }
  }
}
</script>

<style scoped>
.el-main {
  background-color: #ffffff;
  color: #c5c3c3;
}
@import "Index.css";
</style>