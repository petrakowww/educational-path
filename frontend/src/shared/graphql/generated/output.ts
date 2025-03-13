import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AccountModel = {
  __typename?: 'AccountModel';
  accessToken?: Maybe<Scalars['String']['output']>;
  accountId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  provider: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: UserModel;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateSkillProfile: SkillProfile;
  updateUserProfile: UserModel;
};


export type MutationUpdateSkillProfileArgs = {
  dto: SkillProfileDto;
};


export type MutationUpdateUserProfileArgs = {
  dto: UserProfileDto;
};

export type Query = {
  __typename?: 'Query';
  findById: UserModel;
  findProfile: UserModel;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};

export type SkillProfile = {
  __typename?: 'SkillProfile';
  githubUrl?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  profilename?: Maybe<Scalars['String']['output']>;
  telegramUrl?: Maybe<Scalars['String']['output']>;
  user: UserModel;
  vkUrl?: Maybe<Scalars['String']['output']>;
};

export type SkillProfileDto = {
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  profilename?: InputMaybe<Scalars['String']['input']>;
  telegramUrl?: InputMaybe<Scalars['String']['input']>;
  vkUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UserModel = {
  __typename?: 'UserModel';
  accounts?: Maybe<Array<AccountModel>>;
  avatar?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isTwoFactorEnabled: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  message?: Maybe<Scalars['String']['output']>;
  method: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  skillProfile?: Maybe<SkillProfile>;
};

export type UserProfileDto = {
  isTwoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileMutationVariables = Exact<{
  dto: UserProfileDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', id: string, name: string, isTwoFactorEnabled: boolean } };

export type UpdateSkillProfileMutationVariables = Exact<{
  dto: SkillProfileDto;
}>;


export type UpdateSkillProfileMutation = { __typename?: 'Mutation', updateSkillProfile: { __typename?: 'SkillProfile', profilename?: string | null, headline?: string | null, githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null } };

export type FindProfileLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileLogoQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: string, role: string } };

export type FindProfileSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileSettingsQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email: string, isTwoFactorEnabled: boolean, password: string } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: string, isTwoFactorEnabled: boolean, email: string, skillProfile?: { __typename?: 'SkillProfile', githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null, headline?: string | null, profilename?: string | null } | null } };


export const UpdateProfileDocument = gql`
    mutation updateProfile($dto: UserProfileDto!) {
  updateUserProfile(dto: $dto) {
    id
    name
    isTwoFactorEnabled
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const UpdateSkillProfileDocument = gql`
    mutation updateSkillProfile($dto: SkillProfileDto!) {
  updateSkillProfile(dto: $dto) {
    profilename
    headline
    githubUrl
    vkUrl
    telegramUrl
  }
}
    `;
export type UpdateSkillProfileMutationFn = Apollo.MutationFunction<UpdateSkillProfileMutation, UpdateSkillProfileMutationVariables>;

/**
 * __useUpdateSkillProfileMutation__
 *
 * To run a mutation, you first call `useUpdateSkillProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSkillProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSkillProfileMutation, { data, loading, error }] = useUpdateSkillProfileMutation({
 *   variables: {
 *      dto: // value for 'dto'
 *   },
 * });
 */
export function useUpdateSkillProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSkillProfileMutation, UpdateSkillProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSkillProfileMutation, UpdateSkillProfileMutationVariables>(UpdateSkillProfileDocument, options);
      }
export type UpdateSkillProfileMutationHookResult = ReturnType<typeof useUpdateSkillProfileMutation>;
export type UpdateSkillProfileMutationResult = Apollo.MutationResult<UpdateSkillProfileMutation>;
export type UpdateSkillProfileMutationOptions = Apollo.BaseMutationOptions<UpdateSkillProfileMutation, UpdateSkillProfileMutationVariables>;
export const FindProfileLogoDocument = gql`
    query FindProfileLogo {
  findProfile {
    id
    name
    avatar
    method
    role
  }
}
    `;

/**
 * __useFindProfileLogoQuery__
 *
 * To run a query within a React component, call `useFindProfileLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileLogoQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileLogoQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileLogoQuery, FindProfileLogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileLogoQuery, FindProfileLogoQueryVariables>(FindProfileLogoDocument, options);
      }
export function useFindProfileLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileLogoQuery, FindProfileLogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileLogoQuery, FindProfileLogoQueryVariables>(FindProfileLogoDocument, options);
        }
export function useFindProfileLogoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileLogoQuery, FindProfileLogoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileLogoQuery, FindProfileLogoQueryVariables>(FindProfileLogoDocument, options);
        }
export type FindProfileLogoQueryHookResult = ReturnType<typeof useFindProfileLogoQuery>;
export type FindProfileLogoLazyQueryHookResult = ReturnType<typeof useFindProfileLogoLazyQuery>;
export type FindProfileLogoSuspenseQueryHookResult = ReturnType<typeof useFindProfileLogoSuspenseQuery>;
export type FindProfileLogoQueryResult = Apollo.QueryResult<FindProfileLogoQuery, FindProfileLogoQueryVariables>;
export const FindProfileSettingsDocument = gql`
    query FindProfileSettings {
  findProfile {
    id
    email
    isTwoFactorEnabled
    password
  }
}
    `;

/**
 * __useFindProfileSettingsQuery__
 *
 * To run a query within a React component, call `useFindProfileSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileSettingsQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>(FindProfileSettingsDocument, options);
      }
export function useFindProfileSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>(FindProfileSettingsDocument, options);
        }
export function useFindProfileSettingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>(FindProfileSettingsDocument, options);
        }
export type FindProfileSettingsQueryHookResult = ReturnType<typeof useFindProfileSettingsQuery>;
export type FindProfileSettingsLazyQueryHookResult = ReturnType<typeof useFindProfileSettingsLazyQuery>;
export type FindProfileSettingsSuspenseQueryHookResult = ReturnType<typeof useFindProfileSettingsSuspenseQuery>;
export type FindProfileSettingsQueryResult = Apollo.QueryResult<FindProfileSettingsQuery, FindProfileSettingsQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    id
    name
    avatar
    method
    isTwoFactorEnabled
    email
    skillProfile {
      githubUrl
      vkUrl
      telegramUrl
      headline
      profilename
    }
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export function useFindProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;