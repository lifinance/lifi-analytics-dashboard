import { format as dateFnsFormat } from 'date-fns'

export function dateFormat(date: Date | number, format: string): string {
  return dateFnsFormat(date, format)
}
