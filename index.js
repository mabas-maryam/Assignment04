var ITStudents = [
    {
    name: "Mabas Maryam Idi",
    age:20,
    address: "Zaria Road, Jos.",
    Tribe:"Challa",
    Department:"Computer Science",
    Level: 400,
    Gender: "Female",
    Height:1.60,
    Grade:[80,100,70,85,98]
    },
    {
    name:"Oyekale Oluwatosin Alice",
    age:23,
    address: "Farin Gada",
    Tribe:"Yoruba",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.60,
    Grade:[80,60,70,85,98]
    },
    {
    name:"Bok Victoria Dung",
    age:20,
    address: "Forestry",
    Tribe:"Berom",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.58,
    Grade:[80,65,70,85,98]
    },
{
    name:"Dauda Yohanna Awari",
    age:22,
    address: "Anguwan Rukuba",
    Tribe:"Afizere",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.76,
    Grade:[80,60,71,85,98]

},
{
    name:"Emmanuel Elizabeth John",
    age:25,
    address: "Farin Gada",
    Tribe:"Ibilio",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.76,
    Grade:[80,60,70,80,98]

},
{
    name:"Bamigboye Christiana Temitope",
    age:26,
    address: "Nassarawa Gwom",
    Tribe:"Yoruba",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.76,
    Grade:[80,60,70,85,90]

},
{
    name:"Ibedu Ifeoma Franca",
    age:25,
    address: "Dogon Dutse",
    Tribe:"Igbo",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.60,
    Grade:[80,60,70,85,98]

},
{
    name:"Job Gift Eleojo",
    age:23,
    address: "Three container",
    Tribe:"Igala",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.60,
    Grade:[80,60,65,85,98]

},
{
    name:"Adams Mark Oche",
    age:16,
    address: "jos",
    Tribe:"Idoma",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.60,
    Grade:[80,60,50,85,98]

},
{
    name:"Stephen Nanret F",
    age:23,
    address: "Ring Road",
    Tribe:"Mwagavul",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.50,
    Grade:[80,40,70,85,98]

},
{
name:"Kaslong Kevin S",
    age:23,
    address: "Tundu wada",
    Tribe:"Goemai",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.75,
    Grade:[35,40,70,85,98]
},
{
    name:"Yada Martins Tisan",
    age:25,
    address: "Odus",
    Tribe:"Kagoro",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.58,
    Grade:[80,45,70,85,98]
},
{
    name:"Susan Owoicho",
    age:30,
    address: "Farin gada",
    Tribe:"Idoma",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.65,
    Grade:[80,40,70,85,98]
},
{
    name:"Josphine Sunday",
    age:25,
    address: "Odus",
    Tribe:"Eggon",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.56,
    Grade:[80,40,60,85,98]
},
{
    name:"Asalu Temitope Peter",
    age:23,
    address: "Ring Road",
    Tribe:"Yoruba",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.69,
    Grade:[80,70,70,85,98]
},
{
    name:"Uzaifat Ibrahim",
    age:24,
    address: "Dodo Street",
    Tribe:"Mwagavul",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.50,
    Grade:[70,40,70,85,98]
},
{
    name:"Ohue Joy Osedebamen",
    age:16,
    address: "Ring Road",
    Tribe:"Esan",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.50,
    Grade:[80,40,70,85,98]
},
{
    name:"Nanbal Moses Kumdam",
    age:23,
    address: "Odus",
    Tribe:"Mupun",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.50,
    Grade:[80,40,70,85,98]
},
{
    name:"Musa Deborah kibba ",
    age:23,
    address: "Odus",
    Tribe:"Berom",
    Department:"Computer Science",
    Level: 300,
    Gender: "Female",
    Height:1.50,
    Grade:[80,40,70,85,98]
},
{
    name:"Ponfah Micheal",
    age:22,
    address: "Odus",
    Tribe:"Birom",
    Department:"Computer Science",
    Level: 300,
    Gender: "Male",
    Height:1.50,
    Grade:[80,40,70,85,98]
},
]
//get the maximum Height of the person
var a = 0;
var Class = ITStudents.filter(function(values) {
if (a < values.Height) {
    a = values.Height;
}
});

// //get the full details of the person with max height
var result = ITStudents.filter(function(data) {
if (data.Height == a) {

    return data;

}

});

console.log(result)
function avg(arr) {
var num = 0;
for (var index = 0; index < arr.length; index++) {
    num = num + arr[index];
}
return num/arr.length;
}

var b = 0;
var v;
ITStudents.forEach(function(item, index, data) {

if (b < avg(item.Grade)){
    b = avg(item.Grade);
    v = index;
   // console.log(data[index]);

}


});
console.log(ITStudents[v]);