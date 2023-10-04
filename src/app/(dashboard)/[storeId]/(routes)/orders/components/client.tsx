"use client"

import Heading from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { FunctionComponent } from "react"
import { OrderColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface OrderClientProps {
  data: OrderColumn[]
}

const OrderClient: FunctionComponent<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable searchKey={"products"} columns={columns} data={data} />
    </>
  )
}

export default OrderClient
