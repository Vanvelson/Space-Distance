function calculateTravelTime() {
    const planetSelect = document.getElementById('planetSelect');
    const speedInput = document.getElementById('speedInput');
    const resultDiv = document.getElementById('result');

    const planet = planetSelect.value;
    const speed = parseFloat(speedInput.value);

    const averageDistances = {
        mercury: 149.6,
        venus: 150,
        mars: 228.5,
        jupiter: 777.5,
        saturn: 1427.5,
        uranus: 2600,
        neptune: 4500,
    };

    const distance = averageDistances[planet];

    if (!isNaN(speed) && distance !== undefined) {
        const time = distance / speed;
        resultDiv.innerText = `Travel time (million hours) to ${planet.charAt(0).toUpperCase() + planet.slice(1)}: ${time.toFixed(2)} hours`;
    } else {
        resultDiv.innerText = 'Please enter a valid speed and select a planet.';
    }
}