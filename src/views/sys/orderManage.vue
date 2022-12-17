<template>

  <div>
    <div style="text-align: center;margin: 20px">
      <el-radio-group v-model="radio">
        <el-radio :label="0">离校申请</el-radio>
        <el-radio :label="1">入校申请</el-radio>
      </el-radio-group>
    </div>


    <el-table
        ref="multipleTable"
        :data="tableData.filter(data => !search || data.orderDate.toLowerCase().includes(search.toLowerCase()))"
        tooltip-effect="dark"
        style="width: 100%"
        border
        stripe>

      <el-table-column
          prop="orderId"
          label="订单编号"
          width="120">
      </el-table-column>

      <el-table-column
          prop="orderUser"
          label="下单用户"
      >
      </el-table-column>


      <el-table-column
          prop="orderMoney"
          label="金额"
      sortable>
      </el-table-column>

      <el-table-column
          sortable
          prop="orderDate"
          label="下单日期">
      </el-table-column>

      <el-table-column
          prop="orderState"
          label="订单状态"
          :filters="[{ text: '已支付', value: 1 },{ text: '未支付', value: 0 }]"
          :filter-method="filterTag1"
          filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag size="small" v-if="scope.row.orderState === 1" type="success">已支付</el-tag>
          <el-tag size="small" v-else-if="scope.row.orderState === 0" type="danger">未支付</el-tag>
        </template>
      </el-table-column>

    </el-table>





  </div>
</template>

<script>
export default {
  name: "orderManage",
  data() {
    return {
      radio: '',
      search:'',
      forbiddenForm: {
        userId:'',
        status:''
      },

      total: 0,
      size: 100,
      current: 1,

      dialogVisible:false,
      editForm: {
        orderId:'',
        orderDate:'',
        orderUser:'',
        orderMoney:'',
        orderState:''
      },


      tableData: [
      ],

    }
  },
  created(){
    this.getOrderList();

  },
  methods:{
    filterTag1(value, row) {
      return row.orderState === value;
    },
    getOrderList() {
      this.$axios.get('/allOrders',{
        params:{
          size:this.size,
          current:this.current
        }
      }).then(res => {
        this.tableData = res.data.list
        this.total= res.data.total
        this.current= res.data.current
      })
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.$axios.post('/user/add' , this.editForm)
    //           .then(res => {
    //
    //             if(res.data.status === 200) {
    //               this.$message({
    //                 showClose: true,
    //                 message: '恭喜你，操作成功',
    //                 type: 'success',
    //                 onClose: () => {
    //                   this.getUserList()
    //                 }
    //               });
    //             }
    //
    //             this.dialogVisible = false
    //           })
    //     } else {
    //       console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false
      this.editForm = {}
    },
    handleClose() {
      this.resetForm('editForm')
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size=val;
      this.getOrderList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.current=val;
      this.getOrderList();
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