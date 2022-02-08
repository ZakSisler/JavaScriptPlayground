function createMadLib() {
    //User Input
    let userForeign = document.getElementById('tbForeignCountry').value;
    let userAdjective = document.getElementById('tbAdjective').value;
    let userAnimal = document.getElementById('tbAnimal').value;
    let userVerb = document.getElementById('tbVerb').value;
    let userPlace = document.getElementById('tbPlace').value;
    let userLiquid = document.getElementById('tbLiquid').value;

    //Out
    let foreignCountry = document.getElementById('mad-lib')
    let adjective = document.getElementById('mad-lib')
    let animal = document.getElementById('mad-lib')
    let verb = document.getElementById('mad-lib')
    let place = document.getElementById('mad-lib')
    let liquid = document.getElementById('mad-lib')

    //Display
    foreignCountry.textContent = 'If you are traveling in ' + userForeign + ' and find yourself having to cross a piranha-filled river, here"s how to do it safely. Piranhas are more ' + userAdjective + ' during the day so cross the river at night. Avoid areas with netted ' + userAnimal + ' traps - piranhas may be waiting there looking to '+ userVerb + ' them! Piranhas are attracted to fresh ' + userPlace + ' and will migrate to it as often as possible. Whatever you do, if you have an open wound, try to find another way to get back to the ' + userLiquid + '.'
}

///////////MULTIPLE of 7////////

function displaySeven() {
    let looperSeven = document.getElementById('multiple-seven');

    for (var i = 0; i <= 30; i += 7) {
        looperSeven.innerHTML += i + '<br/>';
    }
    
}



