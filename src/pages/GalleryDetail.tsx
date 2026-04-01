import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { galleryItems } from "./Gallery";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function GalleryDetail() {
  const { id } = useParams();
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const item = galleryItems.find(g => g.id === id);

  if (!item) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-neutral-500 font-serif text-xl">Gallery item not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
      <Link to="/gallery" className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-16 uppercase tracking-[0.2em] font-display">
        <ArrowLeft size={14} />
        Back to Gallery
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-16 md:gap-32 mt-8">
          {item.images?.map((img, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              src={img}
              alt={`${item.title} detail ${idx + 1}`}
              className="w-full object-cover"
              referrerPolicy="no-referrer"
            />
          ))}

          {item.detailedImages?.map((img, idx) => (
            <motion.div
              key={`detail-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6 items-center"
            >
              <div 
                className="overflow-hidden w-3/4 md:w-1/2 max-w-md cursor-pointer"
                onClick={() => setFullscreenImage(img.url)}
              >
                <img
                  src={img.url}
                  alt={img.caption || `${item.title} detail ${idx + 1}`}
                  className="w-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              {item.id === 'cose' && img.caption && <p className="text-sm md:text-base tracking-[0.3em] uppercase text-neutral-400 font-medium text-center">{img.caption}</p>}
            </motion.div>
          ))}

          {item.projectInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 pt-16 border-t border-neutral-200 flex flex-col gap-4 text-center"
            >
              {item.projectInfo.type && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project Type:</span> {item.projectInfo.type}</p>}
              {item.projectInfo.time && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project time:</span> {item.projectInfo.time}</p>}
              {item.projectInfo.members && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project Member:</span> {item.projectInfo.members}</p>}
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={fullscreenImage}
              alt="Fullscreen detail"
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
