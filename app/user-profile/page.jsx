"use client";
import React, { useEffect, useState } from "react";

import Profile from "@components/Profile";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const UserProfile = () => {
  const Router = useRouter();
  const userId = useSearchParams().get("id");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`/api/users/${userId}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <Profile
        name={`${posts[0] ? posts[0].creator.username : ""}'s`}
        desc={`See posts by ${posts[0] ? posts[0].creator.username : ""}`}
        data={posts}
        handleTagClick={() => {}}
      />
    </div>
  );
};

export default UserProfile;
