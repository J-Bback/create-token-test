import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import {
	ConnectionProvider,
	WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
	LedgerWalletAdapter,
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolletExtensionWalletAdapter,
	SolletWalletAdapter,
	TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import React, { FC, useCallback, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Notification } from "./Notification";
import { Navigation } from "./Navigation";

export const Wallet: FC = () => {
	const network = WalletAdapterNetwork.Devnet;

	const endpoint = useMemo(() => clusterApiUrl(network), [network]);

	const wallets = useMemo(
		() => [
			new PhantomWalletAdapter(),
			new SlopeWalletAdapter(),
			new SolflareWalletAdapter(),
			new TorusWalletAdapter(),
			new LedgerWalletAdapter(),
			new SolletWalletAdapter({ network }),
			new SolletExtensionWalletAdapter({ network }),
		],
		[network]
	);

	const onError = useCallback(
		(error: WalletError) =>
			toast.custom(
				<Notification
					message={
						error.message ? `${error.name}: ${error.message}` : error.name
					}
					variant="error"
				/>
			),
		[]
	);

	return (
		<ConnectionProvider endpoint={endpoint}>
			<WalletProvider wallets={wallets} onError={onError} autoConnect>
				<WalletModalProvider>
					<Navigation />
				</WalletModalProvider>
				<Toaster position="bottom-left" reverseOrder={false} />
			</WalletProvider>
		</ConnectionProvider>
	);
};
