// StatusBar hidden — the device's native status bar handles time/battery/wifi.
// Returning null removes it from every page without touching individual files.
export function StatusBar({ dark: _dark = false }: { dark?: boolean }) {
  return null;
}

