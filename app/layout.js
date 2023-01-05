import '../styles/globals.css';
import Navigation from '../components/Navigation';
import Head from './head'
import { font } from './font';

export default function RootLayout({ children }) {
  return (
    <html>
      <Head />

      <body className={font.variable}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
