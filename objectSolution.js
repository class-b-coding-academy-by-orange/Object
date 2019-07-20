console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
var aboutMe = {
  firstName: "Alex",
  lastName: "Mercer",
  age: 25,
  dob: "21/7/1994",
  favoriteFood: ["Fried Chicken"],
  favoriteMovie: ["up", "3 idiots", "saw"]
};






var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(arr) {
  var array = []
  for (var i = 0; i < arr.length; i++) {
    array.push(arr[i].name.first);
  }
  return array
}

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result = result + arr[i].age;
  }
  return result / arr.length;
}

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(arr) {
  var maxAge = arr[0].age;
  var indexOlder = 0;
  for (var i = 1; i < arr.length; i++) {
    if (maxAge < arr[i].age) {
      maxAge = arr[i].age;
      indexOlder = i;
    }
  }
  return arr[indexOlder].name.first + " " + arr[indexOlder].name.last;
}

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(arr) {
  var maxName = arr[0].name.first.length + arr[0].name.last.length;
  var indexLongestName = 0;
  for (var i = 1; i < arr.length; i++) {
    if (maxName < arr[i].name.first.length + arr[i].name.last.length) {
      maxName = arr[i].name.first.length + arr[i].name.last.length;
      indexLongestName = i;
    }
  }
  return arr[indexLongestName].name.first + " " + arr[indexLongestName].name.last;
}
/*
Delete Question 6
Duplicate
*/
//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(str) {
  var arr = str.split(' ');
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i].toLowerCase()]) {
      obj[arr[i].toLowerCase()] += 1
    } else {
      obj[arr[i].toLowerCase()] = 1
    }
  }
  return obj;
}


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
function repeatChar(str) {
  var arr = str.split('');
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i].toLowerCase()]) {
      obj[arr[i].toLowerCase()] += 1
    } else {
      obj[arr[i].toLowerCase()] = 1
    }
  }
  return obj;
}

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr) {
  var result = {}
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i].toLowerCase()]) {
      result[arr[i].toLowerCase()] = obj[arr[i].toLowerCase()]
    }
  }
  return result;
}

/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj) {
  var result = [];
  for (var key in obj) {
    result.push(key)
    result.push(obj[key])
  }
  return result;
}

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
  }
  return obj;
}


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/

function onlyNumber(obj) {
  var result = {}
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      result[key] = obj[key];
    }
  }
  return result;
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/

function onlyString(obj) {
  var result = {}
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      result[key] = obj[key];
    }
  }
  return result;
}

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"],a:{b:1,c:4}})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  var result = {}
  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(obj) {
  var result = [];
  for (var key in obj) {
    result.push(key);
  }
  return result;
}

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj) {
  var result = [];
  for (var key in obj) {
    result.push(obj[key]);
  }
  return result;
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/

var obj = { a: 1, b: 3, c: 4 };

delete obj.b;
obj.c = 66;
obj.a = 4;

/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: objectLength({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj) {
  return Object.keys(obj).length
}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj) {
  result = {}
  for (var key in obj) {
    if (obj[key] % 2 === 0) {
      result[key] = obj[key];
    }
  }
  return result;
}


/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: longestKey({car:1, school:2, monster:3, alexMercer:4})
=> 4
*/
function longestKey(obj) {
  max = "";
  for (var key in obj) {
    console.log(typeof key, key, key.length)
    if (max.length < key.length) {
      max = key;
    }
  }
  return obj[max];
}