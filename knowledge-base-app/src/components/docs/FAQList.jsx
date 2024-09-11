// src/components/faq/FAQList.jsx
import { Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
// import { fetchFAQs } from '../../api/knowledgeBase';
import FAQ from './Faq';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import FaQ from '../../pages/FaQs';


const fetchFaqs = async () => {
  const { data } = await axios.get('http://localhost:3001/faqs');
  return data;
};

const FAQList = () => {
  const { data: faqs, isLoading, error } = useQuery({
    queryKey: ['faqs'],
    queryFn: fetchFaqs,
});

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Error fetching FAQs" />;

  return (
    <Box>
      {data.map((faq) => (
        <FaQ key={faq.id} faq={faq} />
      ))}
    </Box>
  );
};

export default FAQList;
