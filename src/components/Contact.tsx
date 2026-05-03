import { useState, type FormEvent } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.bracket}>[</span> INICIAR CONTACTO <span className={styles.bracket}>]</span>
        </h2>
        <div className={styles.content}>
          <div className={styles.info}>
            <p className={styles.description}>
              ¿Listo para proteger tu infraestructura? Completá el formulario 
              y un especialista en seguridad te contactará en menos de 24 horas.
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>security@nexus.systems</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>Emergencias 24/7</span>
                <span className={styles.value}>+1 (800) NEXUS-00</span>
              </div>
              <div className={styles.detail}>
                <span className={styles.label}>HQ</span>
                <span className={styles.value}>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            {submitted && (
              <div className={styles.successMessage}>
                ✓ Mensaje transmitido exitosamente
              </div>
            )}
            <div className={styles.field}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@empresa.com"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nombre de tu empresa"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Describí tu necesidad de seguridad..."
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Transmitir Mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
