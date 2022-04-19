import axios from "axios";

const baseUrl = 'http://127.0.0.1:8080'

const getSkills = async (skill)=> {
    let res = await axios.get(`${baseUrl}/skills`, { params: { prefix: skill }})
    return res.data.map(obj=> obj.name); 
}


const postSkill = async (skill) => await axios.post(`${baseUrl}/skill`, {"skill": skill})
   
const sendMail = async (mail)=> await axios.post(`${baseUrl}/email`, mail)
const httpClient = {

    getSkills: getSkills, 
    postSkill: postSkill,
    sendMail: sendMail

}

export default httpClient