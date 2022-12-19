<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <el-menu-item index="/stay_school"><router-link to="/stay_school">全校 </router-link></el-menu-item>


        <el-menu-item index="/stay_department">
          <router-link to="/stay_department">院系 </router-link>
        </el-menu-item>


        <el-menu-item index="/stay_class"><router-link to="/stay_class">班级</router-link></el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "stay_root"
}
</script>

<style scoped>

</style>