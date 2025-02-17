import './globals.css';

export const metadata = {
  title: 'Riyadh Riyadh',
  description: 'Riyadh event website for booking ticket',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/rising-riyadh-logo.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
