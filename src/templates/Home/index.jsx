import './styles.css';
import React from 'react';
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state
    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    })
  }

  loadMorePosts = () => {
    const {
      posts,
      allPosts,
      page,
      postsPerPage

    } = this.state
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    // console.log(page, postsPerPage, nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts)
    this.setState({ posts, page: nextPage })
  }

  // function Home() {
  render() {
    const { posts, page, postsPerPage, allPosts } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length;
    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            text="Load more posts"
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );
  }
}
