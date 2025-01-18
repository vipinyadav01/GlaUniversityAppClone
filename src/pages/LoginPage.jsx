import { Building2, Facebook, Instagram, User } from 'lucide-react';
import LoginForm from '../components/auth/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center mb-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/42/GLA_University_logo.png"
          alt="GLA University Logo"
          width={120}
          height={120}
          className="mx-auto mb-10"
        />
        <h1 className="text-white text-4xl font-bold">GLA UNIVERSITY</h1>
      </div>

      <LoginForm />

      <div className="fixed bottom-8 left-0 right-0 w-full px-4">
        <div className="flex justify-center items-center space-x-8 sm:space-x-12">
          <Link to="/about" className="flex flex-col items-center text-white">
            <Building2 className="h-8 w-8 mb-1" />
            <span className="text-xs sm:text-sm">About GLA</span>
          </Link>
          <Link to="/facebook" className="flex flex-col items-center text-white">
            <Facebook className="h-8 w-8 mb-1" />
            <span className="text-xs sm:text-sm">Facebook</span>
          </Link>
          <Link to="/instagram" className="flex flex-col items-center text-white">
            <Instagram className="h-8 w-8 mb-1" />
            <span className="text-xs sm:text-sm">Instagram</span>
          </Link>
          <Link to="/glams" className="flex flex-col items-center text-white">
            <User className="h-8 w-8 mb-1" />
            <span className="text-xs sm:text-sm">GLAMS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
