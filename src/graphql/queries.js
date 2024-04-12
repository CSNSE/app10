/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      username
      email
      profPic
      createdAt
      updatedAt
      __typename
    }
  }
`;


export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        profPic
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
