import { css } from '@emotion/react'
import { MoonLoader } from 'react-spinners'


const cssOverride = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`

const TransactionLoader = () => {
  return (
    <div className='loader-container'>
      <div className='loader-heading'>Transaction in progress...</div>
      <MoonLoader color={'white'} loading={true} css={cssOverride} size={50} />
    </div>
  )
}

export default TransactionLoader