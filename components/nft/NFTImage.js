import React from 'react';
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    topBar: `bg-[#303339] p-2 rounded-t-lg border-[#151c22] border`,
    topBarContent: `flex items-center`,
    likesCounter: `flex-1 flex items-center justify-end`,
}

const NFTImage = ({selectedNft}) => {
    return (
        <div>
            <div className={style.topBar}>
                <div className={style.topBarContent}>
                    <IoMdSnow />
                    <div className={style.likesCounter}>
                        <AiOutlineHeart />
                        2.3K
                    </div>
                </div>
            </div>
            <div>
                {console.log(selectedNft, '🎆')}
                <img src={selectedNft?.image || 'https://gateway.ipfscdn.io/ipfs/QmXBS6nHGC9AArZ6UcfJuW9f62WtMQTp1K1mhcNR9whnNH/0.png'} />
            </div>
        </div>
    );
};

export default NFTImage;
