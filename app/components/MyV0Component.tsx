<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hiking Routes in Washington State</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        .route {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin-bottom: 15px;
        }
        .route h2 {
            color: #3498db;
            margin-top: 0;
        }
        .route p {
            margin: 5px 0;
        }
        .difficulty {
            font-weight: bold;
            color: #e74c3c;
        }
    </style>
</head>
<body>
    <h1>Hiking Routes in Washington State</h1>
    <div id="hiking-routes"></div>

    <script>
        const hikingRoutes = [
            {
                name: "Mount Rainier Wonderland Trail",
                location: "Mount Rainier National Park",
                difficulty: "Difficult",
                description: "A 93-mile loop around Mount Rainier, offering stunning views of the mountain and diverse ecosystems."
            },
            {
                name: "Hoh River Trail",
                location: "Olympic National Park",
                difficulty: "Moderate",
                description: "A 17.3-mile trail through the Hoh Rainforest, known for its lush green landscape and old-growth trees."
            },
            {
                name: "Skyline Trail",
                location: "Mount Rainier National Park",
                difficulty: "Moderate",
                description: "A 5.5-mile loop with panoramic views of Mount Rainier, wildflower meadows, and glaciers."
            },
            {
                name: "Colchuck Lake Trail",
                location: "Okanogan-Wenatchee National Forest",
                difficulty: "Moderate",
                description: "An 8-mile round trip hike to a stunning alpine lake in the heart of the Enchantments."
            },
            {
                name: "Mount Si Trail",
                location: "North Bend",
                difficulty: "Moderate",
                description: "A popular 8-mile round trip hike near Seattle, offering views of the Snoqualmie Valley and Cascade Mountains."
            },
            {
                name: "Rattlesnake Ledge Trail",
                location: "Rattlesnake Mountain Scenic Area",
                difficulty: "Easy",
                description: "A 4-mile round trip hike with stunning views of the Snoqualmie Valley and Rattlesnake Lake."
            },
            {
                name: "Chain Lakes Loop",
                location: "Mount Baker Wilderness",
                difficulty: "Moderate",
                description: "A 7.5-mile loop trail featuring alpine lakes, wildflower meadows, and views of Mount Baker and Mount Shuksan."
            },
            {
                name: "Maple Pass Loop",
                location: "North Cascades",
                difficulty: "Moderate",
                description: "A 7.2-mile loop offering spectacular views of Lake Ann, Rainy Lake, and the surrounding peaks."
            }
        ];

        function displayHikingRoutes() {
            const container = document.getElementById('hiking-routes');
            hikingRoutes.forEach(route => {
                const routeElement = document.createElement('div');
                routeElement.className = 'route';
                routeElement.innerHTML = `
                    <h2>${route.name}</h2>
                    <p><strong>Location:</strong> ${route.location}</p>
                    <p><strong>Difficulty:</strong> <span class="difficulty">${route.difficulty}</span></p>
                    <p>${route.description}</p>
                `;
                container.appendChild(routeElement);
            });
        }

        displayHikingRoutes();
    </script>
</body>
</html>
