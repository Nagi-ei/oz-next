import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Test',
  description: 'First try of next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center`}
      >
        <div className='w-[500px] h-[500px] m-auto shadow-xl rounded-2xl flex flex-col overflow-hidden'>
          <nav className='bg-zinc-700 p-4'>
            <ul className='flex justify-center gap-12 text-white font-extrabold'>
              <li>
                <Link href={'/'}>홈</Link>
              </li>
              <li>
                <Link href={'/dog'}>강아지</Link>
              </li>
              <li>
                <Link href={'/cat'}>고양이</Link>
              </li>
            </ul>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}
