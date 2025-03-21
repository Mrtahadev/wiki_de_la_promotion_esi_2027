import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const NavBar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">Wiki ESI 2027</span>
            </Link>
            
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Accueil
              </Link>
              <Link 
                to="/filieres" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  location.pathname.includes('/filieres') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Filières
              </Link>
              <Link 
                to="/actualite" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/actualite') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Actualité
              </Link>
              <Link 
                to="/retour-experience" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/retour-experience') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Retours d'expérience
              </Link>
              <Link 
                to="/wiki" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/wiki') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Wiki
              </Link>
              <Link 
                to="/internships" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/internships') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Stages
              </Link>
              <Link 
                to="/chatroom" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/chatroom') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Discussion
              </Link>
              <Link 
                to="/faq" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/faq') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out border-b-2 ${
                  isActive('/contact') 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Bonjour, {user?.name || 'Utilisateur'}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connexion
              </Link>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link 
            to="/filieres" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              location.pathname.includes('/filieres') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Filières
          </Link>
          <Link 
            to="/actualite" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/actualite') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Actualité
          </Link>
          <Link 
            to="/retour-experience" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/retour-experience') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Retours d'expérience
          </Link>
          <Link 
            to="/wiki" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/wiki') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Wiki
          </Link>
          <Link 
            to="/internships" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/internships') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Stages
          </Link>
          <Link 
            to="/chatroom" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/chatroom') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Discussion
          </Link>
          <Link 
            to="/faq" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/faq') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4 ${
              isActive('/contact') 
                ? 'border-indigo-500 text-indigo-700 bg-indigo-50' 
                : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          {isAuthenticated ? (
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium"
            >
              Déconnexion
            </button>
          ) : (
            <Link 
              to="/login" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 