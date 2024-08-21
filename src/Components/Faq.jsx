import React from 'react'
import Faqitem from './Faqitem'
import {faqs} from './Data'

function Faq() {
    return (
        <div className='p-3'>
            <div className='flex justify-center items-center my-10'>
                <h1 className='text-2xl font-semibold'>Frequently Asked Questions?</h1>
            </div>
            {
                faqs.map((item, index) => (
                    <Faqitem key={index} question={item.question} answer={item.answer} />
                ))
            }
        </div>
    )
}

export default Faq