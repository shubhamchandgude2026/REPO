import Post from "./compoundComponents/Post"

const TestCompundPostCard = () => {
    const post = {
        id: 1,
        title: "Post Title",
        content: "Post Content"
    }
  return (
    <div>
        <Post post={post}>
            <Post.Title/>
            <Post.Body/>
        </Post>
    </div>
  )
}

export default TestCompundPostCard