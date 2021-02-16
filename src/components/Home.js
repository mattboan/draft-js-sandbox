import React from "react";
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMarkdownPlugin from 'draft-js-markdown-plugin';

import "./styles/Home.css";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
            plugins: [createMarkdownPlugin()]
        };
    }

    onChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

    render() {
        return(<div className="Home">
            <h3>Draft JS Sandbox</h3>

            <div className="editorCon">
            <Editor
            className="editor"
        editorState={this.state.editorState}
        onChange={this.onChange}
        plugins={this.state.plugins}
      />
            </div>
        </div>);
    }
}

export default Home;