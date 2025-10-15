export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Your NuiFlo Project</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 mb-4">
              This project was generated using the NuiFlo Next.js seed template.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✅ Next.js 15 with App Router</li>
              <li>✅ TypeScript configured</li>
              <li>✅ Tailwind CSS ready</li>
              <li>✅ Prisma ORM setup</li>
              <li>✅ Base User model included</li>
            </ul>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <ol className="space-y-2 text-sm">
              <li>1. Set up your database connection</li>
              <li>2. Run <code className="bg-gray-100 px-1 rounded">npm run db:push</code></li>
              <li>3. Start developing your features</li>
              <li>4. Follow the conventions in the README</li>
            </ol>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-800">
            <strong>API Health Check:</strong> Visit{' '}
            <a href="/api/health" className="underline">/api/health</a>{' '}
            to test your API setup.
          </p>
        </div>
      </div>
    </main>
  )
}
