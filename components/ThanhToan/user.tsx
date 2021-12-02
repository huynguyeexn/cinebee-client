import React from 'react'

interface Props {
    
}

export const User = (props: Props) => {
    return (
        <div className='user mt-5 p-4'>
            <p className='mb-2'>Họ Tên: <span>LÊ THỊ THÙY DUNG</span></p>
            <p className='mb-2'>Email: <span>Dungle2192001@gmail.com</span></p>
            <p className='mb-2'>Phone: <span>0388962635</span></p>
        </div>
    )
}
