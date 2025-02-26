export default interface CommonState {
	computerAccounts: string[] | null;
	isConnected: boolean;
	serverName: string | null;
	serverLicense: string | null;
	maxPackageSizeMb: number;
	error: string | null;
	askForConsent: boolean;
	avatarLoadProgress: boolean;
	avatarLoadError: string | null;
}

export const initialState: CommonState = {
	computerAccounts: null,
	isConnected: true,
	serverName: null,
	serverLicense: null,
	maxPackageSizeMb: 100,
	error: null,
	askForConsent: true,
	avatarLoadProgress: false,
	avatarLoadError: null,
};
