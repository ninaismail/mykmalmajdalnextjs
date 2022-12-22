import { useAuth } from '../hooks/auth'
import { useState } from 'react'

function VerifyEmail() {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const [status, setStatus] = useState(null)

    return (
    <div>
        <div className="mb-4 text-sm text-gray-600">
            Thanks for signing up! Before getting started, could you
            verify your email address by clicking on the link we just
            emailed to you? If you didn&apos;t receive the email, we will
            gladly send you another.
        </div>

        {status === 'verification-link-sent' && (<div className="mb-4 font-medium text-sm text-green-600">
                A new verification link has been sent to the email
                address you provided during registration.
            </div>
        )}

        <div className="mt-4 flex items-center justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700"
                onClick={() => resendEmailVerification({ setStatus })}>
                Resend Verification Email
            </button>

            <button
                type="button"
                className="px-6 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-700"
                onClick={logout}>
                Logout
            </button>
        </div>
    </div>
    )
}

export default VerifyEmail
