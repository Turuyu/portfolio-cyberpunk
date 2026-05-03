import { useEffect, useRef, useState } from 'react'
import styles from './Features.module.css'

const features = [
  { label: 'Uptime garantizado', value: 99.99, suffix: '%', icon: '⚡' },
  { label: 'Tiempo de respuesta', value: 50, suffix: 'ms', prefix: '< ', icon: '🚀' },
  { label: 'Amenazas bloqueadas/día', value: 2.4, suffix: 'M+', icon: '🛡️' },
  { label: 'Países con cobertura', value: 45, suffix: '+', icon: '🌐' },
]

function AnimatedCounter({ target, suffix, prefix = '' }: { target: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const steps = duration / 16
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 100) / 100)
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  const displayValue = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count)

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>[</span> POR QUÉ NEXUS <span className={styles.bracket}>]</span>
        </h2>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.label} className={styles.stat}>
              <span className={styles.statIcon}>{feature.icon}</span>
              <span className={styles.statValue}>
                <AnimatedCounter target={feature.value} suffix={feature.suffix} prefix={feature.prefix} />
              </span>
              <p className={styles.statLabel}>{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
