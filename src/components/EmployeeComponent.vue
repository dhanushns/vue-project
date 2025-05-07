<template>
    <div class="root-container">
        <h2>Employee Records</h2>
        <div class="emp-records">
            <div class="tabs-group">
                <div class="tab tb1" :class="activeTab === 0 ? 'active' : ''">
                    <button @click="setActiveTab(0)">All Employees</button>
                </div>
                <div class="tab tb3" :class="activeTab === 1 ? 'active' : ''">
                    <button @click="setActiveTab(1)">Add Employees</button>
                </div>
                <div class="tab tb4" :class="activeTab === 2 ? 'active' : ''">
                    <button @click="setActiveTab(2)">Update Employees</button>
                </div>
                <div class="tab tb5" :class="activeTab === 3 ? 'active' : ''">
                    <button @click="setActiveTab(3)">Delete Employees</button>
                </div>
            </div>
        </div>

        <div class="tab-content">
            <component :is="tabMap.at(activeTab)" />
        </div>
    </div>

</template>

<script>
import NotificationComponent from './NotificationComponent.vue';
import AddEmployeeTab from './tabs/AddEmployeeTab.vue';
import AllEmployeeTab from './tabs/AllEmployeeTab.vue';
import DeleteEmployeeTab from './tabs/DeleteEmployeeTab.vue';
import UpdateEmployeeTab from './tabs/UpdateEmployeeTab.vue';

export default {
    name: 'EmployeeRecords',
    components: {
        AllEmployeeTab,
        AddEmployeeTab,
        UpdateEmployeeTab,
        DeleteEmployeeTab,
        NotificationComponent
    },
    data() {
        return {
            activeTab: 0,
            tabMap: ["AllEmployeeTab", "AddEmployeeTab", "UpdateEmployeeTab", "DeleteEmployeeTab"],
        }
    },
    methods: {
        setActiveTab(tabId) {
            this.activeTab = tabId
        }
    }
}
</script>

<style scoped>

.root-container{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.tabs-group {
    display: flex;
    border-bottom: 2px solid #dfdfdf;
    width: 100%;
    min-width: 200px;
    height: 40px;

    .tab {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        button {
            padding: 10px 20px;
            background-color: transparent;
            border: none;
        }
    }

    .tab:hover {
        box-shadow: 1px 1px 10px 2px #4444;
    }

    .active {
        background-color: darkblue;

        button {
            color: white
        }
    }
}
</style>