const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// 1. Console.log the number of floors in the building.
console.log("Number of floors:", building.numberOfFloors);

// 2. Console.log how many apartments are on the floors 1 and 3.
const aptFirstFloor = building.numberOfAptByFloor.firstFloor;
const aptThirdFloor = building.numberOfAptByFloor.thirdFloor;
console.log(`Apartments on floor 1: ${aptFirstFloor}, floor 3: ${aptThirdFloor}`);

// 3. Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building.nameOfTenants[1]; // Dan
const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`Second tenant: ${secondTenant}, number of rooms: ${danRooms}`);

// 4. Check if the sum of Sarah's and David's rent is bigger than Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent has been increased to 1200");
} else {
    console.log("Dan's rent remains unchanged");
}

// Verification
console.log("Updated building object:", building);