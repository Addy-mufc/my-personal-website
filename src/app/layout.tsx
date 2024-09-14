import "./globals.css";
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <title>Aditya Kiran&apos;s Portfolio</title>
        <meta name="description" content="Explore Aditya Kiran's projects, experience, and skills on his personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
        <header className="py-4 fixed w-full z-10 bg-transparent">
        <nav className="container mx-auto px-4 flex justify-between items-center"> <Link href="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</Link>
          <div className="flex">
            <Link href="/experience" className="px-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Experience</Link>
            <Link href="/projects" className="px-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Projects</Link>
            <Link href="/contact" className="px-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Contact</Link></div>
        </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="py-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Aditya Kiran. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
