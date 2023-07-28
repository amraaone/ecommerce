import prismadb from "@/lib/prismadb"
import { FunctionComponent } from "react"

interface DashboardPageProps {
  params: { storeId: string }
}

const DashboardPage: FunctionComponent<DashboardPageProps> = async ({
  params: { storeId },
}) => {
  const store = await prismadb.store.findFirst({ where: { id: storeId } })
  return <div>activeStore: {store?.name}</div>
}

export default DashboardPage
