import React from "react";
import Image from "next/image";
import {BsBell, BsBookmark, BsEnvelope, BsTwitter} from 'react-icons/bs';
import {BiHash, BiHomeCircle, BiUser } from 'react-icons/bi'
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] });


interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash/>,
  },
  {
    title: "Notifications",
    icon: <BsEnvelope/>,
  },
  {
    title: "Messages",
    icon: <BsBell/>,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark/>,
  },
  {
    title: "Profile",
    icon: <BiUser/>,
  }
]
export default function Home() {
  return (
  <div className={inter.className}>
    <div className="grid grid-cols-12 h-screen w-screen px-56">
      <div className="col-span-3 pt-8 px-4">
      <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
      <BsTwitter />
      </div>
      <div className="mt-4 text-2xl pr-4">
          <ul>
          {SidebarMenuItems.map((item) => (
             <li className="flex justify-start item-center gap-4 hover:bg-gray-800 rounded-full px-5 py-2 w-fit cursor-pointer" key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span></li>))}
          </ul>
          <div className="mt-5 px-3"> 
            <button className="bg-[#1d9bf0] p-4 text-lg rounded-full w-full font-semibold">Tweet</button>
           </div>
          </div>
      </div>
    
  <div className="col-span-6 border-r-[1px] border-l-[1px] border border-gray-600">
  <FeedCard/>
  <FeedCard/>
  <FeedCard/>
  <FeedCard/>
  </div>
  <div className="col-span-3"></div>
</div>
  </div>
  );
}
