import { Box, BoxProps, chakra } from "@chakra-ui/react";
import { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import CodeContainer from "./code-container";
import CopyButton from "./copy-button";
import scope from "./react-live-scope";
import { liveEditorStyle, liveErrorStyle } from "./styles";

const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: "body",
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: "12px",
    overflowX: "auto",
  },
});

function ReactLiveBlock({ editable, rawCode, ...rest }) {
  const code = rawCode.trim().replace("// prettier-ignore", "");
  const [editorCode, setEditorCode] = useState(code.trim());
  const onChange = (newCode) => setEditorCode(newCode.trim());
  const liveProviderProps = {
    code: editorCode,
    scope,
    ...rest,
  };
  return (
    <LiveProvider {...liveProviderProps}>
      <LiveCodePreview zIndex="1" />
      <Box position="relative" zIndex="0">
        {editable && (
          <CodeContainer>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
        )}
        <CopyButton code={editorCode} />
        {/* {editable && <EditableNotice />} */}
      </Box>
      {editable && <LiveError style={liveErrorStyle} />}
    </LiveProvider>
  );
}

export default ReactLiveBlock;
