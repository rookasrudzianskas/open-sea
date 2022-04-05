import React from 'react';
import Header from "../../components/Header";
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
    const {provider} = useWeb3();
    const [selectedNft, setSelectedNft] = useState()
    const [listings, setListings] = useState([]);
    const router = useRouter();

    const nftModule = useMemo(() => {
        if (!provider) return

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/rclOC_G5gQff7eqOZ-ZuoUpYCzYy2D18'
        )
        return sdk.getNFTModule('0xeb38262776CcD2a7CdAD70686719f3F82898Fef0')
    }, [provider]);





    return (
        <div>
            <Header />
        </div>
    );
};

export default Nft;
