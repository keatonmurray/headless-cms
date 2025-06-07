import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries/posts';

const Home = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.posts.nodes[0];

  return (
    <div>
      <h1>Home</h1>
      <article>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  );
};

export default Home;
