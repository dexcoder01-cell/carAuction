import CarList from '@components/cars/CarList/CarList';

async function getCars() {
  const res = await fetch('http://localhost:5000/api/singleCar');
  return res.json();
}

export default async function CarsPage() {
  const cars = await getCars();
  
  return (
    <div>
      <h1>Available Cars</h1>
      <CarList cars={cars} />
    </div>
  );
}