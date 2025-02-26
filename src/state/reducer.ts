﻿import { AnyAction, Reducer } from 'redux';
import State, { initialState } from './State';
import { ActionTypes } from './Actions';
import MainView from '../model/enums/MainView';
import { create, remove, set } from '../utils/RecordExtensions';
import { removeFromArray } from '../utils/ArrayExtensions';
import localization from '../model/resources/localization';
import { KnownRoomAction } from './room/RoomActions';
import roomReducer from './room/roomReducer';
import OnlineMode from '../model/enums/OnlineMode';
import settingsReducer from './settings/settingsReducer';
import { KnownSettingsAction } from './settings/SettingsActions';
import Role from '../client/contracts/Role';
import MessageLevel from '../model/enums/MessageLevel';
import tableReducer from './table/tableReducer';
import { KnownTableAction } from './table/TableActions';
import userReducer from './user/userReducer';
import { KnownUserAction } from './user/UserActions';
import loginReducer from './login/loginReducer';
import { KnownLoginAction } from './login/LoginActions';
import commonReducer from './common/commonReducer';
import { KnownCommonAction } from './common/CommonActions';
import siPackagesReducer from './siPackages/siPackagesReducer';
import { KnownSIPackagesAction } from './siPackages/SIPackagesActions';
import uiReducer from './ui/uiReducer';
import { KnownUIAction } from './ui/UIActions';

