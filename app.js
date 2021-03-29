alert("+18 AUTHORIZED only")






var year = prompt("year of birth?")

function calAge() {

    var result = 2021 - year
    console.log(result)

    return result
}

var result = calAge()

while (result < 18) {
    var year = prompt("year of birth?")
    result = calAge()
    console.log(result)
}




var weaponType = prompt("your weapon of choise is!", "snipers , hunting rifles")

while (weaponType !== "snipers" && weaponType !== "hunting rifles") {

    weaponType = prompt("your weapon of choise is!", "snipers, hunting rifles")
}



var weaponNum = prompt('how many would you like to view?');
var image = '';

for (var x = 1; x <= weaponNum; x++) {
    if (weaponType === 'hunting rifles') {
        image = image + '<img src="packweps.png"/ >';
    }
    else if (weaponType === 'snipers') {
        image += '<img src="awm2.jpg"/ >';
    }
}
document.write(image);



