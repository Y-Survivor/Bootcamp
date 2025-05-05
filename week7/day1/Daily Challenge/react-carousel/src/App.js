import CityCarousel from './CityCarousel';

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-2">Instructions: Build A React Carousel</h1>
      <p className="mb-8">A demonstration of React Responsive Carousel with city images</p>
      
      <CityCarousel />
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Carousel Features:</h2>
        <ul className="list-disc ml-8 mb-8">
          <li>Automatic sliding with pause on hover</li>
          <li>Navigation dots for quick jumping between slides</li>
          <li>Thumbnail navigation at the bottom</li>
          <li>Responsive design that works on all screen sizes</li>
        </ul>
      
        <h2 className="text-2xl font-bold mb-4">What You Will Learn:</h2>
        <ul className="list-disc ml-8">
          <li>React App</li>
          <li>React Components</li>
          <li>JSX</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
  );
}