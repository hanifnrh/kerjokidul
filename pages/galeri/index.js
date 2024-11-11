import Gallery from '../../sections/Gallery';
import { getGalleryPost } from '../../services';

export default function Galeri({ posts }) {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-10 my-8">
        <Gallery posts={posts} />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = (await getGalleryPost()) || [];
  return {
    props: { posts },
  };
}
