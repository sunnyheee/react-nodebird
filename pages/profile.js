import Head from "next/head";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [
    { nickname: "jenny" },
    { nickname: "lisa" },
    { nickname: "roze" },
  ];
  const followingList = [
    { nickname: "jenny" },
    { nickname: "lisa" },
    { nickname: "roze" },
  ];

  return (
    <>
      <Head>
        <title>profile | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="Following list" data={followingList} />
        <FollowList header="Follower list" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
