import axios from "axios"

const baseURL = "http://localhost:3000/employees";

export const getEmployees = async () =>{

    return await axios.get(baseURL)
    .then(res=>res.data)
    .catch(err=>err)

}

export const getEmployeeById = async (empId) =>{

    return await axios.get(baseURL + "/" + empId)
    .then(res=>res)
    .catch(err=>err)

}

export const updateEmployee = async (empId,employee) =>{
    return await axios.patch(baseURL + "/" + empId,employee)
    .then(res=>res)
    .catch(err=>err)
}

export const addEmployee = async (employee) =>{
    return axios.post(baseURL,employee)
    .then(res=>res)
    .catch(err=>err)
}

export const deleteEmployee = async (empId) =>{
    return axios.delete(baseURL + "/" + empId)
    .then(res=>res).catch(err=>err)
}