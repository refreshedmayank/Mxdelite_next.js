import "./globals.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header  />
       
      {children}
       <Footer /> 
      </body>
    </html>
  )
}