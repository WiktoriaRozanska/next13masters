/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {total: $total, quantity: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  orders(stage: DRAFT, where: {id: $id}) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoryGetById($categoryId: ID!) {\n  categories(where: {id: $categoryId}) {\n    ...CategoryItem\n  }\n}": types.CategoryGetByIdDocument,
    "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryItem\n  }\n}": types.CategoryGetBySlugDocument,
    "fragment CategoryItem on Category {\n  id\n  name\n  description\n  slug\n}": types.CategoryItemFragmentDoc,
    "query CollectionGetById($collectionId: ID!) {\n  collections(where: {id: $collectionId}) {\n    ...CollectionListItem\n  }\n}": types.CollectionGetByIdDocument,
    "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionListItem\n  }\n}": types.CollectionGetBySlugDocument,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  description\n  slug\n  image {\n    id\n    url\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  price\n  description\n  images(first: 1) {\n    url\n  }\n  variants {\n    __typename\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n    }\n  }\n}": types.ProductItemFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  price\n  description\n  images(first: 1) {\n    url\n  }\n  variants {\n    __typename\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n    }\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetAmountOf {\n  productsConnection {\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetAmountOfDocument,
    "query ProductsGetAmountOfInCategory($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}": types.ProductsGetAmountOfInCategoryDocument,
    "query ProductsGetByCategorySlug($slug: String!, $take: Int!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCollectionSlugDocument,
    "query ProductsGetByProvidedValue($searchString: String!) {\n  products(where: {_search: $searchString}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetByProvidedValueDocument,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(first: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {product: {connect: {id: $productId}}, headline: $headline, content: $content, rating: $rating, name: $name, email: $email}\n  ) {\n    ...ReviewItemFragment\n  }\n}": types.ReviewCreateDocument,
    "fragment ReviewItemFragment on Review {\n  id\n  headline\n  content\n  rating\n  name\n  email\n  createdAt\n}": types.ReviewItemFragmentFragmentDoc,
    "query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewItemFragment\n  }\n}": types.ReviewsGetByProductIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $total: Int!, $productId: ID!) {\n  createOrderItem(\n    data: {total: $total, quantity: 1, product: {connect: {id: $productId}}, order: {connect: {id: $orderId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  orders(stage: DRAFT, where: {id: $id}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Order {\n  id\n  orderItems {\n    id\n    quantity\n    total\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!) {\n  updateOrderItem(where: {id: $itemId}, data: {quantity: $quantity}) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetById($categoryId: ID!) {\n  categories(where: {id: $categoryId}) {\n    ...CategoryItem\n  }\n}"): typeof import('./graphql').CategoryGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryItem\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryItem on Category {\n  id\n  name\n  description\n  slug\n}"): typeof import('./graphql').CategoryItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetById($collectionId: ID!) {\n  collections(where: {id: $collectionId}) {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetBySlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  description\n  slug\n  image {\n    id\n    url\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionListItem\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  price\n  description\n  images(first: 1) {\n    url\n  }\n  variants {\n    __typename\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  price\n  description\n  images(first: 1) {\n    url\n  }\n  variants {\n    __typename\n    ... on ProductSizeColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductColorVariant {\n      id\n      name\n      color\n    }\n    ... on ProductSizeVariant {\n      id\n      name\n    }\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAmountOf {\n  productsConnection {\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAmountOfDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAmountOfInCategory($slug: String!) {\n  productsConnection(where: {categories_some: {slug: $slug}}) {\n    pageInfo {\n      pageSize\n    }\n  }\n}"): typeof import('./graphql').ProductsGetAmountOfInCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!, $take: Int!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    name\n    products(first: $take, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCollectionSlug($slug: String!) {\n  collections(where: {slug: $slug}) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCollectionSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByProvidedValue($searchString: String!) {\n  products(where: {_search: $searchString}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetByProvidedValueDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(first: $take, skip: $skip) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $headline: String!, $content: String!, $rating: Int!, $name: String!, $email: String!) {\n  createReview(\n    data: {product: {connect: {id: $productId}}, headline: $headline, content: $content, rating: $rating, name: $name, email: $email}\n  ) {\n    ...ReviewItemFragment\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewItemFragment on Review {\n  id\n  headline\n  content\n  rating\n  name\n  email\n  createdAt\n}"): typeof import('./graphql').ReviewItemFragmentFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($productId: ID!) {\n  reviews(where: {product: {id: $productId}}) {\n    ...ReviewItemFragment\n  }\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
