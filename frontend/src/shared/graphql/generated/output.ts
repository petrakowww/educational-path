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
  updateProfile: UserModel;
};


export type MutationUpdateProfileArgs = {
  dto: UpdateUserDto;
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
  telegramUrl?: Maybe<Scalars['String']['output']>;
  user: UserModel;
  vkUrl?: Maybe<Scalars['String']['output']>;
};

export type UpdateUserDto = {
  email: Scalars['String']['input'];
  isTwoFactorEnabled: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
};

export type UserModel = {
  __typename?: 'UserModel';
  accounts?: Maybe<Array<AccountModel>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isTwoFactorEnabled: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  method: Scalars['String']['output'];
  name: Scalars['String']['output'];
  picture?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  skillProfile?: Maybe<Array<SkillProfile>>;
};

export type FindProfileLogoQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileLogoQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', name: string, picture?: string | null, method: string, role: string } };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', name: string, picture?: string | null, method: string, isTwoFactorEnabled: boolean, email: string, accounts?: Array<{ __typename?: 'AccountModel', type: string }> | null, skillProfile?: Array<{ __typename?: 'SkillProfile', githubUrl?: string | null, vkUrl?: string | null, telegramUrl?: string | null, headline?: string | null }> | null } };


export const FindProfileLogoDocument = gql`
    query FindProfileLogo {
  findProfile {
    name
    picture
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
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    name
    picture
    method
    isTwoFactorEnabled
    email
    accounts {
      type
    }
    skillProfile {
      githubUrl
      vkUrl
      telegramUrl
      headline
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