import { motion } from "motion/react";
import { Link } from "react-router-dom";

export interface ImageItem {
  id: string;
  src: string;
  title: string;
  subtitle?: string;
  description?: string;
  images?: string[];
  detailedImages?: { url: string; caption?: string }[];
  projectInfo?: {
    type?: string;
    time?: string;
    members?: string;
  };
}

interface ImageGridProps {
  items: ImageItem[];
  basePath: string;
}

export function ImageGrid({ items, basePath }: ImageGridProps) {
  return (
    <div className="flex flex-col gap-32 max-w-5xl mx-auto px-6 py-12">
      {items.map((item, index) => (
        <Link to={`/${basePath}/${item.id}`} key={item.id} className="group block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <div className="overflow-hidden bg-transparent w-full aspect-[3/4] md:aspect-[4/5] relative max-w-3xl mx-auto">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover origin-center transition-transform duration-1000 ease-out group-hover:scale-105 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <h3 className="text-2xl md:text-4xl font-serif font-light text-neutral-900 tracking-wide transition-colors duration-300 group-hover:text-neutral-600">{item.title}</h3>
              {item.subtitle && <p className="text-xs md:text-sm text-neutral-500 tracking-[0.2em] uppercase font-display">{item.subtitle}</p>}
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
