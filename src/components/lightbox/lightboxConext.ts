import { createContext } from "react"

export type LightboxContextProps = {
  isShown: boolean
  show: () => void
  hide: () => void
}

const LightboxContext = createContext<LightboxContextProps>({
  isShown: false,
  show: () => {},
  hide: () => {},
})

export default LightboxContext
