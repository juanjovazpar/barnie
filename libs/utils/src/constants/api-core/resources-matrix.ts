import {
  IResourcesMatrix,
  IRoleResources,
} from '../../interfaces/resources-matrix.interface';
import { CORE_ACTIONS } from './actions';
import { CORE_RESOURCES } from './resources';
import { CORE_ROLES } from './roles';

/**
 * Represents the core resources matrix mapping user roles to their respective
 * permissions for accessing various resources in the system.
 *
 * The following roles are defined:
 * - `ADMIN`
 * - `MANAGER`
 * - `USER`
 */

export const CORE_RESOURCES_MATRIX: IResourcesMatrix<
  CORE_ROLES,
  IRoleResources<CORE_RESOURCES, CORE_ACTIONS>
> = {
  [CORE_ROLES.ADMIN]: {
    [CORE_RESOURCES.TABLES]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.PRODUCTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.MENUS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.DISCOUNTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.ORDERS]: [CORE_ACTIONS.VIEW],
  },
  [CORE_ROLES.MANAGER]: {
    [CORE_RESOURCES.TABLES]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.PRODUCTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.MENUS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.DISCOUNTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.ORDERS]: [CORE_ACTIONS.VIEW],
  },
  [CORE_ROLES.USER]: {
    [CORE_RESOURCES.TABLES]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.PRODUCTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.MENUS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.DISCOUNTS]: [CORE_ACTIONS.VIEW],
    [CORE_RESOURCES.ORDERS]: [CORE_ACTIONS.VIEW],
  },
};
