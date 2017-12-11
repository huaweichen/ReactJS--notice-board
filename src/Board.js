import React, { Component } from 'react';
import Notice from './Notice';

class Board extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notices: [
				{id: 0, text: 'Notice 0'},
				{id: 1, text: 'Notice 1'},
				{id: 2, text: 'Notice 2'},
				{id: 3, text: 'Notice 3'},
				{id: 4, text: 'Notice 4'},
			]
		}
		this.eachNotice = this.eachNotice.bind(this)
		this.onChange = this.onChange.bind(this)
		this.onDelete = this.onDelete.bind(this)
		this.nextId = this.nextId.bind(this)
	}

	/**
	 * Display each notice onto board.
	 */
	eachNotice(notice) {
		return (
				<Notice key={notice.id}
								id={notice.id}
								onChange={this.onChange}
								onDelete={this.onDelete}>
					{notice.text}
				</Notice>
		)
	}

	onChange(newNotice, id) {
		let notices = this.state.notices.map(
				notice => {
				if (notice.id !== id) {
					return notice;
				}
				else {
					return {
						...notice,
						text: newNotice
					}
				}
			}
		)
		this.setState({notices})
	}

	onDelete(noticeId) {
		let notices = this.state.notices.filter(
				notice => {
					return notice.id !== noticeId
				}
		);
		this.setState({notices})
	}

	/**
	 * Get new notice ID.
	 * @returns {Number}
	 */
	nextId() {
		return this.state.notices.length;
	}

	/**
	 * Add new notice to the board.
	 */
	addNew(text) {
		let notices = [
				...this.state.notices,
			{
				id: this.nextId(),
				text: text
			}
		]
		this.setState({notices});
	}

	render() {
		return (
				<div className='board'>
					{this.state.notices.map(this.eachNotice)}
					<button onClick={
						() => this.addNew('New notice')
					}>
						Add
					</button>
				</div>
		);
	}
}

export default Board;
