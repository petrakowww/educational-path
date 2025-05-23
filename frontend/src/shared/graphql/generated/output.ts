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

export type Attachment = {
  __typename?: 'Attachment';
  course: VideoCourse;
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};

export enum AuthMethod {
  Credentials = 'CREDENTIALS',
  Github = 'GITHUB',
  Google = 'GOOGLE',
  Yandex = 'YANDEX'
}

export type ChapterProgress = {
  __typename?: 'ChapterProgress';
  chapterId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isCompleted: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

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

export type CreateAttachmentInput = {
  courseId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateRouteDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};

export type CreateVideoChapterInput = {
  courseId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVideoCourseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  topicNodeId: Scalars['ID']['input'];
};

export type FavoriteRouteItem = {
  __typename?: 'FavoriteRouteItem';
  favorites: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type GoalStat = {
  __typename?: 'GoalStat';
  target: Scalars['Float']['output'];
  value: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeChapter: ChapterProgress;
  createAttachment: Attachment;
  createRoute: Route;
  createVideoChapter: VideoChapter;
  createVideoCourse: VideoCourse;
  deleteAttachment: Scalars['Boolean']['output'];
  deleteRoute: Scalars['Boolean']['output'];
  deleteTopicMap: Scalars['Boolean']['output'];
  deleteVideoChapter: Scalars['Boolean']['output'];
  deleteVideoCourse: Scalars['Boolean']['output'];
  markChecklistItem: UserChecklistProgress;
  publishVideoChapter: VideoChapter;
  publishVideoCourse: VideoCourse;
  removeCourse: Scalars['Boolean']['output'];
  removeCourseDeadline: UserCourse;
  reorderVideoChapters: Scalars['Boolean']['output'];
  saveTopicMap: TopicMap;
  startCourse: UserVideoCourse;
  startCourseDeadline: UserCourse;
  unpublishVideoChapter: VideoChapter;
  updateChapterVideo: VideoChapter;
  updateCourseDeadline: UserCourse;
  updateCourseImage: VideoCourse;
  updateProgressValue: UserTopicProgress;
  updateRoute: Route;
  updateSkillProfile: SkillProfile;
  updateUserCourseSettings: Scalars['Boolean']['output'];
  updateUserProfile: UserModel;
  updateUserTopicProgressStatus: UserTopicProgress;
  updateVideoChapter: VideoChapter;
  updateVideoCourse: VideoCourse;
  verifyRoute: Route;
};


export type MutationCompleteChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAttachmentArgs = {
  input: CreateAttachmentInput;
};


export type MutationCreateRouteArgs = {
  data: CreateRouteDto;
};


export type MutationCreateVideoChapterArgs = {
  input: CreateVideoChapterInput;
};


export type MutationCreateVideoCourseArgs = {
  input: CreateVideoCourseInput;
};


export type MutationDeleteAttachmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTopicMapArgs = {
  routeId: Scalars['String']['input'];
};


export type MutationDeleteVideoChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVideoCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkChecklistItemArgs = {
  checkListItemId: Scalars['String']['input'];
  done: Scalars['Boolean']['input'];
};


export type MutationPublishVideoChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPublishVideoCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCourseArgs = {
  topicMapId: Scalars['String']['input'];
};


export type MutationRemoveCourseDeadlineArgs = {
  topicMapId: Scalars['String']['input'];
};


export type MutationReorderVideoChaptersArgs = {
  input: ReorderVideoChaptersInput;
};


export type MutationSaveTopicMapArgs = {
  input: SaveTopicMapInput;
};


export type MutationStartCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationStartCourseDeadlineArgs = {
  deadline: Scalars['DateTime']['input'];
  topicMapId: Scalars['String']['input'];
};


export type MutationUnpublishVideoChapterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateChapterVideoArgs = {
  input: UpdateChapterVideoInput;
};


export type MutationUpdateCourseDeadlineArgs = {
  deadline: Scalars['DateTime']['input'];
  topicMapId: Scalars['String']['input'];
};


export type MutationUpdateCourseImageArgs = {
  input: UpdateImageInput;
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


export type MutationUpdateVideoChapterArgs = {
  input: UpdateVideoChapterInput;
};


export type MutationUpdateVideoCourseArgs = {
  input: UpdateVideoCourseInput;
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

export type PaginatedRoutes = {
  __typename?: 'PaginatedRoutes';
  currentPage: Scalars['Int']['output'];
  routes: Array<Route>;
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export enum PrivateType {
  General = 'GENERAL',
  Private = 'PRIVATE'
}

export type Query = {
  __typename?: 'Query';
  availableChapters: Array<VideoChapter>;
  findAllTags: Array<TagModel>;
  findById: UserModel;
  findOtherRoutesByUser: Array<Route>;
  findProfile: UserModel;
  findRoute: Route;
  findRoutesByUser: Array<Route>;
  findUserTags: Array<TagModel>;
  getChecklistProgressByTopic: Array<ChecklistItemWithProgress>;
  getCourseProgress: CourseProgressSummary;
  getFavoriteRoutes: Array<FavoriteRouteItem>;
  getPopularRoutes: Array<Route>;
  getPopularVideoCourses: Array<VideoCourse>;
  getRecentActivity: RecentActivityOutput;
  getRecentlyAddedRoutes: Array<Route>;
  getTopicMap: TopicMap;
  getTopicNodeById: TopicNode;
  getUpcomingDeadlines: Array<UpcomingDeadlineItem>;
  getUserCourse: UserCourse;
  getUserTopicMap: TopicMap;
  getUserTopicProgress: UserTopicProgress;
  getWeeklyGoals: WeeklyGoalsOutput;
  getWeeklyProgress: Array<WeeklyProgressItem>;
  publishedCourses: Array<VideoCourse>;
  searchRoutes: PaginatedRoutes;
  videoChapter?: Maybe<VideoChapter>;
  videoCourse: VideoCourse;
  videoCoursesByNode: Array<VideoCourse>;
};


export type QueryAvailableChaptersArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryFindByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOtherRoutesByUserArgs = {
  excludeRouteId: Scalars['String']['input'];
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


export type QuerySearchRoutesArgs = {
  filters: SearchRoutesInput;
};


export type QueryVideoChapterArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVideoCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVideoCoursesByNodeArgs = {
  topicNodeId: Scalars['ID']['input'];
};

export type RecentActivityOutput = {
  __typename?: 'RecentActivityOutput';
  recentRoutes: Array<Route>;
  recentVideoCourses: Array<VideoCourse>;
};

export type ReorderChapterInput = {
  id: Scalars['ID']['input'];
  position: Scalars['Float']['input'];
};

export type ReorderVideoChaptersInput = {
  chapters: Array<ReorderChapterInput>;
  courseId: Scalars['ID']['input'];
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
  topicCount: Scalars['Int']['output'];
  topicMap?: Maybe<TopicMap>;
  updatedAt: Scalars['DateTime']['output'];
  user: UserModel;
};

export type RouteTagModel = {
  __typename?: 'RouteTagModel';
  id: Scalars['ID']['output'];
  route: Route;
  tag?: Maybe<TagModel>;
};

export type SaveTopicMapInput = {
  edges?: InputMaybe<Array<UpdateTopicEdgeInput>>;
  nodes?: InputMaybe<Array<UpdateTopicNodeInput>>;
  routeId: Scalars['String']['input'];
};

export type SearchRoutesInput = {
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
  hasVideo?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
  pageSize?: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  topicCountRange?: InputMaybe<Array<Scalars['Int']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  verifiedOnly?: InputMaybe<Scalars['Boolean']['input']>;
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
  videoCourses?: Maybe<Array<VideoCourse>>;
  zIndex?: Maybe<Scalars['Float']['output']>;
};

export type UpcomingDeadlineItem = {
  __typename?: 'UpcomingDeadlineItem';
  deadline: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type UpdateChapterVideoInput = {
  chapterId: Scalars['ID']['input'];
  videoUrl: Scalars['String']['input'];
};

export type UpdateCourseSettingsInput = {
  mode?: InputMaybe<CourseModeType>;
  topicMapId: Scalars['ID']['input'];
  view?: InputMaybe<CourseViewType>;
};

export type UpdateImageInput = {
  courseId: Scalars['ID']['input'];
  imageUrl: Scalars['String']['input'];
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

export type UpdateVideoChapterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoCourseInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
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
  deadline?: Maybe<Scalars['DateTime']['output']>;
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

export type UserVideoCourse = {
  __typename?: 'UserVideoCourse';
  courseId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  startedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export enum VerificationStatus {
  NotVerified = 'NOT_VERIFIED',
  Pending = 'PENDING',
  Verified = 'VERIFIED'
}

export type VideoChapter = {
  __typename?: 'VideoChapter';
  courseId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  position: Scalars['Float']['output'];
  progress: Array<ChapterProgress>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userProgress?: Maybe<ChapterProgress>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};

export type VideoCourse = {
  __typename?: 'VideoCourse';
  Attachment?: Maybe<Array<Attachment>>;
  UserVideoCourse?: Maybe<Array<UserVideoCourse>>;
  chapters: Array<VideoChapter>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  isPublished: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  topicNodeId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type WeeklyGoalsOutput = {
  __typename?: 'WeeklyGoalsOutput';
  deadlines: GoalStat;
  topics: GoalStat;
  videos: GoalStat;
};

export type WeeklyProgressItem = {
  __typename?: 'WeeklyProgressItem';
  count: Scalars['Float']['output'];
  date: Scalars['String']['output'];
};

export type MarkChecklistItemMutationVariables = Exact<{
  checkListItemId: Scalars['String']['input'];
  done: Scalars['Boolean']['input'];
}>;


export type MarkChecklistItemMutation = { __typename?: 'Mutation', markChecklistItem: { __typename?: 'UserChecklistProgress', id: string, done: boolean, checklist: { __typename?: 'ChecklistItem', id: string } } };

export type RemoveCourseDeadlineMutationVariables = Exact<{
  topicMapId: Scalars['String']['input'];
}>;


export type RemoveCourseDeadlineMutation = { __typename?: 'Mutation', removeCourseDeadline: { __typename?: 'UserCourse', id: string, deadline?: any | null } };

export type StartCourseDeadlineMutationVariables = Exact<{
  topicMapId: Scalars['String']['input'];
  deadline: Scalars['DateTime']['input'];
}>;


export type StartCourseDeadlineMutation = { __typename?: 'Mutation', startCourseDeadline: { __typename?: 'UserCourse', id: string, deadline?: any | null } };

export type UpdateCourseDeadlineMutationVariables = Exact<{
  topicMapId: Scalars['String']['input'];
  deadline: Scalars['DateTime']['input'];
}>;


export type UpdateCourseDeadlineMutation = { __typename?: 'Mutation', updateCourseDeadline: { __typename?: 'UserCourse', id: string, deadline?: any | null } };

export type RemoveCourseMutationVariables = Exact<{
  topicMapId: Scalars['String']['input'];
}>;


export type RemoveCourseMutation = { __typename?: 'Mutation', removeCourse: boolean };

export type StartCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type StartCourseMutation = { __typename?: 'Mutation', startCourse: { __typename?: 'UserVideoCourse', id: string, userId: string, courseId: string, startedAt: any } };

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


export type CreateRouteMutation = { __typename?: 'Mutation', createRoute: { __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null } };

export type DeleteRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteRouteMutation = { __typename?: 'Mutation', deleteRoute: boolean };

export type UpdateRouteMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UpdateRouteDto;
}>;


export type UpdateRouteMutation = { __typename?: 'Mutation', updateRoute: { __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null } };

export type UpdateProfileMutationVariables = Exact<{
  dto: UserProfileDto;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateUserProfile: { __typename?: 'UserModel', id: string, name: string, isTwoFactorEnabled: boolean } };

export type UpdateSkillProfileMutationVariables = Exact<{
  dto: SkillProfileDto;
}>;


export type UpdateSkillProfileMutation = { __typename?: 'Mutation', updateSkillProfile: { __typename?: 'SkillProfile', profilename?: string | null, headline?: string | null, githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null } };

export type CompleteChapterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CompleteChapterMutation = { __typename?: 'Mutation', completeChapter: { __typename?: 'ChapterProgress', id: string, chapterId: string, userId: string, isCompleted: boolean, createdAt: any, updatedAt: any } };

export type CreateVideoChapterMutationVariables = Exact<{
  input: CreateVideoChapterInput;
}>;


export type CreateVideoChapterMutation = { __typename?: 'Mutation', createVideoChapter: { __typename?: 'VideoChapter', id: string, title: string, description?: string | null, videoUrl?: string | null, isPublished: boolean, position: number } };

export type DeleteVideoChapterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVideoChapterMutation = { __typename?: 'Mutation', deleteVideoChapter: boolean };

export type PublishVideoChapterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PublishVideoChapterMutation = { __typename?: 'Mutation', publishVideoChapter: { __typename?: 'VideoChapter', id: string, isPublished: boolean } };

export type ReorderVideoChaptersMutationVariables = Exact<{
  input: ReorderVideoChaptersInput;
}>;


export type ReorderVideoChaptersMutation = { __typename?: 'Mutation', reorderVideoChapters: boolean };

export type UnpublishVideoChapterMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnpublishVideoChapterMutation = { __typename?: 'Mutation', unpublishVideoChapter: { __typename?: 'VideoChapter', id: string, isPublished: boolean } };

export type UpdateVideoChapterMutationVariables = Exact<{
  input: UpdateVideoChapterInput;
}>;


export type UpdateVideoChapterMutation = { __typename?: 'Mutation', updateVideoChapter: { __typename?: 'VideoChapter', id: string, title: string, description?: string | null, videoUrl?: string | null, isPublished: boolean, position: number } };

export type CreateAttachmentMutationVariables = Exact<{
  input: CreateAttachmentInput;
}>;


export type CreateAttachmentMutation = { __typename?: 'Mutation', createAttachment: { __typename?: 'Attachment', id: string, name: string, url: string, courseId: string, createdAt: any, updatedAt: any } };

export type DeleteAttachmentMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAttachmentMutation = { __typename?: 'Mutation', deleteAttachment: boolean };

export type CreateVideoCourseMutationVariables = Exact<{
  input: CreateVideoCourseInput;
}>;


export type CreateVideoCourseMutation = { __typename?: 'Mutation', createVideoCourse: { __typename?: 'VideoCourse', id: string, title: string, description?: string | null, imageUrl?: string | null, isPublished: boolean, topicNodeId: string, createdAt: any, updatedAt: any } };

export type DeleteVideoCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteVideoCourseMutation = { __typename?: 'Mutation', deleteVideoCourse: boolean };

export type UpdateCourseImageMutationVariables = Exact<{
  input: UpdateImageInput;
}>;


export type UpdateCourseImageMutation = { __typename?: 'Mutation', updateCourseImage: { __typename?: 'VideoCourse', id: string, imageUrl?: string | null, updatedAt: any } };

export type PublishVideoCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PublishVideoCourseMutation = { __typename?: 'Mutation', publishVideoCourse: { __typename?: 'VideoCourse', id: string, isPublished: boolean } };

export type UpdateVideoCourseMutationVariables = Exact<{
  input: UpdateVideoCourseInput;
}>;


export type UpdateVideoCourseMutation = { __typename?: 'Mutation', updateVideoCourse: { __typename?: 'VideoCourse', id: string, title: string, description?: string | null, imageUrl?: string | null, isPublished: boolean, updatedAt: any } };

export type UpdateChapterVideoMutationVariables = Exact<{
  input: UpdateChapterVideoInput;
}>;


export type UpdateChapterVideoMutation = { __typename?: 'Mutation', updateChapterVideo: { __typename?: 'VideoChapter', id: string, videoUrl?: string | null, updatedAt: any } };

export type GetChecklistProgressQueryVariables = Exact<{
  topicNodeId: Scalars['String']['input'];
}>;


export type GetChecklistProgressQuery = { __typename?: 'Query', getChecklistProgressByTopic: Array<{ __typename?: 'ChecklistItemWithProgress', id: string, text: string, done: boolean }> };

export type GetPreviewCourseInfoQueryVariables = Exact<{
  routeId: Scalars['String']['input'];
}>;


export type GetPreviewCourseInfoQuery = { __typename?: 'Query', getUserTopicMap: { __typename?: 'TopicMap', id: string, routeId: string, updatedAt: any, nodes: Array<{ __typename?: 'TopicNode', id: string, topicMapId: string, title: string, type: string, meta: string, posxy?: any | null, zIndex?: number | null, checklist: Array<{ __typename?: 'ChecklistItem', id: string, text: string, topicNodeId: string }> }>, edges: Array<{ __typename?: 'TopicEdge', id: string, topicMapId: string, sourceId: string, targetId: string, meta?: string | null }>, userCourse?: { __typename?: 'UserCourse', id: string, userId: string, topicMapId: string, createdAt: any, updatedAt: any, view?: CourseViewType | null, deadline?: any | null, mode?: CourseModeType | null, progress?: Array<{ __typename?: 'UserTopicProgress', id: string, userCourseId: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null }> | null, UserChecklistProgress: Array<{ __typename?: 'UserChecklistProgress', id: string, checklistItemId: string, done: boolean }> } | null, route?: { __typename?: 'Route', id: string, title: string, description?: string | null, createdAt: any, updatedAt: any, isVerified: VerificationStatus, topicMap?: { __typename?: 'TopicMap', id: string } | null, user: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null }, tags?: Array<{ __typename?: 'RouteTagModel', tag?: { __typename?: 'TagModel', name: string } | null }> | null } | null } };

export type GetUserCourseQueryVariables = Exact<{
  topicMapId: Scalars['String']['input'];
}>;


export type GetUserCourseQuery = { __typename?: 'Query', getUserCourse: { __typename?: 'UserCourse', id: string, userId: string, topicMapId: string, createdAt: any, updatedAt: any, view?: CourseViewType | null, mode?: CourseModeType | null, progress?: Array<{ __typename?: 'UserTopicProgress', id: string, topicNodeId: string, status: NodeStatus, progressValue?: number | null, startedAt?: any | null, finishedAt?: any | null }> | null, UserChecklistProgress: Array<{ __typename?: 'UserChecklistProgress', id: string, checklistItemId: string, done: boolean }> } };

export type GetPopularRoutesExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularRoutesExtendedQuery = { __typename?: 'Query', getPopularRoutes: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, createdAt: any, isVerified: VerificationStatus, topicCount: number, tags?: Array<{ __typename?: 'RouteTagModel', tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null }> };

export type GetPopularVideoCoursesExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularVideoCoursesExtendedQuery = { __typename?: 'Query', getPopularVideoCourses: Array<{ __typename?: 'VideoCourse', id: string, title: string, description?: string | null, imageUrl?: string | null, isPublished: boolean, createdAt: any, updatedAt: any, UserVideoCourse?: Array<{ __typename?: 'UserVideoCourse', id: string }> | null }> };

export type GetRecentlyAddedRoutesExtendedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentlyAddedRoutesExtendedQuery = { __typename?: 'Query', getRecentlyAddedRoutes: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, createdAt: any, isVerified: VerificationStatus, tags?: Array<{ __typename?: 'RouteTagModel', tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null }> };

export type GetFavoriteRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavoriteRoutesQuery = { __typename?: 'Query', getFavoriteRoutes: Array<{ __typename?: 'FavoriteRouteItem', name: string, favorites: number }> };

export type GetPopularRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularRoutesQuery = { __typename?: 'Query', getPopularRoutes: Array<{ __typename?: 'Route', id: string, title: string }> };

export type GetPopularVideoCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPopularVideoCoursesQuery = { __typename?: 'Query', getPopularVideoCourses: Array<{ __typename?: 'VideoCourse', id: string, title: string }> };

export type GetRecentActivityQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentActivityQuery = { __typename?: 'Query', getRecentActivity: { __typename?: 'RecentActivityOutput', recentRoutes: Array<{ __typename?: 'Route', id: string, title: string }>, recentVideoCourses: Array<{ __typename?: 'VideoCourse', id: string, title: string }> } };

export type GetRecentlyAddedRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentlyAddedRoutesQuery = { __typename?: 'Query', getRecentlyAddedRoutes: Array<{ __typename?: 'Route', id: string, title: string }> };

export type GetUpcomingDeadlinesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUpcomingDeadlinesQuery = { __typename?: 'Query', getUpcomingDeadlines: Array<{ __typename?: 'UpcomingDeadlineItem', id: string, title: string, deadline: any }> };

export type GetWeeklyGoalsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeeklyGoalsQuery = { __typename?: 'Query', getWeeklyGoals: { __typename?: 'WeeklyGoalsOutput', topics: { __typename?: 'GoalStat', value: number, target: number }, videos: { __typename?: 'GoalStat', value: number, target: number }, deadlines: { __typename?: 'GoalStat', value: number, target: number } } };

export type GetWeeklyProgressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWeeklyProgressQuery = { __typename?: 'Query', getWeeklyProgress: Array<{ __typename?: 'WeeklyProgressItem', date: string, count: number }> };

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

export type FindOtherRoutesByUserQueryVariables = Exact<{
  excludeRouteId: Scalars['String']['input'];
}>;


export type FindOtherRoutesByUserQuery = { __typename?: 'Query', findOtherRoutesByUser: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null, topicMap?: { __typename?: 'TopicMap', id: string, nodes: Array<{ __typename?: 'TopicNode', id: string }> } | null }> };

export type FindRouteQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type FindRouteQuery = { __typename?: 'Query', findRoute: { __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null } };

export type FindRoutesByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindRoutesByUserQuery = { __typename?: 'Query', findRoutesByUser: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, privateType: PrivateType, createdAt: any, updatedAt: any, topicCount: number, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null, topicMap?: { __typename?: 'TopicMap', id: string, nodes: Array<{ __typename?: 'TopicNode', id: string }> } | null }> };

export type SearchRoutesQueryVariables = Exact<{
  filters: SearchRoutesInput;
}>;


export type SearchRoutesQuery = { __typename?: 'Query', searchRoutes: { __typename?: 'PaginatedRoutes', total: number, totalPages: number, currentPage: number, routes: Array<{ __typename?: 'Route', id: string, title: string, description?: string | null, createdAt: any, updatedAt: any, privateType: PrivateType, isVerified: VerificationStatus, topicCount: number, user: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null }, tags?: Array<{ __typename?: 'RouteTagModel', id: string, tag?: { __typename?: 'TagModel', id: string, name: string } | null }> | null, topicMap?: { __typename?: 'TopicMap', id: string, nodes: Array<{ __typename?: 'TopicNode', id: string, type: string, videoCourses?: Array<{ __typename?: 'VideoCourse', id: string, title: string, description?: string | null, isPublished: boolean, createdAt: any, updatedAt: any }> | null }> } | null }> } };

export type FindAllTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllTagsQuery = { __typename?: 'Query', findAllTags: Array<{ __typename?: 'TagModel', id: string, name: string }> };

export type FindProfileLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileLogoQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, role: string } };

export type FindProfileSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileSettingsQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email: string, isTwoFactorEnabled: boolean, password: string } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, name: string, avatar?: string | null, method: AuthMethod, isTwoFactorEnabled: boolean, email: string, skillProfile?: { __typename?: 'SkillProfile', githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null, headline?: string | null, profilename?: string | null } | null } };

