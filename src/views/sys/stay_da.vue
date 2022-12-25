<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">


        <el-menu-item index="/stay_department_da">
         院系
        </el-menu-item>


        <el-menu-item index="/stay_class_da">班级</el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "stay_da",
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key==="/stay_department_da"){
        this.$router.push('/stay_department_da')
      } if(key==="/stay_class_da"){
        this.$router.push('/stay_class_da')
      }
    },
  }
}
</script>

<style scoped>

</style>