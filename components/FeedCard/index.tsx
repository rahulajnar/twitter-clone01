import React from "react";
import Image from 'next/image';
const  FeedCard: React.FC = () => {
    return <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
        <div className="grid grid-cols-12">
            <div className="col-span-1">
            <Image src="https://avatars.githubusercontent.com/u/37746415?s=400&u=71e8cfa202e489c27b5781f4b70e89fcbf898e59&v=4" alt="user-image" height={50} width={50}/>
            </div>
            <div className="col-span-11">
                <h5>Rahul Ajnar</h5>
                    <p>
                        Is it just me or everyone else? Do you feel the code quality 
                        decrease as the project size
                        increase? Just refactored a lot of bad code #codinglife
                    </p>
            </div>
            <div className="col-span-8"></div>
        </div>
    </div>;
};


export default FeedCard;