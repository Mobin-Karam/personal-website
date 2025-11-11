import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

interface SideBarDropdown {
    drop_down_item_text: string
}

const SideBarDropdownItem = ({ drop_down_item_text }: SideBarDropdown) => {
    return (
        <li>
            <a className="text-white" href="/">{drop_down_item_text}<span className="flex items-center gap-1 ml-auto"></span></a>
        </li>
    )
}

export default SideBarDropdownItem