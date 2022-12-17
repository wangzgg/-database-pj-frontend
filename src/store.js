import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId:1,
    role:'',
    username:'',
    type:'',
    active:1,

  },
  mutations: {
    set_userId:(state,userId)=>{
      state.userId=userId
      localStorage.setItem("userId",userId)
    },
    set_role:(state,role)=>{
      state.role=role
      localStorage.setItem("role",role)
    },
    set_name:(state,username)=>{
      state.username=username
      localStorage.setItem("username",username)
    },
    set_type:(state,type)=>{
      state.type=type
      localStorage.setItem("type",type)
    },
    reset_state:(state)=>{
      state.role=''
      state.userId=-1

    }

  },
  actions: {

  }
})
