import { ReviewItemFragmentFragment, ReviewsGetByProductIdDocument } from "@/gql/graphql";
import { ReviewListItem } from "../molecules/ReviewListItem";
import { executeGraphql } from "@/api/graphqlApi";

export const ReviewList = async ({ productId }: { productId: string }) => {
	const res = await executeGraphql({ query: ReviewsGetByProductIdDocument, variables: { productId } });
	// const reviews = [] as ReviewItemFragmentFragment[];
	return (
		<div>
			{res.reviews.map((review) => {
				return <ReviewListItem key={review.id} review={review} />;
			})}
		</div>
	);
};
