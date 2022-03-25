import axios from "axios";

const baseUrl = 'http://127.0.0.1:8080'

const getSkills = async (skill)=> {
    let res = await axios.get(`${baseUrl}/skills`, { params: { prefix: skill }})
    return res.data.map(obj=> obj.name); 
}


const postSkill = async (skill) =>{ 
    let res = await axios.post(`${baseUrl}/skills`, {"skill": skill})
}
const httpClient = {

    getSkills: getSkills, 
    postSkill: postSkill

}





export default httpClient