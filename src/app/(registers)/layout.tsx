"use client";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-6">
      <button
        onClick={() => history.back()}
        className="flex items-center justify-center h-12 px-4 rounded border border-gray-700 bg-gray-950 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="mr-3 w-6 h-6"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m14 16-4-4 4-4"></path>
        </svg>
        Voltar
      </button>
      {children}
    </div>
  );
}
