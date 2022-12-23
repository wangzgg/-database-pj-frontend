<template>
  <el-container>

    <el-aside width="200px" color="#3a4249">
      <el-menu
          :default-active="path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#3a4249"
          text-color="#fff"
          active-text-color="#ffd04b">

        <el-menu-item index="Index">
          <template slot="title">
            <i style="font-size: 30px; " class="el-icon-s-home"></i>
            <span style="margin-left: 5px;font-size: 21px">A大学</span>
          </template>
        </el-menu-item>

        <router-link to="/healthtable_ca" @click="this.$store.active=2">
          <el-menu-item index="/healthtable_ca">
            <span slot="title">查询过去n天填报信息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/access_ca">
          <el-menu-item index="/access_ca" @click="this.$store.active=3">
            <span slot="title">查询入校权限</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveApply_ca" @click="this.$store.active=3">
          <el-menu-item index="/leaveApply_ca">
            <span slot="title">查询出校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enterApply_ca" @click="this.$store.active=3">
          <el-menu-item index="/enterApply_ca">
            <span slot="title">查询入校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaveTime_ca" @click="this.$store.active=3">
          <el-menu-item index="/leaveTime_ca">
            <span slot="title">查询过去一年离校总时长</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enter_most_ca" @click="this.$store.active=3">
          <el-menu-item index="/enter_most_ca">
            <span slot="title">查询入校申请最多的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/average_leave_time_most_ca" @click="this.$store.active=3">
          <el-menu-item index="/average_leave_time_most_ca">
            <span slot="title">查询平均离校时长最长的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leaving_ca" @click="this.$store.active=3">
          <el-menu-item index="/leaving_ca">
            <span slot="title">查询处于离校状态的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leave_no_apply_ca" @click="this.$store.active=3">
          <el-menu-item index="/leave_no_apply_ca">
            <span slot="title">未申请但离校超过24h的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/apply_no_leave_ca" @click="this.$store.active=3">
          <el-menu-item index="/apply_no_leave_ca">
            <span slot="title">申请出校但未离校的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/stay_ca" @click="this.$store.active=3">
          <el-menu-item index="/stay_ca">
            <span slot="title">一直在校未曾出校的学生</span>
          </el-menu-item>

        </router-link>


        <router-link to="/same_ca" @click="this.$store.active=3">
          <el-menu-item index="/same_ca">
            <span slot="title">填写健康日报完全一致的学生</span>
          </el-menu-item>
        </router-link>

        <router-link to="/other_ca" @click="this.$store.active=3">
          <el-menu-item index="/other_ca">
            <span slot="title">查询其他班级统计信息</span>
          </el-menu-item>
        </router-link>

<!--        <router-link to="/record_most_root" @click="this.$store.active=3">-->
<!--          <el-menu-item index="/record_most_root">-->
<!--            <span slot="title">每个院系学生出入最多的校区</span>-->
<!--          </el-menu-item>-->
<!--        </router-link>-->
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 55px;  ">
        <el-row>
          <el-col :span="8">
            <div style="width: 200px">
              <el-input size="mini" v-model="classAdmin" autocomplete="off" placeholder="输入你的工号" >
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
            班级辅导员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                <el-dropdown-menu slot="dropdown">

                  <router-link to="/">
                    <el-dropdown-item :underline="false">
                      超级用户
                    </el-dropdown-item>
                  </router-link>


                  <router-link to="/da" >
                    <el-dropdown-item :underline="false" >
                      院系管理员
                    </el-dropdown-item>
                  </router-link>
                  <!--                    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->



                  <router-link to="/ca">
                    <el-dropdown-item :underline="false">
                      班级辅导员
                    </el-dropdown-item>
                  </router-link>


                  <router-link to="/stu">
                    <el-dropdown-item :underline="false">
                      学生
                    </el-dropdown-item>
                  </router-link>

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
export default {
  name: "ba",
  data(){
    return{
      path:sessionStorage.getItem('key'),
      classAdmin:sessionStorage.getItem('classAdmin'),
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
      sessionStorage.setItem("classAdmin",this.classAdmin);
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