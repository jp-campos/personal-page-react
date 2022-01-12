export default function currAge(){
    let currDate = new Date(Date.now())

    let years = currDate.getFullYear() - 1999
    
    if(currDate.getMonth() === 1 && currDate.getDay() <29 ){
        years--;
    }
    return years;
}

function yearsExp(){
    let years = new Date(Date.now()).getFullYear() - 2020
    let yearText = years > 1 ? 'years' : 'year'
    return `${years} ${yearText}`
}

export {currAge, yearsExp}

