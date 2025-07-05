import "./globals.css";
//now the metadata that we share across the app
export const metadata = {
  title: 'DiscoBuddy',
  description: 'Your AI-powered discovery assistant',
};

//when an importing is done, the layout is used to wrap the entire app


// This is the main layout wrapper for every page in the app
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {children}
      </body>
    </html>
  )
}

