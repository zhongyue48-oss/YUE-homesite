import { useParams, Link } from "react-router-dom";
import { projectItems } from "./Project";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectItems.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-neutral-500 font-serif text-xl">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
      <Link to="/project" className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-900 transition-colors mb-16 uppercase tracking-[0.2em] font-display">
        <ArrowLeft size={14} />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-neutral-900 mb-6">{project.title}</h1>
          {project.subtitle && <p className="text-xs md:text-sm text-neutral-500 tracking-[0.3em] uppercase font-display mb-10">{project.subtitle}</p>}
          {project.description && <p className="text-lg md:text-xl text-neutral-700 font-serif font-light leading-[1.8] whitespace-pre-wrap text-left">{project.description}</p>}
        </div>

        <div className="flex flex-col gap-16 md:gap-32 mt-8">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={project.src} 
            alt={project.title} 
            className="w-full object-cover mix-blend-multiply" 
            referrerPolicy="no-referrer" 
          />
          {project.images?.map((img, idx) => (
            <motion.img
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              src={img}
              alt={`${project.title} detail ${idx + 1}`}
              className="w-full object-cover mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          ))}

          {project.detailedImages?.map((img, idx) => (
            <motion.div
              key={`detail-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              {img.caption && <p className="text-sm text-neutral-500 tracking-[0.2em] uppercase font-display text-center">{img.caption}</p>}
              <img
                src={img.url}
                alt={img.caption || `${project.title} detail ${idx + 1}`}
                className="w-full object-cover mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}

          {project.projectInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-16 pt-16 border-t border-neutral-200 flex flex-col gap-4 text-center"
            >
              {project.projectInfo.type && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project Type:</span> {project.projectInfo.type}</p>}
              {project.projectInfo.time && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project time:</span> {project.projectInfo.time}</p>}
              {project.projectInfo.members && <p className="text-neutral-600 font-serif text-lg"><span className="font-medium text-neutral-900">Project Member:</span> {project.projectInfo.members}</p>}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
