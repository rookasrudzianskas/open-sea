import React from 'react';

import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'

const style = {
    wrapper: `flex`,
    infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
    accent: `text-[#2081e2]`,
    nftTitle: `text-3xl font-extrabold`,
    otherInfo: `flex`,
    ownedBy: `text-[#8a939b] mr-4`,
    likes: `flex items-center text-[#8a939b]`,
    likeIcon: `mr-1`,
    actionButtonsContainer: `w-44`,
    actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
    actionButton: `my-2`,
    divider: `border-r-2`,
}

const GeneralDetails = ({selectedNft}) => {
    return (
        <div className={style.wrapper}>

        </div>
    );
};

export default GeneralDetails;
