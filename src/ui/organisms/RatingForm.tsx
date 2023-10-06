"use client";

import React, { useState } from "react";
import Rating from "react-star-rating-component";
import { handleReviewAction } from "@/app/product/[productId]/action";
import { AddReviewButton } from "@/ui/atoms/AddReviewButton";

export const RatingForm = ({ productId }: { productId: string }) => {
	const [rating, setRating] = useState(0);
	const handleStarClick = (nextValue: number, _prevValue: number, _name: string) => {
		setRating(nextValue);
	};

	return (
		<div className="m-auto w-[450px]">
			<h2 className="mt-6 text-xl">We are waiting for your review</h2>
			<form action={handleReviewAction} className="flex flex-col" data-testid="add-review-form">
				<input type="text" name="productId" value={productId} hidden />
				<label>Review title:</label>
				<input
					type="text"
					name="headline"
					className="min ml-2 rounded-md border-gray-900 font-light shadow-xl focus:border-teal-800 focus:ring-teal-200 focus:ring-opacity-50"
					required
				/>
				<label>Review content:</label>
				<textarea
					name="content"
					className="min ml-2 rounded-md border-gray-900  font-light shadow-xl focus:border-teal-800 focus:ring-teal-200 focus:ring-opacity-50"
					required
				/>
				<label>Rating</label>
				<div>
					<Rating
						name="starts"
						value={rating}
						onStarClick={(nextValue, prevValue, name) => handleStarClick(nextValue, prevValue, name)}
						starCount={5}
						starColor={"#115E59"}
						emptyStarColor={"#ccc"}
					/>
				</div>
				<input type="text" name="rating" hidden value={rating} />
				<label>Name</label>
				<input
					type="text"
					name="name"
					className="min ml-2 rounded-md border-gray-900 font-light shadow-xl focus:border-teal-800 focus:ring-teal-200 focus:ring-opacity-50"
					required
				/>
				<label>Email</label>
				<input
					type="email"
					name="email"
					className="min ml-2 rounded-md border-gray-900 font-light shadow-xl focus:border-teal-800 focus:ring-teal-200 focus:ring-opacity-50"
					required
				/>
				<AddReviewButton />
			</form>
		</div>
	);
};
