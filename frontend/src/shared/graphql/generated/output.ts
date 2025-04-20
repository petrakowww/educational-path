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

export enum AuthMethod {
  Credentials = 'CREDENTIALS',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Yandex = 'YANDEX'
}

export type CreateRouteDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoute: RouteModel;
  deleteRoute: Scalars['Boolean']['output'];
  updateRoute: RouteModel;
  updateSkillProfile: SkillProfile;
  updateUserProfile: UserModel;
};


export type MutationCreateRouteArgs = {
  data: CreateRouteDto;
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateRouteArgs = {
  data: UpdateRouteDto;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSkillProfileArgs = {
  dto: SkillProfileDto;
};


export type MutationUpdateUserProfileArgs = {
  dto: UserProfileDto;
};

export enum PrivateType {
  General = 'GENERAL',
  Private = 'PRIVATE'
}

export type Query = {
  __typename?: 'Query';
  findAllTags: Array<TagModel>;
  findById: UserModel;
  findProfile: UserModel;
  findRoute: RouteModel;
  findRoutesByUser: Array<RouteModel>;
  findUserTags: Array<TagModel>;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindRouteArgs = {
  id: Scalars['ID']['input'];
};

export type RouteModel = {
  __typename?: 'RouteModel';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  privateType: PrivateType;
  tags?: Maybe<Array<RouteTagModel>>;
  title: Scalars['String']['output'];
  topicNodes?: Maybe<Array<TopicNodeModel>>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type RouteTagModel = {
  __typename?: 'RouteTagModel';
  id: Scalars['ID']['output'];
  route: RouteModel;
  tag: TagModel;
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

export type TagModel = {
  __typename?: 'TagModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TopicEdgeModel = {
  __typename?: 'TopicEdgeModel';
  from: TopicNodeModel;
  fromId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  to: TopicNodeModel;
  toId: Scalars['String']['output'];
};

export type TopicNodeModel = {
  __typename?: 'TopicNodeModel';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  incomingEdges?: Maybe<Array<TopicEdgeModel>>;
  outgoingEdges?: Maybe<Array<TopicEdgeModel>>;
  route: RouteModel;
  title: Scalars['String']['output'];
};

export type UpdateRouteDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  privateType?: InputMaybe<PrivateType>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  method: AuthMethod;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: Scalars['String']['output'];
  skillProfile?: Maybe<SkillProfile>;
};

export type UserProfileDto = {
  isTwoFactorEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateRouteMutationVariables = Exact<{
  mapDto: CreateRouteDto;
}>;


export type CreateRouteMutation = { __typename?: 'Mutation', createRoute: { __typename?: 'RouteModel', id: string, title: string, description?: string | null, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', name: string } }> | null } };

export type UpdateProfileMutationVariables = Exact<{
  dto: UserProfileDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', id: string, name: string, isTwoFactorEnabled: boolean } };

export type UpdateSkillProfileMutationVariables = Exact<{
  dto: SkillProfileDto;
}>;


export type UpdateSkillProfileMutation = { __typename?: 'Mutation', updateSkillProfile: { __typename?: 'SkillProfile', profilename?: string | null, headline?: string | null, githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null } };

export type FindRoutesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRoutesByUserQuery = { __typename?: 'Query', findRoutesByUser: Array<{ __typename?: 'RouteModel', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', tag: { __typename?: 'TagModel', name: string } }> | null, topicNodes?: Array<{ __typename?: 'TopicNodeModel', id: string }> | null }> };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'TagModel', id: string, name: string }> };

export type FindProfileLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileLogoQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, role: string } };

export type FindProfileSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileSettingsQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email: string, isTwoFactorEnabled: boolean, password: string } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, isTwoFactorEnabled: boolean, email: string, skillProfile?: { __typename?: 'SkillProfile', githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null, headline?: string | null, profilename?: string | null } | null } };


export const CreateRouteDocument = gql`
    mutation createRoute($mapDto: CreateRouteDto!) {
  createRoute(data: $mapDto) {
    id
    title
    description
    createdAt
    updatedAt
    tags {
      id
      tag {
        name
      }
    }
  }
}
    `;
export type CreateRouteMutationFn = Apollo.MutationFunction<CreateRouteMutation, CreateRouteMutationVariables>;

/**
 * __useCreateRouteMutation__
 *
 * To run a mutation, you first call `useCreateRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRouteMutation, { data, loading, error }] = useCreateRouteMutation({
 *   variables: {
 *      mapDto: // value for 'mapDto'
 *   },
 * });
 */
export function useCreateRouteMutation(baseOptions?: Apollo.MutationHookOptions<CreateRouteMutation, CreateRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRouteMutation, CreateRouteMutationVariables>(CreateRouteDocument, options);
      }
export type CreateRouteMutationHookResult = ReturnType<typeof useCreateRouteMutation>;
export type CreateRouteMutationResult = Apollo.MutationResult<CreateRouteMutation>;
export type CreateRouteMutationOptions = Apollo.BaseMutationOptions<CreateRouteMutation, CreateRouteMutationVariables>;
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
export const FindRoutesByUserDocument = gql`
    query findRoutesByUser {
  findRoutesByUser {
    id
    title
    description
    privateType
    createdAt
    updatedAt
    tags {
      tag {
        name
      }
    }
    topicNodes {
      id
    }
  }
}
    `;

/**
 * __useFindRoutesByUserQuery__
 *
 * To run a query within a React component, call `useFindRoutesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRoutesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRoutesByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindRoutesByUserQuery(baseOptions?: Apollo.QueryHookOptions<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>(FindRoutesByUserDocument, options);
      }
export function useFindRoutesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>(FindRoutesByUserDocument, options);
        }
export function useFindRoutesByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>(FindRoutesByUserDocument, options);
        }
export type FindRoutesByUserQueryHookResult = ReturnType<typeof useFindRoutesByUserQuery>;
export type FindRoutesByUserLazyQueryHookResult = ReturnType<typeof useFindRoutesByUserLazyQuery>;
export type FindRoutesByUserSuspenseQueryHookResult = ReturnType<typeof useFindRoutesByUserSuspenseQuery>;
export type FindRoutesByUserQueryResult = Apollo.QueryResult<FindRoutesByUserQuery, FindRoutesByUserQueryVariables>;
export const FindAllTagsDocument = gql`
    query findAllTags {
  findAllTags {
    id
    name
  }
}
    `;

/**
 * __useFindAllTagsQuery__
 *
 * To run a query within a React component, call `useFindAllTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllTagsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllTagsQuery, FindAllTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllTagsQuery, FindAllTagsQueryVariables>(FindAllTagsDocument, options);
      }
export function useFindAllTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllTagsQuery, FindAllTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllTagsQuery, FindAllTagsQueryVariables>(FindAllTagsDocument, options);
        }
export function useFindAllTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllTagsQuery, FindAllTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllTagsQuery, FindAllTagsQueryVariables>(FindAllTagsDocument, options);
        }
export type FindAllTagsQueryHookResult = ReturnType<typeof useFindAllTagsQuery>;
export type FindAllTagsLazyQueryHookResult = ReturnType<typeof useFindAllTagsLazyQuery>;
export type FindAllTagsSuspenseQueryHookResult = ReturnType<typeof useFindAllTagsSuspenseQuery>;
export type FindAllTagsQueryResult = Apollo.QueryResult<FindAllTagsQuery, FindAllTagsQueryVariables>;
export const FindProfileLogoDocument = gql`
    query findProfileLogo {
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
    query findProfileSettings {
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
    query findProfile {
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