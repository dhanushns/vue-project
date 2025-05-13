import Vuex from 'vuex'
import employeesVuex from '@/module/employees-vuex'
import students from '@/module/students'

export default new Vuex.Store({
    modules : {
        employeesVuex,
        students
    }
})