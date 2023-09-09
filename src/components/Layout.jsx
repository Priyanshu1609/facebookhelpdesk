
import * as React from 'react';

import { Inter } from 'next/font/google'
import { UserProvider } from '@/context/UserContext';
import Seo from './Seo';

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}) {
  return (
    <UserProvider>
      <Seo />
      <main className={`flex min-h-screen w-full items-center justify-between  ${inter.className}`}>{children}</main>
    </UserProvider>
  );
}