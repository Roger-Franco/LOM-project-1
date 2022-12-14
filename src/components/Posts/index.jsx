import P from 'prop-types';
import { PostCard } from '../PostCard';
import './styles.css';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

// Posts.defaultProps = {
//   posts: [],
// } Isso é o mesmo da linha 5 ({posts= []})

Posts.propTypes = {
  posts: P.arrayOf(P.shape({
    cover: P.string.isRequired,
    title: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  })),
}
// Qualquer uma das duas formas
// Posts.propTypes = {
//   posts: P.array,
// }

