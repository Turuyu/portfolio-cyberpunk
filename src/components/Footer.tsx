import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>◆ NEXUS</h3>
            <p className={styles.brandTagline}>
              Ciberseguridad de próxima generación
            </p>
          </div>
          <nav className={styles.nav}>
            <a href="#servicios">Servicios</a>
            <a href="#features">Features</a>
            <a href="#pricing">Planes</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} NEXUS Systems. All rights reserved.</p>
          <p className={styles.credit}>
            Built with React + TypeScript + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
