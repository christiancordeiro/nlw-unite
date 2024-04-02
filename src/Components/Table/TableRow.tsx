import React, { ComponentProps } from "react"

interface TableRowProps extends ComponentProps<"tr"> {}

const TableRow = (props: TableRowProps) => {
  return <tr {...props} className="border-b border-white/10 hover:bg-white/5" />
}

export default TableRow
