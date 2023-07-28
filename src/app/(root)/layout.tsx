import { FunctionComponent } from "react"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import prismadb from "@/lib/prismadb"

interface SetupLayoutProps {
  children: React.ReactNode
}

const SetupLayout: FunctionComponent<SetupLayoutProps> = async ({
  children,
}) => {
  const { userId } = auth()

  if (!userId) redirect("/sign-in")

  const store = await prismadb.store.findFirst({ where: { userId } })

  if (store) redirect(`/${store.id}`)

  return <div>{children}</div>
}

export default SetupLayout
