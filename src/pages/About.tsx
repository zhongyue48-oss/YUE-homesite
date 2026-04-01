import { motion } from "motion/react";
import { FadeIn } from "../components/Animations";

export function About() {
  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-6 flex flex-col items-center justify-center relative">
      
      <FadeIn delay={0.3} direction="up" className="w-full max-w-md mb-16 relative">
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [-2, 2, -2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full mix-blend-multiply"
        >
          <svg className="absolute w-0 h-0">
            <filter id="wave">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="turbulence">
                <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="8s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>

          <div className="aspect-[3/4] w-full overflow-hidden" style={{ filter: 'url(#wave)' }}>
            <img
              src="/images/face.jpg"
              alt="Portrait of Yue Zhong"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </FadeIn>

      <div className="max-w-3xl w-full flex flex-col items-center text-center gap-16">
        <FadeIn delay={0.2} direction="up">
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-neutral-900 mb-6">
            Yue Zhong
          </h2>
          <p className="text-xs text-neutral-500 tracking-[0.3em] uppercase font-display">
            Based in Milano, Italy
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up">
          <p className="text-xl md:text-2xl text-neutral-800 font-serif font-light leading-[1.8] tracking-wide">
            I am on my practical and academic safari in architectural design. It's really hard to describe myself. So I just gave up. All this is beside the point; I'm not even sure if the central purpose of this website is a victory of identity.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} direction="up" className="pt-12">
          <a 
            href="mailto:zhongyue48@gmail.com" 
            className="inline-block text-xs tracking-[0.3em] uppercase text-neutral-900 hover:text-neutral-500 transition-colors relative group font-display"
          >
            Contact Me
            <span className="absolute -bottom-3 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-500 group-hover:w-full"></span>
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center px-6">
      </div>
    </div>
  );
}