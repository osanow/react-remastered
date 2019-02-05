import React from 'react';

import classes from './SyntaxHighlighter.module.scss';

const SyntaxHighlighter = (props) => {
    let content = props.code;

    content = content.replace(new RegExp("<(\\w+(?!>)\\s*\\W+)+[>\\n]+","g"),
        (el) => el.replace(new RegExp("\\s(\\w+)(?=[=>\\s])","g"), ` #attrName#$1#END#`) );
    content = content.replace(new RegExp("(</?)(\\w+)(?=\\b|>)","g"),`$1#tag#$2#END#`);
    content = content.replace(new RegExp(`(\\s+//.*\\n)`,"g"),`#comment#$&#END#`);
    content = content.replace(new RegExp(`(\\s*<!--\\s*.*\\n*)`,"g"),`#comment#$&#END#`);
    content = content.replace(new RegExp(`(return|constructor|if|function|const|let|var|null|class|extends|import|export|from|this|type|ref|value)`,"g"),`#keyword#$&#END#`);
    content = content.replace(new RegExp(`(["'\`].*?["'\`])`,"g"),`#attrValue#$&#END#`);
    content = content.replace(new RegExp(`([\\s.]+)(\\w+)([(])`,"g"),`$1#function#$2#END#$3`);
    content = content.replace(new RegExp(`(</|/>+)`,"g"),`#punctuation#$&#END#`);
    content = content.replace(new RegExp(`([<>=",\\[\\]():{}.;]+)`,"g"),`#punctuation#$&#END#`);
    content = content.replace(new RegExp("#END#" , "g"), `</span>`);
    content = content.replace(new RegExp("#(\\w+)#" , "g"),
        (el) => `<span class=${classes[el.replace(new RegExp('#+','g') ,'')]}>`);

    return (
        <div className={classes.HighlighterBox}>
            <pre className={classes.SyntaxHighlighter}
            dangerouslySetInnerHTML={{__html: content}} />
        </div>
    );

}

export default SyntaxHighlighter;