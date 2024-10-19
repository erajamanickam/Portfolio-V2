import React from 'react'
import gradientBg from '/assets/images/gradient-bg.svg'

const PositionBg = () => {
  return (
    <section className="positionbg absolute z-2">
      <div className='overflow-hidden mix-blend-overlay min-h-screen absolute'>
        <img src={gradientBg} alt='Background Gradient left' className='blur-3xl w-[500px] fixed top-[-4%] left-[-4%]' />
        <img src={gradientBg} alt='Background Gradient right' className='blur-3xl w-[500px] fixed bottom-[-4%] right-[-4%]' />
      </div>
    </section>
  )
}

export default PositionBg
