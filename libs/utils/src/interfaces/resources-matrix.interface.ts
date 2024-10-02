/**
 * A generic type representing the mapping of resources to their associated actions
 * for a specific role.
 *
 * @template Resource - A type representing the resources, which can be either a string
 * or a number. This will serve as the keys in the mapping.
 * @template Actions - A type representing the actions, which can also be either a string
 * or a number. These will be stored in an array as the values associated with each resource.
 *
 * This type allows you to define the actions that can be performed on each resource
 * within a specific role, providing a clear structure for role-based permissions.
 *
 */
export type IRoleResources<
  Resource extends string | number,
  Actions extends string | number,
> = {
  [resource in Resource]: Actions[];
};

/**
 * A generic type representing a matrix that maps roles to their corresponding
 * resources and associated actions.
 *
 * @template Roles - A type representing the roles, which can be either a string
 * or a number. These will serve as the outer keys in the mapping.
 * @template IRoleResources - The type representing the resources and their associated
 * actions for each role. This should be specified with the appropriate resource
 * and action types.
 *
 * This type allows you to define a structure where each role maps to its respective
 * resources and the actions allowed for those resources, creating a comprehensive
 * role-based permission matrix.
 *
 * Example of usage can be found in CORE_RESOURCES_MATRIX implementation
 */
export type IResourcesMatrix<Roles extends string | number, IRoleResources> = {
  [role in Roles]: IRoleResources;
};
