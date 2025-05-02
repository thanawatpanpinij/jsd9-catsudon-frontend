import React from "react";
import { Link } from "react-router";

const Blog = ({ blog }) => {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={blog.author.avatarUrl}
          alt={blog.author.name}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{blog.author.name}</p>
          <p className="text-xs text-gray-500">{blog.author.role}</p>
        </div>
      </div>
      <Link to={"blog-detail"}>
        <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      </Link>
      <p className="text-sm text-gray-500 mb-4">
        {blog.category} <span className="text-red-500">| {blog.readTime}</span>
      </p>
      <Link to={"blog-detail"}>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="rounded-xl w-full object-cover mb-4 max-h-72"
        />
      </Link>
    </div>
  );
};

export default Blog;
