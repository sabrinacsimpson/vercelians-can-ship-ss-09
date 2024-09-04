import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

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
]

export default function Component() {
  return (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      <h2 className="text-2xl font-bold mb-4">Hiking Routes in Washington State</h2>
      <div className="grid gap-4">
        {hikingRoutes.map((route, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{route.name}</CardTitle>
              <CardDescription>{route.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="mb-2">{route.difficulty}</Badge>
              <p>{route.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  )
}
