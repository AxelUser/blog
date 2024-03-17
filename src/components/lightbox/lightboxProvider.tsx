import React, { useEffect, useState } from "react"
import { noScroll } from "../../styles/global.css"
import LightboxContext from "./lightboxConext"

const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  var [isShown, setShown] = useState(false)

  useEffect(() => {
    var html = document.getElementsByTagName("html")[0]
    if (isShown) {
      html.classList.add(noScroll)
    } else {
      html.classList.remove(noScroll)
    }
  }, [isShown])

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
