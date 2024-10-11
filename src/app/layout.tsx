// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import AquaHomeLayout from '@/Layouts/RootLayout'; // Adjust the import path based on your structure
import { ReduxProvider } from '@/store/clientProvider';


export const metadata = {
  title: 'Aquakart | DashBoard',
  description: 'All about Aquakart.co.in operations',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="h-full bg-white">
        <ReduxProvider>
          <AquaHomeLayout>
            {children}
          </AquaHomeLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}