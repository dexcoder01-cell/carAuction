import './globals.css';

export const metadata = {
  title: 'Car Auction Platform',
  description: 'Buy and sell cars through auction',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}