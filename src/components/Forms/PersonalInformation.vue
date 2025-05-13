<template>
    <form class="pers-info info">
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>First name</label>
                <input type="text" v-model="getPersonalInformation.fn"/>
            </div>
            <div class="forms-block b1">
                <label>Last Name</label>
                <input type="text" v-model="getPersonalInformation.ln" />
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Date of Birth</label>
                <input type="date" v-model="getPersonalInformation.dob" />
            </div>
            <div class="forms-block b1">
                <label>Phone number</label>
                <input type="number" v-model="getPersonalInformation.phone_number" />
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Email id</label>
                <input type="email" v-model="getPersonalInformation.email" />
            </div>
            <div class="forms-block b1">
                <label>Address</label>
                <textarea type="text" v-model="getPersonalInformation.address"></textarea>
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PersonalInformation",
    computed : mapGetters(['getPersonalInformation']),
}
</script>

<style>
.pers-info {
    .forms-group {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 20px 0;
        gap: 20px;

        .forms-block {
            display: flex;
            flex-direction: column;
            flex-basis: 500px;
            gap: 15px;
            min-width: 250px;

            label{
                font-size: 18px;
                font-weight: 500;
                color: #5e5b5b;
            }

            input{
                height: 40px;
                border: none;
                border-bottom: 2px solid #dfdfdf;
                font-size: 19px;
            }

            input:focus{
                outline: none;
            }

            textarea{
                min-width: 200px;
                max-width: 600px;
                min-height: 60px;
                max-height: 60px;
                border: 2px solid #dfdfdf;
                border-radius: 10px;
                padding: 10px;
            }

            textarea:focus{
                outline: none;
            }

        }
    }

}

</style>