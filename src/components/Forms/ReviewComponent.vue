<template>
    <form class="pers-info info">
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>First name</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.fn }}</label>
            </div>
            <div class="forms-block b1">
                <label>Last Name</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.ln }}</label>
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Date of Birth</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.dob }}</label>
            </div>
            <div class="forms-block b1">
                <label>Phone number</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.phone_number }}</label>
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Email id</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.email }}</label>
            </div>
            <div class="forms-block b1">
                <label>Address</label>
                <label class="tab3-label">{{ getStudentInformation.personalInformation.address }}</label>
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Branch</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.branch }}</label>
            </div>
            <div class="forms-block b1">
                <label>Department</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.department }}</label>
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>Section</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.section }}</label>
            </div>
            <div class="forms-block b1">
                <label>Percentage</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.percentage }}</label>
            </div>
        </div>
        <div class="forms-group g1">
            <div class="forms-block b1">
                <label>CGPA</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.cgpa }}</label>
            </div>
            <div class="forms-block b1">
                <label>No.of.Arrears</label>
                <label class="tab3-label">{{ getStudentInformation.academicInformation.arrears }}</label>
            </div>
        </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "ReviewComponent",
    data(){
        return {
            
        }
    },
    computed : mapGetters(['getStudentInformation']),
}
</script>

<style scoped>
.tab3-label {
    height: 40px;
    border-bottom: 2px solid #dfdfdf;
}
</style>