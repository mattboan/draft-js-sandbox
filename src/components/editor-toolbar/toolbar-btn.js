import React from "react";

import "./styles/toolbar-btn.css"

class ToolbarBtn extends React.Component {
	onToggle = e => {
		e.preventDefault();
		this.props.onToggle(this.props.style);
	};

	render() {
		let className = "toobarBtn-styleButton";
		if (this.props.active) {
			className += " toobarBtn-activeButton";
		}

		return (
			<div className={className} onClick={this.onToggle}>
				{this.props.label}
			</div>
		);
	}
}

export default ToolbarBtn;
