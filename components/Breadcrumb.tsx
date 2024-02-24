'use client'
import { usePathname } from 'next/navigation';
import React from 'react'

const Breadcrumb = () => {
    const pathname = usePathname();
    const path = pathname.split('/').pop();

    return (
        <div className='cursor-pointer pt-4 py-6'>
            <h5>Home {">"} <span className='underline text-[#72AEC8]'>{path}</span></h5>
        </div>
    )
}

export default Breadcrumb