import Particles from './Particles'
import TypingEffect from './TypingEffect'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Particles />
      <div className={styles.grid} />
      <div className={styles.content}>
        <p className={styles.tagline}>
          <span className={styles.bracket}>[</span> SISTEMA ACTIVO <span className={styles.bracket}>]</span>
        </p>
        <h1 className={styles.title}>
          <TypingEffect 
            texts={['SEGURIDAD', 'PROTECCIÓN', 'DEFENSA', 'RESILIENCIA']} 
            speed={100}
            deleteSpeed={50}
            pauseBetween={2500}
          />
          <br />
          <span className={styles.accent}>DE PRÓXIMA</span>
          <br />
          GENERACIÓN
        </h1>
        <p className={styles.description}>
          Protegemos tu infraestructura digital con inteligencia artificial 
          y protocolos de cifrado de grado militar. El futuro de la 
          ciberseguridad empieza acá.
        </p>
        <div className={styles.ctaGroup}>
          <a href="#contacto" className={styles.ctaPrimary}>
            Iniciar Protocolo
          </a>
          <a href="#servicios" className={styles.ctaSecondary}>
            Explorar Servicios
          </a>
        </div>
        <div className={styles.terminal}>
          <span className={styles.prompt}>$</span> nexus init --secure --verbose
          <span className={styles.cursor} />
        </div>
      </div>
    </section>
  )
}
