import { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Basic validation
    if (!userId.trim() || !password.trim()) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store user data in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);
      localStorage.setItem('userEmail', data.email);

      // Optional: Store login timestamp
      localStorage.setItem('loginTime', new Date().toISOString());

      // Navigate to home page
      navigate('/');
    } catch (error) {
      setError(error.message || 'An error occurred during login');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
      {/* Error Alert */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* User ID Input */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="User Id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full pl-10 pr-3 py-2 rounded-md bg-white/90 border-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full pl-10 pr-10 py-2 rounded-md bg-white/90 border-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          disabled={isLoading}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full py-2 px-4 rounded-md font-semibold transition duration-300 ${
          isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-white text-blue-600 hover:bg-blue-50'
        }`}
        disabled={isLoading}
      >
        {isLoading ? 'Logging in...' : 'Login'}
      </button>

      {/* Forgot Password Link */}
      <div className="text-center">
        <Link
          to="/forgot-password"
          className="text-white hover:underline"
          onClick={(e) => isLoading && e.preventDefault()}
        >
          Forgot password?
        </Link>
      </div>

      {/* Register Link */}
      <div className="flex items-center justify-center space-x-2">
        <span className="text-white">Don't Have an Account?</span>
        <Link
          to="/register"
          className={`px-4 py-1 rounded-md transition duration-300 ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
          onClick={(e) => isLoading && e.preventDefault()}
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
