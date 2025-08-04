import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-bl from-white to-indigo-600">
      <div className="w-full max-w-md">
        <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-indigo-600 hover:bg-indigo-700 text-sm normal-case",
            },
          }}
        />
      </div>
    </div>
  );
}
