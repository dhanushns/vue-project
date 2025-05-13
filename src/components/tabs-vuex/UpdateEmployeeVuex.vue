<template>
  <div>
    <div class="input-empId">
      <input
        type="text"
        placeholder="Search Employee . . ."
        v-model="empId"
        @keyup.enter="fetchEmployee"
      />
      <button @click="fetchEmployee">Search</button>
    </div>
    <div class="emp-data" v-show="showEmployeeDetails">
      <form class="update-form" @submit.prevent="updateService">
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
              <option v-for="location of locations" :key="location">
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  </div>
  <teleport to="#notification">
    <notification-component
      v-show="showNotification"
      @close="showNotification = false"
      :title="title"
    />
  </teleport>
</template>

<script>
import NotificationComponent from "../NotificationComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "UpdateEmployeeTab",
  data() {
    return {
      employee: {},
      empId: "",
      locations: ["Chennai", "Bangalore", "Pune"],
      showEmployeeDetails: false,
      showNotification: false,
      title: "Employee Updated Successfully",
    };
  },
  components: {
    NotificationComponent,
  },
  computed: {
    ...mapGetters(["getEmployeeById"]),
  },
  methods: {
    updateService() {
        this.$store.dispatch('updateEmployeeAction',this.employee)
        this.showNotification = true;
    },
    fetchEmployee() {
      this.employee = this.getEmployeeById(this.empId)[0];
      this.showEmployeeDetails = true;
    },
  },
};
</script>

<style>
.input-empId {
  display: flex;
  gap: 10px;
}

.input-empId input {
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid #dfdfdf;
  font-size: 15px;
  font-weight: bold;
}

.input-empId input::placeholder {
  font-weight: normal;
}

.input-empId button {
  padding: 0 20px;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  border: none;
}

.update-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
}

.update-form .form-block {
  display: flex;
  justify-content: flex-start;
  min-width: 300px;
  flex-wrap: wrap;
  gap: 50px;
}

.update-form .form-block .form-group {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 350px;
  gap: 10px;
}

.update-form .form-block .form-group input,
select {
  height: 35px;
  border-radius: 10px;
  border: 2px solid #dfdfdf;
  padding: 0 10px;
}

.update-form .footer button {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  border: none;
  font-weight: bold;
}
</style>