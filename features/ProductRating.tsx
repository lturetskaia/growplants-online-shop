import type { ProductReviews } from "common/types";

export default function ProductRating({
  reviews,
}: {
  reviews: ProductReviews;
}) {
  // placeholder values for rating and reviews
  let reviewsNumber = 0;
  let rating = 5;
  if (reviews) {
    reviewsNumber = reviews.length;
    //calculate the rating
    const ratingSum = reviews.reduce((sum, curr) => sum + curr.rating, 0);
    rating = Math.round(ratingSum / reviews.length);
  }

  const imagePath = `/icons/rating/${rating}-star.png`;

  return (
    <div className="rating-info">
      <img
        className="rating-img"
        src={imagePath}
        alt={rating + " star rating"}
      />
      <span>{reviewsNumber} reviews</span>
    </div>
  );
}
