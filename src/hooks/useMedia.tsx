import { useEffect, useState } from 'react'

const useMedia = (pxValue: string): boolean => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    function handleMedia() {
      setMatch(window.matchMedia(`(max-width: ${pxValue}px)`).matches)
    }

    handleMedia()

    window.addEventListener('resize', handleMedia)

    return () => {
      window.removeEventListener('resize', handleMedia)
    }
  }, [])

  return match
}

export default useMedia
