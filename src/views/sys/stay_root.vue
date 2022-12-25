<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <el-menu-item index="/stay_school">全校</el-menu-item>


        <el-menu-item index="/stay_department">
          院系
        </el-menu-item>


        <el-menu-item index="/stay_class">班级</el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "stay_root",
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key==="/stay_school"){
        this.$router.push('/stay_school')
      } if(key==="/stay_department"){
        this.$router.push('/stay_department')
      } if(key==="/stay_class"){
        this.$router.push('/stay_class')
      }
    },
  }
}
</script>

<style scoped>

</style>