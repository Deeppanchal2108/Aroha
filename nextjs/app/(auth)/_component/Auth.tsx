'use client'

import SignupForm from './Signup'
import LoginForm from './Login'
interface AuthPageProps {
    login: boolean
}

export default function AuthPage({ login }: AuthPageProps) {
    return (
        <div className='w-full h-screen '>
            {login ? <LoginForm/>: <SignupForm />}
        </div>
    )
}
