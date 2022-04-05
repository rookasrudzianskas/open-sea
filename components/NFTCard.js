import React from 'react';

const NFTCard = ({nftItem}) => {
    console.log('This is nftItem', nftItem);
    return (
        <div>
            <img src={nftItem.metadata.image} alt=""/>
        </div>
    );
};

export default NFTCard;
