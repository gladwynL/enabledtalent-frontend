export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-800">
        Welcome to EnabledTalent!
      </h1>
      <p className="mt-4 text-gray-600">
        Building the future of talent development.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          For Job Seekers
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          For Employers
        </button>
        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Our Academy
        </button>
      </div>
    </div>
  )
}