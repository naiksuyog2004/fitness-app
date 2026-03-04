import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/setup'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signInWithEmailAndPassword(auth, email, password)
            setLoading(false)
            navigate('/')
        } catch (err) {
            setLoading(false)
            setError(err.message || 'Failed to sign in')
        }
    }

    const handleGoogle = async () => {
        setError('')
        setLoading(true)
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
            setLoading(false)
            navigate('/')
        } catch (err) {
            setLoading(false)
            setError(err.message || 'Google sign-in failed')
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Welcome back</h2>
                <p className="login-sub">Sign in to continue to Fithub</p>

                {error && <div className="login-error">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="input-label">Email</label>
                    <input
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@example.com"
                    />

                    <label className="input-label">Password</label>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />

                    <button className="btn primary" type="submit" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>
                </form>

                <div className="divider">or</div>


                <div className="login-footer">
                    <span>Don't have an account?</span>
                    <button className="link" onClick={() => navigate('/register')}>Create account</button>
                </div>
            </div>
        </div>
    )
}

export default Login