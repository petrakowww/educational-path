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
  JSON: { input: any; output: any; }
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

export type ChecklistItem = {
  __typename?: 'ChecklistItem';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  topicNodeId: Scalars['String']['output'];
};

export type ChecklistItemInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
};

export type ChecklistItemWithProgress = {
  __typename?: 'ChecklistItemWithProgress';
  done: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export enum CourseModeType {
  Flexible = 'FLEXIBLE',
  Strict = 'STRICT'
}

export type CourseProgressSummary = {
  __typename?: 'CourseProgressSummary';
  completed: Scalars['Int']['output'];
  inProgress: Scalars['Int']['output'];
  notStarted: Scalars['Int']['output'];
  skipped: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CourseViewType {
  Graph = 'GRAPH',
  Linear = 'LINEAR'
}

export type CreateRouteDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoute: Route;
  deleteRoute: Scalars['Boolean']['output'];
  deleteTopicMap: Scalars['Boolean']['output'];
  markChecklistItem: UserChecklistProgress;
  removeCourse: Scalars['Boolean']['output'];
  saveTopicMap: TopicMap;
  startCourse: UserCourse;
  updateProgressValue: UserTopicProgress;
  updateRoute: Route;
  updateSkillProfile: SkillProfile;
  updateUserCourseSettings: Scalars['Boolean']['output'];
  updateUserProfile: UserModel;
  updateUserTopicProgressStatus: UserTopicProgress;
  verifyRoute: Route;
};


export type MutationCreateRouteArgs = {
  data: CreateRouteDto;
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicMapArgs = {
  routeId: Scalars['String']['input'];
};


export type MutationMarkChecklistItemArgs = {
  checkListItemId: Scalars['String']['input'];
  done: Scalars['Boolean']['input'];
};


export type MutationRemoveCourseArgs = {
  topicMapId: Scalars['String']['input'];
};


export type MutationSaveTopicMapArgs = {
  input: SaveTopicMapInput;
};


export type MutationStartCourseArgs = {
  input: StartCourseInput;
};


export type MutationUpdateProgressValueArgs = {
  topicNodeId: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};


export type MutationUpdateRouteArgs = {
  data: UpdateRouteDto;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSkillProfileArgs = {
  dto: SkillProfileDto;
};


export type MutationUpdateUserCourseSettingsArgs = {
  input: UpdateCourseSettingsInput;
};


export type MutationUpdateUserProfileArgs = {
  dto: UserProfileDto;
};


export type MutationUpdateUserTopicProgressStatusArgs = {
  input: UpdateTopicProgressInput;
};


export type MutationVerifyRouteArgs = {
  id: Scalars['ID']['input'];
  status: VerificationStatus;
};

export enum NodeStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED',
  Skipped = 'SKIPPED'
}

export enum PrivateType {
  General = 'GENERAL',
  Private = 'PRIVATE'
}

export type Query = {
  __typename?: 'Query';
  findAllTags: Array<TagModel>;
  findById: UserModel;
  findProfile: UserModel;
  findRoute: Route;
  findRoutesByUser: Array<Route>;
  findUserTags: Array<TagModel>;
  getChecklistProgressByTopic: Array<ChecklistItemWithProgress>;
  getCourseProgress: CourseProgressSummary;
  getTopicMap: TopicMap;
  getTopicNodeById: TopicNode;
  getUserCourse: UserCourse;
  getUserTopicMap: TopicMap;
  getUserTopicProgress: UserTopicProgress;
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindRouteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetChecklistProgressByTopicArgs = {
  topicNodeId: Scalars['String']['input'];
};


export type QueryGetCourseProgressArgs = {
  topicMapId: Scalars['String']['input'];
};


export type QueryGetTopicMapArgs = {
  routeId: Scalars['String']['input'];
};


export type QueryGetTopicNodeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetUserCourseArgs = {
  topicMapId: Scalars['String']['input'];
};


export type QueryGetUserTopicMapArgs = {
  routeId: Scalars['String']['input'];
};


export type QueryGetUserTopicProgressArgs = {
  topicNodeId: Scalars['String']['input'];
};

export type Route = {
  __typename?: 'Route';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isVerified: VerificationStatus;
  privateType: PrivateType;
  tags?: Maybe<Array<RouteTagModel>>;
  title: Scalars['String']['output'];
  topicMap?: Maybe<TopicMap>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type RouteTagModel = {
  __typename?: 'RouteTagModel';
  id: Scalars['ID']['output'];
  route: Route;
  tag: TagModel;
};

export type SaveTopicMapInput = {
  edges?: InputMaybe<Array<UpdateTopicEdgeInput>>;
  nodes?: InputMaybe<Array<UpdateTopicNodeInput>>;
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

export type StartCourseInput = {
  topicMapId: Scalars['ID']['input'];
};

export type TagModel = {
  __typename?: 'TagModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type TopicEdge = {
  __typename?: 'TopicEdge';
  id: Scalars['ID']['output'];
  meta?: Maybe<Scalars['String']['output']>;
  sourceId: Scalars['String']['output'];
  targetId: Scalars['String']['output'];
  topicMapId: Scalars['String']['output'];
};

export type TopicMap = {
  __typename?: 'TopicMap';
  UserCourse: Array<UserCourse>;
  edges: Array<TopicEdge>;
  id: Scalars['ID']['output'];
  nodes: Array<TopicNode>;
  route?: Maybe<Route>;
  routeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userCourse?: Maybe<UserCourse>;
};

export type TopicNode = {
  __typename?: 'TopicNode';
  UserTopicProgress: Array<UserTopicProgress>;
  checklist: Array<ChecklistItem>;
  id: Scalars['ID']['output'];
  meta: Scalars['String']['output'];
  posxy?: Maybe<Scalars['JSON']['output']>;
  title: Scalars['String']['output'];
  topicMapId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  zIndex?: Maybe<Scalars['Float']['output']>;
};

export type UpdateCourseSettingsInput = {
  mode?: InputMaybe<CourseModeType>;
  topicMapId: Scalars['ID']['input'];
  view?: InputMaybe<CourseViewType>;
};

export type UpdateRouteDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  privateType?: InputMaybe<PrivateType>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopicEdgeInput = {
  id: Scalars['String']['input'];
  meta?: InputMaybe<Scalars['String']['input']>;
  sourceId: Scalars['String']['input'];
  targetId: Scalars['String']['input'];
};

export type UpdateTopicNodeInput = {
  checklist?: InputMaybe<Array<ChecklistItemInput>>;
  id: Scalars['String']['input'];
  meta: Scalars['String']['input'];
  posxy?: InputMaybe<Scalars['JSON']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  zIndex?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTopicProgressInput = {
  status: NodeStatus;
  topicNodeId: Scalars['String']['input'];
};

export type UserChecklistProgress = {
  __typename?: 'UserChecklistProgress';
  checklist: ChecklistItem;
  checklistItemId: Scalars['String']['output'];
  done: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  userCourse: UserCourse;
  userCourseId: Scalars['String']['output'];
};

export type UserCourse = {
  __typename?: 'UserCourse';
  UserChecklistProgress: Array<UserChecklistProgress>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  mode?: Maybe<CourseModeType>;
  progress?: Maybe<Array<UserTopicProgress>>;
  topicMap: TopicMap;
  topicMapId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  view?: Maybe<CourseViewType>;
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

export type UserTopicProgress = {
  __typename?: 'UserTopicProgress';
  finishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  progressValue?: Maybe<Scalars['Float']['output']>;
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  status: NodeStatus;
  topicNodeId: Scalars['String']['output'];
  userCourseId: Scalars['String']['output'];
};

export enum VerificationStatus {
  NotVerified = 'NOT_VERIFIED',
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type MarkChecklistItemMutationVariables = Exact<{
  checkListItemId: Scalars['String']['input'];
  done: Scalars['Boolean']['input'];
}>;


export type MarkChecklistItemMutation = { __typename?: 'Mutation', markChecklistItem: { __typename?: 'UserChecklistProgress', id: string, done: boolean, checklist: { __typename?: 'ChecklistItem', id: string } } };

export type StartCourseMutationVariables = Exact<{
  courseDto: StartCourseInput;
}>;


export type StartCourseMutation = { __typename?: 'Mutation', startCourse: { __typename?: 'UserCourse', id: string, userId: string, topicMapId: string, createdAt: any, updatedAt: any, view?: CourseViewType | null, mode?: CourseModeType | null } };

export type UpdateUserCourseSettingsMutationVariables = Exact<{
  input: UpdateCourseSettingsInput;
}>;


export type UpdateUserCourseSettingsMutation = { __typename?: 'Mutation', updateUserCourseSettings: boolean };

export type DeleteTopicMapMutationVariables = Exact<{
  routeId: Scalars['String']['input'];
}>;


export type DeleteTopicMapMutation = { __typename?: 'Mutation', deleteTopicMap: boolean };

export type SaveTopicMapMutationVariables = Exact<{
  input: SaveTopicMapInput;
}>;


export type SaveTopicMapMutation = { __typename?: 'Mutation', saveTopicMap: { __typename?: 'TopicMap', id: string, routeId: string, updatedAt: any, nodes: Array<{ __typename?: 'TopicNode', id: string, title: string, type: string, meta: string, zIndex?: number | null, checklist: Array<{ __typename?: 'ChecklistItem', id: string, text: string }> }>, edges: Array<{ __typename?: 'TopicEdge', id: string, sourceId: string, targetId: string, meta?: string | null }> } };

export type UpdateProgressValueMutationVariables = Exact<{
  topicNodeId: Scalars['String']['input'];
  value: Scalars['Float']['input'];
}>;


export type UpdateProgressValueMutation = { __typename?: 'Mutation', updateProgressValue: { __typename?: 'UserTopicProgress', id: string, userCourseId: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null } };

export type UpdateUserTopicProgressStatusMutationVariables = Exact<{
  input: UpdateTopicProgressInput;
}>;


export type UpdateUserTopicProgressStatusMutation = { __typename?: 'Mutation', updateUserTopicProgressStatus: { __typename?: 'UserTopicProgress', id: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null } };

export type CreateRouteMutationVariables = Exact<{
  mapDto: CreateRouteDto;
}>;


export type CreateRouteMutation = { __typename?: 'Mutation', createRoute: { __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null } };

export type DeleteRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRouteMutation = { __typename?: 'Mutation', deleteRoute: boolean };

export type UpdateRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateRouteDto;
}>;


export type UpdateRouteMutation = { __typename?: 'Mutation', updateRoute: { __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null } };

export type UpdateProfileMutationVariables = Exact<{
  dto: UserProfileDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', id: string, name: string, isTwoFactorEnabled: boolean } };

export type UpdateSkillProfileMutationVariables = Exact<{
  dto: SkillProfileDto;
}>;


export type UpdateSkillProfileMutation = { __typename?: 'Mutation', updateSkillProfile: { __typename?: 'SkillProfile', profilename?: string | null, headline?: string | null, githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null } };

export type GetChecklistProgressQueryVariables = Exact<{
  topicNodeId: Scalars['String']['input'];
}>;


export type GetChecklistProgressQuery = { __typename?: 'Query', getChecklistProgressByTopic: Array<{ __typename?: 'ChecklistItemWithProgress', id: string, text: string, done: boolean }> };

export type GetPreviewCourseInfoQueryVariables = Exact<{
  routeId: Scalars['String']['input'];
}>;


export type GetPreviewCourseInfoQuery = { __typename?: 'Query', getUserTopicMap: { __typename?: 'TopicMap', id: string, routeId: string, updatedAt: any, nodes: Array<{ __typename?: 'TopicNode', id: string, topicMapId: string, title: string, type: string, meta: string, posxy?: any | null, zIndex?: number | null, checklist: Array<{ __typename?: 'ChecklistItem', id: string, text: string, topicNodeId: string }> }>, edges: Array<{ __typename?: 'TopicEdge', id: string, topicMapId: string, sourceId: string, targetId: string, meta?: string | null }>, userCourse?: { __typename?: 'UserCourse', id: string, userId: string, topicMapId: string, createdAt: any, updatedAt: any, view?: CourseViewType | null, mode?: CourseModeType | null, progress?: Array<{ __typename?: 'UserTopicProgress', id: string, userCourseId: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null }> | null, UserChecklistProgress: Array<{ __typename?: 'UserChecklistProgress', id: string, checklistItemId: string, done: boolean }> } | null, route?: { __typename?: 'Route', id: string, title: string, description?: string | null, createdAt: any, updatedAt: any, isVerified: VerificationStatus, topicMap?: { __typename?: 'TopicMap', id: string } | null, user: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null }, tags?: Array<{ __typename?: 'RouteTagModel', tag: { __typename?: 'TagModel', name: string } }> | null } | null } };

export type GetUserCourseQueryVariables = Exact<{
  topicMapId: Scalars['String']['input'];
}>;


export type GetUserCourseQuery = { __typename?: 'Query', getUserCourse: { __typename?: 'UserCourse', id: string, userId: string, topicMapId: string, createdAt: any, updatedAt: any, view?: CourseViewType | null, mode?: CourseModeType | null, progress?: Array<{ __typename?: 'UserTopicProgress', id: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null }> | null, UserChecklistProgress: Array<{ __typename?: 'UserChecklistProgress', id: string, checklistItemId: string, done: boolean }> } };

export type GetTopicMapQueryVariables = Exact<{
  routeId: Scalars['String']['input'];
}>;


export type GetTopicMapQuery = { __typename?: 'Query', getTopicMap: { __typename?: 'TopicMap', id: string, routeId: string, updatedAt: any, nodes: Array<{ __typename?: 'TopicNode', id: string, topicMapId: string, title: string, type: string, meta: string, posxy?: any | null, zIndex?: number | null, checklist: Array<{ __typename?: 'ChecklistItem', id: string, text: string, topicNodeId: string }> }>, edges: Array<{ __typename?: 'TopicEdge', id: string, topicMapId: string, sourceId: string, targetId: string, meta?: string | null }> } };

export type GetCourseProgressQueryVariables = Exact<{
  topicMapId: Scalars['String']['input'];
}>;


export type GetCourseProgressQuery = { __typename?: 'Query', getCourseProgress: { __typename?: 'CourseProgressSummary', completed: number, inProgress: number, skipped: number, notStarted: number, total: number } };

export type GetUserTopicProgressQueryVariables = Exact<{
  topicNodeId: Scalars['String']['input'];
}>;


export type GetUserTopicProgressQuery = { __typename?: 'Query', getUserTopicProgress: { __typename?: 'UserTopicProgress', id: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null } };

export type FindRoutesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRoutesByUserQuery = { __typename?: 'Query', findRoutesByUser: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag: { __typename?: 'TagModel', id: string, name: string } }> | null, topicMap?: { __typename?: 'TopicMap', id: string, nodes: Array<{ __typename?: 'TopicNode', id: string }> } | null }> };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'TagModel', id: string, name: string }> };

export type FindProfileLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileLogoQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, role: string } };

export type FindProfileSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileSettingsQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email: string, isTwoFactorEnabled: boolean, password: string } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, isTwoFactorEnabled: boolean, email: string, skillProfile?: { __typename?: 'SkillProfile', githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null, headline?: string | null, profilename?: string | null } | null } };


