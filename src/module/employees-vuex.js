import * as services from '../services/EmployeeServices'

const state = {
    employees: [],
}

const getters = {

    getEmployees: (state) => (key = '') => {
        if (key === '')
            return state.employees
        return state.employees.filter((emp) => {
            if (emp.id.includes(key)) return emp;
            else if (emp.name.includes(key)) return emp;
            else if (emp.age == key) return emp;
            else if (emp.department.includes(key)) return emp;
            else if (emp.location.includes(key)) return emp;
            else if (emp.salary === key) return emp;

        })
    },
    getEmployeeById: (state) => (empId) => (state.employees.filter(emp => emp.id === empId))

}

const actions = {

    async fetchEmployeesAction({ commit }) {

        await services.getEmployees().then(res => {
            commit('setAllEmployees', res)
        })

    },

    async addEmployeeAction({ commit }, employee) {
        await services.addEmployee(employee).then(res =>
            commit('addNewEmployee', res)
        )
    },

    async updateEmployeeAction({ commit }, employee) {
        await services.updateEmployee(employee.id, employee).then(res =>
            commit('updateEmployee', res)
        )
    },

    async deleteEmployee({ commit }, empId) {
        await services.deleteEmployee(empId).then(res =>
            commit('deleteEmployee', res.data.id)
        )
    }


}

const mutations = {

    setAllEmployees: (state, employees) => (state.employees = employees),
    addNewEmployee: (state, employee) => (state.employees = [...state.employees, employee]),
    updateEmployee: (state, employee) => (state.employees = state.employees.map((emp) => emp.id === employee.id ? employee : emp)),
    deleteEmployee: (state, empId) => (state.employees = state.employees.filter((emp) => emp.id != empId))

}

export default {
    state,
    getters,
    actions,
    mutations
}