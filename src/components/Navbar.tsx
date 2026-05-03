import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className={styles.logoIcon}>◆</span> NEXUS
        </a>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>Servicios</a></li>
          <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
          <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>Planes</a></li>
          <li><a href="#contacto" onClick={(e) => handleNavClick(e, '#contacto')} className={styles.ctaLink}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}
