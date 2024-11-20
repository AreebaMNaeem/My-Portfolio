import Navbar from "./components/Navbar"; // Adjust the path if necessary
import "./globals.css";
import Footer from './components/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link id="favicon" rel="shortcut icon" href="public/favicon1.jpeg" type="image/jpeg" />
        <title>Portfolio | Areeba Naeem </title>
      </head>
      <body>
        {/* Navbar */}
        <Navbar />
        
        {/* Content of each page */}
        {children}

        {/* Footer component */}
        <Footer />

        {/* Add additional global footer, scripts, etc. */}
      </body>
    </html>
  );
}
