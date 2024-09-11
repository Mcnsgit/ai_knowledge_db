import React, { useState, useMemo } from "react";
import MarkdownViewer from "../components/common/MarkdownViewer";
import MarkDownEditor from "../components/common/MarkDownEditor";

const Editor = () => {
    const [value, setValue] = useState("# Header");
    const editor = useMemo(() => <MarkDownEditor value={value} onChange={setValue} />, [value]);
    const viewer = useMemo(() => <MarkdownViewer content={value} />, [value]);

    return (
        <div>
            {editor}
            {viewer} </div>
    );
};
export default Editor;