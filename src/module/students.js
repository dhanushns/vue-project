const state = {
  student: {
    personalInformation: {
      fn: '',
      ln: '',
      dob: '',
      phone_number: '',
      email: '',
      address: ''
    },
    academicInformation: {
      branch: '',
      department: '',
      section: '',
      percentage: '',
      cgpa: '',
      arrears: ''
    }
  }
}

const getters = {
  getPersonalInformation: state => state.student.personalInformation,
  getAcademicInformation: state => state.student.academicInformation,
  getStudentInformation: state => state.student
}

const actions = {
  updatePersonalInformationAction ({ commit }, personlInformation) {
    commit('mutatePersonalInformation', personlInformation)
  },

  updateAcademicInformationAction ({ commit }, academicInformation) {
    commit('mutateAcademicInformation', academicInformation)
  }
}

const mutations = {
  mutatePersonalInformation: (state, personlInformation) =>
    (state.personalInformation = personlInformation),
  mutateAcademicInformation: (state, academicInformation) =>
    (state.academicInformation = academicInformation)
}

export default {
  state,
  getters,
  actions,
  mutations
}
