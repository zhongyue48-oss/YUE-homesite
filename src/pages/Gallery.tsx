import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ImageItem } from "../components/ImageGrid";
import { assetUrl } from "../lib/utils";

export const galleryItems: ImageItem[] = [
  {
    id: "cose",
    src: assetUrl("images/door.jpg"),
    title: "Cose",
    detailedImages: [
      { caption: "Cefalu", url: assetUrl("images/Cefalu.jpeg") },
      { caption: "Copenhagen", url: assetUrl("images/Copenhagen.jpg") },
      { caption: "Pienza", url: assetUrl("images/Pienza.jpeg") },
      { caption: "33 or 19", url: assetUrl("images/33 or 19.jpeg") },
      { caption: "Esculapio", url: assetUrl("images/Esculapio.jpeg") },
      { caption: "Lagolo", url: assetUrl("images/Lagolo.jpeg") },
      { caption: "Bomarzo", url: assetUrl("images/Bomarzo.jpeg") },
      { caption: "Shaoxing", url: assetUrl("images/Shaoxing.jpg") },
      { caption: "My Little Sister", url: assetUrl("images/Chou.jpg") },
      { caption: "Liangzhu, Hangzhou", url: assetUrl("images/Liangchu.jpg") },
      { caption: "West Lago, Hangzhou", url: assetUrl("images/Westlake.jpg") }
    ]
  },
  {
    id: "cosi",
    src: assetUrl("images/window.jpg"),
    title: "Così",
    detailedImages: [
      { caption: "Unnamed", url: assetUrl("images/Tulip.jpg") },
      { caption: "Unnamed", url: assetUrl("images/winter.jpeg") },
      { caption: "Unnamed", url: assetUrl("images/night.jpeg") }
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
