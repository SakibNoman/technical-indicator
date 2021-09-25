import React from 'react';
import { AiOutlineAreaChart, AiOutlineBarChart } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { FiBarChart } from 'react-icons/fi';
import { HiSpeakerphone } from 'react-icons/hi';

const Icons = () => {
    return (
        <div >
            <AiOutlineAreaChart />
            <FiBarChart />
            <AiOutlineBarChart />
            <FaBars />
            <HiSpeakerphone />
        </div>
    );
};

export default Icons;