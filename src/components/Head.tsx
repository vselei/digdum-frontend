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
      <meta name='author' content='Victor Seleimend' />
    </Helmet>
  );
};

export default Head;
