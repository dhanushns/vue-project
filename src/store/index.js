import Vuex from 'vuex'
import employeesVuex from '@/module/employees-vuex'

export default new Vuex.Store({
    modules : {
        employeesVuex
    }
})