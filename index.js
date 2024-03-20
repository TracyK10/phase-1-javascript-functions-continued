// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}



function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(b = "*"){
    const day = function(x ='special'){
        return `You are ${b}${x}${b}!`
    }
    return day;
}
console.log(wrapAdjective("%")("a dedicated programmer"));