export const MarkChecklistItemDocument = gql`
    mutation MarkChecklistItem($checkListItemId: String!, $done: Boolean!) {
  markChecklistItem(checkListItemId: $checkListItemId, done: $done) {
    id
    done
    checklist {
      id
    }
  }
}
    `;
export type MarkChecklistItemMutationFn = Apollo.MutationFunction<MarkChecklistItemMutation, MarkChecklistItemMutationVariables>;

/**
 * __useMarkChecklistItemMutation__
 *
 * To run a mutation, you first call `useMarkChecklistItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkChecklistItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markChecklistItemMutation, { data, loading, error }] = useMarkChecklistItemMutation({
 *   variables: {
 *      checkListItemId: // value for 'checkListItemId'
 *      done: // value for 'done'
 *   },
 * });
 */
export function useMarkChecklistItemMutation(baseOptions?: Apollo.MutationHookOptions<MarkChecklistItemMutation, MarkChecklistItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MarkChecklistItemMutation, MarkChecklistItemMutationVariables>(MarkChecklistItemDocument, options);
      }
export type MarkChecklistItemMutationHookResult = ReturnType<typeof useMarkChecklistItemMutation>;
export type MarkChecklistItemMutationResult = Apollo.MutationResult<MarkChecklistItemMutation>;
export type MarkChecklistItemMutationOptions = Apollo.BaseMutationOptions<MarkChecklistItemMutation, MarkChecklistItemMutationVariables>;
export const StartCourseDocument = gql`
    mutation startCourse($courseDto: StartCourseInput!) {
  startCourse(input: $courseDto) {
    id
    userId
    topicMapId
    createdAt
    updatedAt
    view
    mode
  }
}
    `;
