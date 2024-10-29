import React from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  // For now, we'll use static data
  const blogDetails = {
    1: {
      title: "Using Custom Hooks in React",
      description:
        "Detailed guide on how to create and use Custom Hooks in React with practical examples.",
      date: "March 15, 2024",
      author: "John Doe",
      content: ``,
      tags: ["React", "JavaScript", "Hooks", "Frontend"],
      readTime: "5 min read",
    },
    2: {
      title: "Array Methods in JavaScript",
      description:
        "Comprehensive guide to all important JavaScript Array Methods with examples.",
      date: "March 10, 2024",
      author: "Jane Smith",
      content:``,
      tags: ["JavaScript", "Arrays", "Programming", "Web Development"],
      readTime: "4 min read",
    },
  };

  const blog = blogDetails[id];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-gray-300 text-2xl">Blog not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 mt-2 mx-8 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg shadow-xl p-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-100 mb-4">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                {blog.author}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                </svg>
                {blog.date}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {blog.readTime}
              </span>
            </div>
          </header>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border-blue-500 border-2 text-white text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-invert max-w-none text-white"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
