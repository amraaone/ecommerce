"use client"

import { FunctionComponent } from "react"

import { useParams } from "next/navigation"
import useOrigin from "@/hooks/use-origin"
import ApiAlert from "./api-alert"

interface ApiListProps {
  entityName: string
  entittyIdName: string
}

const ApiList: FunctionComponent<ApiListProps> = ({
  entittyIdName,
  entityName,
}) => {
  const params = useParams()
  const origin = useOrigin({})

  const baseUrl = `${origin}/api/${params.storeId}`
  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entityName}/${entittyIdName}`}
      />
      <ApiAlert
        title="POST"
        variant="public"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="GET"
        variant="admin"
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entityName}/${entittyIdName}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entityName}/${entittyIdName}`}
      />
    </>
  )
}

export default ApiList
