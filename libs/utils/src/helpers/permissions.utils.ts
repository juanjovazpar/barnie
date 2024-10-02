import {
  IResourcesMatrix,
  IRoleResources,
} from '../interfaces/resources-matrix.interface';

/**
 * Creates an authorization matrix that provides functionality to check
 * permissions and retrieve resources based on user roles.
 *
 * @template Role - A type representing user roles, which can be either
 * a string or a number.
 * @template Resource - A type representing the resources, which can also be
 * either a string or a number.
 * @template Action - A type representing the actions that can be performed
 * on resources, which can likewise be either a string or a number.
 *
 * @param matrix - An object that maps roles to their associated resources
 * and the actions allowed for those resources. This should conform to the
 * `IResourcesMatrix<Role, IRoleResources<Resource, Action>>` type.
 *
 * @returns An object with two methods:
 * - `isAllowed(role: Role, resource: Resource, action: Action): boolean`:
 *   Checks if the specified action is allowed for the given resource under
 *   the provided role.
 * - `getResources(role: Role): IRoleResources<Resource, Action> | undefined`:
 *   Retrieves the resources and their associated actions for the specified role.
 *
 * @example
 * const authorizationMatrix = getAuthorizationMatrix(roleResourcesMatrix);
 * const canEdit = authorizationMatrix.isAllowed('Admin', 'tables', 'edit'); // true or false
 * const adminResources = authorizationMatrix.getResources('Admin'); // Returns the resources for Admin role
 */
export const getAuthorizationMatrix = <
  Role extends string | number,
  Resource extends string | number,
  Action extends string | number,
>(
  matrix: IResourcesMatrix<Role, IRoleResources<Resource, Action>>,
) => ({
  isAllowed: (role: Role, resource: Resource, action: Action): boolean => {
    const resources = matrix[role];
    if (!resources) return false;
    const actions = resources[resource];
    return actions ? actions.includes(action) : false;
  },

  getResources: (role: Role): IRoleResources<Resource, Action> | undefined =>
    matrix[role],
});
