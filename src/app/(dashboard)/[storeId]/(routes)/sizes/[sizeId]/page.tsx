import prismadb from "@/lib/prismadb"
import { FunctionComponent } from "react"
import SizeForm from "./components/size-form"

interface SizePageProps {
  params: {
    sizeId: string
  }
}

const SizePage: FunctionComponent<SizePageProps> = async ({
  params: { sizeId },
}) => {
  const size = await prismadb.size.findUnique({
    where: { id: sizeId },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  )
}

export default SizePage
