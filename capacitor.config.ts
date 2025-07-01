import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hangtime.app',
  appName: 'HangTime',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    scheme: 'App'
  },
  plugins: {
    BluetoothLe: {
      displayStrings: {
        scanning: "Scanning for HangTime devices...",
        cancel: "Cancel",
        availableDevices: "Available devices",
        noDeviceFound: "No HangTime devices found"
      }
    }
  }
};

export default config;
