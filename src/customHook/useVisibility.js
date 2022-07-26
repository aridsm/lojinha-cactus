import { useEffect, useState } from 'react'

const useVisibility = (ref) => {

  const [menuVisible, setMenuVisible] = useState(true);

  useEffect(() => {
    const hideMenu = (e) => {
      if (ref && e.target !== ref.current && !ref.current.contains(e.target)) {
        setMenuVisible(false)
      }
    }

    const resizeWindow = () => {
      if (window.innerWidth < 925) {
        setMenuVisible(false);

        document.addEventListener('click', hideMenu)
      } else {
        setMenuVisible(true)
        document.removeEventListener('click', hideMenu)
      }
    }
    resizeWindow();

    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [ref])

  return { menuVisible, setMenuVisible }

}

export default useVisibility