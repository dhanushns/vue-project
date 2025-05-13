<template>
    <div class="forms-container">
        <h2>Student Registration</h2>
        <div class="forms-nav">
            <div class="navs n1" :class="activeTab === 0 ? 'active' : 'deactive'">
                <button @click="activeTab = 0">Personal Information</button>
            </div>
            <div class="navs n2" :class="activeTab === 1 ? 'active' : 'deactive'">
                <button @click="activeTab = 1">Academic Information</button>
            </div>
            <div class="navs n3" :class="activeTab === 2 ? 'active' : 'deactive'">
                <button @click="activeTab = 2">Review</button>
            </div>
        </div>

        <div class="form-model">
            <component :is="tabs[activeTab]"></component>
            <div class="model-footer">
                <button :class="activeTab > 0 && activeTab <= 2 ? 'activeButton' : 'disabledButton'"
                    @click="handlePrevious">Previous</button>
                <button v-show="activeTab === 2">Submit</button>
                <button :class="activeTab >= 0 && activeTab < 2 ? 'activeButton' : 'disabledButton'" @click="handleNext"
                    v-show="activeTab !== 2">Next</button>
            </div>
        </div>
    </div>

</template>

<script>
import AcademicInformation from './AcademicInformation.vue';
import PersonalInformation from './PersonalInformation.vue';
import ReviewComponent from './ReviewComponent.vue';


export default {
    name: "ResponsiveForms",
    components: {
        PersonalInformation,
        AcademicInformation,
        ReviewComponent
    },
    data() {
        return {
            activeTab: 0,
            tabs: [
                "PersonalInformation",
                "AcademicInformation",
                "ReviewComponent"
            ],
        }
    },
    methods: {
        handleNext() {

            if (this.activeTab < 2) {
                this.activeTab++;
            }

        },
        handlePrevious() {

            if (this.activeTab > 0) {
                this.activeTab--;
            }

        }

    }
};
</script>

<style lang="css" scoped>
.forms-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.forms-nav {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .navs {
        flex-grow: 1;
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        border: 2px solid #dfdfdf;

        button {
            cursor: pointer;
            border: none;
            background-color: transparent;
            text-decoration: underline;
            font-size: 15px;
        }
    }

    .active {
        background-color: rgb(243, 133, 43);

        button {
            color: white;
            font-weight: bold;
        }
    }

    .navs:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .navs:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
}

.form-model {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 400px;
    height: max-content;
    border: 2px solid #dfdfdf;
    border-radius: 10px;
    box-shadow: 2px 3px 10px 1px rgba(0, 0, 0, .2);
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    .model-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 40px;

        button {
            width: 200px;
            padding: 10px 20px;
            border-radius: 10px;
            border: 2px solid #dfdfdf;
            background-color: transparent;
            color: black;
        }

        button:hover {
            background-color: rgb(243, 133, 43);
            color: white;
        }

        .activeButton {
            box-shadow: inset 1px 2px 10px 1px rgba(0, 0, 0, .1);
        }

        .disabledButton {
            background-color: #aeaeae;
            color: #dfdfdf;
        }

        .disabledButton:hover {
            background-color: #aeaeae;
            color: #dfdfdf;
        }


    }

}

@media screen and (max-width:500px) {
    .forms-nav {

        .active {
            width: 100%;
            border-radius: 20px;
        }

        .deactive {
            display: none;
        }
    }
}
</style>