import { HeroSection } from "@/components/HeroSection";
import PostsList from "@/components/PostsList";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of posts, fetched live from the JSONPlaceholder API.
            Each post represents unique content to showcase seamless API integration.
          </p>
        </div>
        
        <PostsList />
      
        
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Connect with us through our contact form and experience seamless communication.
            </p>
            <a
              href="/form"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              Go to Contact Form
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}