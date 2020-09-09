import React from "react";
import styled from "styled-components";
import marked from "marked";

interface Props {
}

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SplitScreen = styled.div`
    min-height: 90vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const MarkdownEditor = styled.textarea`
    border: black solid 1px;
    width: 45%;
    resize: horizontal;
`

const Preview = styled.div`
    border: black solid 1px;
    width: 45%;
`

export const Editor: React.FC<Props> = () => {

    const [content, setContent] = React.useState<string>("")

    return (
        <div>
            <Header>
                <h1 contentEditable="true" spellCheck="false">Example.md</h1>
                <button onClick={() => {console.log(content)}}>Click me </button>
            </Header>
            <SplitScreen>
                <MarkdownEditor id="editor" value={content} contentEditable="true"
                onChange={(e) => setContent(e.target.value)}
                >
                    hi there
                </MarkdownEditor>
                <Preview dangerouslySetInnerHTML={{__html: marked(content)}}>
                </Preview>
            </SplitScreen>
        </div>
    )
}