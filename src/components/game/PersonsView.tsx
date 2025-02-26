import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import State from '../../state/State';
import localization from '../../model/resources/localization';
import Account from '../../model/Account';
import roomActionCreators from '../../state/room/roomActionCreators';
import PersonView from './PersonView';

import './PersonsView.css';

interface PersonsViewProps {
	isConnected: boolean;
	showman: Account | undefined;
	players: Account[];
	viewers: Account[];
	login: string;
	selectedPerson: Account | null;
	kick: () => void;
	ban: () => void;
}

const mapStateToProps = (state: State) => {
	const showman = state.room.persons.all[state.room.persons.showman.name];
	const playersNames = state.room.persons.players.map(p => p.name);

	const players = playersNames
		.map(name => state.room.persons.all[name])
		.filter(p => p)
		.sort((p1, p2) => p1.name.localeCompare(p2.name));

	const viewers = Object.keys(state.room.persons.all)
		.filter(name => name !== state.room.persons.showman.name && !playersNames.includes(name))
		.map(name => state.room.persons.all[name])
		.sort((p1, p2) => p1.name.localeCompare(p2.name));

	const { selectedPersonName } = state.room.chat;

	return {
		isConnected: state.common.isConnected,
		showman,
		players,
		viewers,
		login: state.user.login,
		selectedPerson: selectedPersonName ? state.room.persons.all[selectedPersonName] : null
	};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
	kick: () => {
		dispatch((roomActionCreators.kickPerson() as object) as AnyAction);
	},
	ban: () => {
		dispatch((roomActionCreators.banPerson() as object) as AnyAction);
	}
});

const tooltipRef: React.RefObject<HTMLDivElement> = React.createRef();

function inviteLink() {
	const link = window.location.href + '&invite=true';

	if (navigator.clipboard) {
		navigator.clipboard.writeText(link);
	} else {
		alert(link);
	}

	if (tooltipRef.current) {
		tooltipRef.current.style.display = 'initial';

		setTimeout(
			() => {
				if (tooltipRef.current) {
					tooltipRef.current.style.display = 'none';
				}
			},
			3000
		);
	}
}

export function PersonsView(props: PersonsViewProps): JSX.Element {
	const canKick = props.selectedPerson && props.selectedPerson.name !== props.login && props.selectedPerson.isHuman;

	return (
		<>
			<div className="personsList">
				<div className="personsHeader">{localization.showman}</div>

				{props.showman ? (
					<ul>
						<PersonView account={props.showman} />
					</ul>
				) : null}

				<div className="personsHeader">{localization.players}</div>

				<ul>
					{props.players.map((person, index) => (
						<PersonView key={person ? person.name : index} account={person} />
					))}
				</ul>

				<div className="personsHeader">{localization.viewers}</div>

				<ul>
					{props.viewers.map(person => <PersonView key={person.name} account={person} />)}
				</ul>
			</div>

			<div className="buttonsPanel inviteLinkHost">
				<button type="button" className='standard' onClick={() => inviteLink()}>{localization.inviteLink}</button>
				<div ref={tooltipRef} className='inviteLinkTooltip'>{localization.inviteLinkCopied}</div>
			</div>

			<div className="buttonsPanel">
				<button
					type="button"
					className='standard'
					onClick={() => props.kick()}
					disabled={!props.isConnected || !canKick}>
					{localization.kick}
				</button>

				<button type="button" className='standard' onClick={() => props.ban()} disabled={!props.isConnected || !canKick}>
					{localization.ban}
				</button>
			</div>
		</>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonsView);
