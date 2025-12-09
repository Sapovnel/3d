'use client';

import { useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface MarketplaceGateProps {
  children: ReactNode;
}

/**
 * This component protects marketplace routes
 * Redirects to gated access page if user hasn't authenticated
 */
export default function MarketplaceGate({ children }: MarketplaceGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has marketplace access
    const checkAccess = async () => {
      const storedData = localStorage.getItem('marketplaceUser');

      if (storedData) {
        // User has already registered
        setIsAuthorized(true);
      } else {
        // User hasn't registered - redirect to gated page
        await router.push('/marketplace');
      }

      setIsLoading(false);
    };

    checkAccess();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-gray-50 to-gray-100">
        <div className="text-center">
          <div className="inline-block">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 mt-4">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  return <>{children}</>;
}
