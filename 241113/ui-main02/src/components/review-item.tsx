import React from "react";
import style from "./review-item.module.css";
import { ReviewData } from "@/types";
import ReviewItemDeleteNutton from "./review-item-delete-button";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteNutton reviewId={id} bookId={bookId} />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
