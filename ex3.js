//assosiatiivinen array on array, jossa kentät on nimetty

const bookData=[
    {'name' :"C++", 'author' :"Jim Smith"},
    {'name' :"Java", 'author' :"Lisa Jones"},
    {'name' :"MySQL", 'author' :"Bob Danieles"}
];

//tulostetaan koko array
console.log("koko array:");
console.log(bookData);
//tulostetaan toinen rivi
console.log("toinen rivi");
console.log(bookData[1]);
//yksittäinen kenttä
console.log("ensimmäinen nimi:");
console.log(bookData[0]["name"]);

console.log("ensimmäinen author:");
console.log(bookData[0]["author"]);