import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col items-center justify-center px-4">
      <div className="text-center animate-bounce">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-white text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="bg-white text-sky-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-100 transition duration-300">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
