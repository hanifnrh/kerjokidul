import { Categories, PostCard, PostWidget } from '../../components';
import { FeaturedPosts } from '../../sections/index';
import { getPosts } from '../../services';

export default function Berita({ posts }) {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-10 my-8">
        <FeaturedPosts />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 col-span-1">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
