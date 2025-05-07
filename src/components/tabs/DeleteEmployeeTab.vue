<template>
    <div class="records-container">
        <table class="emp-tbl">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>DEPARTMENT</th>
                    <th>LOCATION</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee) of employees" :key="employee.id">
                    <td> <input type="checkbox" v-model="selectedEmployeeId" :value="employee.id" /> </td>
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.name }}</td>
                    <td>{{ employee.age }}</td>
                    <td>{{ employee.department }}</td>
                    <td>{{ employee.location }}</td>
                    <td>{{ employee.salary }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="delete-btn">
        <button @click="deleteEmployeeSerive">Delete</button>
    </div>
    <teleport to="#notification">
        <NotificationComponent v-show="showNotification" @close="showNotification = false" :title="title" />
    </teleport>
</template>

<script>
import { deleteEmployee, getEmployees } from '@/services/EmployeeServices';
import NotificationComponent from '../NotificationComponent.vue';

export default {
    name: "DeleteEmployee",
    data() {
        return {
            employees: [],
            selectedEmployeeId: [],
            showNotification: false,
            title: "Employees Deleted Successfully"
        }
    },
    components: {
        NotificationComponent,
    },
    methods: {
        deleteEmployeeSerive() {
            this.selectedEmployeeId.forEach(id => {
                deleteEmployee(id).then(res => {
                    if (res.status === 200) {
                        this.employees = this.employees.filter((employee) => employee.id != res.data.id);
                    }
                })
            });
            this.showNotification = true;
        }
    },
    mounted() {
        getEmployees().then(res => {
            this.employees = res;
        });
    },
}
</script>

<style scoped>
.delete-btn {
    margin-top: 40px;

    button {
        width: 100%;
        height: 35px;
        border-radius: 10px;
        border: none;
        background-color: rgb(235, 83, 83);
        color: white;
        font-weight: bold;
    }
}
</style>