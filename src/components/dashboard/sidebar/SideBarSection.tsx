import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import SideBarDropdown from './SideBarDropdown';
import { RxDashboard } from "react-icons/rx";
import { dropdownitem } from '@/app/dashboard/sidebar/SideBar';


interface SideBarSection {
  header: string,
  drop_down_items: dropdownitem[],
}



const SideBarSection = ({ header, drop_down_items }: SideBarSection) => {
  return (
    <div>
      <h2 className="mb-4 text-xs uppercase flex leading-5 text-gray-400 justify-start">{header}</h2>
      <ul className="flex flex-col gap-1">
        {drop_down_items.map((drop_down_item, index) => (
          <SideBarDropdown key={index} drop_down_header={drop_down_item.text} drop_down_icon={drop_down_item.icon} drop_down_item_content={drop_down_item.content} />
        ))}
      </ul>
    </div>
  )
}

export default SideBarSection