import { ImageGrid, ImageItem } from "../components/ImageGrid";

export const projectItems: ImageItem[] = [
  {
    id: "gathering-stage",
    src: "/images/catelo cover.jpg",
    title: "THE GATHERING STAGE",
    subtitle: "Candelo, Italy",
    description:
      "Conceived as a precise insertion within an irregular urban fabric, the project operates less as an object building than as a spatial instrument that reorganizes movement, visibility, and collective life.\n\nThrough the integration of diverse public amenities, the project supports sports, performances, markets, and everyday social activities, transforming the site into a vibrant civic stage active year-round.",
    detailedImages: [
      { caption: "Overview", url: "/images/main-2.jpeg" },
      { caption: "Entrance", url: "/images/entrance2.jpeg" },
      { caption: "Ramp and Platform", url: "/images/longitutinal.jpeg" },
      { caption: "Diagram", url: "/images/catelo diagram.jpg" },
      { caption: "Masterplan", url: "/images/masterplan--01.png" },
      { caption: "Activities", url: "/images/catelo diagram2.jpg" },
      { caption: "Piazza", url: "/images/square1.png" }
    ],
    projectInfo: {
      type: "Urban Intervention",
      time: "2026",
      members: "Mengyuan Li, Yue Zhong, Yujie Wang"
    }
  },

  {
    id: "pilgrims-heaven",
    src: "/images/church cover.jpg",
    title: "PILGRIMS HEAVEN",
    subtitle: "San Pietro, Italy",
    description:
      "The design extends like a hand, gently guiding souls through a sacred passage from the ordinary world to a realm of the divine, where thresholds whisper of transcendence, marking the journey’s start.\n\nIn the spaces between, the walls hum with life, echoing the pilgrim’s steps and weaving them into the heartbeat of the sanctuary.\n\nHere, architecture is both invitation and reflection, a quiet conversation between the seeker and the sacred. It kindles the spirit’s hunger for truth.",
    detailedImages: [
      { caption: "Overview", url: "/images/church render.jpeg" },
      { caption: "Entrance", url: "/images/rendering.png" },
      { caption: "Diagram", url: "/images/isometric2-01.png" },
      { caption: "Plan", url: "/images/plans.jpg" },
      { caption: "Detail of New Construction and Terrace", url: "/images/detial.png" }
    ],
    projectInfo: {
      type: "Historical Building Intervention",
      time: "2025",
      members: "Lijin Zhao, Yue Zhong"
    }
  },

  {
    id: "live-with-water",
    src: "/images/mo cover.jpg",
    title: "LIVE WITH WATER",
    subtitle: "Maputo, Mozambique",
    description:
      "Our proposal begins with water. Long a source of vulnerability, it becomes here an instrument of renewal. By reimagining the drainage system as both infrastructure and public space, the project transforms channels of risk into corridors of life.\n\nThe design operates through three interwoven strategies: the restoration of the drainage network, the introduction of flexible spatial systems, and the careful insertion of public buildings. Together, these elements form a layered response—fixed and adaptable—anchored in the rhythms of water.\n\nThis transformation is not imposed, but cultivated—shaped through the collaboration between public institutions and local residents. In Maxaquene A, infrastructure becomes landscape, and landscape becomes a stage for everyday life.",
    detailedImages: [
      { caption: "Topography of Maputo", url: "/images/maputo site.jpg" },
      { caption: "Urban drainage system", url: "/images/maputo diagram.jpg" },
      { caption: "Flooding and Social Problems", url: "/images/maputo map1.jpg" },
      { caption: "General Scheme", url: "/images/maputo Water circulation.jpg" },
      { caption: "Public Space", url: "/images/maputo Public space.jpg" },
      { caption: "Rainy Season and Dry Season", url: "/images/maputo section.jpg" }
    ],
    projectInfo: {
      type: "Urban Design",
      time: "2021",
      members: "Ege Balibek, Peichun Jiang, Yue Zhong"
    }
  },

  {
    id: "secret-garden",
    src: "/images/sg cover.jpg",
    title: "SECRET GARDEN",
    subtitle: "Jerez, Spain",
    description:
      "We marvel at this rare, ingenious work of nature in the city, and any human intervention would spoil its beauty. So we keep all traces of natural creation and turn human intervention into an exploration.",
    detailedImages: [
      { caption: "Concept", url: "/images/Sg-concept.png" },
      { caption: "Overview", url: "/images/Sg-overview.jpeg" },
      { caption: "Map", url: "/images/Sg-map.jpeg" },
      { caption: "Scheme", url: "/images/Sg_map scheme.png" },
      { caption: "Architecture", url: "/images/Sg-Reno scheme.jpeg" },
      { caption: "Section", url: "/images/Sg-plan section.jpeg" },
      { caption: "Experience", url: "/images/Sg-render2.png" },
      { caption: "Experience", url: "/images/Sg-render1.png" }
    ],
    projectInfo: {
      type: "Renovation",
      time: "2019",
      members: "Lijin Zhao, Yue Zhong"
    }
  },

  {
    id: "natural-museum",
    src: "/images/museo cover.jpg",
    title: "NATURAL MUSEUM",
    subtitle: "Harbin, China",
    description:
      "The design of this museum is a top-down process...",
    detailedImages: [
      { caption: "Overview", url: "/images/museum_overview.jpg" },
      { caption: "Entrance", url: "/images/museum-Entrance View.jpeg" },
      { caption: "Gallery", url: "/images/museum-Gallery Inward.jpeg" },
      { caption: "Gallery", url: "/images/museum-Gallery outward.jpeg" },
      { caption: "Skiing Context", url: "/images/museum-Ski Resort.jpeg" },
      { caption: "Form", url: "/images/museum-Form and Context.jpeg" },
      { caption: "Plan B1", url: "/images/museum-Plan B1.jpeg" },
      { caption: "Plan Groundfloor", url: "/images/museum-Plan GroundFloor.jpeg" }
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

