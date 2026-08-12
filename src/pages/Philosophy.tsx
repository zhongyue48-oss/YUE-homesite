import { motion } from "motion/react";
import { FadeIn } from "../components/Animations";

export function Philosophy() {
  return (
    <div className="w-full flex-grow flex flex-col items-center justify-center px-6 py-24 md:py-32">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="w-full max-w-6xl mx-auto flex justify-center relative"
        >
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
            className="w-full flex justify-center"
          >
            <svg className="absolute w-0 h-0">
              <filter id="wave-philosophy">
                <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="turbulence">
                  <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="8s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>

            <img 
              src="/images/philosophy.png"
              alt="Philosophy" 
              className="w-full h-auto object-contain max-h-[80vh] mix-blend-multiply"
              style={{ filter: 'url(#wave-philosophy)' }}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

