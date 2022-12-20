<template>
  <el-container>

    <el-aside width="220px" color="#3a4249">
      <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#3a4249"
          text-color="#fff"
          active-text-color="#ffd04b">

        <el-menu-item index="Index">
          <template slot="title">
            <i style="font-size: 30px; " class="el-icon-s-home"></i>
            <span style="margin-left: 5px;font-size: 21px">A大学</span>
          </template>
        </el-menu-item>

        <router-link to="/healthtable_root" @click="this.$store.active=2">
          <el-menu-item index="/healthtable_root">
            <span slot="title">查询过去n天填报信息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/access_root">
          <el-menu-item index="/access_root" @click="this.$store.active=3">
            <span slot="title">查询入校权限</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveApply_root" @click="this.$store.active=3">
          <el-menu-item index="/leaveApply_root">
            <span slot="title">查询出校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enterApply_root" @click="this.$store.active=3">
          <el-menu-item index="/enterApply_root">
            <span slot="title">查询入校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveTime_root" @click="this.$store.active=3">
          <el-menu-item index="/leaveTime_root">
            <span slot="title">查询过去一年离校总时长</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enter_most_school" @click="this.$store.active=3">
          <el-menu-item index="/enter_most_school">
            <span slot="title">查询入校申请最多的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/average_leave_time_most_school" @click="this.$store.active=3">
          <el-menu-item index="/average_leave_time_most_school">
            <span slot="title">查询平均离校时长最长的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaving_root" @click="this.$store.active=3">
          <el-menu-item index="/leaving_root">
            <span slot="title">查询处于离校状态的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leave_no_apply_root" @click="this.$store.active=3">
          <el-menu-item index="/leave_no_apply_root">
            <span slot="title">未申请但离校超过24h的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/apply_no_leave_root" @click="this.$store.active=3">
          <el-menu-item index="/apply_no_leave_root">
            <span slot="title">申请出校但未离校的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/stay_school" @click="this.$store.active=3">
          <el-menu-item index="/stay_school">
            <span slot="title">一直在校未曾出校的学生</span>
          </el-menu-item>

        </router-link>
        <router-link to="/same_root" @click="this.$store.active=3">
          <el-menu-item index="/same_root">
            <span slot="title">填写健康日报完全一致的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/record_most_root" @click="this.$store.active=3">
          <el-menu-item index="/record_most_root">
            <span slot="title">每个院系学生出入最多的校区</span>
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 55px;  ">
        <el-row>
          <el-col :span="8"><div>&nbsp;</div></el-col>
          <el-col :span="8">
            <div style="text-align: center">
              <strong style="font-size: 20px;text-align: center">学生进出校管理系统</strong>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="float: right">
              <el-dropdown>
          <span class="el-dropdown-link" >
            超级用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :underline="false">
                    <router-link to="/">
                      超级用户
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false" >
                    <router-link to="/da" >
                      院系管理员
                    </router-link>
<!--                    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->

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
  </el-container>


</template>

<script>
import qs from 'qs'
export default {
  name: "admin",
  data(){
    return{
      department_num:0,
      dialogFormVisible:false,
    }
  },
  // created() {
  //   sessionStorage.setItem("department",'');
  // }
}
</script>

<style scoped>
.el-main {
  background-color: #ffffff;
  color: #c5c3c3;
}
@import "Index.css";
</style>