import React from 'react'

const Filter = () => {
    return (
        <div className='flex space-x-4  pl-3'>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Tümü</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Haberler</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Müzik</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Canlı</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Matematik</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Oyun</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Clash of Clans</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Son Yüklenenler</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '> İzlenenler</div>
            <div className='bg-gray-200 rounded-xl p-1 px-2 '>Yeni Öneriler</div>
        </div>
    )
}

export default Filter
