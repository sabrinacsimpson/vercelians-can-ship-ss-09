import React from 'react';

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
  }
];

export default function HikingRoutes() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#2c3e50' }}>Hiking Routes in Washington State</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {hikingRoutes.map((route, index) => (
          <li key={index} style={{ 
            backgroundColor: '#f9f9f9', 
            border: '1px solid #ddd', 
            borderRadius: '5px', 
            padding: '15px', 
            marginBottom: '15px' 
          }}>
            <h2 style={{ color: '#3498db', marginTop: 0 }}>{route.name}</h2>
            <p><strong>Location:</strong> {route.location}</p>
            <p><strong>Difficulty:</strong> <span style={{ color: '#e74c3c' }}>{route.difficulty}</span></p>
            <p>{route.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
