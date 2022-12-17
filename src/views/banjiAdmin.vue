<template>
  <el-container>

    <el-aside width="200px" color="#3a4249">
      <el-menu
          :default-active="this.$store.state.active"
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

        <router-link to="/userManage" @click="this.$store.active=2">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/goodsManage">
          <el-menu-item index="3" @click="this.$store.active=3">
            <i class="el-icon-document"></i>
            <span slot="title">游戏管理</span>
          </el-menu-item>
        </router-link>

        <router-link to="/orderManage" @click="this.$store.active=3">
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">订单管理</span>
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
            班级辅导员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :underline="false">
                    <router-link to="/">
                      超级用户
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false">
                    <router-link to="/ca">
                      院系管理员
                    </router-link>
                  </el-dropdown-item>
                  <el-dropdown-item :underline="false">
                    <router-link to="/ba">
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
export default {
  name: "ba"
}
</script>

<style scoped>
.el-main {
  background-color: #ffffff;
  color: #c5c3c3;
}
@import "Index.css";
</style>