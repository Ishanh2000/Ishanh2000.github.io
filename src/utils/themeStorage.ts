// Theme preference storage utilities

const THEME_STORAGE_KEY = 'theme-preference'
const THEME_EXPIRY_DAYS = 30 // Cache preference for 30 days

interface ThemePreference {
  isDark: boolean
  timestamp: number
}

export const saveThemePreference = (isDark: boolean): void => {
  const preference: ThemePreference = {
    isDark,
    timestamp: Date.now(),
  }
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(preference))
}

export const getThemePreference = (): boolean | null => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (!stored) return null

    const preference: ThemePreference = JSON.parse(stored)
    const expiryTime = THEME_EXPIRY_DAYS * 24 * 60 * 60 * 1000 // Convert days to milliseconds
    const isExpired = Date.now() - preference.timestamp > expiryTime

    if (isExpired) {
      localStorage.removeItem(THEME_STORAGE_KEY)
      return null
    }

    return preference.isDark
  } catch {
    return null
  }
}

export const clearThemePreference = (): void => {
  localStorage.removeItem(THEME_STORAGE_KEY)
}