export type StartCourseMutationFn = Apollo.MutationFunction<StartCourseMutation, StartCourseMutationVariables>;

/**
 * __useStartCourseMutation__
 *
 * To run a mutation, you first call `useStartCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startCourseMutation, { data, loading, error }] = useStartCourseMutation({
 *   variables: {
 *      courseDto: // value for 'courseDto'
 *   },
 * });
 */
export function useStartCourseMutation(baseOptions?: Apollo.MutationHookOptions<StartCourseMutation, StartCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartCourseMutation, StartCourseMutationVariables>(StartCourseDocument, options);
      }
export type StartCourseMutationHookResult = ReturnType<typeof useStartCourseMutation>;
export type StartCourseMutationResult = Apollo.MutationResult<StartCourseMutation>;
export type StartCourseMutationOptions = Apollo.BaseMutationOptions<StartCourseMutation, StartCourseMutationVariables>;
export const UpdateUserCourseSettingsDocument = gql`
    mutation updateUserCourseSettings($input: UpdateCourseSettingsInput!) {
  updateUserCourseSettings(input: $input)
}
    `;
export type UpdateUserCourseSettingsMutationFn = Apollo.MutationFunction<UpdateUserCourseSettingsMutation, UpdateUserCourseSettingsMutationVariables>;

