import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { isLoggedIn } = useSelector((state) => state.user);

  // const mainPosts = useSelector((state) => state.user.mainPosts);
  const { mainPosts } = useSelector((state) => state.post);
  // 위의 코드는 같은 기능이지만 성능에 조금 차이가 있음
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {/* 데이터가 삭제되거나 변형되는 경우가 있을때에는 key를 index로 쓰지 않는것이 좋다 */}
    </AppLayout>
  );
};

export default Home;
