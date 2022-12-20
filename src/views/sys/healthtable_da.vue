<template>

  <div>
    <el-form :inline="true" style="margin-top: 5px">
      <el-form-item>
        <el-input
            v-model="search"
            placeholder="输入要查询的天数"
            align="right"
            height="80px">
          <el-button slot="append" icon="el-icon-search" style="float: left" @click.native="getAll" ></el-button>
        </el-input>
      </el-form-item>
    </el-form>

    <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search1 || data.stu_number === +search1)"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe
        @selection-change="handleSelectionChange">
      <el-table-column
          prop="stu_number"
          label="学号"
      >
      </el-table-column>
      <el-table-column
          prop="stu_name"
          label="姓名">
      </el-table-column>

<!--过去n天填报信息-->
      <el-table-column type="expand" label="填报信息" width="100">
        <template slot-scope="props">
          <el-table
              :data="props.row.infoList"
              style="width: 100%">
            <el-table-column
                prop="date"
                label="填写日期">
            </el-table-column>

            <el-table-column
                prop="temperature"
                label="体温">
            </el-table-column>

            <el-table-column
                prop="location"
                label="所在位置">
            </el-table-column>
            <el-table-column
                prop="time"
                label="填写时间">
            </el-table-column>
            <el-table-column
                prop="other_message"
                label="其他信息">
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
              placeholder="输入学号搜索">
          </el-input>
        </template>
      </el-table-column>

    </el-table>


  </div>
</template>

<script>
export default {
  name: "healthtable_da",
  data() {
    return {
      search:'',
      search1:'',
      tableData: [
      ],

    }
  },

  methods:{

    getAll(){
      this.$axios.get(
          '/department/info',{
        params:{
          id: +sessionStorage.getItem('department'),
          days:this.search
        }
      }).then(res => {
        this.tableData = res.data.data
      })
    }
  }
}
</script>

<style scoped>

.el-pagination {
  float: right;
  margin-top: 22px;
}

</style>