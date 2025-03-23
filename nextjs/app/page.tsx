import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Services from '@/components/landingPage/Services'
import Hero from '@/components/landingPage/Hero'
import Navbar from '@/components/landingPage/Navbar'
import Footer from '@/components/landingPage/Footer'

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();
  const session = data.session;
  console.log("Session : ",session);
  if (session) {
    return (
      <div className="min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Session Information</h1>
        <div className="space-y-2">
          <p>User ID: {session.user.id}</p>
          <p>Email: {session.user.email}</p>
          <p>Last Sign In: {new Date(session.user.last_sign_in_at || '').toLocaleString()}</p>
          <pre className="bg-gray-100 p-4 rounded-md mt-4">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}
