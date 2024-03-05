/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreatePref = /* GraphQL */ `
  subscription OnCreatePref($filter: ModelSubscriptionPrefFilterInput) {
    onCreatePref(filter: $filter) {
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
export const onUpdatePref = /* GraphQL */ `
  subscription OnUpdatePref($filter: ModelSubscriptionPrefFilterInput) {
    onUpdatePref(filter: $filter) {
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
export const onDeletePref = /* GraphQL */ `
  subscription OnDeletePref($filter: ModelSubscriptionPrefFilterInput) {
    onDeletePref(filter: $filter) {
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
