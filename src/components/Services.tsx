import styles from './Services.module.css'

const services = [
  {
    icon: '🛡️',
    title: 'Ciberseguridad Avanzada',
    description: 'Protección perimetral con IA que detecta y neutraliza amenazas en tiempo real.',
    tech: 'Zero Trust Architecture',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Infraestructura cloud escalable y redundante con 99.99% uptime garantizado.',
    tech: 'Multi-Cloud Orchestration',
  },
  {
    icon: '🔐',
    title: 'Cifrado de Datos',
    description: 'Encriptación de grado militar para datos en tránsito y en reposo.',
    tech: 'AES-256 + Quantum Keys',
  },
  {
    icon: '📊',
    title: 'Monitoreo 24/7',
    description: 'SOC dedicado con analistas certificados monitoreando tu infraestructura.',
    tech: 'SIEM + SOAR Integration',
  },
]

export default function Services() {
  return (
    <section className={styles.services} id="servicios">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>[</span> SERVICIOS <span className={styles.bracket}>]</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Soluciones enterprise para un mundo conectado
        </p>
        <div className={styles.grid}>
          {services.map((service) => (
            <article key={service.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{service.icon}</span>
                <span className={styles.cardNumber}>0{services.indexOf(service) + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.techTag}>{service.tech}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
