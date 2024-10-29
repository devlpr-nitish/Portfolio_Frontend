import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  // Blog data
  const blogs = [
    {
      id: 1,
      title: "Using Custom Hooks in React",
      description: "Detailed guide on how to create and use Custom Hooks in React with practical examples.",
      date: "March 15, 2024",
      link: "https://yourblog.com/react-custom-hooks"
    },
    {
      id: 2,
      title: "Array Methods in JavaScript",
      description: "Comprehensive guide to all important JavaScript Array Methods with examples.",
      date: "March 10, 2024",
      link: "https://yourblog.com/js-array-methods"
    },
    // You can add more blogs here
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-300 mb-12 py-4 border-blue-500 border-b-2">
          My Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-100 mb-2">
                  {blog.title}
                </h2>
                <p className="text-gray-400 mb-4">{blog.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{blog.date}</span>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs
