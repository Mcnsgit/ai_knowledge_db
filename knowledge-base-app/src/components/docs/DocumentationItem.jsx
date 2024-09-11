import { memo } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import MarkdownViewer from '../common/MarkdownViewer';
import PropTypes from 'prop-types';

const DocumentationItem = ({ doc }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Heading size="md">{doc.title}</Heading>
      <MarkdownViewer content={doc.content} />
    </Box>
  );
};

DocumentationItem.propTypes = {
  doc: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(DocumentationItem);