export type GetAvailableChaptersQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GetAvailableChaptersQuery = { __typename?: 'Query', availableChapters: Array<{ __typename?: 'VideoChapter', id: string, title: string, description?: string | null, videoUrl?: string | null, isPublished: boolean, position: number }> };

export type GetPublishedCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublishedCoursesQuery = { __typename?: 'Query', publishedCourses: Array<{ __typename?: 'VideoCourse', id: string, title: string, description?: string | null, isPublished: boolean, imageUrl?: string | null, createdAt: any }> };

export type GetVideoCourseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetVideoCourseQuery = { __typename?: 'Query', videoCourse: { __typename?: 'VideoCourse', id: string, title: string, description?: string | null, isPublished: boolean, imageUrl?: string | null, topicNodeId: string, createdAt: any, updatedAt: any, chapters: Array<{ __typename?: 'VideoChapter', id: string, title: string, description?: string | null, videoUrl?: string | null, isPublished: boolean, position: number, progress: Array<{ __typename?: 'ChapterProgress', isCompleted: boolean, userId: string }>, userProgress?: { __typename?: 'ChapterProgress', isCompleted: boolean } | null }>, Attachment?: Array<{ __typename?: 'Attachment', id: string, name: string, url: string, courseId: string }> | null, UserVideoCourse?: Array<{ __typename?: 'UserVideoCourse', id: string, userId: string }> | null } };

