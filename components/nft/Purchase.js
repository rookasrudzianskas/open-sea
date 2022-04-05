import React from 'react';
import { useEffect, useState } from 'react'
import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

const style = {
    button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
    buttonIcon: `text-xl`,
    buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
    const [selectedMarketNft, setSelectedMarketNft] = useState()
    const [enableButton, setEnableButton] = useState(false);

    useEffect(() => {
        if(!listings || isListed === 'false') return;
        ;(async () => {
            setSelectedMarketNft(
                listings.find((marketNft) => marketNft.asset?.id === selectedNft.id)
            )
        })()
    }, [selectedNft, listings, isListed]);

    useEffect(() => {
        if (!selectedMarketNft || !selectedNft) return

        setEnableButton(true)
    }, [selectedMarketNft, selectedNft]);


    const confirmPurchase = (toastHandler = toast) =>
        toastHandler.success(`Purchase successful!`, {
            style: {
                background: '#04111d',
                color: '#fff',
            },
        });

    const buyItem = async (
        listingId = selectedMarketNft.id,
        quantityDesired = 1,
        module = marketPlaceModule
    ) => {
        console.log(listingId, quantityDesired, module, 'rokas')
        // yo ROKAs lets goooo!!!
        //yo TOm, ok
        // sure okay about to run it...
        // just clicked buy now...
        // still error
        // where can i see the contract address of the marketplace module
        // in [nftId.js]
        await module
            .buyoutDirectListing({
                listingId: listingId,
                quantityDesired: quantityDesired,
            })
            .catch((error) => console.error(error))

        confirmPurchase()
    }

    return (
        <div>

        </div>
    );
};

export default MakeOffer;
