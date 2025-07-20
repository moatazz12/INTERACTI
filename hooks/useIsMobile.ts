// hooks/useIsMobile.ts
import { useEffect, useState } from "react"

/**
 * Hook permettant de détecter si l'écran est en dessous d'une certaine largeur.
 * @param breakpoint largeur max pour être considéré comme mobile (par défaut : 768px)
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [breakpoint])

  return isMobile
}

export default useIsMobile
