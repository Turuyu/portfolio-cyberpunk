import { useState, useEffect } from 'react'
import styles from './TypingEffect.module.css'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  pauseBetween?: number
}

export default function TypingEffect({ texts, speed = 80, deleteSpeed = 40, pauseBetween = 2000 }: TypingEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullText = texts[currentTextIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), pauseBetween)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, speed, deleteSpeed, pauseBetween, texts])

  return (
    <span className={styles.typing}>
      {currentText}
      <span className={styles.cursor} />
    </span>
  )
}
