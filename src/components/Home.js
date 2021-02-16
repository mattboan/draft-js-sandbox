import React from "react";
import { Editor, EditorState, RichUtils } from 'draft-js';
import PrismDecorator from 'draft-js-prism';
import Prism from 'prismjs';

import Toolbar from "./editor-toolbar/toolbar";

import "./styles/Home.css";
import "../prism-themes/prism.css";

var decorator = new PrismDecorator({
    // Provide your own instance of PrismJS
    prism: Prism,
    defaultSyntax: "javascript"
  });

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(decorator),
        };
    }

    onChange = (editorState) => {
        this.setState({
          editorState,
        });
      };

      toggleBlockType = blockType => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, blockType));
      };
    

    render() {
        return(
        <div className="Home">
            <h3>Draft JS Sandbox</h3>
            <Toolbar
            editorState={this.state.editorState}
            onToggle={this.toggleBlockType}
          />
            <div className="editorCon">
            
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                />
            </div>
        </div>);
    }
}

export default Home;