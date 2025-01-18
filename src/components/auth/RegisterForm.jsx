import { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { userId, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    // User ID validation
    if (userId.length < 3) {
      setError('User ID must be at least 3 characters long');
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Password validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, and one number');
      return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Registration successful
      console.log('Registration successful');
      navigate('/login', {
        state: { message: 'Registration successful! Please login.' }
      });
    } catch (err) {
      setError(err.message || 'Registration failed');
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
          name="userId"
          placeholder="User Id"
          value={userId}
          onChange={handleChange}
          className="w-full pl-10 pr-3 py-2 rounded-md bg-white/90 border-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
          minLength={3}
        />
      </div>

      {/* Email Input */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
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
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-2 rounded-md bg-white/90 border-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
          minLength={6}
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

      {/* Confirm Password Input */}
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type={showPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-2 rounded-md bg-white/90 border-none focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
          minLength={6}
        />
      </div>

      {/* Password Requirements */}
      <div className="text-sm text-white/80">
        <p>Password must:</p>
        <ul className="list-disc list-inside">
          <li>Be at least 6 characters long</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one number</li>
        </ul>
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
        {isLoading ? 'Registering...' : 'Register'}
      </button>

      {/* Login Link */}
      <div className="flex items-center justify-center space-x-2">
        <span className="text-white">Already have an account?</span>
        <Link
          to="/login"
          className={`px-4 py-1 rounded-md transition duration-300 ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-white text-blue-600 hover:bg-blue-50'
          }`}
          onClick={(e) => isLoading && e.preventDefault()}
        >
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
