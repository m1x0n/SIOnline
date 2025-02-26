﻿import Role from '../client/contracts/Role';
import GameType from '../client/contracts/GameType';
import SettingsState from './settings/SettingsState';

const STATE_KEY = 'SIOnline_State';

export default interface SavedState {
	login: string;
	game: {
		name: string;
		password: string;
		role: Role;
		type: GameType;
		playersCount: number;
		humanPlayersCount: number;
	};
	settings: SettingsState;
}

export function loadState(): SavedState | null {
	const savedState = localStorage.getItem(STATE_KEY);
	if (!savedState) {
		return null;
	}

	return JSON.parse(savedState);
}

export function saveState(state: SavedState) {
	localStorage.setItem(STATE_KEY, JSON.stringify(state));
}
