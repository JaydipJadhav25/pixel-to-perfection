import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUsername(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // or token
    setUsername('');
    navigate('/login');
  };

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">DoubtConnect</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/">Home</Link>
        <Link to="/ask">Ask Doubt</Link>
        <Link to="/doubts">All Doubts</Link>

        {username ? (
          <>
            <span className="ml-4 font-medium">Hi, {username}</span>
            <button
              onClick={handleLogout}
              className="bg-white text-green-600 px-3 py-1 rounded hover:bg-green-100 ml-2"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-green-600 px-3 py-1 rounded hover:bg-green-100 ml-2"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}