export type GetVideoCoursesByNodeQueryVariables = Exact<{
  topicNodeId: Scalars['ID']['input'];
}>;


export type GetVideoCoursesByNodeQuery = { __typename?: 'Query', videoCoursesByNode: Array<{ __typename?: 'VideoCourse', id: string, title: string, description?: string | null, isPublished: boolean, imageUrl?: string | null, topicNodeId: string, createdAt: any, updatedAt: any, chapters: Array<{ __typename?: 'VideoChapter', id: string, title: string, position: number, isPublished: boolean }> }> };

export type GetVideoChapterQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetVideoChapterQuery = { __typename?: 'Query', videoChapter?: { __typename?: 'VideoChapter', id: string, courseId: string, title: string, description?: string | null, videoUrl?: string | null, position: number, isPublished: boolean, createdAt: any, updatedAt: any, userProgress?: { __typename?: 'ChapterProgress', userId: string, isCompleted: boolean } | null } | null };


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
export const RemoveCourseDeadlineDocument = gql`
    mutation RemoveCourseDeadline($topicMapId: String!) {
  removeCourseDeadline(topicMapId: $topicMapId) {
    id
    deadline
  }
}
    `;
export type RemoveCourseDeadlineMutationFn = Apollo.MutationFunction<RemoveCourseDeadlineMutation, RemoveCourseDeadlineMutationVariables>;

/**
 * __useRemoveCourseDeadlineMutation__
 *
 * To run a mutation, you first call `useRemoveCourseDeadlineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCourseDeadlineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCourseDeadlineMutation, { data, loading, error }] = useRemoveCourseDeadlineMutation({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *   },
 * });
 */
export function useRemoveCourseDeadlineMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCourseDeadlineMutation, RemoveCourseDeadlineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCourseDeadlineMutation, RemoveCourseDeadlineMutationVariables>(RemoveCourseDeadlineDocument, options);
      }
export type RemoveCourseDeadlineMutationHookResult = ReturnType<typeof useRemoveCourseDeadlineMutation>;
export type RemoveCourseDeadlineMutationResult = Apollo.MutationResult<RemoveCourseDeadlineMutation>;
export type RemoveCourseDeadlineMutationOptions = Apollo.BaseMutationOptions<RemoveCourseDeadlineMutation, RemoveCourseDeadlineMutationVariables>;
export const StartCourseDeadlineDocument = gql`
    mutation StartCourseDeadline($topicMapId: String!, $deadline: DateTime!) {
  startCourseDeadline(topicMapId: $topicMapId, deadline: $deadline) {
    id
    deadline
  }
}
    `;
export type StartCourseDeadlineMutationFn = Apollo.MutationFunction<StartCourseDeadlineMutation, StartCourseDeadlineMutationVariables>;

/**
 * __useStartCourseDeadlineMutation__
 *
 * To run a mutation, you first call `useStartCourseDeadlineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartCourseDeadlineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startCourseDeadlineMutation, { data, loading, error }] = useStartCourseDeadlineMutation({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *      deadline: // value for 'deadline'
 *   },
 * });
 */
