import React, { useContext, useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from './assets/eth.png'
import uniswapLogo from './assets/uniswap.png'
import { ListItems, ConnectWalletItem } from './styledComponents'
import { TransactionContext } from '../context/TransactionContext';

const Header = () => {
    const { connectWallet, currentAccount } = useContext(TransactionContext)
    const [userName, setUserName] = useState()

    useEffect(() => { if (!currentAccount)  return
        setUserName(`${currentAccount.slice(0,7)}...${currentAccount.slice(35)}}`)
    }, [currentAccount])

    console.log(connectWallet, currentAccount)

    return (
        <div className='header-container'>
            <div>
                <img src={uniswapLogo} alt="uniswap-logo" height={40} width={40} />
            </div>
            <div className="heading">
                <NavLink to="/" className="link-style"><ListItems bgColor="#e2e8f0">Swap</ListItems></NavLink>
                <NavLink to="pool" className="link-style"><ListItems bgColor="#e2e8f0">Pool</ListItems></NavLink>
                <NavLink to="vote" className="link-style"><ListItems bgColor="#e2e8f0">Vote</ListItems></NavLink>
                <NavLink to="charts" className="link-style"><ListItems bgColor="#e2e8f0">Charts <FiArrowUpRight /> </ListItems></NavLink>

            </div>
            <div className='right-side-header'>
                <div className='header-part-container'>
                    <button className='button'><img src={ethLogo} alt="eth-logo" height={20} width={20} /><p className='heading-para'>Ethereum</p><AiOutlineDown className='arrow-down' /></button>
                </div>
                {currentAccount ? (<div className='header-part-container' onClick={() => connectWallet()}>
                    <button className='button'><p className='heading-para'>{currentAccount.substr(0,6)}....{currentAccount.substr(-4,4)}</p></button>
                </div>)
                    :
                    (<div className='header-part-container' onClick={() => connectWallet()}>
                        <button className='button1'><ConnectWalletItem bgColor="#181818">Connect Wallet</ConnectWalletItem></button>
                    </div>)}
                <div className='header-part-container' >
                    <button className='button'><p className='heading-para'><HiOutlineDotsVertical /></p></button>
                </div>
            </div>
        </div>
    )
}

export default Header