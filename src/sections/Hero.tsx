import { motion } from 'framer-motion'
import { Button } from '../components/ui'
import { heroContent } from '../data'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium border border-orange-500/20">
              Acoustic-as-a-Service
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-orange-500">{heroContent.headline}</span>
            <br />
            {heroContent.subheadline}
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
            {heroContent.description}
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" size="lg" showArrow>
              {heroContent.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg">
              {heroContent.ctaSecondary}
            </Button>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-slate-500"
            >
              <svg
                className="w-6 h-6 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
