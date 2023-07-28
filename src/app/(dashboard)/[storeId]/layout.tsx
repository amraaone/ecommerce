import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismadb"
import { FunctionComponent } from "react"
import Navbar from "@/components/navbar"

interface DashboardLayoutProps {
  children: React.ReactNode
  params: { storeId: string }
}

const DashboardLayout: FunctionComponent<DashboardLayoutProps> = async ({
  children,
  params,
}) => {
  const { userId } = auth()

  if (!userId) redirect("/sign-in")

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId: userId,
    },
  })

  if (!store) redirect("/")

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DashboardLayout
