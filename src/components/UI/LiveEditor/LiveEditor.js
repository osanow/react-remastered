import React, {Component} from 'react';
import Remarkable from 'remarkable';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview,
  } from 'react-live';

import { codeExamples } from '../../data/data';
import classes from './LiveEditor.module.scss';

class LiveEditorComp extends Component{

    state = {
        codeEditorError: false,
    }

    error = false;

    onChangeErrorHandler = ( val ) => {
        this.setState({ codeEditorError: val });
    }

    onChangeHandler = () => {
        setTimeout(() => {
            const errorWindow = document.querySelector('.react-live-error');
            this.error = (errorWindow ? true : false);

            if (this.state.codeEditorError !== this.error)
                this.onChangeErrorHandler(this.error);

        }, 3);
    }

    render() {

      const scope = { Remarkable };

        return (
            <LiveProvider code={codeExamples[this.props.codeExample]} noInline={true} scope={scope}>
                <div className={classes.codeLive}>
                    <div className={classes.codeEditor}>
                        <div className={classes.editorTitle}> live jsx editor </div>
                        <LiveEditor className={classes.editor} onChange={this.onChangeHandler}/>
                    </div>
                    <div className={classes.codeResult}>
                        <div className={this.state.codeEditorError ? classes.errorTitle : classes.resultTitle}> {this.state.codeEditorError ? 'error' : 'result'} </div>
                        <LiveError />
                        <LivePreview />
                    </div>
                </div>
            </LiveProvider>
        );
    }
}

export default LiveEditorComp;