export function useStartCourseDeadlineMutation(baseOptions?: Apollo.MutationHookOptions<StartCourseDeadlineMutation, StartCourseDeadlineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<StartCourseDeadlineMutation, StartCourseDeadlineMutationVariables>(StartCourseDeadlineDocument, options);
      }
export type StartCourseDeadlineMutationHookResult = ReturnType<typeof useStartCourseDeadlineMutation>;
export type StartCourseDeadlineMutationResult = Apollo.MutationResult<StartCourseDeadlineMutation>;
export type StartCourseDeadlineMutationOptions = Apollo.BaseMutationOptions<StartCourseDeadlineMutation, StartCourseDeadlineMutationVariables>;
export const UpdateCourseDeadlineDocument = gql`
    mutation UpdateCourseDeadline($topicMapId: String!, $deadline: DateTime!) {
  updateCourseDeadline(topicMapId: $topicMapId, deadline: $deadline) {
    id
    deadline
  }
}
    `;
export type UpdateCourseDeadlineMutationFn = Apollo.MutationFunction<UpdateCourseDeadlineMutation, UpdateCourseDeadlineMutationVariables>;

/**
 * __useUpdateCourseDeadlineMutation__
 *
 * To run a mutation, you first call `useUpdateCourseDeadlineMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseDeadlineMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseDeadlineMutation, { data, loading, error }] = useUpdateCourseDeadlineMutation({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *      deadline: // value for 'deadline'
 *   },
 * });
 */
export function useUpdateCourseDeadlineMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseDeadlineMutation, UpdateCourseDeadlineMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseDeadlineMutation, UpdateCourseDeadlineMutationVariables>(UpdateCourseDeadlineDocument, options);
      }
export type UpdateCourseDeadlineMutationHookResult = ReturnType<typeof useUpdateCourseDeadlineMutation>;
export type UpdateCourseDeadlineMutationResult = Apollo.MutationResult<UpdateCourseDeadlineMutation>;
export type UpdateCourseDeadlineMutationOptions = Apollo.BaseMutationOptions<UpdateCourseDeadlineMutation, UpdateCourseDeadlineMutationVariables>;
export const RemoveCourseDocument = gql`
    mutation RemoveCourse($topicMapId: String!) {
  removeCourse(topicMapId: $topicMapId)
}
    `;
export type RemoveCourseMutationFn = Apollo.MutationFunction<RemoveCourseMutation, RemoveCourseMutationVariables>;

/**
 * __useRemoveCourseMutation__
 *
 * To run a mutation, you first call `useRemoveCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCourseMutation, { data, loading, error }] = useRemoveCourseMutation({
 *   variables: {
 *      topicMapId: // value for 'topicMapId'
 *   },
 * });
 */
export function useRemoveCourseMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCourseMutation, RemoveCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCourseMutation, RemoveCourseMutationVariables>(RemoveCourseDocument, options);
      }
export type RemoveCourseMutationHookResult = ReturnType<typeof useRemoveCourseMutation>;
export type RemoveCourseMutationResult = Apollo.MutationResult<RemoveCourseMutation>;
export type RemoveCourseMutationOptions = Apollo.BaseMutationOptions<RemoveCourseMutation, RemoveCourseMutationVariables>;
export const StartCourseDocument = gql`
    mutation StartCourse($id: ID!) {
  startCourse(id: $id) {
    id
    userId
    courseId
    startedAt
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
 *      id: // value for 'id'
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
export const CompleteChapterDocument = gql`
    mutation CompleteChapter($id: ID!) {
  completeChapter(id: $id) {
    id
    chapterId
    userId
    isCompleted
    createdAt
    updatedAt
  }
}
    `;
export type CompleteChapterMutationFn = Apollo.MutationFunction<CompleteChapterMutation, CompleteChapterMutationVariables>;

/**
 * __useCompleteChapterMutation__
 *
 * To run a mutation, you first call `useCompleteChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeChapterMutation, { data, loading, error }] = useCompleteChapterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCompleteChapterMutation(baseOptions?: Apollo.MutationHookOptions<CompleteChapterMutation, CompleteChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteChapterMutation, CompleteChapterMutationVariables>(CompleteChapterDocument, options);
      }
export type CompleteChapterMutationHookResult = ReturnType<typeof useCompleteChapterMutation>;
export type CompleteChapterMutationResult = Apollo.MutationResult<CompleteChapterMutation>;
export type CompleteChapterMutationOptions = Apollo.BaseMutationOptions<CompleteChapterMutation, CompleteChapterMutationVariables>;
export const CreateVideoChapterDocument = gql`
    mutation CreateVideoChapter($input: CreateVideoChapterInput!) {
  createVideoChapter(input: $input) {
    id
    title
    description
    videoUrl
    isPublished
    position
  }
}
    `;
export type CreateVideoChapterMutationFn = Apollo.MutationFunction<CreateVideoChapterMutation, CreateVideoChapterMutationVariables>;

