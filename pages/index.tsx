import type { NextPage } from 'next'
import { Wallet } from './Components/Wallet'

require('@solana/wallet-adapter-react-ui/styles.css');

const Home: NextPage = () => {
  return (
    <Wallet />
  )
}

export default Home;
