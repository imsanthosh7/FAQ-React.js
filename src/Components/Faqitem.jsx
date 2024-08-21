import React, { useState } from 'react'



function Faqitem({question,answer}) {
    const [display, setDisplay] = useState(false);

    function showdisply() {
        setDisplay(!display);
    }

    return (
        <>
            <div className='w-full h-full flex justify-center items-center my-5 '>
                <div className='w-auto h-auto'>
                    <div className=''>
                        <div onClick={showdisply} className='flex justify-between p-4 bg-blue-300 rounded h-16 md:w-[700px] cursor-pointer'>
                            <h1 className=' text-lg font-semibold text-gray-800'>{question}</h1>
                        </div>
                        <div className={`${display ?
                            'p-3 border border-gray-300 rounded border-t-0 rounded-tl-none rounded-tr-none text-sm font-semibold  text-gray-800 h-auto'
                            : 'h-0 p-0 overflow-hidden'} transition-all duration-300 ease-in-out md:w-[700px]`}>
                            {answer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqitem