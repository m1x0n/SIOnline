import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
import localization from '../../model/resources/localization';
import State from '../../state/State';

import './BannedView.css';
import runActionCreators from '../../state/run/runActionCreators';

interface BannedViewProps {
	isConnected: boolean;
	banned: Record<string, string>;
	selectedInfoIp: string | null;

	selectItem: (ip: string) => void;
	unban: (ip: string) => void;
}

const mapStateToProps = (state: State) => ({
	isConnected: state.common.isConnected,
	banned: state.run.banned.entries,
	selectedInfoIp: state.run.banned.selectedIp,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	selectItem: (ip: string) => {
		dispatch(runActionCreators.selectBannedItem(ip) as object as Action);
	},
	unban: (ip: string) => {
		dispatch(runActionCreators.unban(ip) as object as Action);
	},
});

export function BannedView(props: BannedViewProps): JSX.Element {
	return (
		<div className='bannedView'>
			<ul className='bannedList'>
				{Object.keys(props.banned).map(ip => (
					<li
						className={`bannedItem ${ip === props.selectedInfoIp ? 'selected' : ''}`}
						onClick={() => props.selectItem(ip)}>
						<span>{ip} ({props.banned[ip]})</span>
					</li>
				))}
			</ul>

			<div className="buttonsPanel">
				<button
					type="button"
					className='standard'
					onClick={() => props.unban(props.selectedInfoIp ?? '')}
					disabled={!props.isConnected || !props.selectedInfoIp}>
					{localization.unban}
				</button>
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(BannedView);