/**
 * __useUpdateUserCourseSettingsMutation__
 *
 * To run a mutation, you first call `useUpdateUserCourseSettingsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserCourseSettingsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserCourseSettingsMutation, { data, loading, error }] = useUpdateUserCourseSettingsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserCourseSettingsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserCourseSettingsMutation, UpdateUserCourseSettingsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserCourseSettingsMutation, UpdateUserCourseSettingsMutationVariables>(UpdateUserCourseSettingsDocument, options);
      }
export type UpdateUserCourseSettingsMutationHookResult = ReturnType<typeof useUpdateUserCourseSettingsMutation>;
export type UpdateUserCourseSettingsMutationResult = Apollo.MutationResult<UpdateUserCourseSettingsMutation>;
export type UpdateUserCourseSettingsMutationOptions = Apollo.BaseMutationOptions<UpdateUserCourseSettingsMutation, UpdateUserCourseSettingsMutationVariables>;
export const DeleteTopicMapDocument = gql`
    mutation deleteTopicMap($routeId: String!) {
  deleteTopicMap(routeId: $routeId)
}
    `;
export type DeleteTopicMapMutationFn = Apollo.MutationFunction<DeleteTopicMapMutation, DeleteTopicMapMutationVariables>;

/**
 * __useDeleteTopicMapMutation__
 *
 * To run a mutation, you first call `useDeleteTopicMapMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTopicMapMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTopicMapMutation, { data, loading, error }] = useDeleteTopicMapMutation({
 *   variables: {
 *      routeId: // value for 'routeId'
 *   },
 * });
 */
