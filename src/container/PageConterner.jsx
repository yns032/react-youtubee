import React from 'react'

const PageConterner = ({ children }) => {
    return (
        <div className='flex w-full'>
            {children}
        </div>
    )
}

export default PageConterner
