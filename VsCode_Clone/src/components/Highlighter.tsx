import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
  content: string;
}

const Highlighter = ({content}: IProps) => {
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {content}
    </SyntaxHighlighter>
  );
};

export default Highlighter;