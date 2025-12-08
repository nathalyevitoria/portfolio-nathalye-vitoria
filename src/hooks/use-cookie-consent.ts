'use client'

import { useState, useEffect } from 'react'

export function useCookieConsent() {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)
  const [consentDate, setConsentDate] = useState<string | null>(null)

  useEffect(() => {
    // Verifica se está no cliente
    if (typeof window !== 'undefined') {
      const accepted = localStorage.getItem('cookie-consent-accepted')
      const date = localStorage.getItem('cookie-consent-date')
      
      setHasConsent(accepted === 'true')
      setConsentDate(date)
    }
  }, [])

  const giveConsent = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookie-consent-accepted', 'true')
      localStorage.setItem('cookie-consent-date', new Date().toISOString())
      setHasConsent(true)
      setConsentDate(new Date().toISOString())
    }
  }

  const revokeConsent = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('cookie-consent-accepted')
      localStorage.removeItem('cookie-consent-date')
      setHasConsent(false)
      setConsentDate(null)
    }
  }

  return {
    hasConsent,
    consentDate,
    giveConsent,
    revokeConsent,
  }
}
