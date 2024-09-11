// src/components/common/MarkdownEditor.jsx
import  { useState, memo } from 'react';
import ReactMde from 'react-mde';
import 'react-mde/lib/styles/css/react-mde-all.css';
import Showdown from 'showdown';
import PropTypes from 'prop-types';
const MarkdownEditor = ({ value, onChange }) => {
  const [selectedTab, setSelectedTab] = useState('write');
  const converter = new Showdown.Converter();

  return (
    <ReactMde
      value={value}
      onChange={onChange}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
    />
  );
};

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

 export default memo(MarkdownEditor);
