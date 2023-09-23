import prismadb from "@/lib/prismadb"
import { FunctionComponent } from "react"
import ColorForm from "./components/color-form"

interface ColorPageProps {
  params: {
    colorId: string
  }
}

const ColorPage: FunctionComponent<ColorPageProps> = async ({
  params: { colorId },
}) => {
  const color = await prismadb.color.findUnique({
    where: { id: colorId },
  })

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  )
}

export default ColorPage
