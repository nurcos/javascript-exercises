let findTheOldest = function(people) {

  let currentOldest = people[0];

  for (i = 0; i < people.length-1; i++){
    let currentPerson = people[i+1];

    if(people[i].yearOfDeath == undefined){
      people[i].yearOfDeath = new Date().getFullYear();
    }

    if((currentOldest.yearOfDeath - currentOldest.yearOfBirth) < (currentPerson.yearOfDeath - currentPerson.yearOfBirth)){
      currentOldest = people[i+1];
    }
  }

  return currentOldest.name;


}

module.exports = findTheOldest
