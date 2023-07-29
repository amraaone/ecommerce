"use client"

import { FunctionComponent, useEffect, useState } from "react"
import StoreModal from "@/components/modals/store-modal"

interface ModalProviderProps {}

const ModalProvider: FunctionComponent<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <StoreModal />
    </>
  )
}

export default ModalProvider
