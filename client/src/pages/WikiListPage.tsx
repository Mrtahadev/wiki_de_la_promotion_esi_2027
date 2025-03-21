import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllWikiPages } from '../services/wikiService';
import { useAuth } from '../contexts/AuthContext';

interface WikiPage {
  _id: string;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  createdBy: string;
  lastEditedBy: string;
  contributors: string[];
  createdAt: string;
  updatedAt: string;
}

const WikiListPage: React.FC = () => {
  const [wikiPages, setWikiPages] = useState<WikiPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchWikiPages = async () => {
      try {
        const pages = await getAllWikiPages();
        setWikiPages(pages);
      } catch (err) {
        setError('Erreur lors du chargement des pages');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchWikiPages();
  }, []);

  // If no actual pages are available yet, use this dummy data
  useEffect(() => {
    if (wikiPages.length === 0 && !loading && !error) {
      setWikiPages([
        { 
          _id: '1', 
          title: 'Introduction à la programmation', 
          content: 'Contenu de l\'article...', 
          slug: 'introduction-programmation',
          tags: ['programmation', 'débutant'],
          createdBy: 'user1',
          lastEditedBy: 'user1',
          contributors: ['user1'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        },
        { 
          _id: '2', 
          title: 'Structures de données', 
          content: 'Contenu de l\'article...', 
          slug: 'structures-donnees',
          tags: ['algorithmes', 'programmation'],
          createdBy: 'user2',
          lastEditedBy: 'user3',
          contributors: ['user2', 'user3'],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      ]);
    }
  }, [wikiPages, loading, error]);

  const filteredPages = wikiPages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Pages Wiki</h1>
        {isAuthenticated && (
          <Link 
            to="/wiki/create" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
          >
            Nouvelle page
          </Link>
        )}
      </div>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Rechercher une page..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      ) : filteredPages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Aucune page trouvée</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filteredPages.map(page => (
              <li key={page._id}>
                <Link 
                  to={`/wiki/view/${page.slug}`}
                  className="block hover:bg-gray-50 p-4"
                >
                  <h2 className="text-lg font-medium text-blue-600">{page.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Dernière modification: {new Date(page.updatedAt).toLocaleDateString()}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WikiListPage; 