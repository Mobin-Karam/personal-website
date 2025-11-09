import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import React from 'react'

const SideBar = () => {
  return (
    <aside className="fixed flex flex-col xl:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-full transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        w-[290px]
        -translate-x-full
        xl:translate-x-0">
      <div className="py-8 flex  justify-start">MobinKaram Blog</div>
      <div className="flex flex-col overflow-y-auto  duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {/* Any much you want can make this div segment */}
            <div>
              <h2 className="mb-4 text-xs uppercase flex leading-5 text-gray-400 justify-start">Menu</h2>
              <ul className="flex flex-col gap-1">
                <li>
                  <button className="menu-item group  menu-item-inactive cursor-pointer lg:justify-start"></button>
                  <div className="overflow-hidden"></div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="pb-20"></div>
      </div>
    </aside>
  )
}

export default SideBar