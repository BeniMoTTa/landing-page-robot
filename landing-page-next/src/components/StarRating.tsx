import React, { useState } from "react";
import Image from "next/image";

interface StarsRatingProps {
  rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="my-11 flex flex-wrap gap-5">
      <div className="flex items-center gap-2">
        {Array(5)
          .fill(1)
          .map((_, index) => (
            <Image
              src="/star.svg"
              key={index}
              alt="star"
              width={20}
              height={20}
              style={
                isMouseOver && index <= rating
                  ? { color: "text-yellow-500" }
                  : {}
              }
            />
          ))}
      </div>

      <p className="bold-16 lg:bold-20 text-blue-70">
        {rating}
        <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
      </p>
    </div>
  );
};

export default StarsRating;
