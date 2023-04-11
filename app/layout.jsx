import { Poppins } from 'next/font/google';
import Header from './componets/Header';
import './globals.css';
import Footer from './componets/Footer';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Edudev',
  description: 'Web development tutorials and courses',
  keywords:
    'web development, web design, javascript, react, node, angular, vue, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

