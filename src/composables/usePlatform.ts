import { Capacitor } from '@capacitor/core'

/**
 * Platform detection composable for Capacitor apps
 * Helps determine if the app is running on web or native platform
 */
export function usePlatform() {
  /**
   * Check if the app is running on a native platform (iOS, Android)
   * @returns {boolean} True if running on native platform
   */
  const isNative = (): boolean => {
    return Capacitor.isNativePlatform()
  }

  /**
   * Check if the app is running on web platform
   * @returns {boolean} True if running on web platform
   */
  const isWeb = (): boolean => {
    return Capacitor.getPlatform() === 'web'
  }

  /**
   * Get the current platform name
   * @returns {string} Platform name ('web', 'ios', 'android')
   */
  const getPlatform = (): string => {
    return Capacitor.getPlatform()
  }

  /**
   * Check if the app is running on iOS
   * @returns {boolean} True if running on iOS
   */
  const isIOS = (): boolean => {
    return Capacitor.getPlatform() === 'ios'
  }

  /**
   * Check if the app is running on Android
   * @returns {boolean} True if running on Android
   */
  const isAndroid = (): boolean => {
    return Capacitor.getPlatform() === 'android'
  }

  return {
    isNative,
    isWeb,
    getPlatform,
    isIOS,
    isAndroid
  }
}
