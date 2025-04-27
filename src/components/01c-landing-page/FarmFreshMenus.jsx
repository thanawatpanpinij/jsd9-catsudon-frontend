import React from 'react'

const FarmFreshMenus = () => {
  return (
    <section className="flex flex-col max-w-[1440px] mx-auto px-[32px] mb-[56px]">
      <div className='flex items-center justify-between'>
        <h2 className="text-heading02-size font-semibold text-third max-[631px]:text-heading03-size">Farm fresh menus</h2>
        <button className='bg-primary rounded-full px-8 py-2 text-white text-small-size hover:bg-third transition-all duration-200 ease cursor-pointer'>
            All Menus
        </button>
      </div>
    </section>
  );
}

export default FarmFreshMenus
