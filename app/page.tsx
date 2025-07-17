export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans p-8 max-w-2xl mx-auto">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-6">Yang&apos;s Notes</h1>
        
        <div className="text-gray-700 mb-8 leading-relaxed">
          <p className="mb-2">Hey 👋 I'm Yang,</p>
          <p className="mb-2">I'm currently focused on building <a href="https://www.dumplingai.com" className="text-blue-600 hover:text-blue-800 underline font-medium">DumplingAI</a>.</p>
          <p className="mb-2">Previously, I worked in roles across finance, strategy, and product at Macquarie, L.E.K., Rokt, and Checkbox.</p>
          <p className="mb-2">I'm a self-taught developer and have been building things on the internet for as long as I can remember.</p>
          <p className="mb-2">My content is usually about AI, growth, dev workflows, and startups.</p>
          <p className="mb-2">I studied law at the University of Sydney and even got qualified as a lawyer, but never practiced.</p>
        </div>
        
        <div className="flex flex-col space-y-2">
          <a href="https://x.com/yangpten" className="text-blue-600 hover:text-blue-800 underline">
            X (Twitter) @yangpten
          </a>
          <a href="https://www.youtube.com/@yangpten" className="text-blue-600 hover:text-blue-800 underline">
            YouTube @yangpten
          </a>
          <a href="https://www.tiktok.com/@yangpten" className="text-blue-600 hover:text-blue-800 underline">
            TikTok @yangpten
          </a>
          <a href="https://yangsnewsletter.substack.com/" className="text-blue-600 hover:text-blue-800 underline">
            Substack newsletter
          </a>
        </div>
      </div>
    </div>
  );
}
