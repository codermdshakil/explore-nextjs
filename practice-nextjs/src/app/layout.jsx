
import NavberPage from '@/components/shared/Navber/page';
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  subsets: ['greek'],
  display: 'swap',
})

export const metadata = {
  title:"Layout",
  description:"This is layout descriptions"
}

 
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <NavberPage/>
        {children}
      </body>
    </html>
  );
}
