import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

function CodeEditor({ code, onChange }) {
  return (
    <AceEditor
      setOptions={{ useWorker: false }}
      mode="javascript"
      theme="dracula"
      name="code-editor"
      fontSize={18}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      width="100%"
      height="calc(100vh - 180px)"
      value={code}
      onChange={onChange}
    />
  );
}

export default CodeEditor;