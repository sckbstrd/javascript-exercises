const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const sortedByAge = arr.sort((a, b) => ((b.yearOfDeath || currentYear)- b.yearOfBirth) - ((a.yearOfDeath || currentYear)- a.yearOfBirth));
    const oldest = sortedByAge[0];
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
