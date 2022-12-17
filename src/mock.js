const Mock = require('mockjs')

const Random = Mock.Random

let Result = {
    status: 200,
    msg: '操作成功',
    userId:1,
    role:1
}

Mock.mock('/pay', 'post', () => {


    return Result

})