/**
 * __useCreateVideoChapterMutation__
 *
 * To run a mutation, you first call `useCreateVideoChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoChapterMutation, { data, loading, error }] = useCreateVideoChapterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVideoChapterMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoChapterMutation, CreateVideoChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoChapterMutation, CreateVideoChapterMutationVariables>(CreateVideoChapterDocument, options);
      }
export type CreateVideoChapterMutationHookResult = ReturnType<typeof useCreateVideoChapterMutation>;
export type CreateVideoChapterMutationResult = Apollo.MutationResult<CreateVideoChapterMutation>;
export type CreateVideoChapterMutationOptions = Apollo.BaseMutationOptions<CreateVideoChapterMutation, CreateVideoChapterMutationVariables>;
export const DeleteVideoChapterDocument = gql`
    mutation DeleteVideoChapter($id: ID!) {
  deleteVideoChapter(id: $id)
}
    `;
export type DeleteVideoChapterMutationFn = Apollo.MutationFunction<DeleteVideoChapterMutation, DeleteVideoChapterMutationVariables>;

/**
 * __useDeleteVideoChapterMutation__
 *
 * To run a mutation, you first call `useDeleteVideoChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVideoChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVideoChapterMutation, { data, loading, error }] = useDeleteVideoChapterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVideoChapterMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVideoChapterMutation, DeleteVideoChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVideoChapterMutation, DeleteVideoChapterMutationVariables>(DeleteVideoChapterDocument, options);
      }
export type DeleteVideoChapterMutationHookResult = ReturnType<typeof useDeleteVideoChapterMutation>;
export type DeleteVideoChapterMutationResult = Apollo.MutationResult<DeleteVideoChapterMutation>;
export type DeleteVideoChapterMutationOptions = Apollo.BaseMutationOptions<DeleteVideoChapterMutation, DeleteVideoChapterMutationVariables>;
export const PublishVideoChapterDocument = gql`
    mutation PublishVideoChapter($id: ID!) {
  publishVideoChapter(id: $id) {
    id
    isPublished
  }
}
    `;
export type PublishVideoChapterMutationFn = Apollo.MutationFunction<PublishVideoChapterMutation, PublishVideoChapterMutationVariables>;

/**
 * __usePublishVideoChapterMutation__
 *
 * To run a mutation, you first call `usePublishVideoChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishVideoChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishVideoChapterMutation, { data, loading, error }] = usePublishVideoChapterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishVideoChapterMutation(baseOptions?: Apollo.MutationHookOptions<PublishVideoChapterMutation, PublishVideoChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishVideoChapterMutation, PublishVideoChapterMutationVariables>(PublishVideoChapterDocument, options);
      }
export type PublishVideoChapterMutationHookResult = ReturnType<typeof usePublishVideoChapterMutation>;
export type PublishVideoChapterMutationResult = Apollo.MutationResult<PublishVideoChapterMutation>;
export type PublishVideoChapterMutationOptions = Apollo.BaseMutationOptions<PublishVideoChapterMutation, PublishVideoChapterMutationVariables>;
export const ReorderVideoChaptersDocument = gql`
    mutation ReorderVideoChapters($input: ReorderVideoChaptersInput!) {
  reorderVideoChapters(input: $input)
}
    `;
export type ReorderVideoChaptersMutationFn = Apollo.MutationFunction<ReorderVideoChaptersMutation, ReorderVideoChaptersMutationVariables>;

/**
 * __useReorderVideoChaptersMutation__
 *
 * To run a mutation, you first call `useReorderVideoChaptersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderVideoChaptersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderVideoChaptersMutation, { data, loading, error }] = useReorderVideoChaptersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useReorderVideoChaptersMutation(baseOptions?: Apollo.MutationHookOptions<ReorderVideoChaptersMutation, ReorderVideoChaptersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderVideoChaptersMutation, ReorderVideoChaptersMutationVariables>(ReorderVideoChaptersDocument, options);
      }
export type ReorderVideoChaptersMutationHookResult = ReturnType<typeof useReorderVideoChaptersMutation>;
export type ReorderVideoChaptersMutationResult = Apollo.MutationResult<ReorderVideoChaptersMutation>;
export type ReorderVideoChaptersMutationOptions = Apollo.BaseMutationOptions<ReorderVideoChaptersMutation, ReorderVideoChaptersMutationVariables>;
export const UnpublishVideoChapterDocument = gql`
    mutation UnpublishVideoChapter($id: ID!) {
  unpublishVideoChapter(id: $id) {
    id
    isPublished
  }
}
    `;
export type UnpublishVideoChapterMutationFn = Apollo.MutationFunction<UnpublishVideoChapterMutation, UnpublishVideoChapterMutationVariables>;

/**
 * __useUnpublishVideoChapterMutation__
 *
 * To run a mutation, you first call `useUnpublishVideoChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpublishVideoChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpublishVideoChapterMutation, { data, loading, error }] = useUnpublishVideoChapterMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnpublishVideoChapterMutation(baseOptions?: Apollo.MutationHookOptions<UnpublishVideoChapterMutation, UnpublishVideoChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnpublishVideoChapterMutation, UnpublishVideoChapterMutationVariables>(UnpublishVideoChapterDocument, options);
      }
export type UnpublishVideoChapterMutationHookResult = ReturnType<typeof useUnpublishVideoChapterMutation>;
export type UnpublishVideoChapterMutationResult = Apollo.MutationResult<UnpublishVideoChapterMutation>;
export type UnpublishVideoChapterMutationOptions = Apollo.BaseMutationOptions<UnpublishVideoChapterMutation, UnpublishVideoChapterMutationVariables>;
export const UpdateVideoChapterDocument = gql`
    mutation UpdateVideoChapter($input: UpdateVideoChapterInput!) {
  updateVideoChapter(input: $input) {
    id
    title
    description
    videoUrl
    isPublished
    position
  }
}
    `;
export type UpdateVideoChapterMutationFn = Apollo.MutationFunction<UpdateVideoChapterMutation, UpdateVideoChapterMutationVariables>;

/**
 * __useUpdateVideoChapterMutation__
 *
 * To run a mutation, you first call `useUpdateVideoChapterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoChapterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoChapterMutation, { data, loading, error }] = useUpdateVideoChapterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoChapterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVideoChapterMutation, UpdateVideoChapterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVideoChapterMutation, UpdateVideoChapterMutationVariables>(UpdateVideoChapterDocument, options);
      }
export type UpdateVideoChapterMutationHookResult = ReturnType<typeof useUpdateVideoChapterMutation>;
export type UpdateVideoChapterMutationResult = Apollo.MutationResult<UpdateVideoChapterMutation>;
export type UpdateVideoChapterMutationOptions = Apollo.BaseMutationOptions<UpdateVideoChapterMutation, UpdateVideoChapterMutationVariables>;
export const CreateAttachmentDocument = gql`
    mutation CreateAttachment($input: CreateAttachmentInput!) {
  createAttachment(input: $input) {
    id
    name
    url
    courseId
    createdAt
    updatedAt
  }
}
    `;
export type CreateAttachmentMutationFn = Apollo.MutationFunction<CreateAttachmentMutation, CreateAttachmentMutationVariables>;

/**
 * __useCreateAttachmentMutation__
 *
 * To run a mutation, you first call `useCreateAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAttachmentMutation, { data, loading, error }] = useCreateAttachmentMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAttachmentMutation(baseOptions?: Apollo.MutationHookOptions<CreateAttachmentMutation, CreateAttachmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAttachmentMutation, CreateAttachmentMutationVariables>(CreateAttachmentDocument, options);
      }
export type CreateAttachmentMutationHookResult = ReturnType<typeof useCreateAttachmentMutation>;
export type CreateAttachmentMutationResult = Apollo.MutationResult<CreateAttachmentMutation>;
export type CreateAttachmentMutationOptions = Apollo.BaseMutationOptions<CreateAttachmentMutation, CreateAttachmentMutationVariables>;
export const DeleteAttachmentDocument = gql`
    mutation DeleteAttachment($id: ID!) {
  deleteAttachment(id: $id)
}
    `;
export type DeleteAttachmentMutationFn = Apollo.MutationFunction<DeleteAttachmentMutation, DeleteAttachmentMutationVariables>;

/**
 * __useDeleteAttachmentMutation__
 *
 * To run a mutation, you first call `useDeleteAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAttachmentMutation, { data, loading, error }] = useDeleteAttachmentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAttachmentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAttachmentMutation, DeleteAttachmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAttachmentMutation, DeleteAttachmentMutationVariables>(DeleteAttachmentDocument, options);
      }
export type DeleteAttachmentMutationHookResult = ReturnType<typeof useDeleteAttachmentMutation>;
export type DeleteAttachmentMutationResult = Apollo.MutationResult<DeleteAttachmentMutation>;
export type DeleteAttachmentMutationOptions = Apollo.BaseMutationOptions<DeleteAttachmentMutation, DeleteAttachmentMutationVariables>;
export const CreateVideoCourseDocument = gql`
    mutation CreateVideoCourse($input: CreateVideoCourseInput!) {
  createVideoCourse(input: $input) {
    id
    title
    description
    imageUrl
    isPublished
    topicNodeId
    createdAt
    updatedAt
  }
}
    `;
export type CreateVideoCourseMutationFn = Apollo.MutationFunction<CreateVideoCourseMutation, CreateVideoCourseMutationVariables>;

/**
 * __useCreateVideoCourseMutation__
 *
 * To run a mutation, you first call `useCreateVideoCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoCourseMutation, { data, loading, error }] = useCreateVideoCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVideoCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoCourseMutation, CreateVideoCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoCourseMutation, CreateVideoCourseMutationVariables>(CreateVideoCourseDocument, options);
      }
export type CreateVideoCourseMutationHookResult = ReturnType<typeof useCreateVideoCourseMutation>;
export type CreateVideoCourseMutationResult = Apollo.MutationResult<CreateVideoCourseMutation>;
export type CreateVideoCourseMutationOptions = Apollo.BaseMutationOptions<CreateVideoCourseMutation, CreateVideoCourseMutationVariables>;
export const DeleteVideoCourseDocument = gql`
    mutation DeleteVideoCourse($id: ID!) {
  deleteVideoCourse(id: $id)
}
    `;
export type DeleteVideoCourseMutationFn = Apollo.MutationFunction<DeleteVideoCourseMutation, DeleteVideoCourseMutationVariables>;

/**
 * __useDeleteVideoCourseMutation__
 *
 * To run a mutation, you first call `useDeleteVideoCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteVideoCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteVideoCourseMutation, { data, loading, error }] = useDeleteVideoCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteVideoCourseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteVideoCourseMutation, DeleteVideoCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteVideoCourseMutation, DeleteVideoCourseMutationVariables>(DeleteVideoCourseDocument, options);
      }
export type DeleteVideoCourseMutationHookResult = ReturnType<typeof useDeleteVideoCourseMutation>;
export type DeleteVideoCourseMutationResult = Apollo.MutationResult<DeleteVideoCourseMutation>;
export type DeleteVideoCourseMutationOptions = Apollo.BaseMutationOptions<DeleteVideoCourseMutation, DeleteVideoCourseMutationVariables>;
export const UpdateCourseImageDocument = gql`
    mutation updateCourseImage($input: UpdateImageInput!) {
  updateCourseImage(input: $input) {
    id
    imageUrl
    updatedAt
  }
}
    `;
export type UpdateCourseImageMutationFn = Apollo.MutationFunction<UpdateCourseImageMutation, UpdateCourseImageMutationVariables>;

/**
 * __useUpdateCourseImageMutation__
 *
 * To run a mutation, you first call `useUpdateCourseImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseImageMutation, { data, loading, error }] = useUpdateCourseImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCourseImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseImageMutation, UpdateCourseImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseImageMutation, UpdateCourseImageMutationVariables>(UpdateCourseImageDocument, options);
      }
export type UpdateCourseImageMutationHookResult = ReturnType<typeof useUpdateCourseImageMutation>;
export type UpdateCourseImageMutationResult = Apollo.MutationResult<UpdateCourseImageMutation>;
export type UpdateCourseImageMutationOptions = Apollo.BaseMutationOptions<UpdateCourseImageMutation, UpdateCourseImageMutationVariables>;
export const PublishVideoCourseDocument = gql`
    mutation PublishVideoCourse($id: ID!) {
  publishVideoCourse(id: $id) {
    id
    isPublished
  }
}
    `;
export type PublishVideoCourseMutationFn = Apollo.MutationFunction<PublishVideoCourseMutation, PublishVideoCourseMutationVariables>;

/**
 * __usePublishVideoCourseMutation__
 *
 * To run a mutation, you first call `usePublishVideoCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePublishVideoCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [publishVideoCourseMutation, { data, loading, error }] = usePublishVideoCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublishVideoCourseMutation(baseOptions?: Apollo.MutationHookOptions<PublishVideoCourseMutation, PublishVideoCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PublishVideoCourseMutation, PublishVideoCourseMutationVariables>(PublishVideoCourseDocument, options);
      }
export type PublishVideoCourseMutationHookResult = ReturnType<typeof usePublishVideoCourseMutation>;
export type PublishVideoCourseMutationResult = Apollo.MutationResult<PublishVideoCourseMutation>;
export type PublishVideoCourseMutationOptions = Apollo.BaseMutationOptions<PublishVideoCourseMutation, PublishVideoCourseMutationVariables>;
export const UpdateVideoCourseDocument = gql`
    mutation UpdateVideoCourse($input: UpdateVideoCourseInput!) {
  updateVideoCourse(input: $input) {
    id
    title
    description
    imageUrl
    isPublished
    updatedAt
  }
}
    `;
export type UpdateVideoCourseMutationFn = Apollo.MutationFunction<UpdateVideoCourseMutation, UpdateVideoCourseMutationVariables>;

/**
 * __useUpdateVideoCourseMutation__
 *
 * To run a mutation, you first call `useUpdateVideoCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVideoCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVideoCourseMutation, { data, loading, error }] = useUpdateVideoCourseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVideoCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVideoCourseMutation, UpdateVideoCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVideoCourseMutation, UpdateVideoCourseMutationVariables>(UpdateVideoCourseDocument, options);
      }
export type UpdateVideoCourseMutationHookResult = ReturnType<typeof useUpdateVideoCourseMutation>;
export type UpdateVideoCourseMutationResult = Apollo.MutationResult<UpdateVideoCourseMutation>;
export type UpdateVideoCourseMutationOptions = Apollo.BaseMutationOptions<UpdateVideoCourseMutation, UpdateVideoCourseMutationVariables>;
export const UpdateChapterVideoDocument = gql`
    mutation updateChapterVideo($input: UpdateChapterVideoInput!) {
  updateChapterVideo(input: $input) {
    id
    videoUrl
    updatedAt
  }
}
    `;
export type UpdateChapterVideoMutationFn = Apollo.MutationFunction<UpdateChapterVideoMutation, UpdateChapterVideoMutationVariables>;

/**
 * __useUpdateChapterVideoMutation__
 *
 * To run a mutation, you first call `useUpdateChapterVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateChapterVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateChapterVideoMutation, { data, loading, error }] = useUpdateChapterVideoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateChapterVideoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateChapterVideoMutation, UpdateChapterVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateChapterVideoMutation, UpdateChapterVideoMutationVariables>(UpdateChapterVideoDocument, options);
      }
export type UpdateChapterVideoMutationHookResult = ReturnType<typeof useUpdateChapterVideoMutation>;
export type UpdateChapterVideoMutationResult = Apollo.MutationResult<UpdateChapterVideoMutation>;
export type UpdateChapterVideoMutationOptions = Apollo.BaseMutationOptions<UpdateChapterVideoMutation, UpdateChapterVideoMutationVariables>;
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
      deadline
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
export const GetPopularRoutesExtendedDocument = gql`
    query GetPopularRoutesExtended {
  getPopularRoutes {
    id
    title
    description
    createdAt
    isVerified
    tags {
      tag {
        id
        name
      }
    }
    topicCount
  }
}
    `;

/**
 * __useGetPopularRoutesExtendedQuery__
 *
 * To run a query within a React component, call `useGetPopularRoutesExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularRoutesExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularRoutesExtendedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularRoutesExtendedQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>(GetPopularRoutesExtendedDocument, options);
      }
export function useGetPopularRoutesExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>(GetPopularRoutesExtendedDocument, options);
        }
export function useGetPopularRoutesExtendedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>(GetPopularRoutesExtendedDocument, options);
        }
export type GetPopularRoutesExtendedQueryHookResult = ReturnType<typeof useGetPopularRoutesExtendedQuery>;
export type GetPopularRoutesExtendedLazyQueryHookResult = ReturnType<typeof useGetPopularRoutesExtendedLazyQuery>;
export type GetPopularRoutesExtendedSuspenseQueryHookResult = ReturnType<typeof useGetPopularRoutesExtendedSuspenseQuery>;
export type GetPopularRoutesExtendedQueryResult = Apollo.QueryResult<GetPopularRoutesExtendedQuery, GetPopularRoutesExtendedQueryVariables>;
export const GetPopularVideoCoursesExtendedDocument = gql`
    query GetPopularVideoCoursesExtended {
  getPopularVideoCourses {
    id
    title
    description
    imageUrl
    isPublished
    createdAt
    updatedAt
    UserVideoCourse {
      id
    }
  }
}
    `;

/**
 * __useGetPopularVideoCoursesExtendedQuery__
 *
 * To run a query within a React component, call `useGetPopularVideoCoursesExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularVideoCoursesExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularVideoCoursesExtendedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularVideoCoursesExtendedQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>(GetPopularVideoCoursesExtendedDocument, options);
      }
export function useGetPopularVideoCoursesExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>(GetPopularVideoCoursesExtendedDocument, options);
        }
export function useGetPopularVideoCoursesExtendedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>(GetPopularVideoCoursesExtendedDocument, options);
        }
export type GetPopularVideoCoursesExtendedQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesExtendedQuery>;
export type GetPopularVideoCoursesExtendedLazyQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesExtendedLazyQuery>;
export type GetPopularVideoCoursesExtendedSuspenseQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesExtendedSuspenseQuery>;
export type GetPopularVideoCoursesExtendedQueryResult = Apollo.QueryResult<GetPopularVideoCoursesExtendedQuery, GetPopularVideoCoursesExtendedQueryVariables>;
export const GetRecentlyAddedRoutesExtendedDocument = gql`
    query GetRecentlyAddedRoutesExtended {
  getRecentlyAddedRoutes {
    id
    title
    description
    createdAt
    isVerified
    tags {
      tag {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetRecentlyAddedRoutesExtendedQuery__
 *
 * To run a query within a React component, call `useGetRecentlyAddedRoutesExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentlyAddedRoutesExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentlyAddedRoutesExtendedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentlyAddedRoutesExtendedQuery(baseOptions?: Apollo.QueryHookOptions<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>(GetRecentlyAddedRoutesExtendedDocument, options);
      }
export function useGetRecentlyAddedRoutesExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>(GetRecentlyAddedRoutesExtendedDocument, options);
        }
export function useGetRecentlyAddedRoutesExtendedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>(GetRecentlyAddedRoutesExtendedDocument, options);
        }
export type GetRecentlyAddedRoutesExtendedQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesExtendedQuery>;
export type GetRecentlyAddedRoutesExtendedLazyQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesExtendedLazyQuery>;
export type GetRecentlyAddedRoutesExtendedSuspenseQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesExtendedSuspenseQuery>;
export type GetRecentlyAddedRoutesExtendedQueryResult = Apollo.QueryResult<GetRecentlyAddedRoutesExtendedQuery, GetRecentlyAddedRoutesExtendedQueryVariables>;
export const GetFavoriteRoutesDocument = gql`
    query GetFavoriteRoutes {
  getFavoriteRoutes {
    name
    favorites
  }
}
    `;

/**
 * __useGetFavoriteRoutesQuery__
 *
 * To run a query within a React component, call `useGetFavoriteRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoriteRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoriteRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoriteRoutesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>(GetFavoriteRoutesDocument, options);
      }
export function useGetFavoriteRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>(GetFavoriteRoutesDocument, options);
        }
export function useGetFavoriteRoutesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>(GetFavoriteRoutesDocument, options);
        }
export type GetFavoriteRoutesQueryHookResult = ReturnType<typeof useGetFavoriteRoutesQuery>;
export type GetFavoriteRoutesLazyQueryHookResult = ReturnType<typeof useGetFavoriteRoutesLazyQuery>;
export type GetFavoriteRoutesSuspenseQueryHookResult = ReturnType<typeof useGetFavoriteRoutesSuspenseQuery>;
export type GetFavoriteRoutesQueryResult = Apollo.QueryResult<GetFavoriteRoutesQuery, GetFavoriteRoutesQueryVariables>;
export const GetPopularRoutesDocument = gql`
    query GetPopularRoutes {
  getPopularRoutes {
    id
    title
  }
}
    `;

/**
 * __useGetPopularRoutesQuery__
 *
 * To run a query within a React component, call `useGetPopularRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularRoutesQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>(GetPopularRoutesDocument, options);
      }
export function useGetPopularRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>(GetPopularRoutesDocument, options);
        }
export function useGetPopularRoutesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>(GetPopularRoutesDocument, options);
        }
export type GetPopularRoutesQueryHookResult = ReturnType<typeof useGetPopularRoutesQuery>;
export type GetPopularRoutesLazyQueryHookResult = ReturnType<typeof useGetPopularRoutesLazyQuery>;
export type GetPopularRoutesSuspenseQueryHookResult = ReturnType<typeof useGetPopularRoutesSuspenseQuery>;
export type GetPopularRoutesQueryResult = Apollo.QueryResult<GetPopularRoutesQuery, GetPopularRoutesQueryVariables>;
export const GetPopularVideoCoursesDocument = gql`
    query GetPopularVideoCourses {
  getPopularVideoCourses {
    id
    title
  }
}
    `;

/**
 * __useGetPopularVideoCoursesQuery__
 *
 * To run a query within a React component, call `useGetPopularVideoCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPopularVideoCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPopularVideoCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPopularVideoCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>(GetPopularVideoCoursesDocument, options);
      }
export function useGetPopularVideoCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>(GetPopularVideoCoursesDocument, options);
        }
export function useGetPopularVideoCoursesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>(GetPopularVideoCoursesDocument, options);
        }
export type GetPopularVideoCoursesQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesQuery>;
export type GetPopularVideoCoursesLazyQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesLazyQuery>;
export type GetPopularVideoCoursesSuspenseQueryHookResult = ReturnType<typeof useGetPopularVideoCoursesSuspenseQuery>;
export type GetPopularVideoCoursesQueryResult = Apollo.QueryResult<GetPopularVideoCoursesQuery, GetPopularVideoCoursesQueryVariables>;
export const GetRecentActivityDocument = gql`
    query GetRecentActivity {
  getRecentActivity {
    recentRoutes {
      id
      title
    }
    recentVideoCourses {
      id
      title
    }
  }
}
    `;

/**
 * __useGetRecentActivityQuery__
 *
 * To run a query within a React component, call `useGetRecentActivityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentActivityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentActivityQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentActivityQuery(baseOptions?: Apollo.QueryHookOptions<GetRecentActivityQuery, GetRecentActivityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentActivityQuery, GetRecentActivityQueryVariables>(GetRecentActivityDocument, options);
      }
export function useGetRecentActivityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentActivityQuery, GetRecentActivityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentActivityQuery, GetRecentActivityQueryVariables>(GetRecentActivityDocument, options);
        }
export function useGetRecentActivitySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecentActivityQuery, GetRecentActivityQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentActivityQuery, GetRecentActivityQueryVariables>(GetRecentActivityDocument, options);
        }
export type GetRecentActivityQueryHookResult = ReturnType<typeof useGetRecentActivityQuery>;
export type GetRecentActivityLazyQueryHookResult = ReturnType<typeof useGetRecentActivityLazyQuery>;
export type GetRecentActivitySuspenseQueryHookResult = ReturnType<typeof useGetRecentActivitySuspenseQuery>;
export type GetRecentActivityQueryResult = Apollo.QueryResult<GetRecentActivityQuery, GetRecentActivityQueryVariables>;
export const GetRecentlyAddedRoutesDocument = gql`
    query GetRecentlyAddedRoutes {
  getRecentlyAddedRoutes {
    id
    title
  }
}
    `;

/**
 * __useGetRecentlyAddedRoutesQuery__
 *
 * To run a query within a React component, call `useGetRecentlyAddedRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentlyAddedRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentlyAddedRoutesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentlyAddedRoutesQuery(baseOptions?: Apollo.QueryHookOptions<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>(GetRecentlyAddedRoutesDocument, options);
      }
export function useGetRecentlyAddedRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>(GetRecentlyAddedRoutesDocument, options);
        }
export function useGetRecentlyAddedRoutesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>(GetRecentlyAddedRoutesDocument, options);
        }
export type GetRecentlyAddedRoutesQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesQuery>;
export type GetRecentlyAddedRoutesLazyQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesLazyQuery>;
export type GetRecentlyAddedRoutesSuspenseQueryHookResult = ReturnType<typeof useGetRecentlyAddedRoutesSuspenseQuery>;
export type GetRecentlyAddedRoutesQueryResult = Apollo.QueryResult<GetRecentlyAddedRoutesQuery, GetRecentlyAddedRoutesQueryVariables>;
export const GetUpcomingDeadlinesDocument = gql`
    query GetUpcomingDeadlines {
  getUpcomingDeadlines {
    id
    title
    deadline
  }
}
    `;

/**
 * __useGetUpcomingDeadlinesQuery__
 *
 * To run a query within a React component, call `useGetUpcomingDeadlinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpcomingDeadlinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpcomingDeadlinesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUpcomingDeadlinesQuery(baseOptions?: Apollo.QueryHookOptions<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>(GetUpcomingDeadlinesDocument, options);
      }
export function useGetUpcomingDeadlinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>(GetUpcomingDeadlinesDocument, options);
        }
export function useGetUpcomingDeadlinesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>(GetUpcomingDeadlinesDocument, options);
        }
export type GetUpcomingDeadlinesQueryHookResult = ReturnType<typeof useGetUpcomingDeadlinesQuery>;
export type GetUpcomingDeadlinesLazyQueryHookResult = ReturnType<typeof useGetUpcomingDeadlinesLazyQuery>;
export type GetUpcomingDeadlinesSuspenseQueryHookResult = ReturnType<typeof useGetUpcomingDeadlinesSuspenseQuery>;
export type GetUpcomingDeadlinesQueryResult = Apollo.QueryResult<GetUpcomingDeadlinesQuery, GetUpcomingDeadlinesQueryVariables>;
export const GetWeeklyGoalsDocument = gql`
    query GetWeeklyGoals {
  getWeeklyGoals {
    topics {
      value
      target
    }
    videos {
      value
      target
    }
    deadlines {
      value
      target
    }
  }
}
    `;

/**
 * __useGetWeeklyGoalsQuery__
 *
 * To run a query within a React component, call `useGetWeeklyGoalsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeeklyGoalsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeeklyGoalsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWeeklyGoalsQuery(baseOptions?: Apollo.QueryHookOptions<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>(GetWeeklyGoalsDocument, options);
      }
export function useGetWeeklyGoalsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>(GetWeeklyGoalsDocument, options);
        }
export function useGetWeeklyGoalsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>(GetWeeklyGoalsDocument, options);
        }
export type GetWeeklyGoalsQueryHookResult = ReturnType<typeof useGetWeeklyGoalsQuery>;
export type GetWeeklyGoalsLazyQueryHookResult = ReturnType<typeof useGetWeeklyGoalsLazyQuery>;
export type GetWeeklyGoalsSuspenseQueryHookResult = ReturnType<typeof useGetWeeklyGoalsSuspenseQuery>;
export type GetWeeklyGoalsQueryResult = Apollo.QueryResult<GetWeeklyGoalsQuery, GetWeeklyGoalsQueryVariables>;
export const GetWeeklyProgressDocument = gql`
    query GetWeeklyProgress {
  getWeeklyProgress {
    date
    count
  }
}
    `;

/**
 * __useGetWeeklyProgressQuery__
 *
 * To run a query within a React component, call `useGetWeeklyProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWeeklyProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWeeklyProgressQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWeeklyProgressQuery(baseOptions?: Apollo.QueryHookOptions<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>(GetWeeklyProgressDocument, options);
      }
export function useGetWeeklyProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>(GetWeeklyProgressDocument, options);
        }
export function useGetWeeklyProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>(GetWeeklyProgressDocument, options);
        }
export type GetWeeklyProgressQueryHookResult = ReturnType<typeof useGetWeeklyProgressQuery>;
export type GetWeeklyProgressLazyQueryHookResult = ReturnType<typeof useGetWeeklyProgressLazyQuery>;
export type GetWeeklyProgressSuspenseQueryHookResult = ReturnType<typeof useGetWeeklyProgressSuspenseQuery>;
export type GetWeeklyProgressQueryResult = Apollo.QueryResult<GetWeeklyProgressQuery, GetWeeklyProgressQueryVariables>;
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
export const FindOtherRoutesByUserDocument = gql`
    query findOtherRoutesByUser($excludeRouteId: String!) {
  findOtherRoutesByUser(excludeRouteId: $excludeRouteId) {
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
 * __useFindOtherRoutesByUserQuery__
 *
 * To run a query within a React component, call `useFindOtherRoutesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOtherRoutesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOtherRoutesByUserQuery({
 *   variables: {
 *      excludeRouteId: // value for 'excludeRouteId'
 *   },
 * });
 */
