import { ImageGrid, ImageItem } from "../components/ImageGrid";
import { assetUrl } from "../lib/utils";

export const projectItems: ImageItem[] = [
  {
    id: "gathering-stage",
    src: assetUrl("images/catelo-cover.jpg"),
    title: "THE GATHERING STAGE",
    subtitle: "Candelo, Italy",
    description:
      "Conceived as a precise insertion within an irregular urban fabric, the project operates less as an object building than as a spatial instrument that reorganizes movement, visibility, and collective life.Through the integration of diverse public amenities, the project supports sports, performances, markets, and everyday social activities, transforming the site into a vibrant civic stage active year-round.",
    detailedImages: [
      { caption: "Overview", url: assetUrl("images/main-2.jpeg") },
      { caption: "Entrance", url: assetUrl("images/entrance2.jpeg") },
      { caption: "Ramp and Platform", url: assetUrl("images/longitutinal.jpeg") },
      { caption: "Diagram", url: assetUrl("images/catelo-diagram.jpg") },
      { caption: "Masterplan", url: assetUrl("images/masterplan--01.png") },
      { caption: "Activities", url: assetUrl("images/catelo-diagram2.jpg") },
      { caption: "Piazza", url: assetUrl("images/square1.png") }
    ],
    projectInfo: {
      type: "Urban Intervention",
      time: "2026",
      members: "Mengyuan Li, Yue Zhong, Yujie Wang"
    }
  },

  {
    id: "pilgrims-heaven",
    src: assetUrl("images/church-cover.jpg"),
    title: "PILGRIMS HEAVEN",
    subtitle: "San Pietro, Italy",
    description:
      "The design extends like a hand, gently guiding souls through a sacred passage from the ordinary world to a realm of the divine, where thresholds whisper of transcendence, marking the journey’s start.In the spaces between, the walls hum with life, echoing the pilgrim’s steps and weaving them into the heartbeat of the sanctuary.\n\nHere, architecture is both invitation and reflection, a quiet conversation between the seeker and the sacred. It kindles the spirit’s hunger for truth.",
    detailedImages: [
      { caption: "Overview", url: assetUrl("images/church-render.jpeg") },
      { caption: "Entrance", url: assetUrl("images/rendering.png") },
      { caption: "Diagram", url: assetUrl("images/isometric2-01.png") },
      { caption: "Plan", url: assetUrl("images/plans.jpg") },
      { caption: "Detail of New Construction and Terrace", url: assetUrl("images/detial.png") }
    ],
    projectInfo: {
      type: "Historical Building Intervention",
      time: "2025",
      members: "Lijin Zhao, Yue Zhong"
    }
  },

  {
    id: "live-with-water",
    src: assetUrl("images/mo-cover.jpg"),
    title: "LIVE WITH WATER",
    subtitle: "Maputo, Mozambique",
    description:
      "Our proposal begins with water. Long a source of vulnerability, it becomes here an instrument of renewal. By reimagining the drainage system as both infrastructure and public space, the project transforms channels of risk into corridors of life.The design operates through three interwoven strategies: the restoration of the drainage network, the introduction of flexible spatial systems, and the careful insertion of public buildings. Together, these elements form a layered response—fixed and adaptable—anchored in the rhythms of water.This transformation is not imposed, but cultivated—shaped through the collaboration between public institutions and local residents. In Maxaquene A, infrastructure becomes landscape, and landscape becomes a stage for everyday life.",
    detailedImages: [
      { caption: "Topography of Maputo", url: assetUrl("images/maputo-site.jpg") },
      { caption: "Urban drainage system", url: assetUrl("images/maputo-diagram.jpg") },
      { caption: "Flooding and Social Problems", url: assetUrl("images/maputo-map1.jpg") },
      { caption: "General Scheme", url: assetUrl("images/maputo-Water-circulation.jpg") },
      { caption: "Public Space", url: assetUrl("images/maputo_Public-space.jpg") },
      { caption: "Rainy Season and Dry Season", url: assetUrl("images/maputo-section.jpg") }
    ],
    projectInfo: {
      type: "Urban Design",
      time: "2021",
      members: "Ege Balibek, Peichun Jiang, Yue Zhong"
    }
  },

  {
    id: "secret-garden",
    src: assetUrl("images/sg-cover.jpg"),
    title: "SECRET GARDEN",
    subtitle: "Jerez, Spain",
    description:
      "We marvel at this rare, ingenious work of nature in the city, and any human intervention would spoil its beauty. So we keep all traces of natural creation and turn human intervention into an exploration. We leave clues in the garden (paths hidden among trees, translucent glass archways, tall towers, plant fences, peeping holes...), waiting for each explorer to come.",
    detailedImages: [
      { caption: "Concept", url: assetUrl("images/Sg-concept.png") },
      { caption: "Overview", url: assetUrl("images/Sg-overview.jpeg") },
      { caption: "Map", url: assetUrl("images/Sg-map.jpeg") },
      { caption: "Scheme", url: assetUrl("images/Sg_map-scheme.png") },
      { caption: "Architecture", url: assetUrl("images/Sg-Reno-scheme.jpeg") },
      { caption: "Section", url: assetUrl("images/Sg-plan-section.jpeg") },
      { caption: "Experience", url: assetUrl("images/Sg-render2.png") },
      { caption: "Experience", url: assetUrl("images/Sg-render1.png") }
    ],
    projectInfo: {
      type: "Renovation",
      time: "2019",
      members: "Lijin Zhao, Yue Zhong"
    }
  },

  {
    id: "natural-museum",
    src: assetUrl("images/museo-cover.jpg"),
    title: "NATURAL MUSEUM",
    subtitle: "Harbin, China",
    description:
      "The design of this museum is a top-down process, with the concept that the landscape and nature itself become the climax of the exhibition tour. From the surrounding environment to the building form and function, we hope to find a balance between the natural environment and human activities, so that the museum, which is in the center of Yabuli town, can not only integrate into the natural environment but also attract tourists and residents on the other side of the lake, becoming an important part of the public environment and a new landmark of the town. The design is inspired by the natural landscape of Yabuli, with its rolling hills, dense forests, and serene lakes. The building form is designed to mimic the organic shapes found in nature, with flowing curves and a harmonious integration with the surrounding environment. The museum's layout is organized around a central courtyard, which serves as a gathering space for visitors and allows for natural light to penetrate the interior spaces. The exhibition spaces are designed to be flexible and adaptable, allowing for a wide range of exhibits and events to be hosted throughout the year. Overall, the design of this natural museum aims to create a unique and immersive experience for visitors while also respecting and celebrating the natural beauty of its surroundings.",
    detailedImages: [
      { caption: "Overview", url: assetUrl("images/museum_overview.jpg") },
      { caption: "Entrance", url: assetUrl("images/museum-Entrance-View.jpeg") },
      { caption: "Gallery", url: assetUrl("images/museum-Gallery-Inward.jpeg") },
      { caption: "Gallery", url: assetUrl("images/museum-Gallery-outward.jpeg") },
      { caption: "Skiing Context", url: assetUrl("images/museum-Ski-Resort.jpeg") },
      { caption: "Form", url: assetUrl("images/museum-Form-and-Context.jpeg") },
      { caption: "Plan B1", url: assetUrl("images/museum-Plan-B1.jpeg") },
      { caption: "Plan Groundfloor", url: assetUrl("images/museum-Plan-GroundFloor.jpeg") }
    ],
    projectInfo: {
      type: "Public Building Design",
      time: "2018",
      members: "Qingyi Wu, Yue Zhong"
    }
  }
];

export function Project() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <ImageGrid items={projectItems} basePath="project" />
      </div>
    </div>
  );
}

