import { createRouter, createWebHistory } from "vue-router";
import EmployeeComponent from "@/components/EmployeeComponent.vue";
import EmployeeVuex from "@/components/EmployeeVuex.vue";
import ResponsiveForms from "@/components/Forms/ResponsiveForms.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "Home",
            component: EmployeeComponent
        },
        {
            path: '/vuex',
            name: "Employee Vuex",
            component: EmployeeVuex
        },
        {
            path: '/forms',
            name: 'Responsive Form',
            component: ResponsiveForms
        }
    ]
})

export default router