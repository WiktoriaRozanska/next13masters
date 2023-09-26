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
    "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryItem\n  }\n}": types.CategoryGetBySlugDocument,
    "fragment CategoryItem on Category {\n  id\n  name\n  description\n}": types.CategoryItemFragmentDoc,
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
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetBySlug($slug: String!) {\n  categories(where: {slug: $slug}) {\n    ...CategoryItem\n  }\n}"): typeof import('./graphql').CategoryGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryItem on Category {\n  id\n  name\n  description\n}"): typeof import('./graphql').CategoryItemFragmentDoc;
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


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
