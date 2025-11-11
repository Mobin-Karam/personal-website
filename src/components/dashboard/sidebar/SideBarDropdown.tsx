import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import SideBarDropdownItem from './SideBarDropdownItem'
import { dropdownitem } from '@/app/dashboard/sidebar/SideBar'

interface SideBarDropdown {
    drop_down_icon: React.ReactNode,
    drop_down_header: string,
    drop_down_item_content: string[] | undefined
}

const SideBarDropdown = ({ drop_down_icon, drop_down_header, drop_down_item_content }: SideBarDropdown) => {
    return (
        <li>
            <button className="group cursor-pointer lg:justify-start">
                <span className="">{drop_down_icon}</span>
                <span className="text-white">
                    {drop_down_header}
                </span>
                <RiArrowDropDownLine className='ml-auto w-5 h-5 transition-transform duration-200' />
            </button>
            <div className="overflow-hidden transition-all duration-300">
                <ul className="mt-2 space-y-1 ml-9">
                    {drop_down_item_content?.map((drop_down_item, index) => (
                        <SideBarDropdownItem key={index} drop_down_item_text={drop_down_item} />
                    ))}
                </ul>
            </div>
        </li>
    )
}

export default SideBarDropdown