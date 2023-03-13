import React from "react";
import StarRating from "./StarRating";

interface Rating {
  yearAgo: number;
  dateTime: string;
  filled: number;
  comments: string[];
}

interface ItemsRatingProps {
  itemsRating: Rating[];
}

const ItemRating: React.FC<ItemsRatingProps> = ({ itemsRating }) => {
  return (
    <>
      {itemsRating.map((rating, index) => {
        return (
          <div key={index} className="box-rating mb-6">
            <div className="infor-rating flex justify-between">
              <div className="flex">
                <div className="title-tab font-bold">
                  {rating.yearAgo}代 女性
                </div>
                <StarRating maxRating={5} filled={rating.filled} />
              </div>
              <div className="title-tab title-tab-grey">{rating.dateTime}</div>
            </div>
            <div className="comment">
              {rating.comments?.map((item: string, index: number) => {
                return (
                  <div key={index} className="title-tab">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemRating;
