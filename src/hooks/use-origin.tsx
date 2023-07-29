import { FunctionComponent, useEffect, useState } from "react"

interface useOriginProps {}

const useOrigin: FunctionComponent<useOriginProps> = () => {
  const [mounted, setMounted] = useState(false)

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return origin
}

export default useOrigin
