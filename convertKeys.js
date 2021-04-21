function convertKeys(dateAndValue) {
    const dayValues = {}
    // to calculate daySting see below
    // caluoptions can be year,weak.. see mdn
    const options = {weekday: 'long'}
    for (const date in dateAndValue){
        // creating dates for the each keys
        singeDate = new Date(date)
        // finding respective day on that day
        // should pass options as second argument to work
        dayString = singeDate.toLocaleDateString(undefined,options)
        // Add the key value to the respective day
        findAndAssign(dayValues,dayString,dateAndValue[date])
    }
    return dayValues
}

function findAndAssign(dayValues,dayString,value){
    // adding value to the existing value of the key(day) if exists
    if (dayValues[dayString]){
        dayValues[dayString] = dayValues[dayString] + value
    }
    // assigning key value pair if the day is not already there
    else{
        dayValues[dayString] = value
    }
}

module.exports = convertKeys
