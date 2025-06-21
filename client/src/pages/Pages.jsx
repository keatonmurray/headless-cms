import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PAGE_BY_URI } from '../graphql/queries/pages'; 
import Cliploader from '../components/partials/Cliploader';
import Category from '../components/sections/page/Category';
import PageNotFound from '../components/partials/PageNotFound';
import Post from '../components/sections/page/Post';

const Pages = () => {
  const location = useLocation();
  const path = location.pathname;
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;

  const { data, loading, error } = useQuery(GET_PAGE_BY_URI, {
    variables: { uri: normalizedPath },
  });

  if (loading) return <Cliploader />;
  if (error || !data?.nodeByUri) return <PageNotFound />;

  const node = data.nodeByUri;

  if (node.__typename === 'ProductCategory') {
    const products = node.products?.nodes || [];
    return <Category category={node} products={products} />;
  }

  if (node.__typename === 'Page') {
    return (
      <Post title={node.title} content={node.content} />
    );
  }

  return <PageNotFound />;
};

export default Pages;
