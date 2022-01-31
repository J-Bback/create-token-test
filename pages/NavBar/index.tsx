import React, { FC } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styles from '../../styles/Navigation.module.css';

export const NavBar: FC = () => {
  const { wallet } = useWallet();

  return (
    <div className={styles.navbar}>
      <div className={styles.title}>SolLaser</div>
      <div style={{ display: 'flex' }}>
        <WalletMultiButton />
        {wallet && <WalletDisconnectButton />}
      </div>
    </div>
  )
}