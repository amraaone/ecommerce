import { FunctionComponent } from "react"
import { useParams, useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { BillboardColumn } from "./columns"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react"

interface CellActionProps {
  data: BillboardColumn
}

const CellAction: FunctionComponent<CellActionProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  const onCopy = (id: string) => {
    navigator.clipboard.writeText(id)
    toast.success("Billboard Id copied to the clipboard.")
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => onCopy(data.id)}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Id
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            router.push(`/${params.storeId}/billboards/${data.id}`)
          }
        >
          <Edit className="mr-2 h-4 w-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CellAction
