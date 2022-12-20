<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <el-menu-item index="/average_leave_time_most_department_da">
          <router-link to="/average_leave_time_most_department_da">院系 </router-link>
        </el-menu-item>


        <el-menu-item index="/average_leave_time_most_class_da"><router-link to="/average_leave_time_most_class_da">班级</router-link></el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "average_leave_time_most_root"
}
</script>

<style scoped>

</style>