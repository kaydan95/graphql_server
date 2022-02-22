const userList = [
    {
        id : 1,
        name : "John",
        username : "john",
        age : 20,
        nationality : "CANADA",
        friends : [
            {
                id : 2,
                name : "Jane",
                username : "jane",
                age : 23,
                nationality : "UNITEDSTATES"
            },
            {
                id : 3,
                name : "Lina",
                username : "lina",
                age : 28,
                nationality : "SOUTHKOREA"
            },
        ]
    },
    {
        id : 2,
        name : "Jane",
        username : "jane",
        age : 23,
        nationality : "UNITEDSTATES",
        friends : [
            {
                id : 3,
                name : "Lina",
                username : "lina",
                age : 28,
                nationality : "SOUTHKOREA"
            },
        ]
    },
    {
        id : 3,
        name : "Lina",
        username : "lina",
        age : 28,
        nationality : "SOUTHKOREA"
    },
    {
        id : 4,
        name : "Sara",
        username : "sara",
        age : 25,
        nationality : "ITALY"
    },
];

const MovieList = [
    {
        id : 1,
        name : "1917",
        yearOfPublication : 2019,
        isInTheaters : true
    },
    {
        id : 2,
        name : "Her",
        yearOfPublication : 2017,
        isInTheaters : true
    },
    {
        id : 3,
        name : "Interstellar",
        yearOfPublication : 2007,
        isInTheaters : false
    },
]

module.exports = {userList, MovieList};