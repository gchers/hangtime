// Components & Composables
import { createApp } from 'vue'
import App from '@/App.vue'

import { registerPlugins } from '@/plugins'

import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'

// Import Firebase plugin (with error handling built-in)
import '@/plugins/firebase'

// Capacitor
import { Capacitor } from '@capacitor/core'

const app = createApp(App)

// Plugins
registerPlugins(app)

app.mount('#app')

// Initialize additional features asynchronously without blocking app startup
Promise.all([
  // Firebase authentication
  import('@/plugins/firebase/authentication').catch(err => {
    console.warn('Firebase authentication failed to load:', err)
    return null
  }),
  // Service Worker (web only)
  !Capacitor.isNativePlatform() 
    ? import('@/plugins/register-service-worker').catch(err => {
        console.warn('Service worker failed to register:', err)
        return null
      })
    : Promise.resolve(null)
]).then(() => {
  console.log('App initialization complete')
}).catch(err => {
  console.error('App initialization error:', err)
})