export function useFindOtherRoutesByUserQuery(baseOptions: Apollo.QueryHookOptions<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables> & ({ variables: FindOtherRoutesByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>(FindOtherRoutesByUserDocument, options);
      }
export function useFindOtherRoutesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>(FindOtherRoutesByUserDocument, options);
        }
export function useFindOtherRoutesByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>(FindOtherRoutesByUserDocument, options);
        }
export type FindOtherRoutesByUserQueryHookResult = ReturnType<typeof useFindOtherRoutesByUserQuery>;
export type FindOtherRoutesByUserLazyQueryHookResult = ReturnType<typeof useFindOtherRoutesByUserLazyQuery>;
export type FindOtherRoutesByUserSuspenseQueryHookResult = ReturnType<typeof useFindOtherRoutesByUserSuspenseQuery>;
export type FindOtherRoutesByUserQueryResult = Apollo.QueryResult<FindOtherRoutesByUserQuery, FindOtherRoutesByUserQueryVariables>;
export const FindRouteDocument = gql`
    query findRoute($id: ID!) {
  findRoute(id: $id) {
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

/**
 * __useFindRouteQuery__
 *
 * To run a query within a React component, call `useFindRouteQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindRouteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindRouteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindRouteQuery(baseOptions: Apollo.QueryHookOptions<FindRouteQuery, FindRouteQueryVariables> & ({ variables: FindRouteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindRouteQuery, FindRouteQueryVariables>(FindRouteDocument, options);
      }
export function useFindRouteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindRouteQuery, FindRouteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindRouteQuery, FindRouteQueryVariables>(FindRouteDocument, options);
        }
export function useFindRouteSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindRouteQuery, FindRouteQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindRouteQuery, FindRouteQueryVariables>(FindRouteDocument, options);
        }
