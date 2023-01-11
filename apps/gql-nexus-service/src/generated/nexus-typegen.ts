/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as models from "./../models"
import type { Context } from "./../context"
import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CommentInput: { // input type
    body: string; // String!
    email: string; // String!
    name: string; // String!
    postId: string; // ID!
  }
  PostInput: { // input type
    body: string; // String!
    title: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Address: models.AddressModel;
  Comment: models.CommentModel;
  CommentConnection: { // root type
    edges?: Array<NexusGenRootTypes['CommentEdge'] | null> | null; // [CommentEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CommentEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Comment'] | null; // Comment
  }
  CommentPayload: { // root type
    comment: NexusGenRootTypes['Comment']; // Comment!
  }
  Company: models.CompanyModel;
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: models.PostModel;
  PostConnection: { // root type
    edges?: Array<NexusGenRootTypes['PostEdge'] | null> | null; // [PostEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Post'] | null; // Post
  }
  PostPayload: { // root type
    post: NexusGenRootTypes['Post']; // Post!
  }
  Query: {};
  User: models.UserModel;
  UserConnection: { // root type
    edges?: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['User'] | null; // User
  }
  UserPayload: { // root type
    user: NexusGenRootTypes['User']; // User!
  }
  UserStats: { // root type
    totalComments?: number | null; // Int
    totalPosts?: number | null; // Int
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Address: { // field return type
    city: string | null; // String
    street: string | null; // String
    suite: string | null; // String
    zipcode: string | null; // String
  }
  Comment: { // field return type
    body: string | null; // String
    email: string | null; // String
    id: string; // ID!
    name: string | null; // String
  }
  CommentConnection: { // field return type
    edges: Array<NexusGenRootTypes['CommentEdge'] | null> | null; // [CommentEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  CommentEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Comment'] | null; // Comment
  }
  CommentPayload: { // field return type
    comment: NexusGenRootTypes['Comment']; // Comment!
  }
  Company: { // field return type
    bs: string | null; // String
    catchPhrase: string | null; // String
    name: string | null; // String
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    body: string | null; // String
    id: string; // ID!
    title: string | null; // String
    totalComments: number | null; // Int
    user: NexusGenRootTypes['User'] | null; // User
  }
  PostConnection: { // field return type
    edges: Array<NexusGenRootTypes['PostEdge'] | null> | null; // [PostEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post'] | null; // Post
  }
  PostPayload: { // field return type
    post: NexusGenRootTypes['Post']; // Post!
  }
  Query: { // field return type
    comments: NexusGenRootTypes['CommentConnection'] | null; // CommentConnection
    commentsByPostId: NexusGenRootTypes['CommentConnection'] | null; // CommentConnection
    posts: NexusGenRootTypes['PostConnection'] | null; // PostConnection
    postsByUserId: NexusGenRootTypes['PostConnection'] | null; // PostConnection
    userById: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['UserConnection'] | null; // UserConnection
  }
  User: { // field return type
    address: NexusGenRootTypes['Address'] | null; // Address
    avatar: string | null; // String
    company: NexusGenRootTypes['Company'] | null; // Company
    email: string | null; // String
    id: string; // ID!
    name: string | null; // String
    phone: string | null; // String
    stats: NexusGenRootTypes['UserStats'] | null; // UserStats
    username: string | null; // String
    website: string | null; // String
  }
  UserConnection: { // field return type
    edges: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User'] | null; // User
  }
  UserPayload: { // field return type
    user: NexusGenRootTypes['User']; // User!
  }
  UserStats: { // field return type
    totalComments: number | null; // Int
    totalPosts: number | null; // Int
  }
}

export interface NexusGenFieldTypeNames {
  Address: { // field return type name
    city: 'String'
    street: 'String'
    suite: 'String'
    zipcode: 'String'
  }
  Comment: { // field return type name
    body: 'String'
    email: 'String'
    id: 'ID'
    name: 'String'
  }
  CommentConnection: { // field return type name
    edges: 'CommentEdge'
    pageInfo: 'PageInfo'
  }
  CommentEdge: { // field return type name
    cursor: 'String'
    node: 'Comment'
  }
  CommentPayload: { // field return type name
    comment: 'Comment'
  }
  Company: { // field return type name
    bs: 'String'
    catchPhrase: 'String'
    name: 'String'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Post: { // field return type name
    body: 'String'
    id: 'ID'
    title: 'String'
    totalComments: 'Int'
    user: 'User'
  }
  PostConnection: { // field return type name
    edges: 'PostEdge'
    pageInfo: 'PageInfo'
  }
  PostEdge: { // field return type name
    cursor: 'String'
    node: 'Post'
  }
  PostPayload: { // field return type name
    post: 'Post'
  }
  Query: { // field return type name
    comments: 'CommentConnection'
    commentsByPostId: 'CommentConnection'
    posts: 'PostConnection'
    postsByUserId: 'PostConnection'
    userById: 'User'
    users: 'UserConnection'
  }
  User: { // field return type name
    address: 'Address'
    avatar: 'String'
    company: 'Company'
    email: 'String'
    id: 'ID'
    name: 'String'
    phone: 'String'
    stats: 'UserStats'
    username: 'String'
    website: 'String'
  }
  UserConnection: { // field return type name
    edges: 'UserEdge'
    pageInfo: 'PageInfo'
  }
  UserEdge: { // field return type name
    cursor: 'String'
    node: 'User'
  }
  UserPayload: { // field return type name
    user: 'User'
  }
  UserStats: { // field return type name
    totalComments: 'Int'
    totalPosts: 'Int'
  }
}

export interface NexusGenArgTypes {
  Query: {
    comments: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    commentsByPostId: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      postId: string; // String!
    }
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    postsByUserId: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      userId: string; // String!
    }
    userById: { // args
      id?: string | null; // String
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}