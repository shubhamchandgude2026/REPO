import Post from "./compoundComponents/Post";
import CanAccess from "./permissions/CanAccess";

const TestCompundPostCard = () => {
  const post = {
    id: 1,
    title: "Post Title",
    content: "Post Content",
  };
  return (
    <div>
      <Post post={post}>
        <CanAccess permission="EDIT">
          <Post.Title />
        </CanAccess>
        <Post.Body />
      </Post>
    </div>
  );
};

export default TestCompundPostCard;
