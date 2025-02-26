import { connect } from 'react-redux';
import * as React from 'react';
import roomActionCreators from '../../../state/room/roomActionCreators';
import State from '../../../state/State';
import { Dispatch, Action } from 'redux';
import localization from '../../../model/resources/localization';

interface SendAllInButtonProps {
	isConnected: boolean;
	useSimpleStakes: boolean;
	sendAllIn: () => void;
}

const mapStateToProps = (state: State) => ({
	isConnected: state.common.isConnected,
	useSimpleStakes: state.room.stakes.areSimple
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	sendAllIn: () => {
		dispatch((roomActionCreators.sendAllIn() as object) as Action);
	}
});

export function SendAllInButton(props: SendAllInButtonProps) {
	return props.useSimpleStakes ? null : (<button disabled={!props.isConnected} onClick={() => props.sendAllIn()}>{localization.allIn}</button>);
}

export default connect(mapStateToProps, mapDispatchToProps)(SendAllInButton);
