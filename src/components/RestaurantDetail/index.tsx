import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, TrendingUp } from "lucide-react";
import first from '../../assets/first.avif';
import second from '../../assets/second.jpg';
import third from '../../assets/third.jpg';
import styles from './index.module.css';

const RestaurantDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const restaurant = state?.restaurant;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [first, second, third];

  const handleBack = () => {
    navigate(-1);
  };

  if (!restaurant) {
    return <div className={styles.notFound}>Restaurant not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageCarousel}>
        <button onClick={handleBack} className={styles.backButton}>
          <ArrowLeft size={16} />
        </button>
        <img
          src={images[currentImageIndex]}
          alt={restaurant.restaurant_name}
          className={styles.carouselImage}
        />

        <div className={styles.indicators}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentImageIndex ? styles.indicatorActive : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <h1 className={styles.restaurantName}>{restaurant.restaurant_name}</h1>
            <p className={styles.location}>{restaurant.location}</p>
          </div>

          <div className={styles.ratingBadge}>
            <Star size={20} fill="#fbbf24" stroke="#fbbf24" />
            <span className={styles.ratingText}>{restaurant.rating}</span>
          </div>
        </div>


        <div className={styles.offersBadge}>
          <TrendingUp size={16} />
          <span>{restaurant.offers || 4} Offers Trending</span>
        </div>

        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            {restaurant.description || "Our delicate vanilla cake swirled with chocolate and filled with mocha chocolate chip cream and a layer of dark chocolate ganache"}
          </p>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <button className={styles.orderButton}>Order Now</button>
      </div>
    </div>
  );
};

export default RestaurantDetail;