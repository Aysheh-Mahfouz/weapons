alert("+18 AUTHORIZED only")






var age = prompt("how old are you?")
while (age < 18);


var weaponType =prompt("your weapon of choise is!", "snipers , hunting rifles")
 
while(weaponType !== "snipers" && weaponType !== "hunting rifles")
{

    weaponType =prompt("your weapon of choise is!", "snipers, hunting rifles")
}



var weaponNum =prompt('how many would you like to view?');
var image =''; 

for (var x = 1; x <=weaponNum; x++)
{
    if(weaponType === 'hunting rifles')
    {
        image = image +  '<img src="packweps.png"/ >';
    }
    else if(weaponType === 'snipers')
    {
        image += '<img src="awm2.jpg"/ >';
    } 
}
    document.write(image);



