import Navigation from "./components/Navigation"
import Logo from "./components/Logo"
export const  metadata = {
  title : "The wild Oasis"
}
export const logo = {
  logo : Logo
}
export default function RootLayout({children}){
  return (
    <html lang="en">
        <body>
          <header>
            <Logo/>
          <Navigation/>
          </header>
          <main>
            {children}
          </main>
          <footer>Copyrigth by shaimeur</footer>
        </body>
    </html>
  )
}