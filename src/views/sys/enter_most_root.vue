<template>
  <div>
    <div>
      <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">

          <el-menu-item index="/enter_most_school"><router-link to="/enter_most_school">全校 </router-link></el-menu-item>


          <el-menu-item index="/enter_most_department">
            <router-link to="/enter_most_department">院系 </router-link>
          </el-menu-item>


          <el-menu-item index="/enter_most_class"><router-link to="/enter_most_class">班级</router-link></el-menu-item>

      </el-menu>
    </div>
    <div><router-view></router-view></div>
<!--  <el-form :inline="true" style="margin-top:5px ">-->
<!--    <el-form-item>-->
<!--      <el-radio-group v-model="radio">-->
<!--        <el-radio :label="3">全校</el-radio>-->
<!--        <el-radio :label="6">院系</el-radio>-->
<!--        <el-radio :label="9">班级</el-radio>-->
<!--      </el-radio-group>-->
<!--    </el-form-item>-->
<!--    <el-form-item>-->
<!--      <el-input-->
<!--          v-model="search"-->
<!--          placeholder="前n 个提交入校申请最多的学生"-->
<!--          align="right"-->
<!--          height="80px">-->
<!--        <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getdays"></el-button>-->
<!--      </el-input>-->
<!--    </el-form-item>-->
<!--  </el-form>-->

<!--  <el-table-->
<!--      ref="multipleTable"-->
<!--      :data="tableData"-->
<!--      tooltip-effect="dark"-->
<!--      style="width: 100%"-->
<!--      border-->
<!--      stripe>-->

<!--    <el-table-column-->
<!--        prop="stu_number"-->
<!--        label="学号">-->
<!--    </el-table-column>-->

<!--    <el-table-column-->
<!--        prop="stu_name"-->
<!--        label="姓名">-->
<!--    </el-table-column>-->

<!--  </el-table>-->
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