<template>
  <div>

    <el-form :inline="true" style="margin-top: 5px">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入要查询的n的天数"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getdays" ></el-button>
        </el-input>
      </el-form-item>
    </el-form>
    <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search1 || data.class_id === +search1)"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe>

      <el-table-column
          prop="class_id"
          label="班级id"
      >
      </el-table-column>

      <el-table-column type="expand" label="过去n天一直未出校的学生"width="500px"  >
        <template slot-scope="props">
          <el-table
              :data="props.row.stu"
              style="width: 100%">
            <el-table-column
                prop="stu_number"
                label="学号">
            </el-table-column>

            <el-table-column
                prop="stu_name"
                label="姓名">
            </el-table-column>

          </el-table>
        </template>
      </el-table-column>

      <el-table-column
          align="right"
          width="220"
      >
        <template slot="header" slot-scope="scope">
          <el-input
              v-model="search1"
              size="mini"
              placeholder="输入班级id筛选">
          </el-input>
        </template>
      </el-table-column>
    </el-table>



  </div>
</template>

<script>
export default {
  name: "stay_class",
  data(){
    return{
      search:'',
      search1:'',
      tableData:[]
    }
  },
  methods:{
    getdays(){
      this.$axios.get('/departmen/stay/class',{
        params:{
          id: +sessionStorage.getItem('department'),
          num:this.search
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