export type FindRouteQueryHookResult = ReturnType<typeof useFindRouteQuery>;
export type FindRouteLazyQueryHookResult = ReturnType<typeof useFindRouteLazyQuery>;
export type FindRouteSuspenseQueryHookResult = ReturnType<typeof useFindRouteSuspenseQuery>;
export type FindRouteQueryResult = Apollo.QueryResult<FindRouteQuery, FindRouteQueryVariables>;
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
    topicCount
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
export const SearchRoutesDocument = gql`
    query SearchRoutes($filters: SearchRoutesInput!) {
  searchRoutes(filters: $filters) {
    routes {
      id
      title
      description
      createdAt
      updatedAt
      privateType
      isVerified
      topicCount
      user {
        id
        name
        avatar
      }
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
          type
          videoCourses {
            id
            title
            description
            isPublished
            createdAt
            updatedAt
          }
        }
      }
    }
    total
    totalPages
    currentPage
  }
}
    `;

/**
 * __useSearchRoutesQuery__
 *
 * To run a query within a React component, call `useSearchRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRoutesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSearchRoutesQuery(baseOptions: Apollo.QueryHookOptions<SearchRoutesQuery, SearchRoutesQueryVariables> & ({ variables: SearchRoutesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRoutesQuery, SearchRoutesQueryVariables>(SearchRoutesDocument, options);
      }
export function useSearchRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRoutesQuery, SearchRoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRoutesQuery, SearchRoutesQueryVariables>(SearchRoutesDocument, options);
        }
export function useSearchRoutesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SearchRoutesQuery, SearchRoutesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchRoutesQuery, SearchRoutesQueryVariables>(SearchRoutesDocument, options);
        }
export type SearchRoutesQueryHookResult = ReturnType<typeof useSearchRoutesQuery>;
export type SearchRoutesLazyQueryHookResult = ReturnType<typeof useSearchRoutesLazyQuery>;
export type SearchRoutesSuspenseQueryHookResult = ReturnType<typeof useSearchRoutesSuspenseQuery>;
export type SearchRoutesQueryResult = Apollo.QueryResult<SearchRoutesQuery, SearchRoutesQueryVariables>;
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
export const GetAvailableChaptersDocument = gql`
    query GetAvailableChapters($courseId: ID!) {
  availableChapters(courseId: $courseId) {
    id
    title
    description
    videoUrl
    isPublished
    position
  }
}
    `;

/**
 * __useGetAvailableChaptersQuery__
 *
 * To run a query within a React component, call `useGetAvailableChaptersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAvailableChaptersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAvailableChaptersQuery({
 *   variables: {
 *      courseId: // value for 'courseId'
 *   },
 * });
 */
