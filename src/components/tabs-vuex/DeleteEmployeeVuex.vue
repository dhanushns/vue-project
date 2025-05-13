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
        <tr v-for="employee of getEmployees('')" :key="employee.id">
          <td>
            <input
              type="checkbox"
              v-model="selectedEmployeeId"
              :value="employee.id"
            />
          </td>
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
    <NotificationComponent
      v-show="showNotification"
      @close="showNotification = false"
      :title="title"
    />
  </teleport>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationComponent from "../NotificationComponent.vue";

export default {
  name: "DeleteEmployeeVuex",
  data() {
    return {
      selectedEmployeeId: [],
      showNotification: false,
      title: "Employees Deleted Successfully",
    };
  },
  components: {
    NotificationComponent,
  },
  computed: {
    ...mapGetters(["getEmployees"]),
  },
  methods: {
    deleteEmployeeSerive() {
      this.selectedEmployeeId.forEach(empId=>{
        this.$store.dispatch('deleteEmployee',empId)
      })
      this.showNotification = true;
    },
  },
};
</script>

<style scoped>
.delete-btn {
  margin-top: 40px;
}

.delete-btn button {
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: rgb(235, 83, 83);
  color: white;
  font-weight: bold;
}
</style>