import { format, addSeconds } from 'date-fns'
export function calculateTimeFromSeconds(seconds: number): string {
  return format(addSeconds(new Date(0), seconds), 'm:ss') + ' min'
}