const reducer: Reducer<State> = (
	state: State = initialState,
	action: AnyAction): State => {
	switch (action.type) {
		case ActionTypes.DropSelectedGame:
			return {
				...state,
				online: {
					...state.online,
					selectedGameId: -1
				},
			};

		case ActionTypes.UnselectGame:
			return {
				...state,
				online: {
					...state.online,
					selectedGameId: -1
				}
			};

		case ActionTypes.ResetLobby:
			return {
				...state,
				online: {
					...state.online,
					games: [],
					users: [],
					messages: [],
					inProgress: true,
					error: ''
				}
			};

		case ActionTypes.ClearGames:
			return {
				...state,
				online: {
					...state.online,
					games: {}
				}
			};

		case ActionTypes.ReceiveGames:
			return {
				...state,
				online: {
					...state.online,
					games: { ...state.online.games, ...create(action.games, game => game.gameID) }
				}
			};

		case ActionTypes.ReceiveUsers:
			return {
				...state,
				online: {
					...state.online,
					users: action.users
				}
			};

		case ActionTypes.ReceiveMessage:
			return {
				...state,
				online: {
					...state.online,
					messages: [
						...state.online.messages, {
							sender: action.sender,
							text: action.message,
							level: MessageLevel.Information,
						}]
				}
			};

		case ActionTypes.GameCreated:
			return {
				...state,
				online: {
					...state.online,
					games: set(state.online.games, action.game.gameID, action.game)
				}
			};

		case ActionTypes.GameChanged:
			return {
				...state,
				online: {
					...state.online,
					games: set(state.online.games, action.game.gameID, action.game)
				}
			};

		case ActionTypes.GameDeleted:
			return {
				...state,
				online: {
					...state.online,
					games: remove(state.online.games, action.gameId),
					selectedGameId: state.online.selectedGameId === action.gameId ? -1 : state.online.selectedGameId
				}
			};

		case ActionTypes.UserJoined:
			if (state.online.users.indexOf(action.login) > -1) {
				return state;
			}

			return {
				...state,
				online: {
					...state.online,
					users: [...state.online.users, action.login]
				}
			};

		case ActionTypes.UserLeaved:
			return {
				...state,
				online: {
					...state.online,
					users: removeFromArray(state.online.users, action.login)
				}
			};

		case ActionTypes.OnlineLoadFinished:
			return {
				...state,
				online: {
					...state.online,
					inProgress: false
				}
			};

		case ActionTypes.OnlineLoadError:
			return {
				...state,
				online: {
					...state.online,
					inProgress: false,
					error: action.error
				}
			};

		case ActionTypes.GamesFilterToggle: {
			return {
				...state,
				online: {
					...state.online,
					gamesFilter: state.online.gamesFilter ^ action.filter
				}
			};
		}

		case ActionTypes.GamesSearchChanged: {
			return {
				...state,
				online: {
					...state.online,
					gamesSearch: action.search
				}
			};
		}

		case ActionTypes.SelectGame:
			return {
				...state,
				online: {
					...state.online,
					selectedGameId: action.gameId
				}
			};

		case ActionTypes.PasswordChanged: {
			return {
				...state,
				online: {
					...state.online,
					password: action.newPassword
				}
			};
		}

		case ActionTypes.MessageChanged: {
			return {
				...state,
				online: {
					...state.online,
					currentMessage: action.message
				}
			};
		}

		case ActionTypes.ChatModeChanged: {
			return {
				...state,
				online: {
					...state.online,
					chatMode: action.chatMode
				}
			};
		}

		case ActionTypes.NewGame: {
			return {
				...state,
				online: {
					...state.online,
					newGameShown: true,
					gameCreationProgress: false,
					gameCreationError: null
				},
				game: {
					...state.game,
					name: state.game.name || `${localization.gameOf} ${state.user.login}`
				}
			};
		}

		case ActionTypes.NewGameCancel: {
			return {
				...state,
				online: {
					...state.online,
					newGameShown: false,
					gameCreationError: null,
					gameCreationProgress: false
				}
			};
		}

		case ActionTypes.GameNameChanged: {
			return {
				...state,
				game: {
					...state.game,
					name: action.gameName
				}
			};
		}

		case ActionTypes.GamePasswordChanged: {
			return {
				...state,
				game: {
					...state.game,
					password: action.gamePassword
				}
			};
		}

		case ActionTypes.GamePackageTypeChanged: {
			return {
				...state,
				game: {
					...state.game,
					package: {
						...state.game.package,
						type: action.packageType
					}
				}
			};
		}

		case ActionTypes.GamePackageDataChanged: {
			return {
				...state,
				game: {
					...state.game,
					package: {
						...state.game.package,
						name: action.packageName,
						data: action.packageData
					}
				}
			};
		}

		case ActionTypes.GamePackageLibraryChanged: {
			return {
				...state,
				game: {
					...state.game,
					package: {
						...state.game.package,
						name: action.name,
						id: action.id
					}
				}
			};
		}

		case ActionTypes.GameTypeChanged: {
			return {
				...state,
				game: {
					...state.game,
					type: action.gameType
				}
			};
		}

		case ActionTypes.GameRoleChanged: {
			return {
				...state,
				game: {
					...state.game,
					role: action.gameRole,
					humanPlayersCount: Math.min(state.game.playersCount - (action.gameRole === Role.Player ? 1 : 0), state.game.humanPlayersCount)
				}
			};
		}

		case ActionTypes.ShowmanTypeChanged: {
			return {
				...state,
				game: {
					...state.game,
					isShowmanHuman: action.isHuman
				}
			};
		}

		case ActionTypes.PlayersCountChanged: {
			return {
				...state,
				game: {
					...state.game,
					playersCount: action.playersCount,
					humanPlayersCount: Math.min(state.game.humanPlayersCount, action.playersCount - (state.game.role === Role.Player ? 1 : 0))
				}
			};
		}

		case ActionTypes.HumanPlayersCountChanged: {
			return {
				...state,
				game: {
					...state.game,
					humanPlayersCount: action.humanPlayersCount
				}
			};
		}

		case ActionTypes.GameCreationStart: {
			return {
				...state,
				online: {
					...state.online,
					gameCreationProgress: true,
					gameCreationError: null
				}
			};
		}

		case ActionTypes.GameCreationEnd: {
			return {
				...state,
				online: {
					...state.online,
					gameCreationProgress: false,
					gameCreationError: action.error
				}
			};
		}

		case ActionTypes.GameSet: {
			return {
				...state,
				game: {
					...state.game,
					id: action.id,
					isAutomatic: action.isAutomatic
				}
			};
		}

		case ActionTypes.JoinGameStarted: {
			return {
				...state,
				online: {
					...state.online,
					joinGameProgress: true,
					joingGameError: null
				}
			};
		}

		case ActionTypes.JoinGameFinished: {
			return {
				...state,
				online: {
					...state.online,
					joinGameProgress: false,
					joingGameError: action.error
				}
			};
		}

		case ActionTypes.UploadPackageStarted:
			return {
				...state,
				online: {
					...state.online,
					uploadPackageProgress: true,
					uploadPackagePercentage: 0
				}
			};

		case ActionTypes.UploadPackageFinished:
			return {
				...state,
				online: {
					...state.online,
					uploadPackageProgress: false
				}
			};

		case ActionTypes.UploadPackageProgress:
			return {
				...state,
				online: {
					...state.online,
					uploadPackagePercentage: action.progress
				}
			};

		default:
			return {
				...state,
				user: userReducer(state.user, action as KnownUserAction),
				login: loginReducer(state.login, action as KnownLoginAction),
				room: roomReducer(state.room, action as KnownRoomAction),
				common: commonReducer(state.common, action as KnownCommonAction),
				settings: settingsReducer(state.settings, action as KnownSettingsAction),
				table: tableReducer(state.table, action as KnownTableAction),
				siPackages: siPackagesReducer(state.siPackages, action as KnownSIPackagesAction),
				ui: uiReducer(state.ui, action as KnownUIAction),
			};
	}
};

export default reducer;
