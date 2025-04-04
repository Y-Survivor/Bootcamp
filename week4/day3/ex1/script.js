// 1. The Object Definition
// First, we have an object named person defined as follows:

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}
/* This person object has three properties:
 name: A string with the value 'John Doe'.
 age: A number with the value 25.
 location: An object itself, which has:
 country: 'Canada'
 city: 'Vancouver'
 coordinates: An array [49.2827, -123.1207].*/

// 2. Object Destructuring
// Next, we see a destructuring assignment:

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

/* This line is extracting values from the person object and assigning them to variables. 
Let's dissect it:
const { ... } = person;: This means we're destructuring the person object.
Inside the curly braces:
name: This directly extracts person.name and assigns it to a variable name.
location: {country, city, coordinates: [lat, lng]}: This is nested destructuring.
It's saying: look for person.location, and then within location, extract:
country: assigns person.location.country to country.
city: assigns person.location.city to city.
coordinates: [lat, lng]: further destructures the coordinates array.

lat will be the first element (49.2827).

lng will be the second element (-123.1207).

After this destructuring, we have the following variables with their respective values:

name: 'John Doe'

country: 'Canada'

city: 'Vancouver'

lat: 49.2827

lng: -123.1207 */

// 3. The Console Log Statement
// Finally, we have a console.log statement that uses template literals (enclosed in backticks `)
// to construct a string:

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

/* Let's substitute the variables with their actual values:

${name}: 'John Doe'

${city}: 'Vancouver'

${country}: 'Canada'

${lat}: 49.2827

${lng}: -123.1207

So, the string becomes:

"I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)" */

// 4. Expected Output
// Therefore, when this code is executed, the output printed to the console will be:


I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Verifying the Output
// To ensure our understanding is correct, let's quickly run through the destructuring assignments:

/* name is person.name → 'John Doe'.

country is person.location.country → 'Canada'.

city is person.location.city → 'Vancouver'.

coordinates is [49.2827, -123.1207], so:

lat is coordinates[0] → 49.2827.

lng is coordinates[1] → -123.1207.

Plugging these into the template string gives us the expected output.*/