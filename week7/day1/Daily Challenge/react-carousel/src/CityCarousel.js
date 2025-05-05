import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel-custom.css';

export default function CityCarousel() {
    const cities = [
      {
        name: "Hong Kong",
        image: "/api/https://www.discoverhongkong.com/content/dam/dhk/intl/explore/tips-for-making-your-trip-to-hong-kong/tips-for-making-your-trip-to-hong-kong-1920x1080.jpg/800/400",
        description: "Vibrant skyline with traditional junk boat"
      },
      {
        name: "Macao",
        image: "/api/https://static2.tripoto.com/media/filter/tst/img/1581254/TripDocument/1675963372_11.jpeg/800/400",
        description: "Historic ruins of St. Paul's"
      },
      {
        name: "Japan",
        image: "/api/https://www.celebritycruises.com/blog/content/uploads/2021/03/what-is-japan-known-for-mt-fuji-hero-1920x890.jpg/800/400",
        description: "Christ the Redeemer statue"
      },
      {
        name: "Las Vegas",
        image: "/api/https://lp-cms-production.imgix.net/2024-08/GettyImages-AB11023.jpg/800/400",
        description: "Skyline at sunset"
      }
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Famous Cities Around the World</h2>
      
      <div className="max-w-3xl">
        <Carousel
          showArrows={true}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showThumbs={true}
          showIndicators={true}
          selectedItem={currentIndex}
          onChange={handleChange}
          className="mb-4"
          thumbWidth={80}
          renderThumbs={() => 
            cities.map((city, index) => (
              <div key={index}>
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="object-cover border border-gray-300"
                />
              </div>
            ))
          }
        >
          {cities.map((city, index) => (
            <div key={index} className="relative">
              <img src={city.image} alt={city.name} />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <h3 className="text-2xl font-bold">{city.name}</h3>
                <p>{city.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}