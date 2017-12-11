import React, {Component} from 'react';
import Draggable from 'react-draggable';

class Notice extends Component {

	constructor(props) {
		super(props)
		this.state = {
			editing: false
		}
		this.save = this.save.bind(this)
		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
	}

	componentWillMount() {
		/**
		 * Randomize the notice initial position.
		 * @type {{right: *, top: *}}
		 */
		this.position = {
			right: this.randomPosition(0, window.innerWidth - 200, 'px'),
			top: this.randomPosition(0, window.innerHeight - 200, 'px'),
		}
	}

	/**
	 * Get a random position with given range and unit.
	 * @param from
	 * @param to
	 * @param unit
	 * @returns {*}
	 */
	randomPosition(from, to, unit) {
		return (from + Math.ceil(Math.random() * (to - from))) + unit;
	}

	/**
	 * Save a notice.
	 */
	save() {
		this.props.onChange(this.refs.newNotice.value, this.props.id)
		this.setState({
			editing: false
		})
	}

	/**
	 * Notice in editing state.
	 */
	edit() {
		this.setState({
			editing: true
		})
	}

	/**
	 * Remove a notice.
	 */
	remove() {
		this.props.onDelete(this.props.id)
	}

	/**
	 * Render notice as a textarea.
	 */
	renderForm() {
		return (
				<div className='notice'
				     style={this.position}>
					<textarea ref='newNotice'
					          defautValue={this.props.children}>
					</textarea>
					<button onClick={this.save}>Save</button>
				</div>
		)
	}

	/**
	 * Render notice as a paragraph.
	 */
	renderView() {
		return (
				<div className='notice'
				     style={this.position}>
					<p>{this.props.children}</p>
					<span>
						<button onClick={this.edit}>Edit</button>
						<button onClick={this.remove}>Remove</button>
					</span>
				</div>
		)
	}

	render() {
		return (
				<Draggable>
					{(this.state.editing) ? this.renderForm()
																: this.renderView()
					}
				</Draggable>
		);
	}

}

export default Notice;
