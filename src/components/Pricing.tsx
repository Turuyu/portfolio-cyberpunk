import styles from './Pricing.module.css'

const plans = [
  {
    name: 'STARTER',
    price: '299',
    features: [
      'Monitoreo básico 24/7',
      'Firewall gestionado',
      '5 endpoints protegidos',
      'Reportes mensuales',
      'Soporte por email',
    ],
    cta: 'Comenzar',
    popular: false,
  },
  {
    name: 'ENTERPRISE',
    price: '799',
    features: [
      'Todo lo de Starter',
      'IA predictiva de amenazas',
      'Endpoints ilimitados',
      'SOC dedicado',
      'Respuesta en < 1 hora',
      'Auditorías trimestrales',
    ],
    cta: 'Contratar',
    popular: true,
  },
  {
    name: 'CUSTOM',
    price: 'A medida',
    features: [
      'Solución personalizada',
      'Arquitectura Zero Trust',
      'Multi-cloud management',
      'Consultoría estratégica',
      'SLA garantizado',
      'Equipo dedicado',
    ],
    cta: 'Contactar',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>[</span> PLANES <span className={styles.bracket}>]</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Elegí el nivel de protección que tu infraestructura necesita
        </p>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <article key={plan.name} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <span className={styles.badge}>MÁS ELEGIDO</span>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.price}>
                <span className={styles.currency}>$</span>
                <span className={styles.amount}>{plan.price}</span>
                {plan.price !== 'A medida' && <span className={styles.period}>/mes</span>}
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>▹</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`${styles.button} ${plan.popular ? styles.buttonPrimary : ''}`}>
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
