// Code your solution in this file!
let returnFirstTwoDrivers = (driversArray1) => {
    const copyDrivers1 = [...driversArray1]
    return copyDrivers1.slice(0,2)
}
let returnLastTwoDrivers = (driversArray2) => {
    const copyDrivers2 = [...driversArray2]
    return copyDrivers2.slice(-2)
}
let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier (multiplier) {

    function faremultiplier(fare) {
        return multiplier * fare
    }
      

    return faremultiplier
}
     
let fareDoubler = (fare2) => {
    return fare2 * 2
}
      

    function fareTripler(fare3){
        return fare3 * 3
    }
    
let selectDifferentDrivers = (drivers, returnDrviersfunction) =>{
    if (returnDrviersfunction === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    } if (returnDrviersfunction === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers)
    }
}