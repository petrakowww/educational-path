
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name',
  avatar: 'avatar',
  role: 'role',
  isVerified: 'isVerified',
  isTwoFactorEnabled: 'isTwoFactorEnabled',
  method: 'method',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SkillProfileScalarFieldEnum = {
  id: 'id',
  headline: 'headline',
  profilename: 'profilename',
  githubUrl: 'githubUrl',
  vkUrl: 'vkUrl',
  telegramUrl: 'telegramUrl',
  userId: 'userId'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  accountId: 'accountId',
  type: 'type',
  provider: 'provider',
  refreshToken: 'refreshToken',
  accessToken: 'accessToken',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.TokenScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  email: 'email',
  token: 'token',
  type: 'type',
  expiresIn: 'expiresIn',
  oauthToken: 'oauthToken'
};

exports.Prisma.RouteScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  privateType: 'privateType',
  isVerified: 'isVerified',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.RouteTagScalarFieldEnum = {
  id: 'id',
  routeId: 'routeId',
  tagId: 'tagId'
};

exports.Prisma.TopicMapScalarFieldEnum = {
  id: 'id',
  routeId: 'routeId',
  updatedAt: 'updatedAt'
};

exports.Prisma.TopicNodeScalarFieldEnum = {
  id: 'id',
  topicMapId: 'topicMapId',
  type: 'type',
  title: 'title',
  meta: 'meta',
  posxy: 'posxy',
  zIndex: 'zIndex'
};

exports.Prisma.TopicEdgeScalarFieldEnum = {
  id: 'id',
  topicMapId: 'topicMapId',
  sourceId: 'sourceId',
  targetId: 'targetId',
  meta: 'meta'
};

exports.Prisma.UserCourseScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  topicMapId: 'topicMapId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deadline: 'deadline',
  view: 'view',
  mode: 'mode'
};

exports.Prisma.UserTopicProgressScalarFieldEnum = {
  id: 'id',
  userCourseId: 'userCourseId',
  topicNodeId: 'topicNodeId',
  status: 'status',
  progressValue: 'progressValue',
  startedAt: 'startedAt',
  finishedAt: 'finishedAt'
};

exports.Prisma.ChecklistItemScalarFieldEnum = {
  id: 'id',
  topicNodeId: 'topicNodeId',
  text: 'text'
};

exports.Prisma.UserChecklistProgressScalarFieldEnum = {
  id: 'id',
  userCourseId: 'userCourseId',
  checklistItemId: 'checklistItemId',
  done: 'done'
};

exports.Prisma.VideoCourseScalarFieldEnum = {
  id: 'id',
  topicNodeId: 'topicNodeId',
  userId: 'userId',
  title: 'title',
  description: 'description',
  imageUrl: 'imageUrl',
  isPublished: 'isPublished',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VideoChapterScalarFieldEnum = {
  id: 'id',
  courseId: 'courseId',
  title: 'title',
  description: 'description',
  videoUrl: 'videoUrl',
  position: 'position',
  isPublished: 'isPublished',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ChapterProgressScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  chapterId: 'chapterId',
  isCompleted: 'isCompleted',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserVideoCourseScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  courseId: 'courseId',
  startedAt: 'startedAt'
};

exports.Prisma.FavoriteRouteScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  routeId: 'routeId',
  createdAt: 'createdAt'
};

exports.Prisma.AttachmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  courseId: 'courseId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  REGULAR: 'REGULAR',
  ADMIN: 'ADMIN'
};

exports.AuthMethod = exports.$Enums.AuthMethod = {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB',
  YANDEX: 'YANDEX'
};

exports.TokenType = exports.$Enums.TokenType = {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET',
  CHANGE_EMAIL: 'CHANGE_EMAIL'
};

exports.PrivateType = exports.$Enums.PrivateType = {
  GENERAL: 'GENERAL',
  PRIVATE: 'PRIVATE'
};

exports.VerificationStatus = exports.$Enums.VerificationStatus = {
  NOT_VERIFIED: 'NOT_VERIFIED',
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED'
};

exports.NodeType = exports.$Enums.NodeType = {
  TITLE: 'TITLE',
  TOPIC: 'TOPIC',
  SUBTOPIC: 'SUBTOPIC',
  PARAGRAPH: 'PARAGRAPH',
  LABEL: 'LABEL',
  BUTTON: 'BUTTON',
  TODO: 'TODO',
  CHECKLIST: 'CHECKLIST'
};

exports.CourseViewType = exports.$Enums.CourseViewType = {
  GRAPH: 'GRAPH',
  LINEAR: 'LINEAR'
};

exports.CourseModeType = exports.$Enums.CourseModeType = {
  STRICT: 'STRICT',
  FLEXIBLE: 'FLEXIBLE'
};

exports.NodeStatus = exports.$Enums.NodeStatus = {
  NOT_STARTED: 'NOT_STARTED',
  SKIPPED: 'SKIPPED',
  COMPLETED: 'COMPLETED',
  IN_PROGRESS: 'IN_PROGRESS'
};

exports.Prisma.ModelName = {
  User: 'User',
  SkillProfile: 'SkillProfile',
  Account: 'Account',
  Token: 'Token',
  Route: 'Route',
  Tag: 'Tag',
  RouteTag: 'RouteTag',
  TopicMap: 'TopicMap',
  TopicNode: 'TopicNode',
  TopicEdge: 'TopicEdge',
  UserCourse: 'UserCourse',
  UserTopicProgress: 'UserTopicProgress',
  ChecklistItem: 'ChecklistItem',
  UserChecklistProgress: 'UserChecklistProgress',
  VideoCourse: 'VideoCourse',
  VideoChapter: 'VideoChapter',
  ChapterProgress: 'ChapterProgress',
  UserVideoCourse: 'UserVideoCourse',
  FavoriteRoute: 'FavoriteRoute',
  Attachment: 'Attachment'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
