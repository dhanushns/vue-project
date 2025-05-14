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