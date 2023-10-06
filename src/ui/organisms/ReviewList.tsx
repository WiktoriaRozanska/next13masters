import { ReviewItemFragmentFragment, ReviewsGetByProductIdDocument } from "@/gql/graphql";
import { ReviewListItem } from "../molecules/ReviewListItem";
import { executeGraphql } from "@/api/graphqlApi";

export const ReviewList = async ({ reviews }: { reviews: ReviewItemFragmentFragment[] }) => {
	return (
		<div>
			{reviews.map((review) => {
				return <ReviewListItem key={review.id} review={review} />;
			})}
		</div>
	);
};
