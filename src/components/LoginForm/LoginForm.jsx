import React, { Component } from 'react';

class LoginForm extends Component {
	state = {
		name: '',
		tag: '',
	};
	handleChange = event => {
		const { name, value } = event.currentTarget;
		this.setState({
			[name]: value,
		});
	};
	handleSubmit = event => {
		event.preventDefault();

		this.props.onSubmit(this.state);
		this.reset();
	};
	reset = () => {
		this.setState({
			name: '',
			tag: '',
			experience: 'junior',
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Имя
					<input
						type="text"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Прозвище
					<input
						type="text"
						name="tag"
						value={this.state.tag}
						onChange={this.handleChange}
					/>
				</label>
				<p>Ваш уровень:</p>

				<label>
					<input
						type="radio"
						name="experience"
						value="junior"
						onChange={this.handleChange}
						checked={this.state.experience === 'junior'}
					/>
					Junior
				</label>

				<label>
					<input
						type="radio"
						name="experience"
						value="middle"
						onChange={this.handleChange}
						checked={this.state.experience === 'middle'}
					/>
					Middle
				</label>

				<label>
					<input
						type="radio"
						name="experience"
						value="senior"
						onChange={this.handleChange}
						checked={this.state.experience === 'senior'}
					/>
					Senior
				</label>

				<button type="submit">Submit</button>
			</form>
		);
	}
}
export default LoginForm;
