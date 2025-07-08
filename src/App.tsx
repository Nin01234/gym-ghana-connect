import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ClassesPage } from "./pages/ClassesPage";
import { TrainersPage } from "./pages/TrainersPage";
import { PremiumPage } from "./pages/PremiumPage";
import { FindGymPage } from "./pages/FindGymPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminLogin } from "./pages/admin/AdminLogin";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { UserManagement } from "./pages/admin/UserManagement";
import { GymManagement } from "./pages/admin/GymManagement";
import { TrainingManagement } from "./pages/admin/TrainingManagement";
import { ClassScheduling } from "./pages/admin/ClassScheduling";
import { TrainerManagement } from "./pages/admin/TrainerManagement";
import { Analytics } from "./pages/admin/Analytics";
import { Reports } from "./pages/admin/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Layout wrapper for pages that need header and footer
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

// Auth layout for login/signup pages
const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    {children}
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          {/* Main pages with header and footer */}
          <Route path="/" element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          } />
          <Route path="/about" element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } />
          
          {/* Auth pages without header and footer */}
          <Route path="/login" element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          } />
          <Route path="/signup" element={
            <AuthLayout>
              <SignupPage />
            </AuthLayout>
          } />
          
          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Protected Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><AdminDashboard /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/users" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><UserManagement /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/gyms" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><GymManagement /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/training" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><TrainingManagement /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/classes" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><ClassScheduling /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/trainers" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><TrainerManagement /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/analytics" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><Analytics /></AdminLayout>
            </ProtectedRoute>
          } />
          <Route path="/admin/reports" element={
            <ProtectedRoute requireAdmin>
              <AdminLayout><Reports /></AdminLayout>
            </ProtectedRoute>
          } />
          
          {/* Main feature pages */}
          <Route path="/classes" element={
            <MainLayout>
              <ClassesPage />
            </MainLayout>
          } />
          <Route path="/trainers" element={
            <MainLayout>
              <TrainersPage />
            </MainLayout>
          } />
          
          {/* Full-featured pages */}
          <Route path="/premium" element={
            <MainLayout>
              <PremiumPage />
            </MainLayout>
          } />
          <Route path="/find-gym" element={
            <MainLayout>
              <FindGymPage />
            </MainLayout>
          } />
          <Route path="/contact" element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          } />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
