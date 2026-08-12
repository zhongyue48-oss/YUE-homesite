import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ImageItem } from "../components/ImageGrid";

export const galleryItems: ImageItem[] = [
  {
    id: "cose",
    src: "/YUE-homesite/images/door.jpg",
    title: "Cose",
    detailedImages: [
      { caption: "Cefalu", url: "/YUE-homesite/images/Cefalu.jpeg" },
      { caption: "Copenhagen", url: "/YUE-homesite/images/Copenhagen.jpg" },
      { caption: "Pienza", url: "/YUE-homesite/images/Pienza.jpeg" },
      { caption: "33 or 19", url: "/YUE-homesite/images/33 or 19.jpeg" },
      { caption: "Esculapio", url: "/YUE-homesite/images/Esculapio.jpeg" },
      { caption: "Lagolo", url: "/YUE-homesite/images/Lagolo.jpeg" },
      { caption: "Bomarzo", url: "/YUE-homesite/images/Bomarzo.jpeg" },
      { caption: "Shaoxing", url: "/YUE-homesite/images/Shaoxing.jpg" },
      { caption: "My Little Sister", url: "/YUE-homesite/images/Chou.jpg" }
    ]
  },
  {
    id: "cosi",
    src: "/YUE-homesite/images/window.jpg",
    title: "Così",
    detailedImages: [
      { caption: "Unnamed", url: "/YUE-homesite/images/Tulip.jpg" },
      { caption: "Unnamed", url: "/YUE-homesite/images/winter.jpeg" },
      { caption: "Unnamed", url: "/YUE-homesite/images/night.jpeg" }
    ]
  }
];

export function Gallery() {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-row gap-16 md:gap-32 px-6">
        {galleryItems.map((item, index) => (
          <Link to={`/gallery/${item.id}`} key={item.id} className="group block text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col items-center gap-6 mix-blend-multiply ${item.id === 'cosi' ? 'scale-[0.8]' : ''}`}
            >
              <div className="w-32 md:w-48 aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
