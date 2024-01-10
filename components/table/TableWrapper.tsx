'use client'

import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'
import { DataTable } from './Table'
import { columns } from './column'
import { useUser } from '@clerk/nextjs'

const TableWrapper = ({ skeletonFiles }: { skeletonFiles: FileType[]}) => {
    const { user } = useUser();

  return (
    <div>
        {/* Button */}
        <Button>Sort By ...</Button>

        <DataTable columns={columns} data={skeletonFiles} />
    </div>
  )
}

export default TableWrapper
