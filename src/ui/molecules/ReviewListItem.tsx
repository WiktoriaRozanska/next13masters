"use client";

import { ReviewItemFragmentFragment } from "@/gql/graphql";
import Rating from "react-star-rating-component";

type ReviewListItemProps = {
	review: ReviewItemFragmentFragment;
};

export const ReviewListItem = ({ review }: ReviewListItemProps) => {
	return (
		<div className="m-auto w-[400px] justify-center border-2 border-teal-800 bg-slate-200 p-2">
			<h3>{review.name}</h3>
			<Rating
				name="rating"
				value={review.rating}
				starCount={5}
				editing={false}
				starColor={"#115E59"}
				emptyStarColor={"#ccc"}
			/>
			<p className="font-bold">{review.headline}</p>
			<p>{review.content}</p>
		</div>
	);
};
