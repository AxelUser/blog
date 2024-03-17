import React, { useState } from "react"
import LightboxContext from "./lightboxConext"

const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  var [isShown, setShown] = useState(false)

  return (
    <LightboxContext.Provider
      value={{
        isShown: isShown,
        show: () => setShown(true),
        hide: () => setShown(false),
      }}
    >
      {children}
    </LightboxContext.Provider>
  )
}

export default LightboxProvider
