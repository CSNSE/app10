/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      username
      phone
      profPic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      username
      phone
      profPic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      username
      phone
      profPic
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
