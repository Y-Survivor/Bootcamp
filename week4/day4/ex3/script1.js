const marioGame = {
    detail: "An amazing game!",
    characters: {
      mario: {
        description: "Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser: {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach: {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
    },
  };
  
  // Convert to JSON
  const marioGameJSON = JSON.stringify(marioGame);
  console.log(marioGameJSON);

  // 2. Pretty-print the JSON object
// To pretty-print the JSON with proper indentation (2 spaces in this example), 
// pass additional parameters to JSON.stringify():

const marioGamePrettyJSON = JSON.stringify(marioGame, null, 2);
console.log(marioGamePrettyJSON);

// This will output:

{
    "detail": "An amazing game!",
    "characters": {
      "mario": {
        "description": "Small and jumpy. Likes princesses.",
        "height": 10,
        "weight": 3,
        "speed": 12
      },
      "bowser": {
        "description": "Big and green, Hates princesses.",
        "height": 16,
        "weight": 6,
        "speed": 4
      },
      "princessPeach": {
        "description": "Beautiful princess.",
        "height": 12,
        "weight": 2,
        "speed": 2
      }
    }
  }

  /* 3. Debugging with Web Inspector
To inspect the JSON object in the debugger:

Open Developer Tools (F12 or right-click → Inspect).

Go to the Sources tab.

Find your JavaScript file and add a breakpoint (click on the line number) where you want to pause execution (e.g., after JSON.stringify).

Reload the page to trigger the breakpoint.

In the Scope panel, you can inspect the values of marioGame, marioGameJSON, and marioGamePrettyJSON.*/