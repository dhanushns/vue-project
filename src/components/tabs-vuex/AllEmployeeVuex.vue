<template>
  <div class="search-container">
    <input type="text" placeholder="filter employees" v-model="keys" />
  </div>

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
        <tr v-for="(employee, index) of getEmployees(keys)" :key="employee.id">
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AllEmployeeVuex",
  data() {
    return {
      employees: null,
      keys: "",
    };
  },
  computed: {
    ...mapGetters(["getEmployees"]),
  },
  methods: {
    ...mapActions(["fetchEmployeesAction"]),
  },
  created() {
    this.fetchEmployeesAction();
  },
};
</script>

<style>
.search-container {
  margin: 0 0 30px 0;
}

.search-container input {
  padding: 10px 10px;
  border-radius: 10px;
  width: 200px;
  border: 2px solid #dfdfdf;
}

.records-container {
  border: 2px solid #dfdfdf;
  min-height: 400px;
  border-radius: 10px;
}

tbody {
  min-height: 300px;
  max-height: max-content;
}

.emp-tbl {
  border-collapse: collapse;
  width: 100%;
}

.emp-tbl th {
  background-color: blue;
  color: white;
}
.emp-tbl th:nth-child(1) {
  border-top-left-radius: 10px;
}
.emp-tbl th:last-child {
  border-top-right-radius: 10px;
}
.emp-tbl th,
td {
  border-bottom: 2px solid #dfdfdf;
  padding: 10px;
  text-align: center;
  height: 30px;
}
.emp-tbl .even {
  background-color: #dddddd;
}

.empty-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>