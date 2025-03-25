// 1. Create a family object
const family = {
    father: "John",
    mother: "Mary",
    son: "Mike",
    daughter: "Anna",
    pet: "Rex"
};

// 2. Using for...in loop to log the keys
console.log("Family member roles (keys):");
for (let key in family) {
    console.log(key);
}

// 3. Using for...in loop to log the values
console.log("\nFamily member names (values):");
for (let key in family) {
    console.log(family[key]);
}