document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('MyForm');
    const radiusInput = document.getElementById('radius');
    const volumeInput = document.getElementById('volume');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get radius value and convert to number
        const radius = parseFloat(radiusInput.value);
        
        // Validate input
        if (isNaN(radius) || radius <= 0) {
            alert('Please enter a valid positive number for radius');
            return;
        }
        
        // Calculate volume (V = (4/3) * π * r³)
        const volume = (4/3) * Math.PI * Math.pow(radius, 3);
        
        // Display result with 4 decimal places
        volumeInput.value = volume.toFixed(4);
    });
    
    // Optional: Clear volume field when radius changes
    radiusInput.addEventListener('input', function() {
        volumeInput.value = '';
    });
});