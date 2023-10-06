"use client";

import React, { useState } from "react";
import Rating from "react-star-rating-component";
import { handleReviewAction } from "@/app/product/[productId]/action";
import { AddReviewButton } from "@/ui/atoms/AddReviewButton";
import { ReviewItemFragmentFragment } from "@/gql/graphql";
import { experimental_useOptimistic as useOptimistic } from "react";

type UseOptymisticReviews = ReturnType<
	typeof useOptimistic<ReviewItemFragmentFragment[], ReviewItemFragmentFragment>
>[1];

export const RatingForm = ({
	productId,
	reviews,
	addOptymisticReview,
}: {
	productId: string;
	addOptymisticReview: UseOptymisticReviews;
	reviews: ReviewItemFragmentFragment[];
}) => {
	const [rating, setRating] = useState(0);
	const handleStarClick = (nextValue: number, _prevValue: number, _name: string) => {
		setRating(nextValue);
	};

	async function handleSubbitEvent(formData: FormData) {
		const productId = formData.get("productId") as string;
		const headline = formData.get("headline") as string;
		const content = formData.get("content") as string;
		const rating = Number(formData.get("rating"));
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;

		const review = {
			headline: headline,
			content: content,
			rating: rating,
			name: name,
			email: email,
		};
		addOptymisticReview({
			...review,
			id: (Math.random() + 1).toString(36).substring(7),
			createdAt: new Date().toISOString(),
		});
		// await handleReviewAction(productId, headline, content, rating, name, email);
		await handleReviewAction(productId, headline, content, rating, name, email);
	}

	return (
		<div className="m-auto w-[450px]">
			<h2 className="mt-6 text-xl">We are waiting for your review</h2>
			<form action={handleSubbitEvent} className="flex flex-col" data-testid="add-review-form">
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
