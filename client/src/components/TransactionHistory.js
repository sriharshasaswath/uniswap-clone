import React, { useContext, useState, useEffect } from 'react'
import { client } from '../lib/sanityClient'
import { TransactionContext } from '../context/TransactionContext';
import ethLogo from './assets/eth.png'
import {FiArrowUpRight} from 'react-icons/fi'

const TransactionHistory = () => {
    const { isLoading, currentAccount } = useContext(TransactionContext)
    const [transactionHistory, setTransactionHistory] = useState([])

    useEffect(() => {
        ;(async () => {
          if (!isLoading && currentAccount) {
            const query = `
            *[_type=="users" && _id == "${currentAccount}"] {
              "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..3]
            }
          `
    
            const clientRes = await client.fetch(query)
    
            setTransactionHistory(clientRes[0].transactionList)
          }
        })()
      }, [isLoading, currentAccount])

      return (
        <div className='main-transaction-container'>

          {transactionHistory &&
            transactionHistory?.map((transaction, index) => (
              <div className='transaction-history-container' key={index}>
                <div>
                  <img src={ethLogo} height={15} width={13} alt='eth' />{' '}
                  <span className='transaction-amount'>{transaction.amount} Ξ sent to{' '} <span className='transaction-color'>{transaction.toAddress.substring(0, 6)}...</span> on{' '}{new Date(transaction.timestamp).toLocaleString('en-US', {
                    timeZone: 'IST',
                    hour12: true,
                    timeStyle: 'short',
                    dateStyle: 'long',
                  })} {'  '}</span>
                </div>
                <div>
                  <a
                    href={`https://rinkeby.etherscan.io/tx/${transaction.txHash}`}
                    target='_blank'
                    rel='noreferrer'
                    className='transaction-Link'
                  >
                    View on Etherscan
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            ))}
      </div>
      )
}

export default TransactionHistory