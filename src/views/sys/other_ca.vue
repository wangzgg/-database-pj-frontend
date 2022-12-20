<template>
<div>
  <el-row>
    <el-col :span="8">
      <el-form :inline="true" style="margin-top: 5px">
        <el-form-item>
          <el-input
              v-model="search"
              placeholder="过去n天未批准的申请"
              align="right"
              height="80px">
            <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getAll" ></el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8">
      <el-form :inline="true" style="margin-top: 5px">
        <el-form-item>
          <el-input
              v-model="search1"
              placeholder="连续n天健康日报一致"
              align="right"
              height="80px">
            <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getAll1" ></el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  </el-row>


  <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      stripe>

    <el-table-column
        v-if="sho"
        prop="class_id"
        label="班级号">
    </el-table-column><el-table-column
        v-if="show"
        prop="leaving_num"
        label="已出校未返校的人数">
    </el-table-column><el-table-column
        v-if="show"
        prop="surpass_num"
        label="未申请但离校超24小时的人数">
    </el-table-column><el-table-column
        v-if="show"
        prop="not_leave_num"
        label="已提交出校申请但未离校的人数">
    </el-table-column><el-table-column
        v-if="show1"
        prop="num2"
        label="过去 n 天尚未批准的出校申请数量">
    </el-table-column><el-table-column
        v-if="show1"
        prop="num1"
        label="过去 n 天尚未批准的入校申请数量">
    </el-table-column><el-table-column
        v-if="show2"
        prop="num"
        label="连续 n 天填写“健康日报”时间完全一致的学生数量">
    </el-table-column>

  </el-table>

</div>
</template>

<script>
export default {
  name: "other_ca",
  data(){
    return{
      sho:true,
      show:true,
      show1:false,
      show2:false,
      tableData:[],
      search:'',
      search1:'',
    }

  },
  created(){
    this.$axios.get(
        '/class/other',{
          params:{
            id: +sessionStorage.getItem('classAdmin')
          }
        }).then(res => {
      this.tableData = res.data.data
    })
  },
  methods:{
    getAll(){
      this.show=false;
      this.show1=true;
      this.show2=false;
      this.$axios.get(
          '/class/other/noPass',{
            params:{
              days:this.search,
              id: +sessionStorage.getItem('classAdmin')
            }
          }).then(res => {
        this.tableData = res.data.data
      })
    } ,getAll1(){
      this.show=false;
      this.show1=false;
      this.show2=true;
      this.$axios.get(
          '/class/other/same',{
            params:{
              days:this.search1,
              id: +sessionStorage.getItem('classAdmin')
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