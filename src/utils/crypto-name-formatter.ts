import * as R from 'ramda'

import { capitalize } from './capitalize'

export function cryptoNameFormatter(name: string): string {
  const lowerCase = name.toLowerCase()
  return R.cond([
    [R.equals('bsc'), R.always('BSC')],
    [R.equals('xdai'), R.always('xDai')],
    [R.equals('nxtp'), R.always('NXTP')],
    [R.equals('anyswap'), R.always('AnySwap')],
    [R.equals('cbridge'), R.always('cBridge')],
    [R.equals('kcc'), R.always('KCC')],
    [R.equals('okexchain'), R.always('OKExChain')],
    [R.equals('iotex'), R.always('IoTeX')],
    [R.T, capitalize],
  ])(lowerCase as never)
}