export function useDeleteTopicMapMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTopicMapMutation, DeleteTopicMapMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTopicMapMutation, DeleteTopicMapMutationVariables>(DeleteTopicMapDocument, options);
      }
export type DeleteTopicMapMutationHookResult = ReturnType<typeof useDeleteTopicMapMutation>;
export type DeleteTopicMapMutationResult = Apollo.MutationResult<DeleteTopicMapMutation>;
export type DeleteTopicMapMutationOptions = Apollo.BaseMutationOptions<DeleteTopicMapMutation, DeleteTopicMapMutationVariables>;
export const SaveTopicMapDocument = gql`
    mutation saveTopicMap($input: SaveTopicMapInput!) {
  saveTopicMap(input: $input) {
    id
    routeId
    updatedAt
    nodes {
      id
      title
      type
      meta
      zIndex
      checklist {
        id
        text
      }
    }
    edges {
      id
      sourceId
      targetId
      meta
    }
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
 *      input: // value for 'input'
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
export const UpdateProgressValueDocument = gql`
    mutation UpdateProgressValue($topicNodeId: String!, $value: Float!) {
  updateProgressValue(topicNodeId: $topicNodeId, value: $value) {
    id
    userCourseId
    topicNodeId
    status
    progressValue
    startedAt
    finishedAt
  }
}
    `;
export type UpdateProgressValueMutationFn = Apollo.MutationFunction<UpdateProgressValueMutation, UpdateProgressValueMutationVariables>;

/**
 * __useUpdateProgressValueMutation__
 *
 * To run a mutation, you first call `useUpdateProgressValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProgressValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProgressValueMutation, { data, loading, error }] = useUpdateProgressValueMutation({
 *   variables: {
 *      topicNodeId: // value for 'topicNodeId'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useUpdateProgressValueMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProgressValueMutation, UpdateProgressValueMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProgressValueMutation, UpdateProgressValueMutationVariables>(UpdateProgressValueDocument, options);
      }
export type UpdateProgressValueMutationHookResult = ReturnType<typeof useUpdateProgressValueMutation>;
export type UpdateProgressValueMutationResult = Apollo.MutationResult<UpdateProgressValueMutation>;
export type UpdateProgressValueMutationOptions = Apollo.BaseMutationOptions<UpdateProgressValueMutation, UpdateProgressValueMutationVariables>;
export const UpdateUserTopicProgressStatusDocument = gql`
    mutation UpdateUserTopicProgressStatus($input: UpdateTopicProgressInput!) {
  updateUserTopicProgressStatus(input: $input) {
    id
    topicNodeId
    status
    progressValue
    startedAt
    finishedAt
  }
}
    `;
export type UpdateUserTopicProgressStatusMutationFn = Apollo.MutationFunction<UpdateUserTopicProgressStatusMutation, UpdateUserTopicProgressStatusMutationVariables>;

/**
 * __useUpdateUserTopicProgressStatusMutation__
 *
 * To run a mutation, you first call `useUpdateUserTopicProgressStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserTopicProgressStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserTopicProgressStatusMutation, { data, loading, error }] = useUpdateUserTopicProgressStatusMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserTopicProgressStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserTopicProgressStatusMutation, UpdateUserTopicProgressStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserTopicProgressStatusMutation, UpdateUserTopicProgressStatusMutationVariables>(UpdateUserTopicProgressStatusDocument, options);
      }
export type UpdateUserTopicProgressStatusMutationHookResult = ReturnType<typeof useUpdateUserTopicProgressStatusMutation>;
export type UpdateUserTopicProgressStatusMutationResult = Apollo.MutationResult<UpdateUserTopicProgressStatusMutation>;
export type UpdateUserTopicProgressStatusMutationOptions = Apollo.BaseMutationOptions<UpdateUserTopicProgressStatusMutation, UpdateUserTopicProgressStatusMutationVariables>;
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
export const GetChecklistProgressDocument = gql`
    query GetChecklistProgress($topicNodeId: String!) {
  getChecklistProgressByTopic(topicNodeId: $topicNodeId) {
    id
    text
    done
  }
}
    `;

/**
 * __useGetChecklistProgressQuery__
 *
 * To run a query within a React component, call `useGetChecklistProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChecklistProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChecklistProgressQuery({
 *   variables: {
 *      topicNodeId: // value for 'topicNodeId'
 *   },
 * });
 */
export function useGetChecklistProgressQuery(baseOptions: Apollo.QueryHookOptions<GetChecklistProgressQuery, GetChecklistProgressQueryVariables> & ({ variables: GetChecklistProgressQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>(GetChecklistProgressDocument, options);
      }
export function useGetChecklistProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>(GetChecklistProgressDocument, options);
        }
export function useGetChecklistProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>(GetChecklistProgressDocument, options);
        }
export type GetChecklistProgressQueryHookResult = ReturnType<typeof useGetChecklistProgressQuery>;
export type GetChecklistProgressLazyQueryHookResult = ReturnType<typeof useGetChecklistProgressLazyQuery>;
export type GetChecklistProgressSuspenseQueryHookResult = ReturnType<typeof useGetChecklistProgressSuspenseQuery>;
export type GetChecklistProgressQueryResult = Apollo.QueryResult<GetChecklistProgressQuery, GetChecklistProgressQueryVariables>;
export const GetPreviewCourseInfoDocument = gql`
    query getPreviewCourseInfo($routeId: String!) {
  getUserTopicMap(routeId: $routeId) {
    id
    routeId
    updatedAt
    nodes {
      id
      topicMapId
      title
      type
      meta
      posxy
      zIndex
      checklist {
        id
        text
        topicNodeId
      }
    }
    edges {
      id
      topicMapId
      sourceId
      targetId
      meta
    }
    userCourse {
      id
      userId
      topicMapId
      createdAt
      updatedAt
      view
      mode
      progress {
        id
        userCourseId
        topicNodeId
        status
        progressValue
        startedAt
        finishedAt
      }
      UserChecklistProgress {
        id
        checklistItemId
        done
      }
    }
    route {
      id
      title
      description
      createdAt
      updatedAt
      isVerified
      topicMap {
        id
      }
      user {
        id
        name
        avatar
      }
      tags {
        tag {
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetPreviewCourseInfoQuery__
 *
 * To run a query within a React component, call `useGetPreviewCourseInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPreviewCourseInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPreviewCourseInfoQuery({
 *   variables: {
 *      routeId: // value for 'routeId'
 *   },
 * });
 */
export function useGetPreviewCourseInfoQuery(baseOptions: Apollo.QueryHookOptions<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables> & ({ variables: GetPreviewCourseInfoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>(GetPreviewCourseInfoDocument, options);
      }
export function useGetPreviewCourseInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>(GetPreviewCourseInfoDocument, options);
        }
export function useGetPreviewCourseInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>(GetPreviewCourseInfoDocument, options);
        }
export type GetPreviewCourseInfoQueryHookResult = ReturnType<typeof useGetPreviewCourseInfoQuery>;
export type GetPreviewCourseInfoLazyQueryHookResult = ReturnType<typeof useGetPreviewCourseInfoLazyQuery>;
export type GetPreviewCourseInfoSuspenseQueryHookResult = ReturnType<typeof useGetPreviewCourseInfoSuspenseQuery>;
export type GetPreviewCourseInfoQueryResult = Apollo.QueryResult<GetPreviewCourseInfoQuery, GetPreviewCourseInfoQueryVariables>;
export const GetUserCourseDocument = gql`
    query getUserCourse($topicMapId: String!) {
  getUserCourse(topicMapId: $topicMapId) {
    id
    userId
    topicMapId
    createdAt
    updatedAt
    view
    mode
    progress {
      id
      topicNodeId
      status
      progressValue
      startedAt
      finishedAt
    }
    UserChecklistProgress {
      id
      checklistItemId
      done
    }
  }
}
    `;

/**
 * __useGetUserCourseQuery__
 *
 * To run a query within a React component, call `useGetUserCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCourseQuery({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *   },
 * });
 */
export function useGetUserCourseQuery(baseOptions: Apollo.QueryHookOptions<GetUserCourseQuery, GetUserCourseQueryVariables> & ({ variables: GetUserCourseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCourseQuery, GetUserCourseQueryVariables>(GetUserCourseDocument, options);
      }
export function useGetUserCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCourseQuery, GetUserCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCourseQuery, GetUserCourseQueryVariables>(GetUserCourseDocument, options);
        }
export function useGetUserCourseSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserCourseQuery, GetUserCourseQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserCourseQuery, GetUserCourseQueryVariables>(GetUserCourseDocument, options);
        }
export type GetUserCourseQueryHookResult = ReturnType<typeof useGetUserCourseQuery>;
export type GetUserCourseLazyQueryHookResult = ReturnType<typeof useGetUserCourseLazyQuery>;
export type GetUserCourseSuspenseQueryHookResult = ReturnType<typeof useGetUserCourseSuspenseQuery>;
export type GetUserCourseQueryResult = Apollo.QueryResult<GetUserCourseQuery, GetUserCourseQueryVariables>;
export const GetTopicMapDocument = gql`
    query getTopicMap($routeId: String!) {
  getTopicMap(routeId: $routeId) {
    id
    routeId
    updatedAt
    nodes {
      id
      topicMapId
      title
      type
      meta
      posxy
      zIndex
      checklist {
        id
        text
        topicNodeId
      }
    }
    edges {
      id
      topicMapId
      sourceId
      targetId
      meta
    }
  }
}
    `;

/**
 * __useGetTopicMapQuery__
 *
 * To run a query within a React component, call `useGetTopicMapQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTopicMapQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTopicMapQuery({
 *   variables: {
 *      routeId: // value for 'routeId'
 *   },
 * });
 */
export function useGetTopicMapQuery(baseOptions: Apollo.QueryHookOptions<GetTopicMapQuery, GetTopicMapQueryVariables> & ({ variables: GetTopicMapQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTopicMapQuery, GetTopicMapQueryVariables>(GetTopicMapDocument, options);
      }
export function useGetTopicMapLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTopicMapQuery, GetTopicMapQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTopicMapQuery, GetTopicMapQueryVariables>(GetTopicMapDocument, options);
        }
export function useGetTopicMapSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTopicMapQuery, GetTopicMapQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTopicMapQuery, GetTopicMapQueryVariables>(GetTopicMapDocument, options);
        }
export type GetTopicMapQueryHookResult = ReturnType<typeof useGetTopicMapQuery>;
export type GetTopicMapLazyQueryHookResult = ReturnType<typeof useGetTopicMapLazyQuery>;
export type GetTopicMapSuspenseQueryHookResult = ReturnType<typeof useGetTopicMapSuspenseQuery>;
export type GetTopicMapQueryResult = Apollo.QueryResult<GetTopicMapQuery, GetTopicMapQueryVariables>;
export const GetCourseProgressDocument = gql`
    query GetCourseProgress($topicMapId: String!) {
  getCourseProgress(topicMapId: $topicMapId) {
    completed
    inProgress
    skipped
    notStarted
    total
  }
}
    `;

/**
 * __useGetCourseProgressQuery__
 *
 * To run a query within a React component, call `useGetCourseProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseProgressQuery({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *   },
 * });
 */
export function useGetCourseProgressQuery(baseOptions: Apollo.QueryHookOptions<GetCourseProgressQuery, GetCourseProgressQueryVariables> & ({ variables: GetCourseProgressQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCourseProgressQuery, GetCourseProgressQueryVariables>(GetCourseProgressDocument, options);
      }
export function useGetCourseProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseProgressQuery, GetCourseProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCourseProgressQuery, GetCourseProgressQueryVariables>(GetCourseProgressDocument, options);
        }
export function useGetCourseProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCourseProgressQuery, GetCourseProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCourseProgressQuery, GetCourseProgressQueryVariables>(GetCourseProgressDocument, options);
        }
export type GetCourseProgressQueryHookResult = ReturnType<typeof useGetCourseProgressQuery>;
export type GetCourseProgressLazyQueryHookResult = ReturnType<typeof useGetCourseProgressLazyQuery>;
export type GetCourseProgressSuspenseQueryHookResult = ReturnType<typeof useGetCourseProgressSuspenseQuery>;
export type GetCourseProgressQueryResult = Apollo.QueryResult<GetCourseProgressQuery, GetCourseProgressQueryVariables>;
export const GetUserTopicProgressDocument = gql`
    query GetUserTopicProgress($topicNodeId: String!) {
  getUserTopicProgress(topicNodeId: $topicNodeId) {
    id
    status
    progressValue
    startedAt
    finishedAt
  }
}
    `;

/**
 * __useGetUserTopicProgressQuery__
 *
 * To run a query within a React component, call `useGetUserTopicProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTopicProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTopicProgressQuery({
 *   variables: {
 *      topicNodeId: // value for 'topicNodeId'
 *   },
 * });
 */
export function useGetUserTopicProgressQuery(baseOptions: Apollo.QueryHookOptions<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables> & ({ variables: GetUserTopicProgressQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>(GetUserTopicProgressDocument, options);
      }
export function useGetUserTopicProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>(GetUserTopicProgressDocument, options);
        }
export function useGetUserTopicProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>(GetUserTopicProgressDocument, options);
        }
export type GetUserTopicProgressQueryHookResult = ReturnType<typeof useGetUserTopicProgressQuery>;
export type GetUserTopicProgressLazyQueryHookResult = ReturnType<typeof useGetUserTopicProgressLazyQuery>;
export type GetUserTopicProgressSuspenseQueryHookResult = ReturnType<typeof useGetUserTopicProgressSuspenseQuery>;
export type GetUserTopicProgressQueryResult = Apollo.QueryResult<GetUserTopicProgressQuery, GetUserTopicProgressQueryVariables>;
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
      id
      nodes {
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