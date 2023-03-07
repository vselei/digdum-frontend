import { Helmet } from 'react-helmet-async';

const Head = ({
  title,
  description
}: {
  title: string;
  description: string;
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
