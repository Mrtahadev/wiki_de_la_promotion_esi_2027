import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Components
import ProtectedRoute from './components/auth/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WikiListPage from './pages/WikiListPage';
import WikiEditPage from './pages/WikiEditPage';
import WikiViewPage from './pages/WikiViewPage';
import InternshipsPage from './pages/InternshipsPage';
import InternshipDetailPage from './pages/InternshipDetailPage';
import ChatroomPage from './pages/ChatroomPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import NotFoundPage from './pages/NotFoundPage';
import ActualitePage from './pages/ActualitePage';
import RetourExperiencePage from './pages/RetourExperiencePage';
import FilieresPage from './pages/FilieresPage';
import FiliereDetailPage from './pages/FiliereDetailPage';

// Components
import NavBar from './components/common/NavBar';
import Chatbot from './components/chatbot/Chatbot';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <NavBar />
          <main className="p-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/wiki" element={<WikiListPage />} />
              <Route path="/wiki/view/:slug" element={<WikiViewPage />} />
              <Route path="/wiki/create" element={
                <ProtectedRoute>
                  <WikiEditPage />
                </ProtectedRoute>
              } />
              <Route path="/wiki/edit/:slug" element={
                <ProtectedRoute>
                  <WikiEditPage />
                </ProtectedRoute>
              } />
              <Route path="/internships" element={<InternshipsPage />} />
              <Route path="/internships/:id" element={<InternshipDetailPage />} />
              <Route path="/chatroom" element={<ChatroomPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/actualite" element={<ActualitePage />} />
              <Route path="/retour-experience" element={<RetourExperiencePage />} />
              <Route path="/filieres" element={<FilieresPage />} />
              <Route path="/filieres/:id" element={<FiliereDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
