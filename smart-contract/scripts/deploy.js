const main = async () => {
    const transactionFactory = await hre.ethers.getContractFactory('Transactions')
    const TransactionContract = await transactionFactory.deploy()

    await TransactionContract.deployed()

    console.log('Transaction deployed to: ',TransactionContract.address)
};

(async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
})()