export function useGetAvailableChaptersQuery(baseOptions: Apollo.QueryHookOptions<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables> & ({ variables: GetAvailableChaptersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>(GetAvailableChaptersDocument, options);
      }
export function useGetAvailableChaptersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>(GetAvailableChaptersDocument, options);
        }
export function useGetAvailableChaptersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>(GetAvailableChaptersDocument, options);
        }
export type GetAvailableChaptersQueryHookResult = ReturnType<typeof useGetAvailableChaptersQuery>;
export type GetAvailableChaptersLazyQueryHookResult = ReturnType<typeof useGetAvailableChaptersLazyQuery>;
export type GetAvailableChaptersSuspenseQueryHookResult = ReturnType<typeof useGetAvailableChaptersSuspenseQuery>;
export type GetAvailableChaptersQueryResult = Apollo.QueryResult<GetAvailableChaptersQuery, GetAvailableChaptersQueryVariables>;
export const GetPublishedCoursesDocument = gql`
    query GetPublishedCourses {
  publishedCourses {
    id
    title
    description
    isPublished
    imageUrl
    createdAt
  }
}
    `;

/**
 * __useGetPublishedCoursesQuery__
 *
 * To run a query within a React component, call `useGetPublishedCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublishedCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublishedCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPublishedCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>(GetPublishedCoursesDocument, options);
      }
export function useGetPublishedCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>(GetPublishedCoursesDocument, options);
        }
export function useGetPublishedCoursesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>(GetPublishedCoursesDocument, options);
        }
export type GetPublishedCoursesQueryHookResult = ReturnType<typeof useGetPublishedCoursesQuery>;
export type GetPublishedCoursesLazyQueryHookResult = ReturnType<typeof useGetPublishedCoursesLazyQuery>;
export type GetPublishedCoursesSuspenseQueryHookResult = ReturnType<typeof useGetPublishedCoursesSuspenseQuery>;
export type GetPublishedCoursesQueryResult = Apollo.QueryResult<GetPublishedCoursesQuery, GetPublishedCoursesQueryVariables>;
export const GetVideoCourseDocument = gql`
    query GetVideoCourse($id: ID!) {
  videoCourse(id: $id) {
    id
    title
    description
    isPublished
    imageUrl
    topicNodeId
    createdAt
    updatedAt
    chapters {
      id
      title
      description
      videoUrl
      isPublished
      position
      progress {
        isCompleted
        userId
      }
      userProgress {
        isCompleted
      }
    }
    Attachment {
      id
      name
      url
      courseId
    }
    UserVideoCourse {
      id
      userId
    }
  }
}
    `;

/**
 * __useGetVideoCourseQuery__
 *
 * To run a query within a React component, call `useGetVideoCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVideoCourseQuery(baseOptions: Apollo.QueryHookOptions<GetVideoCourseQuery, GetVideoCourseQueryVariables> & ({ variables: GetVideoCourseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoCourseQuery, GetVideoCourseQueryVariables>(GetVideoCourseDocument, options);
      }
export function useGetVideoCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoCourseQuery, GetVideoCourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoCourseQuery, GetVideoCourseQueryVariables>(GetVideoCourseDocument, options);
        }
export function useGetVideoCourseSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVideoCourseQuery, GetVideoCourseQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVideoCourseQuery, GetVideoCourseQueryVariables>(GetVideoCourseDocument, options);
        }
export type GetVideoCourseQueryHookResult = ReturnType<typeof useGetVideoCourseQuery>;
export type GetVideoCourseLazyQueryHookResult = ReturnType<typeof useGetVideoCourseLazyQuery>;
export type GetVideoCourseSuspenseQueryHookResult = ReturnType<typeof useGetVideoCourseSuspenseQuery>;
export type GetVideoCourseQueryResult = Apollo.QueryResult<GetVideoCourseQuery, GetVideoCourseQueryVariables>;
export const GetVideoCoursesByNodeDocument = gql`
    query GetVideoCoursesByNode($topicNodeId: ID!) {
  videoCoursesByNode(topicNodeId: $topicNodeId) {
    id
    title
    description
    isPublished
    imageUrl
    topicNodeId
    createdAt
    updatedAt
    chapters {
      id
      title
      position
      isPublished
    }
  }
}
    `;

/**
 * __useGetVideoCoursesByNodeQuery__
 *
 * To run a query within a React component, call `useGetVideoCoursesByNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoCoursesByNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoCoursesByNodeQuery({
 *   variables: {
 *      topicNodeId: // value for 'topicNodeId'
 *   },
 * });
 */
export function useGetVideoCoursesByNodeQuery(baseOptions: Apollo.QueryHookOptions<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables> & ({ variables: GetVideoCoursesByNodeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>(GetVideoCoursesByNodeDocument, options);
      }
export function useGetVideoCoursesByNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>(GetVideoCoursesByNodeDocument, options);
        }
export function useGetVideoCoursesByNodeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>(GetVideoCoursesByNodeDocument, options);
        }
export type GetVideoCoursesByNodeQueryHookResult = ReturnType<typeof useGetVideoCoursesByNodeQuery>;
export type GetVideoCoursesByNodeLazyQueryHookResult = ReturnType<typeof useGetVideoCoursesByNodeLazyQuery>;
export type GetVideoCoursesByNodeSuspenseQueryHookResult = ReturnType<typeof useGetVideoCoursesByNodeSuspenseQuery>;
export type GetVideoCoursesByNodeQueryResult = Apollo.QueryResult<GetVideoCoursesByNodeQuery, GetVideoCoursesByNodeQueryVariables>;
export const GetVideoChapterDocument = gql`
    query GetVideoChapter($id: ID!) {
  videoChapter(id: $id) {
    id
    courseId
    title
    description
    videoUrl
    position
    isPublished
    createdAt
    updatedAt
    userProgress {
      userId
      isCompleted
    }
  }
}
    `;

/**
 * __useGetVideoChapterQuery__
 *
 * To run a query within a React component, call `useGetVideoChapterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoChapterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoChapterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVideoChapterQuery(baseOptions: Apollo.QueryHookOptions<GetVideoChapterQuery, GetVideoChapterQueryVariables> & ({ variables: GetVideoChapterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoChapterQuery, GetVideoChapterQueryVariables>(GetVideoChapterDocument, options);
      }
export function useGetVideoChapterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoChapterQuery, GetVideoChapterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoChapterQuery, GetVideoChapterQueryVariables>(GetVideoChapterDocument, options);
        }
export function useGetVideoChapterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetVideoChapterQuery, GetVideoChapterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVideoChapterQuery, GetVideoChapterQueryVariables>(GetVideoChapterDocument, options);
        }
export type GetVideoChapterQueryHookResult = ReturnType<typeof useGetVideoChapterQuery>;
export type GetVideoChapterLazyQueryHookResult = ReturnType<typeof useGetVideoChapterLazyQuery>;
export type GetVideoChapterSuspenseQueryHookResult = ReturnType<typeof useGetVideoChapterSuspenseQuery>;
export type GetVideoChapterQueryResult = Apollo.QueryResult<GetVideoChapterQuery, GetVideoChapterQueryVariables>;