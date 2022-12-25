<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">

          <el-menu-item index="/enter_most_school">全校 </el-menu-item>


          <el-menu-item index="/enter_most_department">
           院系
          </el-menu-item>


          <el-menu-item index="/enter_most_class">班级</el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: "enter_most_root",
  data() {
    return {

      radio:3,
      sacle:'',
      search:'',
      tableData: [
      ],

    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key==="/enter_most_department"){
        this.$router.push('/enter_most_department')
      } if(key==="/enter_most_school"){
        this.$router.push('/enter_most_school')
      } if(key==="/enter_most_class"){
        this.$router.push('/enter_most_class')
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getdays(){
      if(this.radio===3){
        this.sacle="全校"
      }if(this.radio===6){
        this.sacle="院系"
      }if(this.radio===9){
        this.sacle="班级"
      }
      this.$axios.get('/root/enter/most',{
        params:{
          sacle:this.sacle
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    }

  }
}
</script>

<style scoped>

</style>