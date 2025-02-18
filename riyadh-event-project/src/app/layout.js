import Header from "@/components/header";
import './globals.css';

export const metadata = {
  title: 'Riyadh Rising 2025',
  description: 'Riyadh event website for booking ticket',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/rising-riyadh-logo.svg" />
      </head>
      <body>
      <div className="h-screen max-w-[1920px] bg-custom-home m-auto h-full w-full">
        <Header />
        <div>{children}</div>
      </div>
      </body>
    </html>
  );
}
