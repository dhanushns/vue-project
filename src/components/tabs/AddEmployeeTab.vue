<template>
    <div>
        <div class="emp-data">
            <form class="update-form" @submit.prevent="addEmployeeService">
                <div class="form-block b1">
                    <div class="form-group g1">
                        <label>Employee Name</label>
                        <input type="text" v-model="employee.name" />
                    </div>
                    <div class="form-group g2">
                        <label>Employee Age</label>
                        <input type="number" v-model="employee.age" />
                    </div>
                </div>
                <div class="form-block b2">
                    <div class="form-group g1">
                        <label>Employee Department</label>
                        <input type="text" v-model="employee.department" />
                    </div>
                    <div class="form-group g2">
                        <label>Employee Location</label>
                        <select v-model="employee.location">
                            <option value="">select location</option>
                            <option v-for="location of locations" :key="location" :value="location">
                                {{ location }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="form-block b3">
                    <div class="form-group g1">
                        <label>Employee Salary</label>
                        <input type="text" v-model="employee.salary" />
                    </div>
                </div>
                <div class="form-block b4 footer">
                    <button type="submit">Add Employee</button>
                </div>
            </form>
        </div>
    </div>
    <teleport to="#notification">
        <NotificationComponent v-show="showNotification" @close="showNotification = false" :title="title" />
    </teleport>
</template>

<script>
import { addEmployee } from '@/services/EmployeeServices';
import NotificationComponent from '../NotificationComponent.vue';

export default {
    name: "AddEmployee",
    data() {
        return {
            employee: {
                location: ""
            },
            locations: ["Chennai", "Bangalore", "Pune"],
            showNotification: false,
            title: "Employee Added Successfully"
        }
    },
    components: {
        NotificationComponent
    },
    methods: {
        addEmployeeService() {
            addEmployee(this.employee).then(res => {
                if(res.status === 201){
                    this.showNotification = true
                }
            })
        }
    }
}
</script>

<style></style>