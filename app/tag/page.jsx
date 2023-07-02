"use client";
import PromptCard from "@components/PromptCard";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TagPage = () => {
  const tag = useSearchParams().get("tag");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/prompt/tag/${tag}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left mb-10">
        <span className="blue_gradient">Post with #{tag}</span>
      </h1>
      {posts.map((post) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        );
      })}
    </section>
  );
};

export default TagPage;
