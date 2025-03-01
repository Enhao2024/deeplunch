import React from 'react';

function SignOutButton() {
  return (
    <div>
      <form action="/api/auth/signout" method="GET">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border
          border-transparent rounded-md shadow-sm text-sm font-medium
          text-white bg-red-600 hover:bg-red-700 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Sign out
        </button>
      </form>
    </div>
  );
}

export default SignOutButton;
