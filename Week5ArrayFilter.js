//1. Given an array of numbers, return a new arrray that has only the numbers that are 5 greater

function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if (num >= 5)
            return num;
    });
    return result;
}
console.log("Output #1: " + fiveAndGreaterOnly([3, 6, 8, 2]));


//2. Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr){
    const result = arr.filter(function(num){
        if (num % 2 == 0)
            return num;
    });
    return result;
}
console.log("Output #2: " + evensOnly([3, 6, 8, 2]));

//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.

function fiveCharactersOrFewerOnly(arr){
    const result = arr.filter(function(character){
        if (character.length <= 5)
            return character;
    });
    return result;
}
console.log("Output #3: " + fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
    const result = arr.filter(function(name){
        
        if (name.member === true)
            return name.member;
        });
        console.log (result)
    return result;
}
console.log("Output #4: ")
  peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kanye West", member: false },
    { name: "Bob Ziroll", member: true }
]);

//5. Make a filtered list of all the people who are old enough to see The Matrix (younger than 18)

function ofAge(arr){
    const result = arr.filter(function(rainbows){
        console.log(rainbows.age)
        if(rainbows.age >= 18)
            return rainbows.age;
        });
    return result
}
console.log("Output #5: " , ofAge([
    { name: "Angeline Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton" , age: 5 },
    { name: "Kanye West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

// //.map
// //1. Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num + num
    });
    return result;
}
console.log("Output.map #1: " + doubleNumbers([2,5,100]));

// //2. Take an array of numbers and make them strings

function stringItUp(arr){
    const result = arr.map(function(string){
        return string
    });
    return result;
}
console.log("Output.map #2: " + stringItUp([2, 5, 100]));

// //3. Capitalize each of an array of names

function capitalizeNames(arr){
    const result = arr.map(function(name){
        return name.toUpperCase();
    });
    return result;
}
console.log("Output.map #3: " + capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// //4. Make an array of strings of the names

function namesOnly(arr){
    const result = arr.map(function(arr){
        return arr.name
    });
    return result;
}
console.log("Output.map #4: " + namesOnly([
{
    name: "Angelina Jolie",
    age: 80
},
{ 
    name: "Eric Jones",
    age: 2
},
{
    name: "Paris Hilton",
    age: 5
},
{
    name: "Kanye West",
    age: 16
},
{
    name: "Bob Ziroll",
    age: 100
}
]));

// //5. Make an array of strings of the names saying whether or not they can go to The Matrix.

function makeStrings(arr){
    const result = arr.map(function(strings){
        if(age <= 18)
        return names + ("can go to The Matrix");
    });
    return results;
}
console.log("Output.map #5 " + namesOnly([
    {
    name: "Angelina Jolie",
    age: 80
    },
    { 
    name: "Eric Jones",
    age: 2
    },
    {
    name: "Paris Hilton",
    age: 5
    },
    {
    name: "Kanye West",
    age: 16
    },
{
    name: "Bob Ziroll",
    age: 100
    }
]));

// //6. Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDom(arr){
    const result = arr.map(function(name){
        return name
    });
    return results;
}
    console.log("Output.map #6: " + namesOnly([
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kanye West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]));

//     //reduce
//     //1. Turn an array of numbers into a total of all the numbers

    function total(arr){
        const result = arr.reduce(function(finalAddition, num){
            finalAddition = finalAddition + num;
            return finalAddition;
        });
        return result;
        }
    console.log("Output.reduce #1: " + total([1,2,3]));

// //2. Turn an array of numbers into a long string of all those numbers

    function stringConcat(arr){
        const results = arr.reduce(function(num1, num2, num3){
            final =  num1, num2, num3
            return final;
        });
        return results;
    }
    console.log("Output.reduce #2: " + stringConcat([1,2,3]));

//     //3. Turn an array of voter objects into a count of how many people voted

function totalVotes(arr){
    return arr.reduce(function(a,b) {
        return a + b.voted
    },0)
}
    var voters = [
        {name: 'Bob' , age: 30, voted: true},
        {name: 'Jake', age: 32, voted: true},
        {name: 'Kate', age: 25, voted: false},
        {name: 'Sam', age: 20, voted: false},
        {name: 'Phil', age: 21, voted: true},
        {name: 'Ed', age: 55, voted: true},
        {name: 'Tami', age: 54, voted: true},
        {name: 'Mary', age: 21, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {naem: 'Zack', age: 19, voted: false},
    ];
   
    console.log("Output.reduce #3: " + totalVotes(voters));

// //4. Given an array of all your wishlist items, figure out how much it would cost to just vuy everything at once.

function shoppingSpree(arr) {
    return wishlist.map(x=>x.price).reduce((a,b)=>a+b);

}

   var wishlist = [
       { title: "Tesla Model S", price: 90000 },
       { title: "4 carat diamond ring", price: 45000 },
       { title: "Fancy hacky Sack", price: 5 },
       { title: "Gold fidgit spinner", price: 2000 },
       { title: "A second Tesla Model S", pice: 90000 }
   ];
   
   console.log("Output.reduce #4: " + shoppingSpree(wishlist));
   

// //5. Given an array of arrays, flatten them into a single array

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten){
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
}, []);
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log("Output.reduce #4: " + flatten(arrays));

// //6. Given an array of potential voters, return an object representing the results of the vote.

var voters = [
    {name: 'Bob' , age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 21, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {naem: 'Zack', age: 19, voted: false},
];
function voterResults()
    {
        var name = 1;

        for (i=0; i < voterResults.age; ++i)
            {
                total += votes[i];
            }
            return name;
    }
    

    console.log("Output.reduce #6: " + voterResults(voterResults))

//     //Sort

//1. Sort an array from smallest number to largest

    

    var arr = [1, 3, 5, 2, 90, 20]
    arr.sort(function(a, b){
        return a-b
    });

    console.log("Output.sort #1: " + (arr))

//2. Sort any array from larget number to smallest

var arr = [1, 3, 5, 2, 90, 20]
    arr.sort(function(a, b){
        return b-a
    });

    console.log("Output.sort #2: " + (arr))

// //3. Sory an array from shortest string to longest

var my_array = ['dog','wolf','by','family','eaten'];

my_array.sort(function(a,b){
  return a.length - b.length; 
});

console.log("Output.sort #3: " +  my_array);


//4. Sort an array alphabetically

var nonSortedArray = ['dog','wolf','by','family','eaten'];
var sortedArray = nonSortedArray.sort(function (a, b) {
      if (a < b) return -1;
      else if (a > b) return 1;
      return 0;
    });
console.log("Output.sort #4: " +sortedArray);

//5. Sort the objects in the array by age

var people = [
    { name: "Quiet Samauri", age: 22},
    { name: "Arrogant Ambassador", age: 100},
    { name: "Misunderstood Observer", age: 2},
    { name: "Unlucky Swami", age: 7} 
];

    people.sort(
        function(a, b) { 
        return  a.age - b.age
    
        }
        
    );

console.log("Output.sort #5: " + people)

