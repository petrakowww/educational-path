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

export type CreateTopicContentDto = {
  nodeId: Scalars['String']['input'];
  routeId: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoute: RouteModel;
  createTopicContent: TopicContentModel;
  deleteRoute: Scalars['Boolean']['output'];
  deleteTopicContent: Scalars['Boolean']['output'];
  deleteTopicMap: Scalars['Boolean']['output'];
  saveTopicMap: TopicMapModel;
  updateRoute: RouteModel;
  updateSkillProfile: SkillProfile;
  updateUserProfile: UserModel;
};


export type MutationCreateRouteArgs = {
  data: CreateRouteDto;
};


export type MutationCreateTopicContentArgs = {
  data: CreateTopicContentDto;
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicContentArgs = {
  nodeId: Scalars['String']['input'];
  routeId: Scalars['String']['input'];
};


export type MutationDeleteTopicMapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSaveTopicMapArgs = {
  data: SaveTopicMapDto;
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
  findTopicMap: TopicMapModel;
  findTopicMapByRouteId: TopicMapModel;
  findUserTags: Array<TagModel>;
  getAllTopicContents: Array<TopicContentModel>;
  getTopicContent?: Maybe<TopicContentModel>;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindRouteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindTopicMapArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindTopicMapByRouteIdArgs = {
  routeId: Scalars['String']['input'];
};


export type QueryGetAllTopicContentsArgs = {
  routeId: Scalars['String']['input'];
};


export type QueryGetTopicContentArgs = {
  nodeId: Scalars['String']['input'];
  routeId: Scalars['String']['input'];
};

export type RouteModel = {
  __typename?: 'RouteModel';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  privateType: PrivateType;
  tags?: Maybe<Array<RouteTagModel>>;
  title: Scalars['String']['output'];
  topicMap?: Maybe<TopicMapModel>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type RouteTagModel = {
  __typename?: 'RouteTagModel';
  id: Scalars['ID']['output'];
  route: RouteModel;
  tag: TagModel;
};

export type SaveTopicMapDto = {
  contents?: InputMaybe<Array<CreateTopicContentDto>>;
  edgeData?: InputMaybe<Scalars['String']['input']>;
  nodeData?: InputMaybe<Scalars['String']['input']>;
  routeId: Scalars['String']['input'];
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

export type TopicContentModel = {
  __typename?: 'TopicContentModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  nodeId: Scalars['String']['output'];
  routeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TopicMapModel = {
  __typename?: 'TopicMapModel';
  edgeData: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  nodeData: Scalars['String']['output'];
  route?: Maybe<RouteModel>;
  routeId: Scalars['String']['output'];
  topicContent?: Maybe<Array<TopicContentModel>>;
  updatedAt: Scalars['DateTime']['output'];
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


export type CreateRouteMutation = { __typename?: 'Mutation', createRoute: { __typename?: 'RouteModel', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null } };

export type DeleteRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRouteMutation = { __typename?: 'Mutation', deleteRoute: boolean };

export type UpdateRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateRouteDto;
}>;


export type UpdateRouteMutation = { __typename?: 'Mutation', updateRoute: { __typename?: 'RouteModel', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null } };

export type SaveTopicMapMutationVariables = Exact<{
  data: SaveTopicMapDto;
}>;


export type SaveTopicMapMutation = { __typename?: 'Mutation', saveTopicMap: { __typename?: 'TopicMapModel', id: string, routeId: string, nodeData: string, edgeData: string, updatedAt: any } };

export type UpdateProfileMutationVariables = Exact<{
  dto: UserProfileDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', id: string, name: string, isTwoFactorEnabled: boolean } };

export type UpdateSkillProfileMutationVariables = Exact<{
  dto: SkillProfileDto;
}>;


export type UpdateSkillProfileMutation = { __typename?: 'Mutation', updateSkillProfile: { __typename?: 'SkillProfile', profilename?: string | null, headline?: string | null, githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null } };

export type FindRoutesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRoutesByUserQuery = { __typename?: 'Query', findRoutesByUser: Array<{ __typename?: 'RouteModel', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null, topicMap?: { __typename?: 'TopicMapModel', topicContent?: Array<{ __typename?: 'TopicContentModel', id: string }> | null } | null }> };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'TagModel', id: string, name: string }> };

export type FindTopicMapByRouteIdQueryVariables = Exact<{
  routeId: Scalars['String']['input'];
}>;


export type FindTopicMapByRouteIdQuery = { __typename?: 'Query', findTopicMapByRouteId: { __typename?: 'TopicMapModel', id: string, routeId: string, nodeData: string, edgeData: string, updatedAt: any, topicContent?: Array<{ __typename?: 'TopicContentModel', id: string, nodeId: string, createdAt: any, updatedAt: any }> | null } };

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
    privateType
    createdAt
    updatedAt
    tags {
      id
      tag {
        id
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
export const DeleteRouteDocument = gql`
    mutation deleteRoute($id: ID!) {
  deleteRoute(id: $id)
}
    `;
export type DeleteRouteMutationFn = Apollo.MutationFunction<DeleteRouteMutation, DeleteRouteMutationVariables>;

/**
 * __useDeleteRouteMutation__
 *
 * To run a mutation, you first call `useDeleteRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRouteMutation, { data, loading, error }] = useDeleteRouteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRouteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRouteMutation, DeleteRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRouteMutation, DeleteRouteMutationVariables>(DeleteRouteDocument, options);
      }
export type DeleteRouteMutationHookResult = ReturnType<typeof useDeleteRouteMutation>;
export type DeleteRouteMutationResult = Apollo.MutationResult<DeleteRouteMutation>;
export type DeleteRouteMutationOptions = Apollo.BaseMutationOptions<DeleteRouteMutation, DeleteRouteMutationVariables>;
export const UpdateRouteDocument = gql`
    mutation updateRoute($id: ID!, $data: UpdateRouteDto!) {
  updateRoute(id: $id, data: $data) {
    id
    title
    description
    privateType
    createdAt
    updatedAt
    tags {
      id
      tag {
        id
        name
      }
    }
  }
}
    `;
export type UpdateRouteMutationFn = Apollo.MutationFunction<UpdateRouteMutation, UpdateRouteMutationVariables>;

/**
 * __useUpdateRouteMutation__
 *
 * To run a mutation, you first call `useUpdateRouteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRouteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRouteMutation, { data, loading, error }] = useUpdateRouteMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRouteMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRouteMutation, UpdateRouteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRouteMutation, UpdateRouteMutationVariables>(UpdateRouteDocument, options);
      }
export type UpdateRouteMutationHookResult = ReturnType<typeof useUpdateRouteMutation>;
export type UpdateRouteMutationResult = Apollo.MutationResult<UpdateRouteMutation>;
export type UpdateRouteMutationOptions = Apollo.BaseMutationOptions<UpdateRouteMutation, UpdateRouteMutationVariables>;
export const SaveTopicMapDocument = gql`
    mutation saveTopicMap($data: SaveTopicMapDto!) {
  saveTopicMap(data: $data) {
    id
    routeId
    nodeData
    edgeData
    updatedAt
  }
}
    `;
export type SaveTopicMapMutationFn = Apollo.MutationFunction<SaveTopicMapMutation, SaveTopicMapMutationVariables>;

/**
 * __useSaveTopicMapMutation__
 *
 * To run a mutation, you first call `useSaveTopicMapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveTopicMapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveTopicMapMutation, { data, loading, error }] = useSaveTopicMapMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSaveTopicMapMutation(baseOptions?: Apollo.MutationHookOptions<SaveTopicMapMutation, SaveTopicMapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveTopicMapMutation, SaveTopicMapMutationVariables>(SaveTopicMapDocument, options);
      }
export type SaveTopicMapMutationHookResult = ReturnType<typeof useSaveTopicMapMutation>;
export type SaveTopicMapMutationResult = Apollo.MutationResult<SaveTopicMapMutation>;
export type SaveTopicMapMutationOptions = Apollo.BaseMutationOptions<SaveTopicMapMutation, SaveTopicMapMutationVariables>;
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
      id
      tag {
        id
        name
      }
    }
    topicMap {
      topicContent {
        id
      }
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
export const FindTopicMapByRouteIdDocument = gql`
    query findTopicMapByRouteId($routeId: String!) {
  findTopicMapByRouteId(routeId: $routeId) {
    id
    routeId
    nodeData
    edgeData
    updatedAt
    topicContent {
      id
      nodeId
      createdAt
      updatedAt
    }
  }
}
    `;

/**
 * __useFindTopicMapByRouteIdQuery__
 *
 * To run a query within a React component, call `useFindTopicMapByRouteIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTopicMapByRouteIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTopicMapByRouteIdQuery({
 *   variables: {
 *      routeId: // value for 'routeId'
 *   },
 * });
 */
export function useFindTopicMapByRouteIdQuery(baseOptions: Apollo.QueryHookOptions<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables> & ({ variables: FindTopicMapByRouteIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>(FindTopicMapByRouteIdDocument, options);
      }
export function useFindTopicMapByRouteIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>(FindTopicMapByRouteIdDocument, options);
        }
export function useFindTopicMapByRouteIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>(FindTopicMapByRouteIdDocument, options);
        }
export type FindTopicMapByRouteIdQueryHookResult = ReturnType<typeof useFindTopicMapByRouteIdQuery>;
export type FindTopicMapByRouteIdLazyQueryHookResult = ReturnType<typeof useFindTopicMapByRouteIdLazyQuery>;
export type FindTopicMapByRouteIdSuspenseQueryHookResult = ReturnType<typeof useFindTopicMapByRouteIdSuspenseQuery>;
export type FindTopicMapByRouteIdQueryResult = Apollo.QueryResult<FindTopicMapByRouteIdQuery, FindTopicMapByRouteIdQueryVariables>;
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