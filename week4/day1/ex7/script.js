// Self-invoking function
(function(username) {
    const container = document.getElementById('user-welcome-container');
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'user-welcome';
    
    // Profile picture (using placeholder API)
    const img = document.createElement('img');
    img.className = 'profile-pic';
    img.src = `https://media.licdn.com/dms/image/v2/D4E03AQFaYoPLzzM5CA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731922508529?e=1749081600&v=beta&t=ULMTmj09clW59WAR3YB5C2jtWKAnZSyF09tIyYX437s`;
    img.alt = `${username}'s profile`;
    
    // Welcome text
    const text = document.createElement('span');
    text.textContent = `Welcome, ${username}!`;
    
    // Append elements
    welcomeDiv.appendChild(img);
    welcomeDiv.appendChild(text);
    container.appendChild(welcomeDiv);
})('Yasser'); // Immediately invoked with "Yasser"