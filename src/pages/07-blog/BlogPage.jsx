import { useEffect } from "react";
import Blog from "../../components/07c-blog/Blog";
import { blogs } from "../../utils/data/blogs";

const BlogPage = () => {
  useEffect(() => {
    document.title = `CalNoy | Health Blog`;
  }, []);

  return (
    <div className="w-full px-[32px] max-w-[1440px] mx-auto py-12">
      {/* Highlight Blog และ Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
        {/* Main Blog */}
        <div className="lg:col-span-2 transition duration-300 hover:scale-[1.01] hover:shadow-xl rounded-2xl">
          <Blog blog={blogs[0]} />
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {blogs.slice(1, 4).map((blog) => (
            <div
              key={blog.id}
              className="flex items-start gap-4 transition duration-300 hover:shadow-md hover:scale-[1.02] p-2 rounded-xl"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 mb-1">
                  {blog.contentPreview}
                </p>
                <p className="text-sm font-medium text-black">
                  {blog.category}
                </p>
              </div>

              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-24 h-24 object-cover rounded-lg flex-shrink-0 transition duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Mini Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] mt-12">
        {blogs.slice(4, 7).map((blog) => (
          <div
            key={blog.id}
            className="relative rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-xs text-white mb-1">
                {blog.category} | {blog.readTime}
              </p>
              <p className="text-white text-sm font-medium">
                {blog.title.length > 60
                  ? blog.title.slice(0, 57) + "..."
                  : blog.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
