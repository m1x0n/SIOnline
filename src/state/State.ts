﻿import GamesFilter from '../model/enums/GamesFilter';
import ChatMessage from '../model/ChatMessage';
import ChatMode from '../model/enums/ChatMode';
import GameType from '../client/contracts/GameType';
import Role from '../client/contracts/Role';
import RoomState, { initialState as roomInitialState } from './room/RoomState';
import GameInfo from '../client/contracts/GameInfo';
import localization from '../model/resources/localization';
import SettingsState, { initialState as settingsInitialState } from './settings/SettingsState';
import PackageType from '../model/enums/PackageType';
import MessageLevel from '../model/enums/MessageLevel';
import TableState, { initialState as tableInitialState } from './table/TableState';
import UserState, { initialState as userInitialState } from './user/UserState';
import LoginState, { initialState as loginInitialState } from './login/LoginState';
import CommonState, { initialState as commonInitialState } from './common/CommonState';
import SIPackagesState, { initialState as siPackagesInitialState } from './siPackages/SIPackagesState';
import UIState, { initialState as uiInitialState } from './ui/UIState';

export default interface State {
	user: UserState;
	login: LoginState;
	ui: UIState;
	online: {
		inProgress: boolean;
		error: string;
		gamesFilter: GamesFilter;
		gamesSearch: string;
		games: Record<number, GameInfo>;
		selectedGameId: number;
		users: string[];
		currentMessage: string;
		messages: ChatMessage[];
		password: string;
		chatMode: ChatMode;
		newGameShown: boolean;
		gameCreationProgress: boolean;
		gameCreationError: string | null;
		joinGameProgress: boolean;
		joingGameError: string | null;
		uploadPackageProgress: boolean;
		uploadPackagePercentage: number;
	};
	game: {
		name: string;
		password: string;
		package: {
			type: PackageType;
			name: string;
			data: File | null;
			id: string | null;
		};
		type: GameType;
		role: Role;
		isShowmanHuman: boolean;
		playersCount: number;
		humanPlayersCount: number;
		id: number;
		isAutomatic: boolean;
	};
	room: RoomState;
	table: TableState;
	common: CommonState;
	siPackages: SIPackagesState;
	settings: SettingsState;
}

export const initialState: State = {
	user: userInitialState,
	login: loginInitialState,
	ui: uiInitialState,
	online: {
		inProgress: false,
		error: '',
		gamesFilter: GamesFilter.NoFilter,
		gamesSearch: '',
		games: {},
		selectedGameId: -1,
		users: [],
		currentMessage: '',
		messages: [
			{
				sender: localization.appUser,
				text: localization.greeting,
				level: MessageLevel.System,
			}
		],
		password: '',
		chatMode: ChatMode.Chat,
		newGameShown: false,
		gameCreationProgress: false,
		gameCreationError: null,
		joinGameProgress: false,
		joingGameError: null,
		uploadPackageProgress: false,
		uploadPackagePercentage: 0,
	},
	game: {
		name: '',
		password: '',
		package: {
			type: PackageType.Random,
			name: '',
			data: null,
			id: null
		},
		type: GameType.Simple,
		role: Role.Player,
		isShowmanHuman: false,
		playersCount: 3,
		humanPlayersCount: 0,
		id: -1,
		isAutomatic: false
	},
	siPackages: siPackagesInitialState,
	room: roomInitialState,
	table: tableInitialState,
	common: commonInitialState,
	settings: settingsInitialState
};
