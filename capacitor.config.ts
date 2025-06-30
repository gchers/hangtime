import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hangtime.app',
  appName: 'HangTime',
  webDir: 'dist',
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
