"use client";
import React, { useEffect, useState } from "react";

import Profile from "@components/profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const Router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (session?.user.id) {
      fetch(`/api/users/${session?.user.id}/posts`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
        });
    }
  }, [session]);

  const handleEdit = async (post) => {
    console.log(post);
    Router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, { method: "DELETE" });
        const filteredPosts = posts.filter((p) => p._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Profile
        name="My "
        desc="Welcome to your personal profile"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default MyProfile;
