const people = [{'age' : 10, firstName : 'Matthieu'}, {'age' : 20, firstName : 'Maxime'}]

//AVANT

const adults = [], minors = []
people.forEach(function (person) {
    if (person.age >= 18) {
        adults.push(person)
    } else {
        minors.push(person)
    }
})
people.map(function (person) {
    return person.firstName
})

//APRES

const adults = [], minors = []
people.forEach((person) => {
    if (person.age >= 18)
    {
        adults.push(person)
    }
    else
    {
        minors.push(person)
    }
})

people.map((person) => person.firstName)