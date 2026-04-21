export function getDeviceType(): string {
  const userAgent = navigator.userAgent.toLowerCase();

  if (/mobile/i.test(userAgent)) return "Mobile";
  if (/tablet/i.test(userAgent)) return "Tablet";
  return "Desktop";
}