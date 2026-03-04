import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../Firebase/setup'
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './Signup.css'

const Signup = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password)
            if (name) {
                await updateProfile(userCred.user, { displayName: name })
            }
            setLoading(false)
            navigate('/')
        } catch (err) {
            setLoading(false)
            setError(err.message || 'Failed to create account')
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
            setError(err.message || 'Google sign-up failed')
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Create an account</h2>
                <p className="login-sub">Join Fithub — track workouts and more</p>

                {error && <div className="login-error">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                    <label className="input-label">Full name</label>
                    <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Full Name" />

                    <label className="input-label">Email</label>
                    <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />

                    <label className="input-label">Password</label>
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Choose a password" />

                    <button className="btn primary" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
                </form>

                <div className="divider">or</div>



                <div className="login-footer">
                    <span>Already have an account?</span>
                    <button className="link" onClick={() => navigate('/login')}>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Signup