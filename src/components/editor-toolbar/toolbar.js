import React from "react";
import { EditorState, Editor, RichUtils, AtomicBlockUtils } from "draft-js";
import ToolbarBtn from "./toolbar-btn";
import { FaQuoteLeft, FaListOl, FaListUl, FaCode } from 'react-icons/fa';

import "./styles/toolbar.css";

export const BLOCK_TYPES = [
	{ label: <FaQuoteLeft />, style: "blockquote" },
	{ label: <FaListUl />, style: "unordered-list-item" },
	{ label: <FaListOl />, style: "ordered-list-item" },
	{ label: <FaCode />, style: "code-block" }
];

export function getBlockStyle(block) {
	switch (block.getType()) {
		case "blockquote":
			return "blockquote";
		default:
			return null;
	}
}

class Toolbar extends React.Component {
	render() {
		const { editorState } = this.props;
		const selection = editorState.getSelection();
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(selection.getStartKey())
			.getType();

		return (
			<span className="toolbar">
				{BLOCK_TYPES.map(type => {
					return (
						<ToolbarBtn
							active={type.style === blockType}
							label={type.label}
							onToggle={this.props.onToggle}
							style={type.style}
							key={type.label}
							type={type}
						/>
					);
				})}
			</span>
		);
	}
}

export default Toolbar;
