"use client";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@/supabase/client";
import Services from '@/components/landingPage/Services'
import Hero from '@/components/landingPage/Hero'
import Navbar from '@/components/landingPage/Navbar'
import Footer from '@/components/landingPage/Footer'
import { logout } from "./(auth)/_actions";
export default  function Page() {
  const [session, setSession] = useState<Session | null>(null);
  const supabase = createClient();
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data?.session);
    };

    getSession();
  }, []);
  console.log("Session ",session)
  if (session) {
    return (
      <div>
        {session ? (
          <div>
            <h2>Logged in as:</h2>
            <p><strong>Email:</strong> {session.user.email}</p>
            <p><strong>User ID:</strong> {session.user.id}</p>
            <p><strong>Role:</strong> {session.user.role || "Not Set"}</p>
            <p><strong>Metadata:</strong> {JSON.stringify(session.user.user_metadata, null, 2)}</p>
            <p><strong>Access Token:</strong> {session.access_token}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>Not logged in</p>
        )}
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
