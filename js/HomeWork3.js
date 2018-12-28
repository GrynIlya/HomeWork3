//первое задание

let myString = 'I love this world';
console.log(myString.length);
if (myString.length<10){
    console.log(myString[0]);
    console.log(myString[1]);
    console.log(myString[2]);
    console.log(myString[3]);
    console.log(myString[4]);
    console.log(myString[5]);
    console.log(myString[6]);
    console.log(myString[7]);
    console.log(myString[8]);
}else {
    console.log(myString.substr(0,7));
    console.log(myString.substr(9));
}

//второе задание

//первый вариант решения.честно сказать нашел его в интернете,что там написано понимаю только от части

 myString = 'I love this world';

function capitalize(str) {
    return myString.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
    console.log(capitalize(myString));

//второй вариант решения мой собственный

 myString = 'I love this world';

let arr = myString.split(' ');

for (var i = 0; i < arr.length; i++) {
    arr[i] = [arr[i].charAt(0).toUpperCase()+arr[i].substring(1)];
}
let myStringUpperCase=arr.join(' ');
console.log(myStringUpperCase);