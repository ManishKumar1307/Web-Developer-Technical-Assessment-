'use client'
import { useState, useEffect } from "react";
import { Loader2, AlertCircle, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Post } from "@/app/types";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="relative">
          <Loader2 className="w-16 h-16 animate-spin text-gradient-to-r from-blue-500 to-purple-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-20 animate-pulse"></div>
        </div>
        <span className="mt-6 text-lg text-gray-600 font-medium animate-pulse">
          Loading curated posts...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-r-lg p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connection Error</h3>
              <p className="text-gray-700 mb-4">{error}</p>
              <button
                onClick={fetchPosts}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Loader2 className="w-4 h-4" />
                Retry Connection
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="posts" className="mb-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10"></div>
            
            {/* Post Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {post.userId}
                  </div>
                  <span className="text-sm font-medium text-gray-600">User {post.userId}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                  Post #{post.id}
                </span>
              </div>
              
              <button
                onClick={() => toggleLike(post.id)}
                className="p-2 hover:bg-red-50 rounded-full transition-colors"
                aria-label="Like post"
              >
                <Heart
                  className={`w-5 h-5 ${
                    likedPosts.includes(post.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
            </div>
            
            {/* Post Content */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </h3>
              <p className="text-gray-600 line-clamp-3 leading-relaxed">
                {post.body}
              </p>
            </div>
            
            {/* Post Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">12</span>
                </button>
                <div className="text-sm text-gray-500">
                  {likedPosts.includes(post.id) ? "Liked" : "Like"}
                </div>
              </div>
              
              <a
                href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                <span>Read More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
      
      {/* Stats */}
      <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-gray-900">{posts.length}</div>
            <div className="text-sm text-gray-600">Total Posts</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-gray-900">{posts[0]?.userId || 1}</div>
            <div className="text-sm text-gray-600">Active Users</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-gray-900">{likedPosts.length}</div>
            <div className="text-sm text-gray-600">Likes</div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">API Success</div>
          </div>
        </div>
      </div>
    </section>
  );
}