import React from 'react'
import { getUser } from '@/supabase/user'
async function page() {
    const user = await getUser()
    console.log("User ",user)
  return (
      <div className="h-screen flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h1 className="text-2xl font-bold mb-4 text-center">Patient's Dashboard</h1>

              {user ? (
                  <div className="space-y-2">
                      { 'user_metadata' in user ? (
                        <>
                          <p><span className="font-semibold">Name:</span> {user.user_metadata.firstName} {user.user_metadata.lastName}</p>
                          <p><span className="font-semibold">Email:</span> {user.email}</p>
                          <p><span className="font-semibold">Role:</span> {user.user_metadata.role}</p>
                          <p><span className="font-semibold">Last Sign-in:</span> {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}</p>
                        </>
                      ) : (
                        <p className="text-red-500">No user data available.</p>
                      )}
                  </div>
              ) : (
                  <p className="text-red-500">No user data available.</p>
              )}
          </div>
      </div>
  )
}

export default page
