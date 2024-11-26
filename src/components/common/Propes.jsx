import React from 'react'

const Propes = ({ subHeading, blueHeading }) => {
    return (
        <div className=' text-red-500'>{subHeading} <span className=' text-blue-500'>{blueHeading}</span></div>
    )
}

export default Propes