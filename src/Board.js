import React, { Component } from 'react';
import Notice from './Notice';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notes: []
		}
	}

	/**
	 * Display each node onto board.
	 */
	eachNode(note) {

	}

	/**
	 * Add new notice to the board.
	 */
	addNew() {

	}

	render() {
		return (
				<div className='board'>
					{this.state.notes}
					<button onClick={() => {
						console.log('addNew')
					}}>
						Add
					</button>
				</div>
		);
	}
}

export default Board;
