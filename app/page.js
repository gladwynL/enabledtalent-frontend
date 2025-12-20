// app/page.js - NO REDIRECT VERSION
import Header from './components/Header';
import './globals.css';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Your homepage content here */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to EnabledTalent!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Building the future of talent development.
        </p>
        
        <div className="mt-12">
          <p className="text-gray-500 mb-4">
            Click "Enabled Academy" in the navigation menu above to access the academy.
          </p>
          <p className="text-sm text-gray-400">
            Or explore other sections: For Talents, Programs & Awards, For Employers, Events
          </p>
        </div>
      </div>
    </main>
  );
}