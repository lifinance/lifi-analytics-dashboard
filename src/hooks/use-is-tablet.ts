import { screenSize } from '@lifi/style'
import { useMedia } from 'react-use'

export default function useIsTablet() {
  return useMedia(`only screen and (${screenSize.maxTablet})`)
}
