import React, { useContext } from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from './assets/eth.png'
import success from './assets/checksecondary61.gif'
import { TransactionContext } from '../context/TransactionContext'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import TransactionLoader from './TransactionLoader'
import { IoMdClose } from "react-icons/io";


const Main = () => {
    const { formData, handleChange, sendTransaction, transaction } = useContext(TransactionContext)

    const handleSubmit = async (e) => {
        const { addressTo, amount } = formData
        e.preventDefault()

        if (!addressTo || !amount) return

        sendTransaction()

    }

    const url = window.location.href;
    console.log(url)
    return (
        <div className='main-container'>
            <div className='main-top-style'>
                <p className='main-heading'>Swap</p>
                <RiSettings3Fill className='main-heading' />
            </div>
            <div className='main-container-input'>
                <div className='input-container'>
                    <input id="mainInput" type="text" className='input-box' placeholder='0.0' pattern='^[0-9]*[.,]?[0-9]*$' onChange={(e) => handleChange(e, 'amount')} value={formData.amount} />
                    <button className='button'><img src={ethLogo} alt="eth-logo" height={20} width={20} /><p className='heading-para'>ETH</p><AiOutlineDown className='arrow-down' /></button>
                </div>
                <div className='input-container'>
                    <input type="text" className='input-box' placeholder='0x...' onChange={(e) => handleChange(e, 'addressTo')} value={formData.addressTo} />
                </div>
                <button className='main-button' onClick={e => handleSubmit(e)}>Confirm</button>
            </div>
            <div>
                <Popup open={url.includes("loading")}>
                    <TransactionLoader />
                </Popup>
            </div>
            <div >
                <Popup
                    modal
                    open={transaction}
                >
                    {close => (
                        <>
                            <div className='popup-content'>
                                <div className='close-container'>
                                    <button
                                        type="button"
                                        className="trigger-button"
                                        onClick={() => close()}
                                    >
                                        <IoMdClose />
                                    </button>
                                </div>
                                <div className='sub-close-container'>
                                <img src={success} alt="eth-logo" height={80} width={110} />
                                <p className='loader-heading'>Your transaction is successfully completed.</p>
                                </div>
                            </div>
                        </>
                    )}
                </Popup>
            </div>
        </div>
    )
}


export default Main