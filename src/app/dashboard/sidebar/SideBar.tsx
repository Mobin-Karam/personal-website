import SideBarSection from '@/components/dashboard/sidebar/SideBarSection'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import React from 'react'
import { FaChartBar } from "react-icons/fa";
import { RiBox3Line } from "react-icons/ri";
import { PiPlugChargingLight } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

export interface dropdownitem {
  text: string,
  icon?: React.ReactNode,
  content?: string[]
}

interface drop_down {
  header: string,
  drop_down_items: dropdownitem[],
}

const side_bar_sections: drop_down[] = [
  {
    header: 'Menu',
    drop_down_items: [
      {
        text: "Dashboard", icon: <></>, content: [
          "Ecommerce",
          "Analytics",
          "Marketing",
          "CRM",
          "Stocks",
          "SaaS",
          "Logistics"]
      },
      {
        text: 'AI Assistant', icon: <></>,
        content: [
          "Text Generator",
          "Image Generator",
          "Code Generator",
          "Video Generator"]
      },

      {
        text: 'E-commerce', icon: <></>, content: [
          "Products",
          "Add Product",
          "Billing",
          "Invoices",
          "Single Invoice",
          "Create Invoice",
          "Transactions",
          'Single Transaction']
      },
      {
        text: 'Calendar', icon: <></>, content: [
          "Products",
          "Add Product",
          "Billing",
          "Invoices",
          "Single Invoice",
          "Create Invoice",
          "Transactions",
          'Single Transaction']
      },
      { text: 'User Profile', icon: <></> },
      { text: 'Taks', icon: <></> },
      { text: 'Form', icon: <></> },
      { text: 'Tables', icon: <></> },
      { text: 'Pages', icon: <></> }]
  },
  {
    header: 'Supports',
    drop_down_items: [
      {
        text: 'Chat',
        icon: <IoChatboxEllipsesOutline />
      },
      {
        text: 'Support',
        icon: <BiSupport />
      },
      {
        text: 'Email',
        icon: <MdOutlineMailOutline />
      }]
  },
  {
    header: 'Others',
    drop_down_items: [
        {
          text: 'Charts',
          icon: <FaChartBar />
        },
      {
        text: 'UI Elements',
        icon: <RiBox3Line />
      },
      {
        text: 'Authentication',
        icon: <PiPlugChargingLight />
      }]
  }]


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
            {side_bar_sections.map((side_bar_section, index) => (
              <SideBarSection key={index} drop_down_items={side_bar_section.drop_down_items} header={side_bar_section.header} />
            ))}
          </div>
        </nav>
        <div className="pb-20"></div>
      </div>
    </aside>
  )
}

export default SideBar