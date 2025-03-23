'use client'

import SignupForm from './Signup'
import LoginForm from './Login'
interface AuthPageProps {
    login: boolean
}

export default function AuthPage({ login }: AuthPageProps) {
    return (
        <div className='auth-container'>
            {login ? <LoginForm/>: <SignupForm />}
        </div>
    )
}
