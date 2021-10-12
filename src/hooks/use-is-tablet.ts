import { useMedia } from 'react-use'
import { screenSize } from '@lifi/style'

export default function useIsTablet() {
  return useMedia(`only screen and (${screenSize.maxTablet})`)
}
