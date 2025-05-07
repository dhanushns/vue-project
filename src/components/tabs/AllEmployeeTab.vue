<template>
    <div class="records-container">
        <table class="emp-tbl">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>DEPARTMENT</th>
                    <th>LOCATION</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee,index) of employees" :key="employee.id">
                    <td>{{ index + 1 }}</td>
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
</template>

<script>

import { getEmployees } from '@/services/EmployeeServices';

export default {
    name: "AllEmployeeTab",
    data() {
        return {
            employees: []
        }
    },
    methods: {

    },
    mounted() {
        getEmployees().then(res => {
            this.employees = res;
        });
    }
}
</script>

<style>
.records-container {
    border: 2px solid #dfdfdf;
    min-height: 400px;
    border-radius: 10px;
}

.emp-tbl{
    border-collapse: collapse;
    width: 100%;
    th{
        background-color: blue;
        color: white;
    }
    th:nth-child(1){
        border-top-left-radius: 10px;
    }
    th:last-child{
        border-top-right-radius: 10px;
    }
    th, td{
        border-bottom: 2px solid #dfdfdf;
        padding: 10px;
        text-align: center;
        height: 30px;
    }
    .even{
        background-color: #dddddd;
    }
}

</style>