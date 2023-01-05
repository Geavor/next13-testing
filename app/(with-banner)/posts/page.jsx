import { Suspense } from 'react';
import ListOfPosts from './ListOfPosts';

const PostsPage = async () => {
  return (
    <section>
      <Suspense fallback={<p>Cargando posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
};

export default PostsPage;
