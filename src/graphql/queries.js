/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      phone
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        phone
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPref = /* GraphQL */ `
  query GetPref($id: ID!) {
    getPref(id: $id) {
      id
      type
      name
      priority
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPrefs = /* GraphQL */ `
  query ListPrefs(
    $filter: ModelPrefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        priority
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
