"use client";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <button
        className="bg-white text-black px-2 py-1 rounded-md"
        onClick={() => fetch("http://localhost:3000/api")}
      >
        Send a request from this host to `http://localhost:3000/api`
      </button>
    </main>
  );
}
