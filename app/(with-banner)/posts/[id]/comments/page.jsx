import Image from 'next/image';
const fetchComments = async (id) => {
  //throw new Error("Error al cargar los comentarios");
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

const Post = async ({ params }) => {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#555', fontSize: '10px' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            width={50}
            height={50}
            alt={comment.name}
            src={`https://avatars.dicebear.com/api/adventurer-neutral//${comment.email}.svg`}
          />
          <h2>{comment.name}</h2>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
};

export default Post;
