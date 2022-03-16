const baseUrl = 'localhost:8080'

const getSkills = (skill)=> {
    return new Promise((resolve, reject)=>{

        setTimeout(()=>resolve(['Scala', 'Haskell', 'Excel', 'Ionic', 'Apache Camel']),
        500
        )
    })
}

const httpClient = {

    getSkills: getSkills 

}



const postSkill = (skill) =>{ 

}

export default httpClient