// objects is main driect data dete hy
let teacher={
    name:"ali",
    age:25,
    exp:"5years",
}
console.log(teacher.name);//ak tareka
console.log(teacher["age"]);// dosra tareka

//type decelartion is not type alias
//is main data type dete hy jese string etc

let student:{
    name:string
    age:number
    height?:number
    education:string
}

student ={
name:"anaya",
age : 2,
education:"nursry",
height:31

}
console.log(student.height);

//anonymous main declertion wala dono part ak hi sath likhty
//
let studen:{name:string,age:number,height?:number,education:string}
studen ={
    name:"anaya",
    age : 2,
    education:"nursry",
    height:31
    }
    console.log(student.height);//koch is trahan

    //alias object type alias yahan type bnty hy
    //or multipul time use kar skty hy
    // ? ye lagany sy property optional ban jati hy
    //ye complex type jese tuple array ko define krta hy
    type student={name:string,age:number,height?:number,education:string}

let roleNumber1:student={
    name:"wamiq",
    age:5,
    education:"senior",
}
console.log(roleNumber1.age);

let roleNumber2:student={
    name:"hassan",
    age:8,
    education:"4class",
    height:4
}
console.log(roleNumber2.height);

// interfaces ki jaga type bhi use kr skty hy
//object k andr ki prperty define krty
// ye oop main use hota hy
interface person {name:string,age:number,height?:number,education:string}

let per1:person={
    name:"maiez",
    age:8,
    education:"two"
}
let per2:person={
    name:"mohriz",
    age:7,
    height:3,
    education:"2"

}

console.log(per2.name);


// structurally typing main do interface bany gy 
//or ossy first waly ko second waly main hona chhy 
// second ko first main nhi

interface bike{
    name:string,
    
}
interface car{
    name:string,
    model:string,
}

let Car:car={name:"honda",model:"200cc"}
let Bike:bike={name:"parado"}
//Car=Bike//  error
Bike=Car// no error//stole rula left ki cheze right main hoon

// steal object fresh object
let myType={name:"zia",id:2,}

//case 1

myType={name:"anaya",id:3}//sam property ki value badl skty hy
// but new prperty assign nhi kar skaty jsese yahn hum 
//{name,id, k bad ,height nhi likh skty}
// name ki id ki speeling bi sam honi chy
//case 2 object k andr extra property deni hy to is trahn hoga

type my_Type={name:string,id:number,[y:string]:any};

  var y:my_Type = {name:"wamiq",id:3,fulname:"khan"};

 var x : { name: string, id: number, [x:string]:any}

 x  = { name: "zia", id: 2, fullname:"khan"}