import React from 'react'
import AuthPage from '../_component/Auth'

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <AuthPage login={false} />
        </div>
    )
}
