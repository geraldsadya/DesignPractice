//now the metadata that we share across the app
export const metadata = {
  title: 'DiscoBuddy',
  description: 'Your AI-powered discovery assistant',
};

//when an importing is done, the layout is used to wrap the entire app


// This is the main layout wrapper for every page in the app
export default function RootLayout({
  children, // This is whatever content the current page wants to show
}: {
  children: React.ReactNode; // Type hint: the "children" must be valid UI
}) {
  return (
    <html lang="en"> {/*tells the browser the page is in English */}
      <body className="bg-black text-white min-h-screen">
        {/*this sets the background color and text color as well as the minimum height */}

        {children}
        {/*where is where the actual page content gets inserted */}

      </body>
    </html>
  );
}
