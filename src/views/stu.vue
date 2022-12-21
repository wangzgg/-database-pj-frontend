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

        <router-link to="/info_stu" @click="this.$store.active=2">
          <el-menu-item index="info_stu">
            <span slot="title">个人信息</span>
          </el-menu-item>
        </router-link>

        <router-link to="/healthtable_stu" @click="this.$store.active=2">
          <el-menu-item index="healthtable_stu">
            <span slot="title">我的健康日报</span>
          </el-menu-item>
        </router-link>

        <router-link to="/leave_stu" @click="this.$store.active=2">
          <el-menu-item index="leave_stu">
            <span slot="title">我的出校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/enter_stu" @click="this.$store.active=2">
          <el-menu-item index="enter_stu">
            <span slot="title">我的入校申请</span>
          </el-menu-item>
        </router-link>

        <router-link to="/class_stu" @click="this.$store.active=2">
          <el-menu-item index="class_stu">
            <span slot="title">班级统计数据</span>
          </el-menu-item>
        </router-link>

      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="height: 55px;  ">
        <el-row>
          <el-col :span="8">
            <div style="width: 200px">
              <el-input size="mini" v-model="stu" autocomplete="off" placeholder="输入你的学号" >
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
            学生<i class="el-icon-arrow-down el-icon--right"></i>
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
  </el-container>
</template>

<script>
import qs from 'qs'
export default {
  name: "stu",
  data (){
    return {
      stu:sessionStorage.getItem('stu'),
      path:sessionStorage.getItem('key'),
    }
  },
  methods: {
    queren(){
      sessionStorage.setItem("stu",this.stu);
      this.$message({
        showClose: true,
        message: '确认成功',
        type: 'success',
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      sessionStorage.setItem("key",key)
    },
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