// 1. Define the type for your params
interface PageProps {
  params: Promise<{ id: string }>;
}

// 2. Make the function async
export default async function UserProfile({ params }: PageProps) {
  // 3. Await the params before using them
  const { id } = await params;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p className="mt-4">
        Profile ID:
        <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 rounded font-mono">
          {id}
        </span>
      </p>
    </div>
  );
}
