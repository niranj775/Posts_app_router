function Post({ match: { params } }) {
  return (
    <div>
      <p>Post {params.id}</p>
    </div>
  );
}

export default Post;
