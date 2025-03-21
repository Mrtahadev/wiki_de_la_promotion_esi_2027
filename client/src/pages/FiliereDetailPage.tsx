import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

interface Filiere {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: string;
  image: string;
  careers: string[];
  program?: {
    year1: string[];
    year2: string[];
    year3: string[];
  };
  details?: string;
}

const filieres: Filiere[] = [
  {
    id: 'iscd',
    name: 'ISCD',
    fullName: 'Information Science and Data',
    description: 'Formation d\'ingénieurs spécialisés dans l\'analyse, le traitement et la valorisation des données massives, avec des compétences en intelligence artificielle et data science.',
    icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    careers: ['Data Scientist', 'Data Engineer', 'Business Intelligence Analyst', 'Chief Data Officer'],
    program: {
      year1: [
        'Fondements des sciences de l\'information',
        'Algorithmique et structures de données',
        'Statistiques et probabilités',
        'Programmation et développement informatique',
        'Bases de données relationnelles',
        'Mathématiques pour la data science'
      ],
      year2: [
        'Data mining et apprentissage automatique',
        'Big Data et technologies NoSQL',
        'Visualisation de données',
        'Intelligence artificielle',
        'Traitement du langage naturel',
        'Gestion de projets data'
      ],
      year3: [
        'Deep Learning',
        'Business Intelligence et analytique d\'affaires',
        'Sécurité des données',
        'Éthique et réglementation des données',
        'Projet de fin d\'études',
        'Stage professionnel (6 mois)'
      ]
    },
    details: 'La filière Information Science and Data (ISCD) forme des ingénieurs spécialisés dans l\'analyse, le traitement et la valorisation des données. Dans un monde où les données sont devenues un actif stratégique, nos diplômés acquièrent les compétences nécessaires pour transformer les données en informations pertinentes et exploitables.\n\nCette formation combine des fondamentaux solides en informatique et en mathématiques avec des compétences spécialisées en science des données, en intelligence artificielle et en apprentissage automatique. Les étudiants apprennent à concevoir et à mettre en œuvre des solutions innovantes pour extraire de la valeur à partir de grandes quantités de données structurées et non structurées.'
  },
  {
    id: 'iin',
    name: 'IIN',
    fullName: 'Information and Networks',
    description: 'Formation d\'ingénieurs spécialisés dans la gestion des infrastructures d\'information et des réseaux, avec une expertise en cybersécurité et administration système.',
    icon: 'M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000',
    careers: ['Architecte réseau', 'Ingénieur systèmes et réseaux', 'Ingénieur cybersécurité', 'Administrateur cloud'],
    program: {
      year1: [
        'Fondements des réseaux informatiques',
        'Systèmes d\'exploitation',
        'Architecture des ordinateurs',
        'Programmation système',
        'Bases de données',
        'Mathématiques pour l\'informatique'
      ],
      year2: [
        'Réseaux avancés et protocoles',
        'Administration système et réseau',
        'Sécurité des systèmes d\'information',
        'Cloud computing',
        'Virtualisation et conteneurisation',
        'Gestion de projets IT'
      ],
      year3: [
        'Cybersécurité avancée',
        'DevOps et intégration continue',
        'IoT et réseaux nouvelle génération',
        'Audit et gouvernance des SI',
        'Projet de fin d\'études',
        'Stage professionnel (6 mois)'
      ]
    },
    details: 'La filière Information and Networks (IIN) forme des ingénieurs spécialisés dans la gestion des infrastructures d\'information et des réseaux. Dans un contexte de transformation numérique, cette filière prépare les étudiants à concevoir, déployer et sécuriser les systèmes d\'information et les réseaux de communication.\n\nLes étudiants développent une expertise dans la conception et l\'administration des infrastructures réseau, la cybersécurité, le cloud computing et les technologies émergentes comme l\'IoT. La formation met l\'accent sur la pratique à travers des projets concrets, des travaux pratiques en laboratoire et des stages en entreprise.'
  },
  {
    id: 'istd',
    name: 'ISTD',
    fullName: 'Information Science and Technology/Data',
    description: 'Formation d\'ingénieurs avec une double compétence en technologies de l\'information et en science des données, capables de concevoir et implémenter des architectures data-driven.',
    icon: 'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000',
    careers: ['Architecte de systèmes d\'information', 'Ingénieur en technologies de l\'information', 'Data Engineer', 'Chef de projet IT'],
    program: {
      year1: [
        'Introduction aux systèmes d\'information',
        'Programmation et algorithmique',
        'Bases de données',
        'Architecture des SI',
        'Mathématiques appliquées',
        'Gestion des organisations'
      ],
      year2: [
        'Systèmes distribués',
        'Datawarehousing et reporting',
        'Développement web et mobile',
        'Intégration de données',
        'Génie logiciel',
        'Gestion de projets informatiques'
      ],
      year3: [
        'Architecture data-driven',
        'Business Intelligence',
        'Technologies Big Data',
        'Gouvernance des SI',
        'Projet de fin d\'études',
        'Stage professionnel (6 mois)'
      ]
    },
    details: 'La filière Information Science and Technology/Data (ISTD) forme des ingénieurs avec une double compétence en technologies de l\'information et en science des données. Cette filière répond aux besoins croissants des organisations en matière de gestion technique des données et d\'infrastructure technologique.\n\nLes étudiants développent des compétences en ingénierie des systèmes d\'information, en architecture de données et en développement de solutions informatiques. La formation intègre également des aspects de gouvernance des systèmes d\'information et de gestion de projet pour préparer les diplômés à des rôles de leadership dans la transformation numérique des organisations.'
  },
  {
    id: 'issic',
    name: 'ISSIC',
    fullName: 'Information Science and Information Systems/Communication',
    description: 'Formation d\'ingénieurs spécialisés dans la gestion de l\'information et la communication numérique, experts en knowledge management et stratégies de communication digitale.',
    icon: 'M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000',
    careers: ['Responsable de la gestion de l\'information', 'Chef de projet en communication digitale', 'Digital Content Manager', 'Consultant en knowledge management'],
    program: {
      year1: [
        'Fondements des sciences de l\'information',
        'Introduction aux systèmes d\'information',
        'Théories de la communication',
        'Gestion documentaire',
        'Bases de données documentaires',
        'Techniques rédactionnelles et linguistiques'
      ],
      year2: [
        'Architecture de l\'information',
        'Communication digitale',
        'Knowledge management',
        'Systèmes de gestion de contenu (CMS)',
        'Veille stratégique et intelligence économique',
        'Marketing digital'
      ],
      year3: [
        'Gouvernance de l\'information',
        'Stratégies de communication multicanal',
        'Records management et archivage électronique',
        'Droit de l\'information et propriété intellectuelle',
        'Projet de fin d\'études',
        'Stage professionnel (6 mois)'
      ]
    },
    details: 'La filière Information Science and Information Systems/Communication (ISSIC) forme des ingénieurs spécialisés dans la gestion de l\'information et la communication numérique. Cette filière prépare les étudiants à concevoir et mettre en œuvre des stratégies de gestion de l\'information et de communication digitale au sein des organisations.\n\nLes étudiants acquièrent des compétences en organisation et structuration de l\'information, en knowledge management, en communication digitale et en veille stratégique. La formation intègre également des aspects juridiques et éthiques liés à la gestion de l\'information pour former des professionnels responsables et conscients des enjeux de leur domaine.'
  }
];

const FiliereDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const filiere = filieres.find(f => f.id === id);
  
  if (!filiere) {
    return <Navigate to="/filieres" />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header with gradient background */}
        <div className="relative h-60">
          <img 
            src={filiere.image} 
            alt={filiere.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-blue-700 opacity-75"></div>
          <div className="relative flex items-center h-full px-6 py-10">
            <div>
              <div className="bg-white p-2 rounded-lg inline-flex items-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-8 h-8 text-indigo-600"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={filiere.icon} />
                </svg>
              </div>
              <h1 className="text-4xl font-bold text-white">{filiere.name}</h1>
              <p className="mt-2 text-xl text-indigo-100">{filiere.fullName}</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 sm:p-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Présentation</h2>
            <div className="text-gray-700 whitespace-pre-line">
              {filiere.details}
            </div>
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme</h2>
            
            {filiere.program && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-3">1ère Année</h3>
                  <ul className="space-y-2">
                    {filiere.program.year1.map((course, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-3">2ème Année</h3>
                  <ul className="space-y-2">
                    {filiere.program.year2.map((course, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-700 mb-3">3ème Année</h3>
                  <ul className="space-y-2">
                    {filiere.program.year3.map((course, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Débouchés</h2>
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filiere.careers.map((career, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-indigo-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-800 font-medium">{career}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
            <Link 
              to="/filieres" 
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Retour aux filières
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-150"
            >
              Demander des informations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiliereDetailPage; 