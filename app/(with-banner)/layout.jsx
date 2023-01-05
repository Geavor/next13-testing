const PostsLayout = ({ children }) => {
  return (
    <div>
      <marquee style={{ background: '#fff', color: 'purple' }}>
        Layout compartido
      </marquee>
      {children}
    </div>
  );
};

export default PostsLayout;
