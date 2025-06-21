import { useLocation } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GET_PAGE_BY_URI = gql`
  query GetPageByUri($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
    }
  }
`;

function PageRenderer() {
  const location = useLocation();
  const path = location.pathname;

  const { data, loading, error } = useQuery(GET_PAGE_BY_URI, {
    variables: { uri: path },
  });

  if (loading) return <p>Loading...</p>;
  if (error || !data?.pageBy) return <p>Page not found</p>;

  return (
    <div className="container mt-5">
      <h1>{data.pageBy.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.pageBy.content }} />
    </div>
  );
}

export default PageRenderer;
