// src/components/common/MarkdownViewer.jsx
import {memo} from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const MarkdownViewer = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

MarkdownViewer.propTypes = {
  content: PropTypes.string.isRequired,
};
 export default memo(MarkdownViewer);
