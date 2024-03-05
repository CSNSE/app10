/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPref = /* GraphQL */ `
  mutation CreatePref(
    $input: CreatePrefInput!
    $condition: ModelPrefConditionInput
  ) {
    createPref(input: $input, condition: $condition) {
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
export const updatePref = /* GraphQL */ `
  mutation UpdatePref(
    $input: UpdatePrefInput!
    $condition: ModelPrefConditionInput
  ) {
    updatePref(input: $input, condition: $condition) {
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
export const deletePref = /* GraphQL */ `
  mutation DeletePref(
    $input: DeletePrefInput!
    $condition: ModelPrefConditionInput
  ) {
    deletePref(input: $input, condition: $condition) {
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
