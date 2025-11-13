import { Header } from '@/components';
import { Footer } from '@/components';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
};