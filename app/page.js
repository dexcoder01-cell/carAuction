import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Car Auction</h1>
      <nav>
        <Link href="/cars">Browse Cars</Link>
        <Link href="/add-car">Sell Your Car</Link>
      </nav>
    </div>
  );
}