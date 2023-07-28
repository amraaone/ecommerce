"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { FunctionComponent, useEffect } from "react"

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  const onOpen = useStoreModal(state => state.onOpen)
  const isOpen = useStoreModal(state => state.isOpen)

  useEffect(() => {
    if (!isOpen) onOpen()
  }, [isOpen, onOpen])

  return null
}

export default Page
