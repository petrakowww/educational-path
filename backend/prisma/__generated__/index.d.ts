
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SkillProfile
 * 
 */
export type SkillProfile = $Result.DefaultSelection<Prisma.$SkillProfilePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model RouteTag
 * 
 */
export type RouteTag = $Result.DefaultSelection<Prisma.$RouteTagPayload>
/**
 * Model TopicNode
 * 
 */
export type TopicNode = $Result.DefaultSelection<Prisma.$TopicNodePayload>
/**
 * Model TopicEdge
 * 
 */
export type TopicEdge = $Result.DefaultSelection<Prisma.$TopicEdgePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  REGULAR: 'REGULAR',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AuthMethod: {
  CREDENTIALS: 'CREDENTIALS',
  GOOGLE: 'GOOGLE',
  GITHUB: 'GITHUB',
  YANDEX: 'YANDEX'
};

export type AuthMethod = (typeof AuthMethod)[keyof typeof AuthMethod]


export const TokenType: {
  VERIFICATION: 'VERIFICATION',
  TWO_FACTOR: 'TWO_FACTOR',
  PASSWORD_RESET: 'PASSWORD_RESET',
  CHANGE_EMAIL: 'CHANGE_EMAIL'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const PrivateType: {
  GENERAL: 'GENERAL',
  PRIVATE: 'PRIVATE'
};

export type PrivateType = (typeof PrivateType)[keyof typeof PrivateType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AuthMethod = $Enums.AuthMethod

export const AuthMethod: typeof $Enums.AuthMethod

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type PrivateType = $Enums.PrivateType

export const PrivateType: typeof $Enums.PrivateType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillProfile`: Exposes CRUD operations for the **SkillProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillProfiles
    * const skillProfiles = await prisma.skillProfile.findMany()
    * ```
    */
  get skillProfile(): Prisma.SkillProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeTag`: Exposes CRUD operations for the **RouteTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteTags
    * const routeTags = await prisma.routeTag.findMany()
    * ```
    */
  get routeTag(): Prisma.RouteTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicNode`: Exposes CRUD operations for the **TopicNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicNodes
    * const topicNodes = await prisma.topicNode.findMany()
    * ```
    */
  get topicNode(): Prisma.TopicNodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.topicEdge`: Exposes CRUD operations for the **TopicEdge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TopicEdges
    * const topicEdges = await prisma.topicEdge.findMany()
    * ```
    */
  get topicEdge(): Prisma.TopicEdgeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SkillProfile: 'SkillProfile',
    Account: 'Account',
    Token: 'Token',
    Route: 'Route',
    Tag: 'Tag',
    RouteTag: 'RouteTag',
    TopicNode: 'TopicNode',
    TopicEdge: 'TopicEdge'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "skillProfile" | "account" | "token" | "route" | "tag" | "routeTag" | "topicNode" | "topicEdge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SkillProfile: {
        payload: Prisma.$SkillProfilePayload<ExtArgs>
        fields: Prisma.SkillProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          findFirst: {
            args: Prisma.SkillProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          findMany: {
            args: Prisma.SkillProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>[]
          }
          create: {
            args: Prisma.SkillProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          createMany: {
            args: Prisma.SkillProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>[]
          }
          delete: {
            args: Prisma.SkillProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          update: {
            args: Prisma.SkillProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          deleteMany: {
            args: Prisma.SkillProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>[]
          }
          upsert: {
            args: Prisma.SkillProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillProfilePayload>
          }
          aggregate: {
            args: Prisma.SkillProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillProfile>
          }
          groupBy: {
            args: Prisma.SkillProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillProfileCountArgs<ExtArgs>
            result: $Utils.Optional<SkillProfileCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      RouteTag: {
        payload: Prisma.$RouteTagPayload<ExtArgs>
        fields: Prisma.RouteTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          findFirst: {
            args: Prisma.RouteTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          findMany: {
            args: Prisma.RouteTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>[]
          }
          create: {
            args: Prisma.RouteTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          createMany: {
            args: Prisma.RouteTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>[]
          }
          delete: {
            args: Prisma.RouteTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          update: {
            args: Prisma.RouteTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          deleteMany: {
            args: Prisma.RouteTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>[]
          }
          upsert: {
            args: Prisma.RouteTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteTagPayload>
          }
          aggregate: {
            args: Prisma.RouteTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteTag>
          }
          groupBy: {
            args: Prisma.RouteTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteTagCountArgs<ExtArgs>
            result: $Utils.Optional<RouteTagCountAggregateOutputType> | number
          }
        }
      }
      TopicNode: {
        payload: Prisma.$TopicNodePayload<ExtArgs>
        fields: Prisma.TopicNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          findFirst: {
            args: Prisma.TopicNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          findMany: {
            args: Prisma.TopicNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>[]
          }
          create: {
            args: Prisma.TopicNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          createMany: {
            args: Prisma.TopicNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>[]
          }
          delete: {
            args: Prisma.TopicNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          update: {
            args: Prisma.TopicNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          deleteMany: {
            args: Prisma.TopicNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>[]
          }
          upsert: {
            args: Prisma.TopicNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicNodePayload>
          }
          aggregate: {
            args: Prisma.TopicNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicNode>
          }
          groupBy: {
            args: Prisma.TopicNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicNodeCountArgs<ExtArgs>
            result: $Utils.Optional<TopicNodeCountAggregateOutputType> | number
          }
        }
      }
      TopicEdge: {
        payload: Prisma.$TopicEdgePayload<ExtArgs>
        fields: Prisma.TopicEdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TopicEdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TopicEdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          findFirst: {
            args: Prisma.TopicEdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TopicEdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          findMany: {
            args: Prisma.TopicEdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>[]
          }
          create: {
            args: Prisma.TopicEdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          createMany: {
            args: Prisma.TopicEdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TopicEdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>[]
          }
          delete: {
            args: Prisma.TopicEdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          update: {
            args: Prisma.TopicEdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          deleteMany: {
            args: Prisma.TopicEdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TopicEdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TopicEdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>[]
          }
          upsert: {
            args: Prisma.TopicEdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TopicEdgePayload>
          }
          aggregate: {
            args: Prisma.TopicEdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTopicEdge>
          }
          groupBy: {
            args: Prisma.TopicEdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TopicEdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TopicEdgeCountArgs<ExtArgs>
            result: $Utils.Optional<TopicEdgeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    skillProfile?: SkillProfileOmit
    account?: AccountOmit
    token?: TokenOmit
    route?: RouteOmit
    tag?: TagOmit
    routeTag?: RouteTagOmit
    topicNode?: TopicNodeOmit
    topicEdge?: TopicEdgeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    Route: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    Route?: boolean | UserCountOutputTypeCountRouteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    topicNodes: number
    tags: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    topicNodes?: boolean | RouteCountOutputTypeCountTopicNodesArgs
    tags?: boolean | RouteCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountTopicNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicNodeWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    routes: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | TagCountOutputTypeCountRoutesArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteTagWhereInput
  }


  /**
   * Count Type TopicNodeCountOutputType
   */

  export type TopicNodeCountOutputType = {
    incomingEdges: number
    outgoingEdges: number
  }

  export type TopicNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incomingEdges?: boolean | TopicNodeCountOutputTypeCountIncomingEdgesArgs
    outgoingEdges?: boolean | TopicNodeCountOutputTypeCountOutgoingEdgesArgs
  }

  // Custom InputTypes
  /**
   * TopicNodeCountOutputType without action
   */
  export type TopicNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNodeCountOutputType
     */
    select?: TopicNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TopicNodeCountOutputType without action
   */
  export type TopicNodeCountOutputTypeCountIncomingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicEdgeWhereInput
  }

  /**
   * TopicNodeCountOutputType without action
   */
  export type TopicNodeCountOutputTypeCountOutgoingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicEdgeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    isVerified: boolean | null
    isTwoFactorEnabled: boolean | null
    method: $Enums.AuthMethod | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatar: number
    role: number
    isVerified: number
    isTwoFactorEnabled: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatar?: true
    role?: true
    isVerified?: true
    isTwoFactorEnabled?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    avatar: string | null
    role: $Enums.UserRole
    isVerified: boolean
    isTwoFactorEnabled: boolean
    method: $Enums.AuthMethod
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    skillProfile?: boolean | User$skillProfileArgs<ExtArgs>
    Route?: boolean | User$RouteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatar?: boolean
    role?: boolean
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatar" | "role" | "isVerified" | "isTwoFactorEnabled" | "method" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    skillProfile?: boolean | User$skillProfileArgs<ExtArgs>
    Route?: boolean | User$RouteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      skillProfile: Prisma.$SkillProfilePayload<ExtArgs> | null
      Route: Prisma.$RoutePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      avatar: string | null
      role: $Enums.UserRole
      isVerified: boolean
      isTwoFactorEnabled: boolean
      method: $Enums.AuthMethod
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    skillProfile<T extends User$skillProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$skillProfileArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Route<T extends User$RouteArgs<ExtArgs> = {}>(args?: Subset<T, User$RouteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isTwoFactorEnabled: FieldRef<"User", 'Boolean'>
    readonly method: FieldRef<"User", 'AuthMethod'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.skillProfile
   */
  export type User$skillProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    where?: SkillProfileWhereInput
  }

  /**
   * User.Route
   */
  export type User$RouteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SkillProfile
   */

  export type AggregateSkillProfile = {
    _count: SkillProfileCountAggregateOutputType | null
    _min: SkillProfileMinAggregateOutputType | null
    _max: SkillProfileMaxAggregateOutputType | null
  }

  export type SkillProfileMinAggregateOutputType = {
    id: string | null
    headline: string | null
    profilename: string | null
    githubUrl: string | null
    vkUrl: string | null
    telegramUrl: string | null
    userId: string | null
  }

  export type SkillProfileMaxAggregateOutputType = {
    id: string | null
    headline: string | null
    profilename: string | null
    githubUrl: string | null
    vkUrl: string | null
    telegramUrl: string | null
    userId: string | null
  }

  export type SkillProfileCountAggregateOutputType = {
    id: number
    headline: number
    profilename: number
    githubUrl: number
    vkUrl: number
    telegramUrl: number
    userId: number
    _all: number
  }


  export type SkillProfileMinAggregateInputType = {
    id?: true
    headline?: true
    profilename?: true
    githubUrl?: true
    vkUrl?: true
    telegramUrl?: true
    userId?: true
  }

  export type SkillProfileMaxAggregateInputType = {
    id?: true
    headline?: true
    profilename?: true
    githubUrl?: true
    vkUrl?: true
    telegramUrl?: true
    userId?: true
  }

  export type SkillProfileCountAggregateInputType = {
    id?: true
    headline?: true
    profilename?: true
    githubUrl?: true
    vkUrl?: true
    telegramUrl?: true
    userId?: true
    _all?: true
  }

  export type SkillProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillProfile to aggregate.
     */
    where?: SkillProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillProfiles to fetch.
     */
    orderBy?: SkillProfileOrderByWithRelationInput | SkillProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillProfiles
    **/
    _count?: true | SkillProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillProfileMaxAggregateInputType
  }

  export type GetSkillProfileAggregateType<T extends SkillProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillProfile[P]>
      : GetScalarType<T[P], AggregateSkillProfile[P]>
  }




  export type SkillProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillProfileWhereInput
    orderBy?: SkillProfileOrderByWithAggregationInput | SkillProfileOrderByWithAggregationInput[]
    by: SkillProfileScalarFieldEnum[] | SkillProfileScalarFieldEnum
    having?: SkillProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillProfileCountAggregateInputType | true
    _min?: SkillProfileMinAggregateInputType
    _max?: SkillProfileMaxAggregateInputType
  }

  export type SkillProfileGroupByOutputType = {
    id: string
    headline: string | null
    profilename: string | null
    githubUrl: string | null
    vkUrl: string | null
    telegramUrl: string | null
    userId: string
    _count: SkillProfileCountAggregateOutputType | null
    _min: SkillProfileMinAggregateOutputType | null
    _max: SkillProfileMaxAggregateOutputType | null
  }

  type GetSkillProfileGroupByPayload<T extends SkillProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillProfileGroupByOutputType[P]>
            : GetScalarType<T[P], SkillProfileGroupByOutputType[P]>
        }
      >
    >


  export type SkillProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    profilename?: boolean
    githubUrl?: boolean
    vkUrl?: boolean
    telegramUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillProfile"]>

  export type SkillProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    profilename?: boolean
    githubUrl?: boolean
    vkUrl?: boolean
    telegramUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillProfile"]>

  export type SkillProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    headline?: boolean
    profilename?: boolean
    githubUrl?: boolean
    vkUrl?: boolean
    telegramUrl?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skillProfile"]>

  export type SkillProfileSelectScalar = {
    id?: boolean
    headline?: boolean
    profilename?: boolean
    githubUrl?: boolean
    vkUrl?: boolean
    telegramUrl?: boolean
    userId?: boolean
  }

  export type SkillProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "headline" | "profilename" | "githubUrl" | "vkUrl" | "telegramUrl" | "userId", ExtArgs["result"]["skillProfile"]>
  export type SkillProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SkillProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SkillProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      headline: string | null
      profilename: string | null
      githubUrl: string | null
      vkUrl: string | null
      telegramUrl: string | null
      userId: string
    }, ExtArgs["result"]["skillProfile"]>
    composites: {}
  }

  type SkillProfileGetPayload<S extends boolean | null | undefined | SkillProfileDefaultArgs> = $Result.GetResult<Prisma.$SkillProfilePayload, S>

  type SkillProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillProfileCountAggregateInputType | true
    }

  export interface SkillProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillProfile'], meta: { name: 'SkillProfile' } }
    /**
     * Find zero or one SkillProfile that matches the filter.
     * @param {SkillProfileFindUniqueArgs} args - Arguments to find a SkillProfile
     * @example
     * // Get one SkillProfile
     * const skillProfile = await prisma.skillProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillProfileFindUniqueArgs>(args: SelectSubset<T, SkillProfileFindUniqueArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillProfileFindUniqueOrThrowArgs} args - Arguments to find a SkillProfile
     * @example
     * // Get one SkillProfile
     * const skillProfile = await prisma.skillProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileFindFirstArgs} args - Arguments to find a SkillProfile
     * @example
     * // Get one SkillProfile
     * const skillProfile = await prisma.skillProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillProfileFindFirstArgs>(args?: SelectSubset<T, SkillProfileFindFirstArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileFindFirstOrThrowArgs} args - Arguments to find a SkillProfile
     * @example
     * // Get one SkillProfile
     * const skillProfile = await prisma.skillProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillProfiles
     * const skillProfiles = await prisma.skillProfile.findMany()
     * 
     * // Get first 10 SkillProfiles
     * const skillProfiles = await prisma.skillProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillProfileWithIdOnly = await prisma.skillProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillProfileFindManyArgs>(args?: SelectSubset<T, SkillProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillProfile.
     * @param {SkillProfileCreateArgs} args - Arguments to create a SkillProfile.
     * @example
     * // Create one SkillProfile
     * const SkillProfile = await prisma.skillProfile.create({
     *   data: {
     *     // ... data to create a SkillProfile
     *   }
     * })
     * 
     */
    create<T extends SkillProfileCreateArgs>(args: SelectSubset<T, SkillProfileCreateArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillProfiles.
     * @param {SkillProfileCreateManyArgs} args - Arguments to create many SkillProfiles.
     * @example
     * // Create many SkillProfiles
     * const skillProfile = await prisma.skillProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillProfileCreateManyArgs>(args?: SelectSubset<T, SkillProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillProfiles and returns the data saved in the database.
     * @param {SkillProfileCreateManyAndReturnArgs} args - Arguments to create many SkillProfiles.
     * @example
     * // Create many SkillProfiles
     * const skillProfile = await prisma.skillProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillProfiles and only return the `id`
     * const skillProfileWithIdOnly = await prisma.skillProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillProfile.
     * @param {SkillProfileDeleteArgs} args - Arguments to delete one SkillProfile.
     * @example
     * // Delete one SkillProfile
     * const SkillProfile = await prisma.skillProfile.delete({
     *   where: {
     *     // ... filter to delete one SkillProfile
     *   }
     * })
     * 
     */
    delete<T extends SkillProfileDeleteArgs>(args: SelectSubset<T, SkillProfileDeleteArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillProfile.
     * @param {SkillProfileUpdateArgs} args - Arguments to update one SkillProfile.
     * @example
     * // Update one SkillProfile
     * const skillProfile = await prisma.skillProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillProfileUpdateArgs>(args: SelectSubset<T, SkillProfileUpdateArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillProfiles.
     * @param {SkillProfileDeleteManyArgs} args - Arguments to filter SkillProfiles to delete.
     * @example
     * // Delete a few SkillProfiles
     * const { count } = await prisma.skillProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillProfileDeleteManyArgs>(args?: SelectSubset<T, SkillProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillProfiles
     * const skillProfile = await prisma.skillProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillProfileUpdateManyArgs>(args: SelectSubset<T, SkillProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillProfiles and returns the data updated in the database.
     * @param {SkillProfileUpdateManyAndReturnArgs} args - Arguments to update many SkillProfiles.
     * @example
     * // Update many SkillProfiles
     * const skillProfile = await prisma.skillProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillProfiles and only return the `id`
     * const skillProfileWithIdOnly = await prisma.skillProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillProfile.
     * @param {SkillProfileUpsertArgs} args - Arguments to update or create a SkillProfile.
     * @example
     * // Update or create a SkillProfile
     * const skillProfile = await prisma.skillProfile.upsert({
     *   create: {
     *     // ... data to create a SkillProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillProfile we want to update
     *   }
     * })
     */
    upsert<T extends SkillProfileUpsertArgs>(args: SelectSubset<T, SkillProfileUpsertArgs<ExtArgs>>): Prisma__SkillProfileClient<$Result.GetResult<Prisma.$SkillProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileCountArgs} args - Arguments to filter SkillProfiles to count.
     * @example
     * // Count the number of SkillProfiles
     * const count = await prisma.skillProfile.count({
     *   where: {
     *     // ... the filter for the SkillProfiles we want to count
     *   }
     * })
    **/
    count<T extends SkillProfileCountArgs>(
      args?: Subset<T, SkillProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillProfileAggregateArgs>(args: Subset<T, SkillProfileAggregateArgs>): Prisma.PrismaPromise<GetSkillProfileAggregateType<T>>

    /**
     * Group by SkillProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillProfileGroupByArgs['orderBy'] }
        : { orderBy?: SkillProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillProfile model
   */
  readonly fields: SkillProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SkillProfile model
   */ 
  interface SkillProfileFieldRefs {
    readonly id: FieldRef<"SkillProfile", 'String'>
    readonly headline: FieldRef<"SkillProfile", 'String'>
    readonly profilename: FieldRef<"SkillProfile", 'String'>
    readonly githubUrl: FieldRef<"SkillProfile", 'String'>
    readonly vkUrl: FieldRef<"SkillProfile", 'String'>
    readonly telegramUrl: FieldRef<"SkillProfile", 'String'>
    readonly userId: FieldRef<"SkillProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SkillProfile findUnique
   */
  export type SkillProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillProfile to fetch.
     */
    where: SkillProfileWhereUniqueInput
  }

  /**
   * SkillProfile findUniqueOrThrow
   */
  export type SkillProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillProfile to fetch.
     */
    where: SkillProfileWhereUniqueInput
  }

  /**
   * SkillProfile findFirst
   */
  export type SkillProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillProfile to fetch.
     */
    where?: SkillProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillProfiles to fetch.
     */
    orderBy?: SkillProfileOrderByWithRelationInput | SkillProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillProfiles.
     */
    cursor?: SkillProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillProfiles.
     */
    distinct?: SkillProfileScalarFieldEnum | SkillProfileScalarFieldEnum[]
  }

  /**
   * SkillProfile findFirstOrThrow
   */
  export type SkillProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillProfile to fetch.
     */
    where?: SkillProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillProfiles to fetch.
     */
    orderBy?: SkillProfileOrderByWithRelationInput | SkillProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillProfiles.
     */
    cursor?: SkillProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillProfiles.
     */
    distinct?: SkillProfileScalarFieldEnum | SkillProfileScalarFieldEnum[]
  }

  /**
   * SkillProfile findMany
   */
  export type SkillProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter, which SkillProfiles to fetch.
     */
    where?: SkillProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillProfiles to fetch.
     */
    orderBy?: SkillProfileOrderByWithRelationInput | SkillProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillProfiles.
     */
    cursor?: SkillProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillProfiles.
     */
    skip?: number
    distinct?: SkillProfileScalarFieldEnum | SkillProfileScalarFieldEnum[]
  }

  /**
   * SkillProfile create
   */
  export type SkillProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a SkillProfile.
     */
    data: XOR<SkillProfileCreateInput, SkillProfileUncheckedCreateInput>
  }

  /**
   * SkillProfile createMany
   */
  export type SkillProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillProfiles.
     */
    data: SkillProfileCreateManyInput | SkillProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillProfile createManyAndReturn
   */
  export type SkillProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * The data used to create many SkillProfiles.
     */
    data: SkillProfileCreateManyInput | SkillProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillProfile update
   */
  export type SkillProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a SkillProfile.
     */
    data: XOR<SkillProfileUpdateInput, SkillProfileUncheckedUpdateInput>
    /**
     * Choose, which SkillProfile to update.
     */
    where: SkillProfileWhereUniqueInput
  }

  /**
   * SkillProfile updateMany
   */
  export type SkillProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillProfiles.
     */
    data: XOR<SkillProfileUpdateManyMutationInput, SkillProfileUncheckedUpdateManyInput>
    /**
     * Filter which SkillProfiles to update
     */
    where?: SkillProfileWhereInput
    /**
     * Limit how many SkillProfiles to update.
     */
    limit?: number
  }

  /**
   * SkillProfile updateManyAndReturn
   */
  export type SkillProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * The data used to update SkillProfiles.
     */
    data: XOR<SkillProfileUpdateManyMutationInput, SkillProfileUncheckedUpdateManyInput>
    /**
     * Filter which SkillProfiles to update
     */
    where?: SkillProfileWhereInput
    /**
     * Limit how many SkillProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SkillProfile upsert
   */
  export type SkillProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the SkillProfile to update in case it exists.
     */
    where: SkillProfileWhereUniqueInput
    /**
     * In case the SkillProfile found by the `where` argument doesn't exist, create a new SkillProfile with this data.
     */
    create: XOR<SkillProfileCreateInput, SkillProfileUncheckedCreateInput>
    /**
     * In case the SkillProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillProfileUpdateInput, SkillProfileUncheckedUpdateInput>
  }

  /**
   * SkillProfile delete
   */
  export type SkillProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
    /**
     * Filter which SkillProfile to delete.
     */
    where: SkillProfileWhereUniqueInput
  }

  /**
   * SkillProfile deleteMany
   */
  export type SkillProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillProfiles to delete
     */
    where?: SkillProfileWhereInput
    /**
     * Limit how many SkillProfiles to delete.
     */
    limit?: number
  }

  /**
   * SkillProfile without action
   */
  export type SkillProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillProfile
     */
    select?: SkillProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillProfile
     */
    omit?: SkillProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillProfileInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    type: string | null
    provider: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    type: string | null
    provider: string | null
    refreshToken: string | null
    accessToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    type: number
    provider: number
    refreshToken: number
    accessToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    type?: true
    provider?: true
    refreshToken?: true
    accessToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    type: string
    provider: string
    refreshToken: string | null
    accessToken: string | null
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    type?: boolean
    provider?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "type" | "provider" | "refreshToken" | "accessToken" | "expiresAt" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      type: string
      provider: string
      refreshToken: string | null
      accessToken: string | null
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly expiresAt: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly userId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    oauthToken: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    type: $Enums.TokenType | null
    expiresIn: Date | null
    oauthToken: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    type: number
    expiresIn: number
    oauthToken: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    oauthToken?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    oauthToken?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    type?: true
    expiresIn?: true
    oauthToken?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date
    oauthToken: string | null
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    oauthToken?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    oauthToken?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    oauthToken?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    type?: boolean
    expiresIn?: boolean
    oauthToken?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "type" | "expiresIn" | "oauthToken", ExtArgs["result"]["token"]>

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      type: $Enums.TokenType
      expiresIn: Date
      oauthToken: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */ 
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly email: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly type: FieldRef<"Token", 'TokenType'>
    readonly expiresIn: FieldRef<"Token", 'DateTime'>
    readonly oauthToken: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    privateType: $Enums.PrivateType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    privateType: $Enums.PrivateType | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    title: number
    description: number
    privateType: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RouteMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    privateType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    privateType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    privateType?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: string
    title: string
    description: string | null
    privateType: $Enums.PrivateType
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: RouteCountAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    privateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    topicNodes?: boolean | Route$topicNodesArgs<ExtArgs>
    tags?: boolean | Route$tagsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    privateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    privateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    privateType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "privateType" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    topicNodes?: boolean | Route$topicNodesArgs<ExtArgs>
    tags?: boolean | Route$tagsArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      topicNodes: Prisma.$TopicNodePayload<ExtArgs>[]
      tags: Prisma.$RouteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      privateType: $Enums.PrivateType
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    topicNodes<T extends Route$topicNodesArgs<ExtArgs> = {}>(args?: Subset<T, Route$topicNodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Route$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Route$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */ 
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'String'>
    readonly title: FieldRef<"Route", 'String'>
    readonly description: FieldRef<"Route", 'String'>
    readonly privateType: FieldRef<"Route", 'PrivateType'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
    readonly userId: FieldRef<"Route", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.topicNodes
   */
  export type Route$topicNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    where?: TopicNodeWhereInput
    orderBy?: TopicNodeOrderByWithRelationInput | TopicNodeOrderByWithRelationInput[]
    cursor?: TopicNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicNodeScalarFieldEnum | TopicNodeScalarFieldEnum[]
  }

  /**
   * Route.tags
   */
  export type Route$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    where?: RouteTagWhereInput
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    cursor?: RouteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteTagScalarFieldEnum | RouteTagScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    routes?: boolean | Tag$routesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routes?: boolean | Tag$routesArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      routes: Prisma.$RouteTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routes<T extends Tag$routesArgs<ExtArgs> = {}>(args?: Subset<T, Tag$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.routes
   */
  export type Tag$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    where?: RouteTagWhereInput
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    cursor?: RouteTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteTagScalarFieldEnum | RouteTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model RouteTag
   */

  export type AggregateRouteTag = {
    _count: RouteTagCountAggregateOutputType | null
    _min: RouteTagMinAggregateOutputType | null
    _max: RouteTagMaxAggregateOutputType | null
  }

  export type RouteTagMinAggregateOutputType = {
    id: string | null
    routeId: string | null
    tagId: string | null
  }

  export type RouteTagMaxAggregateOutputType = {
    id: string | null
    routeId: string | null
    tagId: string | null
  }

  export type RouteTagCountAggregateOutputType = {
    id: number
    routeId: number
    tagId: number
    _all: number
  }


  export type RouteTagMinAggregateInputType = {
    id?: true
    routeId?: true
    tagId?: true
  }

  export type RouteTagMaxAggregateInputType = {
    id?: true
    routeId?: true
    tagId?: true
  }

  export type RouteTagCountAggregateInputType = {
    id?: true
    routeId?: true
    tagId?: true
    _all?: true
  }

  export type RouteTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteTag to aggregate.
     */
    where?: RouteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteTags to fetch.
     */
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteTags
    **/
    _count?: true | RouteTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteTagMaxAggregateInputType
  }

  export type GetRouteTagAggregateType<T extends RouteTagAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteTag[P]>
      : GetScalarType<T[P], AggregateRouteTag[P]>
  }




  export type RouteTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteTagWhereInput
    orderBy?: RouteTagOrderByWithAggregationInput | RouteTagOrderByWithAggregationInput[]
    by: RouteTagScalarFieldEnum[] | RouteTagScalarFieldEnum
    having?: RouteTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteTagCountAggregateInputType | true
    _min?: RouteTagMinAggregateInputType
    _max?: RouteTagMaxAggregateInputType
  }

  export type RouteTagGroupByOutputType = {
    id: string
    routeId: string
    tagId: string
    _count: RouteTagCountAggregateOutputType | null
    _min: RouteTagMinAggregateOutputType | null
    _max: RouteTagMaxAggregateOutputType | null
  }

  type GetRouteTagGroupByPayload<T extends RouteTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteTagGroupByOutputType[P]>
            : GetScalarType<T[P], RouteTagGroupByOutputType[P]>
        }
      >
    >


  export type RouteTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    tagId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeTag"]>

  export type RouteTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    tagId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeTag"]>

  export type RouteTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    tagId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeTag"]>

  export type RouteTagSelectScalar = {
    id?: boolean
    routeId?: boolean
    tagId?: boolean
  }

  export type RouteTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "tagId", ExtArgs["result"]["routeTag"]>
  export type RouteTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type RouteTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type RouteTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $RouteTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteTag"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      routeId: string
      tagId: string
    }, ExtArgs["result"]["routeTag"]>
    composites: {}
  }

  type RouteTagGetPayload<S extends boolean | null | undefined | RouteTagDefaultArgs> = $Result.GetResult<Prisma.$RouteTagPayload, S>

  type RouteTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteTagCountAggregateInputType | true
    }

  export interface RouteTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteTag'], meta: { name: 'RouteTag' } }
    /**
     * Find zero or one RouteTag that matches the filter.
     * @param {RouteTagFindUniqueArgs} args - Arguments to find a RouteTag
     * @example
     * // Get one RouteTag
     * const routeTag = await prisma.routeTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteTagFindUniqueArgs>(args: SelectSubset<T, RouteTagFindUniqueArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteTagFindUniqueOrThrowArgs} args - Arguments to find a RouteTag
     * @example
     * // Get one RouteTag
     * const routeTag = await prisma.routeTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteTagFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagFindFirstArgs} args - Arguments to find a RouteTag
     * @example
     * // Get one RouteTag
     * const routeTag = await prisma.routeTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteTagFindFirstArgs>(args?: SelectSubset<T, RouteTagFindFirstArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagFindFirstOrThrowArgs} args - Arguments to find a RouteTag
     * @example
     * // Get one RouteTag
     * const routeTag = await prisma.routeTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteTagFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteTags
     * const routeTags = await prisma.routeTag.findMany()
     * 
     * // Get first 10 RouteTags
     * const routeTags = await prisma.routeTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeTagWithIdOnly = await prisma.routeTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteTagFindManyArgs>(args?: SelectSubset<T, RouteTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteTag.
     * @param {RouteTagCreateArgs} args - Arguments to create a RouteTag.
     * @example
     * // Create one RouteTag
     * const RouteTag = await prisma.routeTag.create({
     *   data: {
     *     // ... data to create a RouteTag
     *   }
     * })
     * 
     */
    create<T extends RouteTagCreateArgs>(args: SelectSubset<T, RouteTagCreateArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteTags.
     * @param {RouteTagCreateManyArgs} args - Arguments to create many RouteTags.
     * @example
     * // Create many RouteTags
     * const routeTag = await prisma.routeTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteTagCreateManyArgs>(args?: SelectSubset<T, RouteTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteTags and returns the data saved in the database.
     * @param {RouteTagCreateManyAndReturnArgs} args - Arguments to create many RouteTags.
     * @example
     * // Create many RouteTags
     * const routeTag = await prisma.routeTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteTags and only return the `id`
     * const routeTagWithIdOnly = await prisma.routeTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteTagCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteTag.
     * @param {RouteTagDeleteArgs} args - Arguments to delete one RouteTag.
     * @example
     * // Delete one RouteTag
     * const RouteTag = await prisma.routeTag.delete({
     *   where: {
     *     // ... filter to delete one RouteTag
     *   }
     * })
     * 
     */
    delete<T extends RouteTagDeleteArgs>(args: SelectSubset<T, RouteTagDeleteArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteTag.
     * @param {RouteTagUpdateArgs} args - Arguments to update one RouteTag.
     * @example
     * // Update one RouteTag
     * const routeTag = await prisma.routeTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteTagUpdateArgs>(args: SelectSubset<T, RouteTagUpdateArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteTags.
     * @param {RouteTagDeleteManyArgs} args - Arguments to filter RouteTags to delete.
     * @example
     * // Delete a few RouteTags
     * const { count } = await prisma.routeTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteTagDeleteManyArgs>(args?: SelectSubset<T, RouteTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteTags
     * const routeTag = await prisma.routeTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteTagUpdateManyArgs>(args: SelectSubset<T, RouteTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteTags and returns the data updated in the database.
     * @param {RouteTagUpdateManyAndReturnArgs} args - Arguments to update many RouteTags.
     * @example
     * // Update many RouteTags
     * const routeTag = await prisma.routeTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteTags and only return the `id`
     * const routeTagWithIdOnly = await prisma.routeTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteTagUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteTag.
     * @param {RouteTagUpsertArgs} args - Arguments to update or create a RouteTag.
     * @example
     * // Update or create a RouteTag
     * const routeTag = await prisma.routeTag.upsert({
     *   create: {
     *     // ... data to create a RouteTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteTag we want to update
     *   }
     * })
     */
    upsert<T extends RouteTagUpsertArgs>(args: SelectSubset<T, RouteTagUpsertArgs<ExtArgs>>): Prisma__RouteTagClient<$Result.GetResult<Prisma.$RouteTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagCountArgs} args - Arguments to filter RouteTags to count.
     * @example
     * // Count the number of RouteTags
     * const count = await prisma.routeTag.count({
     *   where: {
     *     // ... the filter for the RouteTags we want to count
     *   }
     * })
    **/
    count<T extends RouteTagCountArgs>(
      args?: Subset<T, RouteTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteTagAggregateArgs>(args: Subset<T, RouteTagAggregateArgs>): Prisma.PrismaPromise<GetRouteTagAggregateType<T>>

    /**
     * Group by RouteTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteTagGroupByArgs['orderBy'] }
        : { orderBy?: RouteTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteTag model
   */
  readonly fields: RouteTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteTag model
   */ 
  interface RouteTagFieldRefs {
    readonly id: FieldRef<"RouteTag", 'String'>
    readonly routeId: FieldRef<"RouteTag", 'String'>
    readonly tagId: FieldRef<"RouteTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RouteTag findUnique
   */
  export type RouteTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter, which RouteTag to fetch.
     */
    where: RouteTagWhereUniqueInput
  }

  /**
   * RouteTag findUniqueOrThrow
   */
  export type RouteTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter, which RouteTag to fetch.
     */
    where: RouteTagWhereUniqueInput
  }

  /**
   * RouteTag findFirst
   */
  export type RouteTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter, which RouteTag to fetch.
     */
    where?: RouteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteTags to fetch.
     */
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteTags.
     */
    cursor?: RouteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteTags.
     */
    distinct?: RouteTagScalarFieldEnum | RouteTagScalarFieldEnum[]
  }

  /**
   * RouteTag findFirstOrThrow
   */
  export type RouteTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter, which RouteTag to fetch.
     */
    where?: RouteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteTags to fetch.
     */
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteTags.
     */
    cursor?: RouteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteTags.
     */
    distinct?: RouteTagScalarFieldEnum | RouteTagScalarFieldEnum[]
  }

  /**
   * RouteTag findMany
   */
  export type RouteTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter, which RouteTags to fetch.
     */
    where?: RouteTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteTags to fetch.
     */
    orderBy?: RouteTagOrderByWithRelationInput | RouteTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteTags.
     */
    cursor?: RouteTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteTags.
     */
    skip?: number
    distinct?: RouteTagScalarFieldEnum | RouteTagScalarFieldEnum[]
  }

  /**
   * RouteTag create
   */
  export type RouteTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteTag.
     */
    data: XOR<RouteTagCreateInput, RouteTagUncheckedCreateInput>
  }

  /**
   * RouteTag createMany
   */
  export type RouteTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteTags.
     */
    data: RouteTagCreateManyInput | RouteTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteTag createManyAndReturn
   */
  export type RouteTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * The data used to create many RouteTags.
     */
    data: RouteTagCreateManyInput | RouteTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteTag update
   */
  export type RouteTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteTag.
     */
    data: XOR<RouteTagUpdateInput, RouteTagUncheckedUpdateInput>
    /**
     * Choose, which RouteTag to update.
     */
    where: RouteTagWhereUniqueInput
  }

  /**
   * RouteTag updateMany
   */
  export type RouteTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteTags.
     */
    data: XOR<RouteTagUpdateManyMutationInput, RouteTagUncheckedUpdateManyInput>
    /**
     * Filter which RouteTags to update
     */
    where?: RouteTagWhereInput
    /**
     * Limit how many RouteTags to update.
     */
    limit?: number
  }

  /**
   * RouteTag updateManyAndReturn
   */
  export type RouteTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * The data used to update RouteTags.
     */
    data: XOR<RouteTagUpdateManyMutationInput, RouteTagUncheckedUpdateManyInput>
    /**
     * Filter which RouteTags to update
     */
    where?: RouteTagWhereInput
    /**
     * Limit how many RouteTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteTag upsert
   */
  export type RouteTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteTag to update in case it exists.
     */
    where: RouteTagWhereUniqueInput
    /**
     * In case the RouteTag found by the `where` argument doesn't exist, create a new RouteTag with this data.
     */
    create: XOR<RouteTagCreateInput, RouteTagUncheckedCreateInput>
    /**
     * In case the RouteTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteTagUpdateInput, RouteTagUncheckedUpdateInput>
  }

  /**
   * RouteTag delete
   */
  export type RouteTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
    /**
     * Filter which RouteTag to delete.
     */
    where: RouteTagWhereUniqueInput
  }

  /**
   * RouteTag deleteMany
   */
  export type RouteTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteTags to delete
     */
    where?: RouteTagWhereInput
    /**
     * Limit how many RouteTags to delete.
     */
    limit?: number
  }

  /**
   * RouteTag without action
   */
  export type RouteTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteTag
     */
    select?: RouteTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteTag
     */
    omit?: RouteTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteTagInclude<ExtArgs> | null
  }


  /**
   * Model TopicNode
   */

  export type AggregateTopicNode = {
    _count: TopicNodeCountAggregateOutputType | null
    _min: TopicNodeMinAggregateOutputType | null
    _max: TopicNodeMaxAggregateOutputType | null
  }

  export type TopicNodeMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    routeId: string | null
  }

  export type TopicNodeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    routeId: string | null
  }

  export type TopicNodeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    routeId: number
    _all: number
  }


  export type TopicNodeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    routeId?: true
  }

  export type TopicNodeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    routeId?: true
  }

  export type TopicNodeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    routeId?: true
    _all?: true
  }

  export type TopicNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicNode to aggregate.
     */
    where?: TopicNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicNodes to fetch.
     */
    orderBy?: TopicNodeOrderByWithRelationInput | TopicNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicNodes
    **/
    _count?: true | TopicNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicNodeMaxAggregateInputType
  }

  export type GetTopicNodeAggregateType<T extends TopicNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicNode[P]>
      : GetScalarType<T[P], AggregateTopicNode[P]>
  }




  export type TopicNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicNodeWhereInput
    orderBy?: TopicNodeOrderByWithAggregationInput | TopicNodeOrderByWithAggregationInput[]
    by: TopicNodeScalarFieldEnum[] | TopicNodeScalarFieldEnum
    having?: TopicNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicNodeCountAggregateInputType | true
    _min?: TopicNodeMinAggregateInputType
    _max?: TopicNodeMaxAggregateInputType
  }

  export type TopicNodeGroupByOutputType = {
    id: string
    title: string
    content: string | null
    routeId: string
    _count: TopicNodeCountAggregateOutputType | null
    _min: TopicNodeMinAggregateOutputType | null
    _max: TopicNodeMaxAggregateOutputType | null
  }

  type GetTopicNodeGroupByPayload<T extends TopicNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicNodeGroupByOutputType[P]>
            : GetScalarType<T[P], TopicNodeGroupByOutputType[P]>
        }
      >
    >


  export type TopicNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    routeId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    incomingEdges?: boolean | TopicNode$incomingEdgesArgs<ExtArgs>
    outgoingEdges?: boolean | TopicNode$outgoingEdgesArgs<ExtArgs>
    _count?: boolean | TopicNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicNode"]>

  export type TopicNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    routeId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicNode"]>

  export type TopicNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    routeId?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicNode"]>

  export type TopicNodeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    routeId?: boolean
  }

  export type TopicNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "routeId", ExtArgs["result"]["topicNode"]>
  export type TopicNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    incomingEdges?: boolean | TopicNode$incomingEdgesArgs<ExtArgs>
    outgoingEdges?: boolean | TopicNode$outgoingEdgesArgs<ExtArgs>
    _count?: boolean | TopicNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TopicNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type TopicNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $TopicNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicNode"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      incomingEdges: Prisma.$TopicEdgePayload<ExtArgs>[]
      outgoingEdges: Prisma.$TopicEdgePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string | null
      routeId: string
    }, ExtArgs["result"]["topicNode"]>
    composites: {}
  }

  type TopicNodeGetPayload<S extends boolean | null | undefined | TopicNodeDefaultArgs> = $Result.GetResult<Prisma.$TopicNodePayload, S>

  type TopicNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicNodeCountAggregateInputType | true
    }

  export interface TopicNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicNode'], meta: { name: 'TopicNode' } }
    /**
     * Find zero or one TopicNode that matches the filter.
     * @param {TopicNodeFindUniqueArgs} args - Arguments to find a TopicNode
     * @example
     * // Get one TopicNode
     * const topicNode = await prisma.topicNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicNodeFindUniqueArgs>(args: SelectSubset<T, TopicNodeFindUniqueArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicNodeFindUniqueOrThrowArgs} args - Arguments to find a TopicNode
     * @example
     * // Get one TopicNode
     * const topicNode = await prisma.topicNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeFindFirstArgs} args - Arguments to find a TopicNode
     * @example
     * // Get one TopicNode
     * const topicNode = await prisma.topicNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicNodeFindFirstArgs>(args?: SelectSubset<T, TopicNodeFindFirstArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeFindFirstOrThrowArgs} args - Arguments to find a TopicNode
     * @example
     * // Get one TopicNode
     * const topicNode = await prisma.topicNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicNodes
     * const topicNodes = await prisma.topicNode.findMany()
     * 
     * // Get first 10 TopicNodes
     * const topicNodes = await prisma.topicNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicNodeWithIdOnly = await prisma.topicNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicNodeFindManyArgs>(args?: SelectSubset<T, TopicNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicNode.
     * @param {TopicNodeCreateArgs} args - Arguments to create a TopicNode.
     * @example
     * // Create one TopicNode
     * const TopicNode = await prisma.topicNode.create({
     *   data: {
     *     // ... data to create a TopicNode
     *   }
     * })
     * 
     */
    create<T extends TopicNodeCreateArgs>(args: SelectSubset<T, TopicNodeCreateArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicNodes.
     * @param {TopicNodeCreateManyArgs} args - Arguments to create many TopicNodes.
     * @example
     * // Create many TopicNodes
     * const topicNode = await prisma.topicNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicNodeCreateManyArgs>(args?: SelectSubset<T, TopicNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopicNodes and returns the data saved in the database.
     * @param {TopicNodeCreateManyAndReturnArgs} args - Arguments to create many TopicNodes.
     * @example
     * // Create many TopicNodes
     * const topicNode = await prisma.topicNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopicNodes and only return the `id`
     * const topicNodeWithIdOnly = await prisma.topicNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopicNode.
     * @param {TopicNodeDeleteArgs} args - Arguments to delete one TopicNode.
     * @example
     * // Delete one TopicNode
     * const TopicNode = await prisma.topicNode.delete({
     *   where: {
     *     // ... filter to delete one TopicNode
     *   }
     * })
     * 
     */
    delete<T extends TopicNodeDeleteArgs>(args: SelectSubset<T, TopicNodeDeleteArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicNode.
     * @param {TopicNodeUpdateArgs} args - Arguments to update one TopicNode.
     * @example
     * // Update one TopicNode
     * const topicNode = await prisma.topicNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicNodeUpdateArgs>(args: SelectSubset<T, TopicNodeUpdateArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicNodes.
     * @param {TopicNodeDeleteManyArgs} args - Arguments to filter TopicNodes to delete.
     * @example
     * // Delete a few TopicNodes
     * const { count } = await prisma.topicNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicNodeDeleteManyArgs>(args?: SelectSubset<T, TopicNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicNodes
     * const topicNode = await prisma.topicNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicNodeUpdateManyArgs>(args: SelectSubset<T, TopicNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicNodes and returns the data updated in the database.
     * @param {TopicNodeUpdateManyAndReturnArgs} args - Arguments to update many TopicNodes.
     * @example
     * // Update many TopicNodes
     * const topicNode = await prisma.topicNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopicNodes and only return the `id`
     * const topicNodeWithIdOnly = await prisma.topicNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopicNode.
     * @param {TopicNodeUpsertArgs} args - Arguments to update or create a TopicNode.
     * @example
     * // Update or create a TopicNode
     * const topicNode = await prisma.topicNode.upsert({
     *   create: {
     *     // ... data to create a TopicNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicNode we want to update
     *   }
     * })
     */
    upsert<T extends TopicNodeUpsertArgs>(args: SelectSubset<T, TopicNodeUpsertArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeCountArgs} args - Arguments to filter TopicNodes to count.
     * @example
     * // Count the number of TopicNodes
     * const count = await prisma.topicNode.count({
     *   where: {
     *     // ... the filter for the TopicNodes we want to count
     *   }
     * })
    **/
    count<T extends TopicNodeCountArgs>(
      args?: Subset<T, TopicNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicNodeAggregateArgs>(args: Subset<T, TopicNodeAggregateArgs>): Prisma.PrismaPromise<GetTopicNodeAggregateType<T>>

    /**
     * Group by TopicNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicNodeGroupByArgs['orderBy'] }
        : { orderBy?: TopicNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicNode model
   */
  readonly fields: TopicNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    incomingEdges<T extends TopicNode$incomingEdgesArgs<ExtArgs> = {}>(args?: Subset<T, TopicNode$incomingEdgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outgoingEdges<T extends TopicNode$outgoingEdgesArgs<ExtArgs> = {}>(args?: Subset<T, TopicNode$outgoingEdgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicNode model
   */ 
  interface TopicNodeFieldRefs {
    readonly id: FieldRef<"TopicNode", 'String'>
    readonly title: FieldRef<"TopicNode", 'String'>
    readonly content: FieldRef<"TopicNode", 'String'>
    readonly routeId: FieldRef<"TopicNode", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopicNode findUnique
   */
  export type TopicNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter, which TopicNode to fetch.
     */
    where: TopicNodeWhereUniqueInput
  }

  /**
   * TopicNode findUniqueOrThrow
   */
  export type TopicNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter, which TopicNode to fetch.
     */
    where: TopicNodeWhereUniqueInput
  }

  /**
   * TopicNode findFirst
   */
  export type TopicNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter, which TopicNode to fetch.
     */
    where?: TopicNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicNodes to fetch.
     */
    orderBy?: TopicNodeOrderByWithRelationInput | TopicNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicNodes.
     */
    cursor?: TopicNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicNodes.
     */
    distinct?: TopicNodeScalarFieldEnum | TopicNodeScalarFieldEnum[]
  }

  /**
   * TopicNode findFirstOrThrow
   */
  export type TopicNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter, which TopicNode to fetch.
     */
    where?: TopicNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicNodes to fetch.
     */
    orderBy?: TopicNodeOrderByWithRelationInput | TopicNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicNodes.
     */
    cursor?: TopicNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicNodes.
     */
    distinct?: TopicNodeScalarFieldEnum | TopicNodeScalarFieldEnum[]
  }

  /**
   * TopicNode findMany
   */
  export type TopicNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter, which TopicNodes to fetch.
     */
    where?: TopicNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicNodes to fetch.
     */
    orderBy?: TopicNodeOrderByWithRelationInput | TopicNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicNodes.
     */
    cursor?: TopicNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicNodes.
     */
    skip?: number
    distinct?: TopicNodeScalarFieldEnum | TopicNodeScalarFieldEnum[]
  }

  /**
   * TopicNode create
   */
  export type TopicNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicNode.
     */
    data: XOR<TopicNodeCreateInput, TopicNodeUncheckedCreateInput>
  }

  /**
   * TopicNode createMany
   */
  export type TopicNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicNodes.
     */
    data: TopicNodeCreateManyInput | TopicNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicNode createManyAndReturn
   */
  export type TopicNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * The data used to create many TopicNodes.
     */
    data: TopicNodeCreateManyInput | TopicNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicNode update
   */
  export type TopicNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicNode.
     */
    data: XOR<TopicNodeUpdateInput, TopicNodeUncheckedUpdateInput>
    /**
     * Choose, which TopicNode to update.
     */
    where: TopicNodeWhereUniqueInput
  }

  /**
   * TopicNode updateMany
   */
  export type TopicNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicNodes.
     */
    data: XOR<TopicNodeUpdateManyMutationInput, TopicNodeUncheckedUpdateManyInput>
    /**
     * Filter which TopicNodes to update
     */
    where?: TopicNodeWhereInput
    /**
     * Limit how many TopicNodes to update.
     */
    limit?: number
  }

  /**
   * TopicNode updateManyAndReturn
   */
  export type TopicNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * The data used to update TopicNodes.
     */
    data: XOR<TopicNodeUpdateManyMutationInput, TopicNodeUncheckedUpdateManyInput>
    /**
     * Filter which TopicNodes to update
     */
    where?: TopicNodeWhereInput
    /**
     * Limit how many TopicNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicNode upsert
   */
  export type TopicNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicNode to update in case it exists.
     */
    where: TopicNodeWhereUniqueInput
    /**
     * In case the TopicNode found by the `where` argument doesn't exist, create a new TopicNode with this data.
     */
    create: XOR<TopicNodeCreateInput, TopicNodeUncheckedCreateInput>
    /**
     * In case the TopicNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicNodeUpdateInput, TopicNodeUncheckedUpdateInput>
  }

  /**
   * TopicNode delete
   */
  export type TopicNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
    /**
     * Filter which TopicNode to delete.
     */
    where: TopicNodeWhereUniqueInput
  }

  /**
   * TopicNode deleteMany
   */
  export type TopicNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicNodes to delete
     */
    where?: TopicNodeWhereInput
    /**
     * Limit how many TopicNodes to delete.
     */
    limit?: number
  }

  /**
   * TopicNode.incomingEdges
   */
  export type TopicNode$incomingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    where?: TopicEdgeWhereInput
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    cursor?: TopicEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicEdgeScalarFieldEnum | TopicEdgeScalarFieldEnum[]
  }

  /**
   * TopicNode.outgoingEdges
   */
  export type TopicNode$outgoingEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    where?: TopicEdgeWhereInput
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    cursor?: TopicEdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TopicEdgeScalarFieldEnum | TopicEdgeScalarFieldEnum[]
  }

  /**
   * TopicNode without action
   */
  export type TopicNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicNode
     */
    select?: TopicNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicNode
     */
    omit?: TopicNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicNodeInclude<ExtArgs> | null
  }


  /**
   * Model TopicEdge
   */

  export type AggregateTopicEdge = {
    _count: TopicEdgeCountAggregateOutputType | null
    _min: TopicEdgeMinAggregateOutputType | null
    _max: TopicEdgeMaxAggregateOutputType | null
  }

  export type TopicEdgeMinAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
  }

  export type TopicEdgeMaxAggregateOutputType = {
    id: string | null
    fromId: string | null
    toId: string | null
  }

  export type TopicEdgeCountAggregateOutputType = {
    id: number
    fromId: number
    toId: number
    _all: number
  }


  export type TopicEdgeMinAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type TopicEdgeMaxAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
  }

  export type TopicEdgeCountAggregateInputType = {
    id?: true
    fromId?: true
    toId?: true
    _all?: true
  }

  export type TopicEdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicEdge to aggregate.
     */
    where?: TopicEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicEdges to fetch.
     */
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TopicEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TopicEdges
    **/
    _count?: true | TopicEdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TopicEdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TopicEdgeMaxAggregateInputType
  }

  export type GetTopicEdgeAggregateType<T extends TopicEdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateTopicEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTopicEdge[P]>
      : GetScalarType<T[P], AggregateTopicEdge[P]>
  }




  export type TopicEdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TopicEdgeWhereInput
    orderBy?: TopicEdgeOrderByWithAggregationInput | TopicEdgeOrderByWithAggregationInput[]
    by: TopicEdgeScalarFieldEnum[] | TopicEdgeScalarFieldEnum
    having?: TopicEdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TopicEdgeCountAggregateInputType | true
    _min?: TopicEdgeMinAggregateInputType
    _max?: TopicEdgeMaxAggregateInputType
  }

  export type TopicEdgeGroupByOutputType = {
    id: string
    fromId: string
    toId: string
    _count: TopicEdgeCountAggregateOutputType | null
    _min: TopicEdgeMinAggregateOutputType | null
    _max: TopicEdgeMaxAggregateOutputType | null
  }

  type GetTopicEdgeGroupByPayload<T extends TopicEdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TopicEdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TopicEdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TopicEdgeGroupByOutputType[P]>
            : GetScalarType<T[P], TopicEdgeGroupByOutputType[P]>
        }
      >
    >


  export type TopicEdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicEdge"]>

  export type TopicEdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicEdge"]>

  export type TopicEdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromId?: boolean
    toId?: boolean
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["topicEdge"]>

  export type TopicEdgeSelectScalar = {
    id?: boolean
    fromId?: boolean
    toId?: boolean
  }

  export type TopicEdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromId" | "toId", ExtArgs["result"]["topicEdge"]>
  export type TopicEdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }
  export type TopicEdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }
  export type TopicEdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    from?: boolean | TopicNodeDefaultArgs<ExtArgs>
    to?: boolean | TopicNodeDefaultArgs<ExtArgs>
  }

  export type $TopicEdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TopicEdge"
    objects: {
      from: Prisma.$TopicNodePayload<ExtArgs>
      to: Prisma.$TopicNodePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromId: string
      toId: string
    }, ExtArgs["result"]["topicEdge"]>
    composites: {}
  }

  type TopicEdgeGetPayload<S extends boolean | null | undefined | TopicEdgeDefaultArgs> = $Result.GetResult<Prisma.$TopicEdgePayload, S>

  type TopicEdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TopicEdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TopicEdgeCountAggregateInputType | true
    }

  export interface TopicEdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TopicEdge'], meta: { name: 'TopicEdge' } }
    /**
     * Find zero or one TopicEdge that matches the filter.
     * @param {TopicEdgeFindUniqueArgs} args - Arguments to find a TopicEdge
     * @example
     * // Get one TopicEdge
     * const topicEdge = await prisma.topicEdge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TopicEdgeFindUniqueArgs>(args: SelectSubset<T, TopicEdgeFindUniqueArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TopicEdge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TopicEdgeFindUniqueOrThrowArgs} args - Arguments to find a TopicEdge
     * @example
     * // Get one TopicEdge
     * const topicEdge = await prisma.topicEdge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TopicEdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, TopicEdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicEdge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeFindFirstArgs} args - Arguments to find a TopicEdge
     * @example
     * // Get one TopicEdge
     * const topicEdge = await prisma.topicEdge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TopicEdgeFindFirstArgs>(args?: SelectSubset<T, TopicEdgeFindFirstArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TopicEdge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeFindFirstOrThrowArgs} args - Arguments to find a TopicEdge
     * @example
     * // Get one TopicEdge
     * const topicEdge = await prisma.topicEdge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TopicEdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, TopicEdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TopicEdges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TopicEdges
     * const topicEdges = await prisma.topicEdge.findMany()
     * 
     * // Get first 10 TopicEdges
     * const topicEdges = await prisma.topicEdge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const topicEdgeWithIdOnly = await prisma.topicEdge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TopicEdgeFindManyArgs>(args?: SelectSubset<T, TopicEdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TopicEdge.
     * @param {TopicEdgeCreateArgs} args - Arguments to create a TopicEdge.
     * @example
     * // Create one TopicEdge
     * const TopicEdge = await prisma.topicEdge.create({
     *   data: {
     *     // ... data to create a TopicEdge
     *   }
     * })
     * 
     */
    create<T extends TopicEdgeCreateArgs>(args: SelectSubset<T, TopicEdgeCreateArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TopicEdges.
     * @param {TopicEdgeCreateManyArgs} args - Arguments to create many TopicEdges.
     * @example
     * // Create many TopicEdges
     * const topicEdge = await prisma.topicEdge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TopicEdgeCreateManyArgs>(args?: SelectSubset<T, TopicEdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TopicEdges and returns the data saved in the database.
     * @param {TopicEdgeCreateManyAndReturnArgs} args - Arguments to create many TopicEdges.
     * @example
     * // Create many TopicEdges
     * const topicEdge = await prisma.topicEdge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TopicEdges and only return the `id`
     * const topicEdgeWithIdOnly = await prisma.topicEdge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TopicEdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, TopicEdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TopicEdge.
     * @param {TopicEdgeDeleteArgs} args - Arguments to delete one TopicEdge.
     * @example
     * // Delete one TopicEdge
     * const TopicEdge = await prisma.topicEdge.delete({
     *   where: {
     *     // ... filter to delete one TopicEdge
     *   }
     * })
     * 
     */
    delete<T extends TopicEdgeDeleteArgs>(args: SelectSubset<T, TopicEdgeDeleteArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TopicEdge.
     * @param {TopicEdgeUpdateArgs} args - Arguments to update one TopicEdge.
     * @example
     * // Update one TopicEdge
     * const topicEdge = await prisma.topicEdge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TopicEdgeUpdateArgs>(args: SelectSubset<T, TopicEdgeUpdateArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TopicEdges.
     * @param {TopicEdgeDeleteManyArgs} args - Arguments to filter TopicEdges to delete.
     * @example
     * // Delete a few TopicEdges
     * const { count } = await prisma.topicEdge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TopicEdgeDeleteManyArgs>(args?: SelectSubset<T, TopicEdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TopicEdges
     * const topicEdge = await prisma.topicEdge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TopicEdgeUpdateManyArgs>(args: SelectSubset<T, TopicEdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TopicEdges and returns the data updated in the database.
     * @param {TopicEdgeUpdateManyAndReturnArgs} args - Arguments to update many TopicEdges.
     * @example
     * // Update many TopicEdges
     * const topicEdge = await prisma.topicEdge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TopicEdges and only return the `id`
     * const topicEdgeWithIdOnly = await prisma.topicEdge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TopicEdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, TopicEdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TopicEdge.
     * @param {TopicEdgeUpsertArgs} args - Arguments to update or create a TopicEdge.
     * @example
     * // Update or create a TopicEdge
     * const topicEdge = await prisma.topicEdge.upsert({
     *   create: {
     *     // ... data to create a TopicEdge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TopicEdge we want to update
     *   }
     * })
     */
    upsert<T extends TopicEdgeUpsertArgs>(args: SelectSubset<T, TopicEdgeUpsertArgs<ExtArgs>>): Prisma__TopicEdgeClient<$Result.GetResult<Prisma.$TopicEdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TopicEdges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeCountArgs} args - Arguments to filter TopicEdges to count.
     * @example
     * // Count the number of TopicEdges
     * const count = await prisma.topicEdge.count({
     *   where: {
     *     // ... the filter for the TopicEdges we want to count
     *   }
     * })
    **/
    count<T extends TopicEdgeCountArgs>(
      args?: Subset<T, TopicEdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TopicEdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TopicEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TopicEdgeAggregateArgs>(args: Subset<T, TopicEdgeAggregateArgs>): Prisma.PrismaPromise<GetTopicEdgeAggregateType<T>>

    /**
     * Group by TopicEdge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TopicEdgeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TopicEdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TopicEdgeGroupByArgs['orderBy'] }
        : { orderBy?: TopicEdgeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TopicEdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTopicEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TopicEdge model
   */
  readonly fields: TopicEdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TopicEdge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TopicEdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    from<T extends TopicNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicNodeDefaultArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    to<T extends TopicNodeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TopicNodeDefaultArgs<ExtArgs>>): Prisma__TopicNodeClient<$Result.GetResult<Prisma.$TopicNodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TopicEdge model
   */ 
  interface TopicEdgeFieldRefs {
    readonly id: FieldRef<"TopicEdge", 'String'>
    readonly fromId: FieldRef<"TopicEdge", 'String'>
    readonly toId: FieldRef<"TopicEdge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TopicEdge findUnique
   */
  export type TopicEdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter, which TopicEdge to fetch.
     */
    where: TopicEdgeWhereUniqueInput
  }

  /**
   * TopicEdge findUniqueOrThrow
   */
  export type TopicEdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter, which TopicEdge to fetch.
     */
    where: TopicEdgeWhereUniqueInput
  }

  /**
   * TopicEdge findFirst
   */
  export type TopicEdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter, which TopicEdge to fetch.
     */
    where?: TopicEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicEdges to fetch.
     */
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicEdges.
     */
    cursor?: TopicEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicEdges.
     */
    distinct?: TopicEdgeScalarFieldEnum | TopicEdgeScalarFieldEnum[]
  }

  /**
   * TopicEdge findFirstOrThrow
   */
  export type TopicEdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter, which TopicEdge to fetch.
     */
    where?: TopicEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicEdges to fetch.
     */
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TopicEdges.
     */
    cursor?: TopicEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicEdges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TopicEdges.
     */
    distinct?: TopicEdgeScalarFieldEnum | TopicEdgeScalarFieldEnum[]
  }

  /**
   * TopicEdge findMany
   */
  export type TopicEdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter, which TopicEdges to fetch.
     */
    where?: TopicEdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TopicEdges to fetch.
     */
    orderBy?: TopicEdgeOrderByWithRelationInput | TopicEdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TopicEdges.
     */
    cursor?: TopicEdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TopicEdges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TopicEdges.
     */
    skip?: number
    distinct?: TopicEdgeScalarFieldEnum | TopicEdgeScalarFieldEnum[]
  }

  /**
   * TopicEdge create
   */
  export type TopicEdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a TopicEdge.
     */
    data: XOR<TopicEdgeCreateInput, TopicEdgeUncheckedCreateInput>
  }

  /**
   * TopicEdge createMany
   */
  export type TopicEdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TopicEdges.
     */
    data: TopicEdgeCreateManyInput | TopicEdgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TopicEdge createManyAndReturn
   */
  export type TopicEdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * The data used to create many TopicEdges.
     */
    data: TopicEdgeCreateManyInput | TopicEdgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicEdge update
   */
  export type TopicEdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a TopicEdge.
     */
    data: XOR<TopicEdgeUpdateInput, TopicEdgeUncheckedUpdateInput>
    /**
     * Choose, which TopicEdge to update.
     */
    where: TopicEdgeWhereUniqueInput
  }

  /**
   * TopicEdge updateMany
   */
  export type TopicEdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TopicEdges.
     */
    data: XOR<TopicEdgeUpdateManyMutationInput, TopicEdgeUncheckedUpdateManyInput>
    /**
     * Filter which TopicEdges to update
     */
    where?: TopicEdgeWhereInput
    /**
     * Limit how many TopicEdges to update.
     */
    limit?: number
  }

  /**
   * TopicEdge updateManyAndReturn
   */
  export type TopicEdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * The data used to update TopicEdges.
     */
    data: XOR<TopicEdgeUpdateManyMutationInput, TopicEdgeUncheckedUpdateManyInput>
    /**
     * Filter which TopicEdges to update
     */
    where?: TopicEdgeWhereInput
    /**
     * Limit how many TopicEdges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TopicEdge upsert
   */
  export type TopicEdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the TopicEdge to update in case it exists.
     */
    where: TopicEdgeWhereUniqueInput
    /**
     * In case the TopicEdge found by the `where` argument doesn't exist, create a new TopicEdge with this data.
     */
    create: XOR<TopicEdgeCreateInput, TopicEdgeUncheckedCreateInput>
    /**
     * In case the TopicEdge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TopicEdgeUpdateInput, TopicEdgeUncheckedUpdateInput>
  }

  /**
   * TopicEdge delete
   */
  export type TopicEdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
    /**
     * Filter which TopicEdge to delete.
     */
    where: TopicEdgeWhereUniqueInput
  }

  /**
   * TopicEdge deleteMany
   */
  export type TopicEdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TopicEdges to delete
     */
    where?: TopicEdgeWhereInput
    /**
     * Limit how many TopicEdges to delete.
     */
    limit?: number
  }

  /**
   * TopicEdge without action
   */
  export type TopicEdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TopicEdge
     */
    select?: TopicEdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TopicEdge
     */
    omit?: TopicEdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TopicEdgeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SkillProfileScalarFieldEnum: {
    id: 'id',
    headline: 'headline',
    profilename: 'profilename',
    githubUrl: 'githubUrl',
    vkUrl: 'vkUrl',
    telegramUrl: 'telegramUrl',
    userId: 'userId'
  };

  export type SkillProfileScalarFieldEnum = (typeof SkillProfileScalarFieldEnum)[keyof typeof SkillProfileScalarFieldEnum]


  export const AccountScalarFieldEnum: {
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

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    type: 'type',
    expiresIn: 'expiresIn',
    oauthToken: 'oauthToken'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    privateType: 'privateType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const RouteTagScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    tagId: 'tagId'
  };

  export type RouteTagScalarFieldEnum = (typeof RouteTagScalarFieldEnum)[keyof typeof RouteTagScalarFieldEnum]


  export const TopicNodeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    routeId: 'routeId'
  };

  export type TopicNodeScalarFieldEnum = (typeof TopicNodeScalarFieldEnum)[keyof typeof TopicNodeScalarFieldEnum]


  export const TopicEdgeScalarFieldEnum: {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId'
  };

  export type TopicEdgeScalarFieldEnum = (typeof TopicEdgeScalarFieldEnum)[keyof typeof TopicEdgeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AuthMethod'
   */
  export type EnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod'>
    


  /**
   * Reference to a field of type 'AuthMethod[]'
   */
  export type ListEnumAuthMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthMethod[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'TokenType[]'
   */
  export type ListEnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType[]'>
    


  /**
   * Reference to a field of type 'PrivateType'
   */
  export type EnumPrivateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivateType'>
    


  /**
   * Reference to a field of type 'PrivateType[]'
   */
  export type ListEnumPrivateTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PrivateType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    skillProfile?: XOR<SkillProfileNullableScalarRelationFilter, SkillProfileWhereInput> | null
    Route?: RouteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    skillProfile?: SkillProfileOrderByWithRelationInput
    Route?: RouteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isVerified?: BoolFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolFilter<"User"> | boolean
    method?: EnumAuthMethodFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    skillProfile?: XOR<SkillProfileNullableScalarRelationFilter, SkillProfileWhereInput> | null
    Route?: RouteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isTwoFactorEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    method?: EnumAuthMethodWithAggregatesFilter<"User"> | $Enums.AuthMethod
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SkillProfileWhereInput = {
    AND?: SkillProfileWhereInput | SkillProfileWhereInput[]
    OR?: SkillProfileWhereInput[]
    NOT?: SkillProfileWhereInput | SkillProfileWhereInput[]
    id?: StringFilter<"SkillProfile"> | string
    headline?: StringNullableFilter<"SkillProfile"> | string | null
    profilename?: StringNullableFilter<"SkillProfile"> | string | null
    githubUrl?: StringNullableFilter<"SkillProfile"> | string | null
    vkUrl?: StringNullableFilter<"SkillProfile"> | string | null
    telegramUrl?: StringNullableFilter<"SkillProfile"> | string | null
    userId?: StringFilter<"SkillProfile"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SkillProfileOrderByWithRelationInput = {
    id?: SortOrder
    headline?: SortOrderInput | SortOrder
    profilename?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    vkUrl?: SortOrderInput | SortOrder
    telegramUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profilename?: string
    userId?: string
    AND?: SkillProfileWhereInput | SkillProfileWhereInput[]
    OR?: SkillProfileWhereInput[]
    NOT?: SkillProfileWhereInput | SkillProfileWhereInput[]
    headline?: StringNullableFilter<"SkillProfile"> | string | null
    githubUrl?: StringNullableFilter<"SkillProfile"> | string | null
    vkUrl?: StringNullableFilter<"SkillProfile"> | string | null
    telegramUrl?: StringNullableFilter<"SkillProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "profilename" | "userId">

  export type SkillProfileOrderByWithAggregationInput = {
    id?: SortOrder
    headline?: SortOrderInput | SortOrder
    profilename?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    vkUrl?: SortOrderInput | SortOrder
    telegramUrl?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SkillProfileCountOrderByAggregateInput
    _max?: SkillProfileMaxOrderByAggregateInput
    _min?: SkillProfileMinOrderByAggregateInput
  }

  export type SkillProfileScalarWhereWithAggregatesInput = {
    AND?: SkillProfileScalarWhereWithAggregatesInput | SkillProfileScalarWhereWithAggregatesInput[]
    OR?: SkillProfileScalarWhereWithAggregatesInput[]
    NOT?: SkillProfileScalarWhereWithAggregatesInput | SkillProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SkillProfile"> | string
    headline?: StringNullableWithAggregatesFilter<"SkillProfile"> | string | null
    profilename?: StringNullableWithAggregatesFilter<"SkillProfile"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"SkillProfile"> | string | null
    vkUrl?: StringNullableWithAggregatesFilter<"SkillProfile"> | string | null
    telegramUrl?: StringNullableWithAggregatesFilter<"SkillProfile"> | string | null
    userId?: StringWithAggregatesFilter<"SkillProfile"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeFilter<"Account"> | Date | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    accountId_provider?: AccountAccountIdProviderCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeFilter<"Account"> | Date | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "accountId_provider">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    userId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    email?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
    oauthToken?: StringNullableFilter<"Token"> | string | null
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    oauthToken?: SortOrderInput | SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    oauthToken?: string
    token_type?: TokenTokenTypeCompoundUniqueInput
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    email?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    type?: EnumTokenTypeFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "oauthToken" | "token_type">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    oauthToken?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    email?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    type?: EnumTokenTypeWithAggregatesFilter<"Token"> | $Enums.TokenType
    expiresIn?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    oauthToken?: StringNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: StringFilter<"Route"> | string
    title?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    privateType?: EnumPrivateTypeFilter<"Route"> | $Enums.PrivateType
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    userId?: StringFilter<"Route"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topicNodes?: TopicNodeListRelationFilter
    tags?: RouteTagListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    privateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    topicNodes?: TopicNodeOrderByRelationAggregateInput
    tags?: RouteTagOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    title?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    privateType?: EnumPrivateTypeFilter<"Route"> | $Enums.PrivateType
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    userId?: StringFilter<"Route"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    topicNodes?: TopicNodeListRelationFilter
    tags?: RouteTagListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    privateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Route"> | string
    title?: StringWithAggregatesFilter<"Route"> | string
    description?: StringNullableWithAggregatesFilter<"Route"> | string | null
    privateType?: EnumPrivateTypeWithAggregatesFilter<"Route"> | $Enums.PrivateType
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    userId?: StringWithAggregatesFilter<"Route"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    routes?: RouteTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    routes?: RouteTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    routes?: RouteTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type RouteTagWhereInput = {
    AND?: RouteTagWhereInput | RouteTagWhereInput[]
    OR?: RouteTagWhereInput[]
    NOT?: RouteTagWhereInput | RouteTagWhereInput[]
    id?: StringFilter<"RouteTag"> | string
    routeId?: StringFilter<"RouteTag"> | string
    tagId?: StringFilter<"RouteTag"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type RouteTagOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    tagId?: SortOrder
    route?: RouteOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type RouteTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    routeId_tagId?: RouteTagRouteIdTagIdCompoundUniqueInput
    AND?: RouteTagWhereInput | RouteTagWhereInput[]
    OR?: RouteTagWhereInput[]
    NOT?: RouteTagWhereInput | RouteTagWhereInput[]
    routeId?: StringFilter<"RouteTag"> | string
    tagId?: StringFilter<"RouteTag"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "id" | "routeId_tagId">

  export type RouteTagOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    tagId?: SortOrder
    _count?: RouteTagCountOrderByAggregateInput
    _max?: RouteTagMaxOrderByAggregateInput
    _min?: RouteTagMinOrderByAggregateInput
  }

  export type RouteTagScalarWhereWithAggregatesInput = {
    AND?: RouteTagScalarWhereWithAggregatesInput | RouteTagScalarWhereWithAggregatesInput[]
    OR?: RouteTagScalarWhereWithAggregatesInput[]
    NOT?: RouteTagScalarWhereWithAggregatesInput | RouteTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RouteTag"> | string
    routeId?: StringWithAggregatesFilter<"RouteTag"> | string
    tagId?: StringWithAggregatesFilter<"RouteTag"> | string
  }

  export type TopicNodeWhereInput = {
    AND?: TopicNodeWhereInput | TopicNodeWhereInput[]
    OR?: TopicNodeWhereInput[]
    NOT?: TopicNodeWhereInput | TopicNodeWhereInput[]
    id?: StringFilter<"TopicNode"> | string
    title?: StringFilter<"TopicNode"> | string
    content?: StringNullableFilter<"TopicNode"> | string | null
    routeId?: StringFilter<"TopicNode"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    incomingEdges?: TopicEdgeListRelationFilter
    outgoingEdges?: TopicEdgeListRelationFilter
  }

  export type TopicNodeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    routeId?: SortOrder
    route?: RouteOrderByWithRelationInput
    incomingEdges?: TopicEdgeOrderByRelationAggregateInput
    outgoingEdges?: TopicEdgeOrderByRelationAggregateInput
  }

  export type TopicNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicNodeWhereInput | TopicNodeWhereInput[]
    OR?: TopicNodeWhereInput[]
    NOT?: TopicNodeWhereInput | TopicNodeWhereInput[]
    title?: StringFilter<"TopicNode"> | string
    content?: StringNullableFilter<"TopicNode"> | string | null
    routeId?: StringFilter<"TopicNode"> | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    incomingEdges?: TopicEdgeListRelationFilter
    outgoingEdges?: TopicEdgeListRelationFilter
  }, "id">

  export type TopicNodeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    routeId?: SortOrder
    _count?: TopicNodeCountOrderByAggregateInput
    _max?: TopicNodeMaxOrderByAggregateInput
    _min?: TopicNodeMinOrderByAggregateInput
  }

  export type TopicNodeScalarWhereWithAggregatesInput = {
    AND?: TopicNodeScalarWhereWithAggregatesInput | TopicNodeScalarWhereWithAggregatesInput[]
    OR?: TopicNodeScalarWhereWithAggregatesInput[]
    NOT?: TopicNodeScalarWhereWithAggregatesInput | TopicNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicNode"> | string
    title?: StringWithAggregatesFilter<"TopicNode"> | string
    content?: StringNullableWithAggregatesFilter<"TopicNode"> | string | null
    routeId?: StringWithAggregatesFilter<"TopicNode"> | string
  }

  export type TopicEdgeWhereInput = {
    AND?: TopicEdgeWhereInput | TopicEdgeWhereInput[]
    OR?: TopicEdgeWhereInput[]
    NOT?: TopicEdgeWhereInput | TopicEdgeWhereInput[]
    id?: StringFilter<"TopicEdge"> | string
    fromId?: StringFilter<"TopicEdge"> | string
    toId?: StringFilter<"TopicEdge"> | string
    from?: XOR<TopicNodeScalarRelationFilter, TopicNodeWhereInput>
    to?: XOR<TopicNodeScalarRelationFilter, TopicNodeWhereInput>
  }

  export type TopicEdgeOrderByWithRelationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    from?: TopicNodeOrderByWithRelationInput
    to?: TopicNodeOrderByWithRelationInput
  }

  export type TopicEdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TopicEdgeWhereInput | TopicEdgeWhereInput[]
    OR?: TopicEdgeWhereInput[]
    NOT?: TopicEdgeWhereInput | TopicEdgeWhereInput[]
    fromId?: StringFilter<"TopicEdge"> | string
    toId?: StringFilter<"TopicEdge"> | string
    from?: XOR<TopicNodeScalarRelationFilter, TopicNodeWhereInput>
    to?: XOR<TopicNodeScalarRelationFilter, TopicNodeWhereInput>
  }, "id">

  export type TopicEdgeOrderByWithAggregationInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    _count?: TopicEdgeCountOrderByAggregateInput
    _max?: TopicEdgeMaxOrderByAggregateInput
    _min?: TopicEdgeMinOrderByAggregateInput
  }

  export type TopicEdgeScalarWhereWithAggregatesInput = {
    AND?: TopicEdgeScalarWhereWithAggregatesInput | TopicEdgeScalarWhereWithAggregatesInput[]
    OR?: TopicEdgeScalarWhereWithAggregatesInput[]
    NOT?: TopicEdgeScalarWhereWithAggregatesInput | TopicEdgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TopicEdge"> | string
    fromId?: StringWithAggregatesFilter<"TopicEdge"> | string
    toId?: StringWithAggregatesFilter<"TopicEdge"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    skillProfile?: SkillProfileCreateNestedOneWithoutUserInput
    Route?: RouteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    skillProfile?: SkillProfileUncheckedCreateNestedOneWithoutUserInput
    Route?: RouteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    skillProfile?: SkillProfileUpdateOneWithoutUserNestedInput
    Route?: RouteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    skillProfile?: SkillProfileUncheckedUpdateOneWithoutUserNestedInput
    Route?: RouteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillProfileCreateInput = {
    id?: string
    headline?: string | null
    profilename?: string | null
    githubUrl?: string | null
    vkUrl?: string | null
    telegramUrl?: string | null
    user: UserCreateNestedOneWithoutSkillProfileInput
  }

  export type SkillProfileUncheckedCreateInput = {
    id?: string
    headline?: string | null
    profilename?: string | null
    githubUrl?: string | null
    vkUrl?: string | null
    telegramUrl?: string | null
    userId: string
  }

  export type SkillProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSkillProfileNestedInput
  }

  export type SkillProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillProfileCreateManyInput = {
    id?: string
    headline?: string | null
    profilename?: string | null
    githubUrl?: string | null
    vkUrl?: string | null
    telegramUrl?: string | null
    userId: string
  }

  export type SkillProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    oauthToken?: string | null
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    oauthToken?: string | null
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManyInput = {
    id?: string
    email: string
    token: string
    type: $Enums.TokenType
    expiresIn: Date | string
    oauthToken?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    expiresIn?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteCreateInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRouteInput
    topicNodes?: TopicNodeCreateNestedManyWithoutRouteInput
    tags?: RouteTagCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    topicNodes?: TopicNodeUncheckedCreateNestedManyWithoutRouteInput
    tags?: RouteTagUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRouteNestedInput
    topicNodes?: TopicNodeUpdateManyWithoutRouteNestedInput
    tags?: RouteTagUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    topicNodes?: TopicNodeUncheckedUpdateManyWithoutRouteNestedInput
    tags?: RouteTagUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type RouteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    routes?: RouteTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    routes?: RouteTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    routes?: RouteTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    routes?: RouteTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagCreateInput = {
    id?: string
    route: RouteCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutRoutesInput
  }

  export type RouteTagUncheckedCreateInput = {
    id?: string
    routeId: string
    tagId: string
  }

  export type RouteTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: RouteUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type RouteTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagCreateManyInput = {
    id?: string
    routeId: string
    tagId: string
  }

  export type RouteTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicNodeCreateInput = {
    id?: string
    title: string
    content?: string | null
    route: RouteCreateNestedOneWithoutTopicNodesInput
    incomingEdges?: TopicEdgeCreateNestedManyWithoutToInput
    outgoingEdges?: TopicEdgeCreateNestedManyWithoutFromInput
  }

  export type TopicNodeUncheckedCreateInput = {
    id?: string
    title: string
    content?: string | null
    routeId: string
    incomingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutToInput
    outgoingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutFromInput
  }

  export type TopicNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    route?: RouteUpdateOneRequiredWithoutTopicNodesNestedInput
    incomingEdges?: TopicEdgeUpdateManyWithoutToNestedInput
    outgoingEdges?: TopicEdgeUpdateManyWithoutFromNestedInput
  }

  export type TopicNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: StringFieldUpdateOperationsInput | string
    incomingEdges?: TopicEdgeUncheckedUpdateManyWithoutToNestedInput
    outgoingEdges?: TopicEdgeUncheckedUpdateManyWithoutFromNestedInput
  }

  export type TopicNodeCreateManyInput = {
    id?: string
    title: string
    content?: string | null
    routeId: string
  }

  export type TopicNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TopicNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeCreateInput = {
    id?: string
    from: TopicNodeCreateNestedOneWithoutOutgoingEdgesInput
    to: TopicNodeCreateNestedOneWithoutIncomingEdgesInput
  }

  export type TopicEdgeUncheckedCreateInput = {
    id?: string
    fromId: string
    toId: string
  }

  export type TopicEdgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: TopicNodeUpdateOneRequiredWithoutOutgoingEdgesNestedInput
    to?: TopicNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput
  }

  export type TopicEdgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeCreateManyInput = {
    id?: string
    fromId: string
    toId: string
  }

  export type TopicEdgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SkillProfileNullableScalarRelationFilter = {
    is?: SkillProfileWhereInput | null
    isNot?: SkillProfileWhereInput | null
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    isTwoFactorEnabled?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillProfileCountOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    profilename?: SortOrder
    githubUrl?: SortOrder
    vkUrl?: SortOrder
    telegramUrl?: SortOrder
    userId?: SortOrder
  }

  export type SkillProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    profilename?: SortOrder
    githubUrl?: SortOrder
    vkUrl?: SortOrder
    telegramUrl?: SortOrder
    userId?: SortOrder
  }

  export type SkillProfileMinOrderByAggregateInput = {
    id?: SortOrder
    headline?: SortOrder
    profilename?: SortOrder
    githubUrl?: SortOrder
    vkUrl?: SortOrder
    telegramUrl?: SortOrder
    userId?: SortOrder
  }

  export type AccountAccountIdProviderCompoundUniqueInput = {
    accountId: string
    provider: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type TokenTokenTypeCompoundUniqueInput = {
    token: string
    type: $Enums.TokenType
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    oauthToken?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    oauthToken?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    type?: SortOrder
    expiresIn?: SortOrder
    oauthToken?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type EnumPrivateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivateType | EnumPrivateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivateTypeFilter<$PrismaModel> | $Enums.PrivateType
  }

  export type TopicNodeListRelationFilter = {
    every?: TopicNodeWhereInput
    some?: TopicNodeWhereInput
    none?: TopicNodeWhereInput
  }

  export type RouteTagListRelationFilter = {
    every?: RouteTagWhereInput
    some?: RouteTagWhereInput
    none?: RouteTagWhereInput
  }

  export type TopicNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    privateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    privateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    privateType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumPrivateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivateType | EnumPrivateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivateTypeWithAggregatesFilter<$PrismaModel> | $Enums.PrivateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivateTypeFilter<$PrismaModel>
    _max?: NestedEnumPrivateTypeFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type RouteTagRouteIdTagIdCompoundUniqueInput = {
    routeId: string
    tagId: string
  }

  export type RouteTagCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    tagId?: SortOrder
  }

  export type RouteTagMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    tagId?: SortOrder
  }

  export type RouteTagMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    tagId?: SortOrder
  }

  export type TopicEdgeListRelationFilter = {
    every?: TopicEdgeWhereInput
    some?: TopicEdgeWhereInput
    none?: TopicEdgeWhereInput
  }

  export type TopicEdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TopicNodeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    routeId?: SortOrder
  }

  export type TopicNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    routeId?: SortOrder
  }

  export type TopicNodeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    routeId?: SortOrder
  }

  export type TopicNodeScalarRelationFilter = {
    is?: TopicNodeWhereInput
    isNot?: TopicNodeWhereInput
  }

  export type TopicEdgeCountOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type TopicEdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type TopicEdgeMinOrderByAggregateInput = {
    id?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SkillProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SkillProfileCreateOrConnectWithoutUserInput
    connect?: SkillProfileWhereUniqueInput
  }

  export type RouteCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SkillProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SkillProfileCreateOrConnectWithoutUserInput
    connect?: SkillProfileWhereUniqueInput
  }

  export type RouteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAuthMethodFieldUpdateOperationsInput = {
    set?: $Enums.AuthMethod
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SkillProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SkillProfileCreateOrConnectWithoutUserInput
    upsert?: SkillProfileUpsertWithoutUserInput
    disconnect?: SkillProfileWhereInput | boolean
    delete?: SkillProfileWhereInput | boolean
    connect?: SkillProfileWhereUniqueInput
    update?: XOR<XOR<SkillProfileUpdateToOneWithWhereWithoutUserInput, SkillProfileUpdateWithoutUserInput>, SkillProfileUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SkillProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: SkillProfileCreateOrConnectWithoutUserInput
    upsert?: SkillProfileUpsertWithoutUserInput
    disconnect?: SkillProfileWhereInput | boolean
    delete?: SkillProfileWhereInput | boolean
    connect?: SkillProfileWhereUniqueInput
    update?: XOR<XOR<SkillProfileUpdateToOneWithWhereWithoutUserInput, SkillProfileUpdateWithoutUserInput>, SkillProfileUncheckedUpdateWithoutUserInput>
  }

  export type RouteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput> | RouteCreateWithoutUserInput[] | RouteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutUserInput | RouteCreateOrConnectWithoutUserInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutUserInput | RouteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RouteCreateManyUserInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutUserInput | RouteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutUserInput | RouteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSkillProfileInput = {
    create?: XOR<UserCreateWithoutSkillProfileInput, UserUncheckedCreateWithoutSkillProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSkillProfileNestedInput = {
    create?: XOR<UserCreateWithoutSkillProfileInput, UserUncheckedCreateWithoutSkillProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillProfileInput
    upsert?: UserUpsertWithoutSkillProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillProfileInput, UserUpdateWithoutSkillProfileInput>, UserUncheckedUpdateWithoutSkillProfileInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type UserCreateNestedOneWithoutRouteInput = {
    create?: XOR<UserCreateWithoutRouteInput, UserUncheckedCreateWithoutRouteInput>
    connectOrCreate?: UserCreateOrConnectWithoutRouteInput
    connect?: UserWhereUniqueInput
  }

  export type TopicNodeCreateNestedManyWithoutRouteInput = {
    create?: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput> | TopicNodeCreateWithoutRouteInput[] | TopicNodeUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TopicNodeCreateOrConnectWithoutRouteInput | TopicNodeCreateOrConnectWithoutRouteInput[]
    createMany?: TopicNodeCreateManyRouteInputEnvelope
    connect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
  }

  export type RouteTagCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput> | RouteTagCreateWithoutRouteInput[] | RouteTagUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutRouteInput | RouteTagCreateOrConnectWithoutRouteInput[]
    createMany?: RouteTagCreateManyRouteInputEnvelope
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
  }

  export type TopicNodeUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput> | TopicNodeCreateWithoutRouteInput[] | TopicNodeUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TopicNodeCreateOrConnectWithoutRouteInput | TopicNodeCreateOrConnectWithoutRouteInput[]
    createMany?: TopicNodeCreateManyRouteInputEnvelope
    connect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
  }

  export type RouteTagUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput> | RouteTagCreateWithoutRouteInput[] | RouteTagUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutRouteInput | RouteTagCreateOrConnectWithoutRouteInput[]
    createMany?: RouteTagCreateManyRouteInputEnvelope
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
  }

  export type EnumPrivateTypeFieldUpdateOperationsInput = {
    set?: $Enums.PrivateType
  }

  export type UserUpdateOneRequiredWithoutRouteNestedInput = {
    create?: XOR<UserCreateWithoutRouteInput, UserUncheckedCreateWithoutRouteInput>
    connectOrCreate?: UserCreateOrConnectWithoutRouteInput
    upsert?: UserUpsertWithoutRouteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRouteInput, UserUpdateWithoutRouteInput>, UserUncheckedUpdateWithoutRouteInput>
  }

  export type TopicNodeUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput> | TopicNodeCreateWithoutRouteInput[] | TopicNodeUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TopicNodeCreateOrConnectWithoutRouteInput | TopicNodeCreateOrConnectWithoutRouteInput[]
    upsert?: TopicNodeUpsertWithWhereUniqueWithoutRouteInput | TopicNodeUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TopicNodeCreateManyRouteInputEnvelope
    set?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    disconnect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    delete?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    connect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    update?: TopicNodeUpdateWithWhereUniqueWithoutRouteInput | TopicNodeUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TopicNodeUpdateManyWithWhereWithoutRouteInput | TopicNodeUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TopicNodeScalarWhereInput | TopicNodeScalarWhereInput[]
  }

  export type RouteTagUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput> | RouteTagCreateWithoutRouteInput[] | RouteTagUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutRouteInput | RouteTagCreateOrConnectWithoutRouteInput[]
    upsert?: RouteTagUpsertWithWhereUniqueWithoutRouteInput | RouteTagUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteTagCreateManyRouteInputEnvelope
    set?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    disconnect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    delete?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    update?: RouteTagUpdateWithWhereUniqueWithoutRouteInput | RouteTagUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteTagUpdateManyWithWhereWithoutRouteInput | RouteTagUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
  }

  export type TopicNodeUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput> | TopicNodeCreateWithoutRouteInput[] | TopicNodeUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TopicNodeCreateOrConnectWithoutRouteInput | TopicNodeCreateOrConnectWithoutRouteInput[]
    upsert?: TopicNodeUpsertWithWhereUniqueWithoutRouteInput | TopicNodeUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TopicNodeCreateManyRouteInputEnvelope
    set?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    disconnect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    delete?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    connect?: TopicNodeWhereUniqueInput | TopicNodeWhereUniqueInput[]
    update?: TopicNodeUpdateWithWhereUniqueWithoutRouteInput | TopicNodeUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TopicNodeUpdateManyWithWhereWithoutRouteInput | TopicNodeUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TopicNodeScalarWhereInput | TopicNodeScalarWhereInput[]
  }

  export type RouteTagUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput> | RouteTagCreateWithoutRouteInput[] | RouteTagUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutRouteInput | RouteTagCreateOrConnectWithoutRouteInput[]
    upsert?: RouteTagUpsertWithWhereUniqueWithoutRouteInput | RouteTagUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteTagCreateManyRouteInputEnvelope
    set?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    disconnect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    delete?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    update?: RouteTagUpdateWithWhereUniqueWithoutRouteInput | RouteTagUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteTagUpdateManyWithWhereWithoutRouteInput | RouteTagUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
  }

  export type RouteTagCreateNestedManyWithoutTagInput = {
    create?: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput> | RouteTagCreateWithoutTagInput[] | RouteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutTagInput | RouteTagCreateOrConnectWithoutTagInput[]
    createMany?: RouteTagCreateManyTagInputEnvelope
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
  }

  export type RouteTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput> | RouteTagCreateWithoutTagInput[] | RouteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutTagInput | RouteTagCreateOrConnectWithoutTagInput[]
    createMany?: RouteTagCreateManyTagInputEnvelope
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
  }

  export type RouteTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput> | RouteTagCreateWithoutTagInput[] | RouteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutTagInput | RouteTagCreateOrConnectWithoutTagInput[]
    upsert?: RouteTagUpsertWithWhereUniqueWithoutTagInput | RouteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: RouteTagCreateManyTagInputEnvelope
    set?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    disconnect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    delete?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    update?: RouteTagUpdateWithWhereUniqueWithoutTagInput | RouteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: RouteTagUpdateManyWithWhereWithoutTagInput | RouteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
  }

  export type RouteTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput> | RouteTagCreateWithoutTagInput[] | RouteTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: RouteTagCreateOrConnectWithoutTagInput | RouteTagCreateOrConnectWithoutTagInput[]
    upsert?: RouteTagUpsertWithWhereUniqueWithoutTagInput | RouteTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: RouteTagCreateManyTagInputEnvelope
    set?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    disconnect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    delete?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    connect?: RouteTagWhereUniqueInput | RouteTagWhereUniqueInput[]
    update?: RouteTagUpdateWithWhereUniqueWithoutTagInput | RouteTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: RouteTagUpdateManyWithWhereWithoutTagInput | RouteTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutTagsInput = {
    create?: XOR<RouteCreateWithoutTagsInput, RouteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTagsInput
    connect?: RouteWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutRoutesInput = {
    create?: XOR<TagCreateWithoutRoutesInput, TagUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TagCreateOrConnectWithoutRoutesInput
    connect?: TagWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<RouteCreateWithoutTagsInput, RouteUncheckedCreateWithoutTagsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTagsInput
    upsert?: RouteUpsertWithoutTagsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutTagsInput, RouteUpdateWithoutTagsInput>, RouteUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<TagCreateWithoutRoutesInput, TagUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: TagCreateOrConnectWithoutRoutesInput
    upsert?: TagUpsertWithoutRoutesInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutRoutesInput, TagUpdateWithoutRoutesInput>, TagUncheckedUpdateWithoutRoutesInput>
  }

  export type RouteCreateNestedOneWithoutTopicNodesInput = {
    create?: XOR<RouteCreateWithoutTopicNodesInput, RouteUncheckedCreateWithoutTopicNodesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTopicNodesInput
    connect?: RouteWhereUniqueInput
  }

  export type TopicEdgeCreateNestedManyWithoutToInput = {
    create?: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput> | TopicEdgeCreateWithoutToInput[] | TopicEdgeUncheckedCreateWithoutToInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutToInput | TopicEdgeCreateOrConnectWithoutToInput[]
    createMany?: TopicEdgeCreateManyToInputEnvelope
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
  }

  export type TopicEdgeCreateNestedManyWithoutFromInput = {
    create?: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput> | TopicEdgeCreateWithoutFromInput[] | TopicEdgeUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutFromInput | TopicEdgeCreateOrConnectWithoutFromInput[]
    createMany?: TopicEdgeCreateManyFromInputEnvelope
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
  }

  export type TopicEdgeUncheckedCreateNestedManyWithoutToInput = {
    create?: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput> | TopicEdgeCreateWithoutToInput[] | TopicEdgeUncheckedCreateWithoutToInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutToInput | TopicEdgeCreateOrConnectWithoutToInput[]
    createMany?: TopicEdgeCreateManyToInputEnvelope
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
  }

  export type TopicEdgeUncheckedCreateNestedManyWithoutFromInput = {
    create?: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput> | TopicEdgeCreateWithoutFromInput[] | TopicEdgeUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutFromInput | TopicEdgeCreateOrConnectWithoutFromInput[]
    createMany?: TopicEdgeCreateManyFromInputEnvelope
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
  }

  export type RouteUpdateOneRequiredWithoutTopicNodesNestedInput = {
    create?: XOR<RouteCreateWithoutTopicNodesInput, RouteUncheckedCreateWithoutTopicNodesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTopicNodesInput
    upsert?: RouteUpsertWithoutTopicNodesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutTopicNodesInput, RouteUpdateWithoutTopicNodesInput>, RouteUncheckedUpdateWithoutTopicNodesInput>
  }

  export type TopicEdgeUpdateManyWithoutToNestedInput = {
    create?: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput> | TopicEdgeCreateWithoutToInput[] | TopicEdgeUncheckedCreateWithoutToInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutToInput | TopicEdgeCreateOrConnectWithoutToInput[]
    upsert?: TopicEdgeUpsertWithWhereUniqueWithoutToInput | TopicEdgeUpsertWithWhereUniqueWithoutToInput[]
    createMany?: TopicEdgeCreateManyToInputEnvelope
    set?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    disconnect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    delete?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    update?: TopicEdgeUpdateWithWhereUniqueWithoutToInput | TopicEdgeUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: TopicEdgeUpdateManyWithWhereWithoutToInput | TopicEdgeUpdateManyWithWhereWithoutToInput[]
    deleteMany?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
  }

  export type TopicEdgeUpdateManyWithoutFromNestedInput = {
    create?: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput> | TopicEdgeCreateWithoutFromInput[] | TopicEdgeUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutFromInput | TopicEdgeCreateOrConnectWithoutFromInput[]
    upsert?: TopicEdgeUpsertWithWhereUniqueWithoutFromInput | TopicEdgeUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: TopicEdgeCreateManyFromInputEnvelope
    set?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    disconnect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    delete?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    update?: TopicEdgeUpdateWithWhereUniqueWithoutFromInput | TopicEdgeUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: TopicEdgeUpdateManyWithWhereWithoutFromInput | TopicEdgeUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
  }

  export type TopicEdgeUncheckedUpdateManyWithoutToNestedInput = {
    create?: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput> | TopicEdgeCreateWithoutToInput[] | TopicEdgeUncheckedCreateWithoutToInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutToInput | TopicEdgeCreateOrConnectWithoutToInput[]
    upsert?: TopicEdgeUpsertWithWhereUniqueWithoutToInput | TopicEdgeUpsertWithWhereUniqueWithoutToInput[]
    createMany?: TopicEdgeCreateManyToInputEnvelope
    set?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    disconnect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    delete?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    update?: TopicEdgeUpdateWithWhereUniqueWithoutToInput | TopicEdgeUpdateWithWhereUniqueWithoutToInput[]
    updateMany?: TopicEdgeUpdateManyWithWhereWithoutToInput | TopicEdgeUpdateManyWithWhereWithoutToInput[]
    deleteMany?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
  }

  export type TopicEdgeUncheckedUpdateManyWithoutFromNestedInput = {
    create?: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput> | TopicEdgeCreateWithoutFromInput[] | TopicEdgeUncheckedCreateWithoutFromInput[]
    connectOrCreate?: TopicEdgeCreateOrConnectWithoutFromInput | TopicEdgeCreateOrConnectWithoutFromInput[]
    upsert?: TopicEdgeUpsertWithWhereUniqueWithoutFromInput | TopicEdgeUpsertWithWhereUniqueWithoutFromInput[]
    createMany?: TopicEdgeCreateManyFromInputEnvelope
    set?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    disconnect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    delete?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    connect?: TopicEdgeWhereUniqueInput | TopicEdgeWhereUniqueInput[]
    update?: TopicEdgeUpdateWithWhereUniqueWithoutFromInput | TopicEdgeUpdateWithWhereUniqueWithoutFromInput[]
    updateMany?: TopicEdgeUpdateManyWithWhereWithoutFromInput | TopicEdgeUpdateManyWithWhereWithoutFromInput[]
    deleteMany?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
  }

  export type TopicNodeCreateNestedOneWithoutOutgoingEdgesInput = {
    create?: XOR<TopicNodeCreateWithoutOutgoingEdgesInput, TopicNodeUncheckedCreateWithoutOutgoingEdgesInput>
    connectOrCreate?: TopicNodeCreateOrConnectWithoutOutgoingEdgesInput
    connect?: TopicNodeWhereUniqueInput
  }

  export type TopicNodeCreateNestedOneWithoutIncomingEdgesInput = {
    create?: XOR<TopicNodeCreateWithoutIncomingEdgesInput, TopicNodeUncheckedCreateWithoutIncomingEdgesInput>
    connectOrCreate?: TopicNodeCreateOrConnectWithoutIncomingEdgesInput
    connect?: TopicNodeWhereUniqueInput
  }

  export type TopicNodeUpdateOneRequiredWithoutOutgoingEdgesNestedInput = {
    create?: XOR<TopicNodeCreateWithoutOutgoingEdgesInput, TopicNodeUncheckedCreateWithoutOutgoingEdgesInput>
    connectOrCreate?: TopicNodeCreateOrConnectWithoutOutgoingEdgesInput
    upsert?: TopicNodeUpsertWithoutOutgoingEdgesInput
    connect?: TopicNodeWhereUniqueInput
    update?: XOR<XOR<TopicNodeUpdateToOneWithWhereWithoutOutgoingEdgesInput, TopicNodeUpdateWithoutOutgoingEdgesInput>, TopicNodeUncheckedUpdateWithoutOutgoingEdgesInput>
  }

  export type TopicNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput = {
    create?: XOR<TopicNodeCreateWithoutIncomingEdgesInput, TopicNodeUncheckedCreateWithoutIncomingEdgesInput>
    connectOrCreate?: TopicNodeCreateOrConnectWithoutIncomingEdgesInput
    upsert?: TopicNodeUpsertWithoutIncomingEdgesInput
    connect?: TopicNodeWhereUniqueInput
    update?: XOR<XOR<TopicNodeUpdateToOneWithWhereWithoutIncomingEdgesInput, TopicNodeUpdateWithoutIncomingEdgesInput>, TopicNodeUncheckedUpdateWithoutIncomingEdgesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAuthMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodFilter<$PrismaModel> | $Enums.AuthMethod
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthMethod | EnumAuthMethodFieldRefInput<$PrismaModel>
    in?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthMethod[] | ListEnumAuthMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthMethodWithAggregatesFilter<$PrismaModel> | $Enums.AuthMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthMethodFilter<$PrismaModel>
    _max?: NestedEnumAuthMethodFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TokenType[] | ListEnumTokenTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedEnumPrivateTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivateType | EnumPrivateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivateTypeFilter<$PrismaModel> | $Enums.PrivateType
  }

  export type NestedEnumPrivateTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PrivateType | EnumPrivateTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PrivateType[] | ListEnumPrivateTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPrivateTypeWithAggregatesFilter<$PrismaModel> | $Enums.PrivateType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPrivateTypeFilter<$PrismaModel>
    _max?: NestedEnumPrivateTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillProfileCreateWithoutUserInput = {
    id?: string
    headline?: string | null
    profilename?: string | null
    githubUrl?: string | null
    vkUrl?: string | null
    telegramUrl?: string | null
  }

  export type SkillProfileUncheckedCreateWithoutUserInput = {
    id?: string
    headline?: string | null
    profilename?: string | null
    githubUrl?: string | null
    vkUrl?: string | null
    telegramUrl?: string | null
  }

  export type SkillProfileCreateOrConnectWithoutUserInput = {
    where: SkillProfileWhereUniqueInput
    create: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    topicNodes?: TopicNodeCreateNestedManyWithoutRouteInput
    tags?: RouteTagCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    topicNodes?: TopicNodeUncheckedCreateNestedManyWithoutRouteInput
    tags?: RouteTagUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutUserInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteCreateManyUserInputEnvelope = {
    data: RouteCreateManyUserInput | RouteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    expiresAt?: DateTimeFilter<"Account"> | Date | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    userId?: StringFilter<"Account"> | string
  }

  export type SkillProfileUpsertWithoutUserInput = {
    update: XOR<SkillProfileUpdateWithoutUserInput, SkillProfileUncheckedUpdateWithoutUserInput>
    create: XOR<SkillProfileCreateWithoutUserInput, SkillProfileUncheckedCreateWithoutUserInput>
    where?: SkillProfileWhereInput
  }

  export type SkillProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: SkillProfileWhereInput
    data: XOR<SkillProfileUpdateWithoutUserInput, SkillProfileUncheckedUpdateWithoutUserInput>
  }

  export type SkillProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    headline?: NullableStringFieldUpdateOperationsInput | string | null
    profilename?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    vkUrl?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteUpsertWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
    create: XOR<RouteCreateWithoutUserInput, RouteUncheckedCreateWithoutUserInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutUserInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutUserInput, RouteUncheckedUpdateWithoutUserInput>
  }

  export type RouteUpdateManyWithWhereWithoutUserInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutUserInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: StringFilter<"Route"> | string
    title?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    privateType?: EnumPrivateTypeFilter<"Route"> | $Enums.PrivateType
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    userId?: StringFilter<"Route"> | string
  }

  export type UserCreateWithoutSkillProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Route?: RouteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillProfileInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Route?: RouteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillProfileInput, UserUncheckedCreateWithoutSkillProfileInput>
  }

  export type UserUpsertWithoutSkillProfileInput = {
    update: XOR<UserUpdateWithoutSkillProfileInput, UserUncheckedUpdateWithoutSkillProfileInput>
    create: XOR<UserCreateWithoutSkillProfileInput, UserUncheckedCreateWithoutSkillProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillProfileInput, UserUncheckedUpdateWithoutSkillProfileInput>
  }

  export type UserUpdateWithoutSkillProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Route?: RouteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Route?: RouteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    skillProfile?: SkillProfileCreateNestedOneWithoutUserInput
    Route?: RouteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    skillProfile?: SkillProfileUncheckedCreateNestedOneWithoutUserInput
    Route?: RouteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillProfile?: SkillProfileUpdateOneWithoutUserNestedInput
    Route?: RouteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skillProfile?: SkillProfileUncheckedUpdateOneWithoutUserNestedInput
    Route?: RouteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRouteInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    skillProfile?: SkillProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRouteInput = {
    id?: string
    email: string
    password: string
    name: string
    avatar?: string | null
    role?: $Enums.UserRole
    isVerified?: boolean
    isTwoFactorEnabled?: boolean
    method: $Enums.AuthMethod
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    skillProfile?: SkillProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRouteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRouteInput, UserUncheckedCreateWithoutRouteInput>
  }

  export type TopicNodeCreateWithoutRouteInput = {
    id?: string
    title: string
    content?: string | null
    incomingEdges?: TopicEdgeCreateNestedManyWithoutToInput
    outgoingEdges?: TopicEdgeCreateNestedManyWithoutFromInput
  }

  export type TopicNodeUncheckedCreateWithoutRouteInput = {
    id?: string
    title: string
    content?: string | null
    incomingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutToInput
    outgoingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutFromInput
  }

  export type TopicNodeCreateOrConnectWithoutRouteInput = {
    where: TopicNodeWhereUniqueInput
    create: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput>
  }

  export type TopicNodeCreateManyRouteInputEnvelope = {
    data: TopicNodeCreateManyRouteInput | TopicNodeCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteTagCreateWithoutRouteInput = {
    id?: string
    tag: TagCreateNestedOneWithoutRoutesInput
  }

  export type RouteTagUncheckedCreateWithoutRouteInput = {
    id?: string
    tagId: string
  }

  export type RouteTagCreateOrConnectWithoutRouteInput = {
    where: RouteTagWhereUniqueInput
    create: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput>
  }

  export type RouteTagCreateManyRouteInputEnvelope = {
    data: RouteTagCreateManyRouteInput | RouteTagCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRouteInput = {
    update: XOR<UserUpdateWithoutRouteInput, UserUncheckedUpdateWithoutRouteInput>
    create: XOR<UserCreateWithoutRouteInput, UserUncheckedCreateWithoutRouteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRouteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRouteInput, UserUncheckedUpdateWithoutRouteInput>
  }

  export type UserUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    skillProfile?: SkillProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isTwoFactorEnabled?: BoolFieldUpdateOperationsInput | boolean
    method?: EnumAuthMethodFieldUpdateOperationsInput | $Enums.AuthMethod
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    skillProfile?: SkillProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TopicNodeUpsertWithWhereUniqueWithoutRouteInput = {
    where: TopicNodeWhereUniqueInput
    update: XOR<TopicNodeUpdateWithoutRouteInput, TopicNodeUncheckedUpdateWithoutRouteInput>
    create: XOR<TopicNodeCreateWithoutRouteInput, TopicNodeUncheckedCreateWithoutRouteInput>
  }

  export type TopicNodeUpdateWithWhereUniqueWithoutRouteInput = {
    where: TopicNodeWhereUniqueInput
    data: XOR<TopicNodeUpdateWithoutRouteInput, TopicNodeUncheckedUpdateWithoutRouteInput>
  }

  export type TopicNodeUpdateManyWithWhereWithoutRouteInput = {
    where: TopicNodeScalarWhereInput
    data: XOR<TopicNodeUpdateManyMutationInput, TopicNodeUncheckedUpdateManyWithoutRouteInput>
  }

  export type TopicNodeScalarWhereInput = {
    AND?: TopicNodeScalarWhereInput | TopicNodeScalarWhereInput[]
    OR?: TopicNodeScalarWhereInput[]
    NOT?: TopicNodeScalarWhereInput | TopicNodeScalarWhereInput[]
    id?: StringFilter<"TopicNode"> | string
    title?: StringFilter<"TopicNode"> | string
    content?: StringNullableFilter<"TopicNode"> | string | null
    routeId?: StringFilter<"TopicNode"> | string
  }

  export type RouteTagUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteTagWhereUniqueInput
    update: XOR<RouteTagUpdateWithoutRouteInput, RouteTagUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteTagCreateWithoutRouteInput, RouteTagUncheckedCreateWithoutRouteInput>
  }

  export type RouteTagUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteTagWhereUniqueInput
    data: XOR<RouteTagUpdateWithoutRouteInput, RouteTagUncheckedUpdateWithoutRouteInput>
  }

  export type RouteTagUpdateManyWithWhereWithoutRouteInput = {
    where: RouteTagScalarWhereInput
    data: XOR<RouteTagUpdateManyMutationInput, RouteTagUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteTagScalarWhereInput = {
    AND?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
    OR?: RouteTagScalarWhereInput[]
    NOT?: RouteTagScalarWhereInput | RouteTagScalarWhereInput[]
    id?: StringFilter<"RouteTag"> | string
    routeId?: StringFilter<"RouteTag"> | string
    tagId?: StringFilter<"RouteTag"> | string
  }

  export type RouteTagCreateWithoutTagInput = {
    id?: string
    route: RouteCreateNestedOneWithoutTagsInput
  }

  export type RouteTagUncheckedCreateWithoutTagInput = {
    id?: string
    routeId: string
  }

  export type RouteTagCreateOrConnectWithoutTagInput = {
    where: RouteTagWhereUniqueInput
    create: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput>
  }

  export type RouteTagCreateManyTagInputEnvelope = {
    data: RouteTagCreateManyTagInput | RouteTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type RouteTagUpsertWithWhereUniqueWithoutTagInput = {
    where: RouteTagWhereUniqueInput
    update: XOR<RouteTagUpdateWithoutTagInput, RouteTagUncheckedUpdateWithoutTagInput>
    create: XOR<RouteTagCreateWithoutTagInput, RouteTagUncheckedCreateWithoutTagInput>
  }

  export type RouteTagUpdateWithWhereUniqueWithoutTagInput = {
    where: RouteTagWhereUniqueInput
    data: XOR<RouteTagUpdateWithoutTagInput, RouteTagUncheckedUpdateWithoutTagInput>
  }

  export type RouteTagUpdateManyWithWhereWithoutTagInput = {
    where: RouteTagScalarWhereInput
    data: XOR<RouteTagUpdateManyMutationInput, RouteTagUncheckedUpdateManyWithoutTagInput>
  }

  export type RouteCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRouteInput
    topicNodes?: TopicNodeCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    topicNodes?: TopicNodeUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutTagsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutTagsInput, RouteUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutRoutesInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutRoutesInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutRoutesInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutRoutesInput, TagUncheckedCreateWithoutRoutesInput>
  }

  export type RouteUpsertWithoutTagsInput = {
    update: XOR<RouteUpdateWithoutTagsInput, RouteUncheckedUpdateWithoutTagsInput>
    create: XOR<RouteCreateWithoutTagsInput, RouteUncheckedCreateWithoutTagsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutTagsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutTagsInput, RouteUncheckedUpdateWithoutTagsInput>
  }

  export type RouteUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRouteNestedInput
    topicNodes?: TopicNodeUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    topicNodes?: TopicNodeUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type TagUpsertWithoutRoutesInput = {
    update: XOR<TagUpdateWithoutRoutesInput, TagUncheckedUpdateWithoutRoutesInput>
    create: XOR<TagCreateWithoutRoutesInput, TagUncheckedCreateWithoutRoutesInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutRoutesInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutRoutesInput, TagUncheckedUpdateWithoutRoutesInput>
  }

  export type TagUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutRoutesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RouteCreateWithoutTopicNodesInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRouteInput
    tags?: RouteTagCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutTopicNodesInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    tags?: RouteTagUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutTopicNodesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutTopicNodesInput, RouteUncheckedCreateWithoutTopicNodesInput>
  }

  export type TopicEdgeCreateWithoutToInput = {
    id?: string
    from: TopicNodeCreateNestedOneWithoutOutgoingEdgesInput
  }

  export type TopicEdgeUncheckedCreateWithoutToInput = {
    id?: string
    fromId: string
  }

  export type TopicEdgeCreateOrConnectWithoutToInput = {
    where: TopicEdgeWhereUniqueInput
    create: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput>
  }

  export type TopicEdgeCreateManyToInputEnvelope = {
    data: TopicEdgeCreateManyToInput | TopicEdgeCreateManyToInput[]
    skipDuplicates?: boolean
  }

  export type TopicEdgeCreateWithoutFromInput = {
    id?: string
    to: TopicNodeCreateNestedOneWithoutIncomingEdgesInput
  }

  export type TopicEdgeUncheckedCreateWithoutFromInput = {
    id?: string
    toId: string
  }

  export type TopicEdgeCreateOrConnectWithoutFromInput = {
    where: TopicEdgeWhereUniqueInput
    create: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput>
  }

  export type TopicEdgeCreateManyFromInputEnvelope = {
    data: TopicEdgeCreateManyFromInput | TopicEdgeCreateManyFromInput[]
    skipDuplicates?: boolean
  }

  export type RouteUpsertWithoutTopicNodesInput = {
    update: XOR<RouteUpdateWithoutTopicNodesInput, RouteUncheckedUpdateWithoutTopicNodesInput>
    create: XOR<RouteCreateWithoutTopicNodesInput, RouteUncheckedCreateWithoutTopicNodesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutTopicNodesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutTopicNodesInput, RouteUncheckedUpdateWithoutTopicNodesInput>
  }

  export type RouteUpdateWithoutTopicNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRouteNestedInput
    tags?: RouteTagUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutTopicNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    tags?: RouteTagUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type TopicEdgeUpsertWithWhereUniqueWithoutToInput = {
    where: TopicEdgeWhereUniqueInput
    update: XOR<TopicEdgeUpdateWithoutToInput, TopicEdgeUncheckedUpdateWithoutToInput>
    create: XOR<TopicEdgeCreateWithoutToInput, TopicEdgeUncheckedCreateWithoutToInput>
  }

  export type TopicEdgeUpdateWithWhereUniqueWithoutToInput = {
    where: TopicEdgeWhereUniqueInput
    data: XOR<TopicEdgeUpdateWithoutToInput, TopicEdgeUncheckedUpdateWithoutToInput>
  }

  export type TopicEdgeUpdateManyWithWhereWithoutToInput = {
    where: TopicEdgeScalarWhereInput
    data: XOR<TopicEdgeUpdateManyMutationInput, TopicEdgeUncheckedUpdateManyWithoutToInput>
  }

  export type TopicEdgeScalarWhereInput = {
    AND?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
    OR?: TopicEdgeScalarWhereInput[]
    NOT?: TopicEdgeScalarWhereInput | TopicEdgeScalarWhereInput[]
    id?: StringFilter<"TopicEdge"> | string
    fromId?: StringFilter<"TopicEdge"> | string
    toId?: StringFilter<"TopicEdge"> | string
  }

  export type TopicEdgeUpsertWithWhereUniqueWithoutFromInput = {
    where: TopicEdgeWhereUniqueInput
    update: XOR<TopicEdgeUpdateWithoutFromInput, TopicEdgeUncheckedUpdateWithoutFromInput>
    create: XOR<TopicEdgeCreateWithoutFromInput, TopicEdgeUncheckedCreateWithoutFromInput>
  }

  export type TopicEdgeUpdateWithWhereUniqueWithoutFromInput = {
    where: TopicEdgeWhereUniqueInput
    data: XOR<TopicEdgeUpdateWithoutFromInput, TopicEdgeUncheckedUpdateWithoutFromInput>
  }

  export type TopicEdgeUpdateManyWithWhereWithoutFromInput = {
    where: TopicEdgeScalarWhereInput
    data: XOR<TopicEdgeUpdateManyMutationInput, TopicEdgeUncheckedUpdateManyWithoutFromInput>
  }

  export type TopicNodeCreateWithoutOutgoingEdgesInput = {
    id?: string
    title: string
    content?: string | null
    route: RouteCreateNestedOneWithoutTopicNodesInput
    incomingEdges?: TopicEdgeCreateNestedManyWithoutToInput
  }

  export type TopicNodeUncheckedCreateWithoutOutgoingEdgesInput = {
    id?: string
    title: string
    content?: string | null
    routeId: string
    incomingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutToInput
  }

  export type TopicNodeCreateOrConnectWithoutOutgoingEdgesInput = {
    where: TopicNodeWhereUniqueInput
    create: XOR<TopicNodeCreateWithoutOutgoingEdgesInput, TopicNodeUncheckedCreateWithoutOutgoingEdgesInput>
  }

  export type TopicNodeCreateWithoutIncomingEdgesInput = {
    id?: string
    title: string
    content?: string | null
    route: RouteCreateNestedOneWithoutTopicNodesInput
    outgoingEdges?: TopicEdgeCreateNestedManyWithoutFromInput
  }

  export type TopicNodeUncheckedCreateWithoutIncomingEdgesInput = {
    id?: string
    title: string
    content?: string | null
    routeId: string
    outgoingEdges?: TopicEdgeUncheckedCreateNestedManyWithoutFromInput
  }

  export type TopicNodeCreateOrConnectWithoutIncomingEdgesInput = {
    where: TopicNodeWhereUniqueInput
    create: XOR<TopicNodeCreateWithoutIncomingEdgesInput, TopicNodeUncheckedCreateWithoutIncomingEdgesInput>
  }

  export type TopicNodeUpsertWithoutOutgoingEdgesInput = {
    update: XOR<TopicNodeUpdateWithoutOutgoingEdgesInput, TopicNodeUncheckedUpdateWithoutOutgoingEdgesInput>
    create: XOR<TopicNodeCreateWithoutOutgoingEdgesInput, TopicNodeUncheckedCreateWithoutOutgoingEdgesInput>
    where?: TopicNodeWhereInput
  }

  export type TopicNodeUpdateToOneWithWhereWithoutOutgoingEdgesInput = {
    where?: TopicNodeWhereInput
    data: XOR<TopicNodeUpdateWithoutOutgoingEdgesInput, TopicNodeUncheckedUpdateWithoutOutgoingEdgesInput>
  }

  export type TopicNodeUpdateWithoutOutgoingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    route?: RouteUpdateOneRequiredWithoutTopicNodesNestedInput
    incomingEdges?: TopicEdgeUpdateManyWithoutToNestedInput
  }

  export type TopicNodeUncheckedUpdateWithoutOutgoingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: StringFieldUpdateOperationsInput | string
    incomingEdges?: TopicEdgeUncheckedUpdateManyWithoutToNestedInput
  }

  export type TopicNodeUpsertWithoutIncomingEdgesInput = {
    update: XOR<TopicNodeUpdateWithoutIncomingEdgesInput, TopicNodeUncheckedUpdateWithoutIncomingEdgesInput>
    create: XOR<TopicNodeCreateWithoutIncomingEdgesInput, TopicNodeUncheckedCreateWithoutIncomingEdgesInput>
    where?: TopicNodeWhereInput
  }

  export type TopicNodeUpdateToOneWithWhereWithoutIncomingEdgesInput = {
    where?: TopicNodeWhereInput
    data: XOR<TopicNodeUpdateWithoutIncomingEdgesInput, TopicNodeUncheckedUpdateWithoutIncomingEdgesInput>
  }

  export type TopicNodeUpdateWithoutIncomingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    route?: RouteUpdateOneRequiredWithoutTopicNodesNestedInput
    outgoingEdges?: TopicEdgeUpdateManyWithoutFromNestedInput
  }

  export type TopicNodeUncheckedUpdateWithoutIncomingEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    routeId?: StringFieldUpdateOperationsInput | string
    outgoingEdges?: TopicEdgeUncheckedUpdateManyWithoutFromNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    accountId: string
    type: string
    provider: string
    refreshToken?: string | null
    accessToken?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    privateType?: $Enums.PrivateType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicNodes?: TopicNodeUpdateManyWithoutRouteNestedInput
    tags?: RouteTagUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    topicNodes?: TopicNodeUncheckedUpdateManyWithoutRouteNestedInput
    tags?: RouteTagUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    privateType?: EnumPrivateTypeFieldUpdateOperationsInput | $Enums.PrivateType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TopicNodeCreateManyRouteInput = {
    id?: string
    title: string
    content?: string | null
  }

  export type RouteTagCreateManyRouteInput = {
    id?: string
    tagId: string
  }

  export type TopicNodeUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    incomingEdges?: TopicEdgeUpdateManyWithoutToNestedInput
    outgoingEdges?: TopicEdgeUpdateManyWithoutFromNestedInput
  }

  export type TopicNodeUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    incomingEdges?: TopicEdgeUncheckedUpdateManyWithoutToNestedInput
    outgoingEdges?: TopicEdgeUncheckedUpdateManyWithoutFromNestedInput
  }

  export type TopicNodeUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RouteTagUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tag?: TagUpdateOneRequiredWithoutRoutesNestedInput
  }

  export type RouteTagUncheckedUpdateWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagUncheckedUpdateManyWithoutRouteInput = {
    id?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagCreateManyTagInput = {
    id?: string
    routeId: string
  }

  export type RouteTagUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    route?: RouteUpdateOneRequiredWithoutTagsNestedInput
  }

  export type RouteTagUncheckedUpdateWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
  }

  export type RouteTagUncheckedUpdateManyWithoutTagInput = {
    id?: StringFieldUpdateOperationsInput | string
    routeId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeCreateManyToInput = {
    id?: string
    fromId: string
  }

  export type TopicEdgeCreateManyFromInput = {
    id?: string
    toId: string
  }

  export type TopicEdgeUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: TopicNodeUpdateOneRequiredWithoutOutgoingEdgesNestedInput
  }

  export type TopicEdgeUncheckedUpdateWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeUncheckedUpdateManyWithoutToInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    to?: TopicNodeUpdateOneRequiredWithoutIncomingEdgesNestedInput
  }

  export type TopicEdgeUncheckedUpdateWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }

  export type TopicEdgeUncheckedUpdateManyWithoutFromInput = {
    id?: StringFieldUpdateOperationsInput | string
    toId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}