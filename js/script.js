function fetchCoordinates() {
    var address = document.getElementById("address").value;
    var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCL1XRrTaL3gyWsZdfKEVEyzSp--sZACn0`;
    // Fetches data from Google Maps GeocodingAPI
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK" && data.results.length > 0) {
                var location = data.results[0].geometry.location;
                var formattedAddress = data.results[0].formatted_address;
                var placeId = data.results[0].place_id;
                var types = data.results[0].types.join(", ");
                // Display coordinates
                var coordinatesDiv = document.getElementById("coordinates");
                coordinatesDiv.innerHTML = `
                <p><strong>Address:</strong> ${formattedAddress}</p>
                <p><strong>Latitude:</strong> ${location.lat}</p>
                <p><strong>Longitude:</strong> ${location.lng}</p>
                <p><strong>Place ID:</strong> ${placeId}</p>
                <p><strong>Types:</strong> ${types}</p>
            `;
            } else {
                throw new Error("Address not found");
            }
        })
        .catch(error => {console.error('Error fetching data:', error);
            var coordinatesDiv = document.getElementById("coordinates");
            coordinatesDiv.textContent = "Error: Address not found";
        });
}
function fetchStudentInfo() {
    // Simulating fetching student info from an API
    var studentInfo = {
        id: 200549499,
        name: "Yadhu Krishna Kanjangad Santhosh"
    };

    // Display student info
    var studentInfoParagraph = document.getElementById("studentInfo");
    studentInfoParagraph.innerHTML = `<strong>Student ID:</strong> ${studentInfo.id}, <strong>Name:</strong> ${studentInfo.name}`;
}

