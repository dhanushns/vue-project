<template>
    <form class="acc-info info">
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Branch</label>
                <select v-model="getAcademicInformation.branch">
                    <option>B.TECH</option>
                    <option>BE</option>
                    <option>Diploma</option>
                </select>
            </div>
            <div class="forms-block b1">
                <label>Department</label>
                <input type="text" v-model="getAcademicInformation.department" />
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Section</label>
                <select v-model="getAcademicInformation.section">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </div>
            <div class="forms-block b1">
                <label>Percentage</label>
                <input type="text" v-model="getAcademicInformation.percentage" />
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>CGPA</label>
                <input type="text" v-model="getAcademicInformation.cgpa" />
            </div>
            <div class="forms-block b1">
                <label>No.of.Arrears</label>
                <input type="text" v-model="getAcademicInformation.arrears" />
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "PersonalInformation",
    computed : mapGetters(['getAcademicInformation'])
}
</script>

<style>
.info {
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

            label {
                font-size: 18px;
                font-weight: 500;
                color: #5e5b5b;
            }

            input {
                height: 40px;
                border: none;
                border-bottom: 2px solid #dfdfdf;
                font-size: 19px;
            }

            input:focus {
                outline: none;
            }

            textarea {
                min-width: 200px;
                max-width: 600px;
                min-height: 60px;
                max-height: 60px;
                border: 2px solid #dfdfdf;
                border-radius: 10px;
                padding: 10px;
            }

            textarea:focus {
                outline: none;
            }

        }
    }

}
</style>