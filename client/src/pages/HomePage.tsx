import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <div className="bg-white shadow-sm rounded-xl overflow-hidden mb-10">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-90"></div>
          
          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12 sm:py-24">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bienvenue sur le Wiki ESI 2027
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              Une plateforme collaborative pour partager des connaissances, des astuces et des ressources.
            </p>
            
            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/filieres" className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium px-5 py-3 rounded-md shadow-sm transition duration-150 ease-in-out">
                Découvrir les filières
              </Link>
              <Link to="/actualite" className="bg-indigo-700 text-white hover:bg-indigo-800 font-medium px-5 py-3 rounded-md shadow-sm transition duration-150 ease-in-out">
                Actualités
              </Link>
              <Link to="/retour-experience" className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-5 py-3 rounded-md shadow-sm transition duration-150 ease-in-out">
                Retours d'expérience
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Recent Pages Section */}
        <div className="bg-white p-6 shadow-sm rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Pages récentes
          </h2>
          <ul className="space-y-3">
            <li className="border-l-4 border-indigo-200 pl-4 py-2 transition hover:border-indigo-500">
              <Link to="/wiki/view/introduction-programmation" className="text-gray-700 hover:text-indigo-600 font-medium">
                Introduction à la programmation
              </Link>
              <p className="text-sm text-gray-500 mt-1">Concepts fondamentaux pour les débutants</p>
            </li>
            <li className="border-l-4 border-indigo-200 pl-4 py-2 transition hover:border-indigo-500">
              <Link to="/wiki/view/structures-donnees" className="text-gray-700 hover:text-indigo-600 font-medium">
                Structures de données
              </Link>
              <p className="text-sm text-gray-500 mt-1">Arrays, listes, arbres et graphes expliqués</p>
            </li>
            <li className="border-l-4 border-indigo-200 pl-4 py-2 transition hover:border-indigo-500">
              <Link to="/wiki/view/algorithmes-de-tri" className="text-gray-700 hover:text-indigo-600 font-medium">
                Algorithmes de tri
              </Link>
              <p className="text-sm text-gray-500 mt-1">Comparaison des différentes méthodes de tri</p>
            </li>
          </ul>
          <div className="mt-6">
            <Link to="/wiki" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              Voir toutes les pages
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Help Section */}
        <div className="bg-white p-6 shadow-sm rounded-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Besoin d'aide?
          </h2>
          
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">Assistant virtuel</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    Notre assistant est disponible 24/7 pour répondre à vos questions.
                    Cliquez sur l'icône de chat en bas à droite.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">Discussion</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    Rejoignez le{' '}
                    <Link to="/chatroom" className="text-indigo-900 font-medium hover:underline">
                      salon de discussion
                    </Link>{' '}
                    pour échanger avec d'autres étudiants.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">FAQ</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    Consultez notre{' '}
                    <Link to="/faq" className="text-indigo-900 font-medium hover:underline">
                      FAQ
                    </Link>{' '}
                    pour trouver des réponses aux questions fréquentes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">Contact</h3>
                  <p className="mt-1 text-sm text-indigo-700">
                    <Link to="/contact" className="text-indigo-900 font-medium hover:underline">
                      Contactez-nous directement
                    </Link>{' '}
                    si vous avez des questions spécifiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filières Section */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Filières
          </h2>
          <p className="text-gray-600 mb-4">
            Découvrez les différentes spécialisations offertes par l'ESI et trouvez celle qui correspond à vos aspirations.
          </p>
          <Link to="/filieres" className="inline-block text-indigo-600 hover:text-indigo-800 font-medium">
            Explorer les filières →
          </Link>
        </div>
        
        {/* Actualité Section */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Actualités
          </h2>
          <p className="text-gray-600 mb-4">
            Restez informé des dernières nouvelles concernant l'ESI, les événements à venir et les opportunités.
          </p>
          <Link to="/actualite" className="inline-block text-indigo-600 hover:text-indigo-800 font-medium">
            Voir les actualités →
          </Link>
        </div>
        
        {/* Retour d'expérience Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Témoignages
          </h2>
          <p className="text-gray-600 mb-4">
            Découvrez les témoignages d'anciens élèves, de professionnels et d'entreprises partenaires.
          </p>
          <Link to="/retour-experience" className="inline-block text-indigo-600 hover:text-indigo-800 font-medium">
            Lire les témoignages →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 