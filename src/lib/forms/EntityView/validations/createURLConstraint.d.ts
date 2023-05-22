import { I18NArguments } from '@icatalyst/js-core';
import { EntityField } from '../../../utilities';
/**
 * Validation function used for models.
 * Checks that the value is a valid url.
 *
 * If the value is empty or null then this will validate as true under the
 * assumption that it is not a required field.  If the field is required then
 * an additional validation would be executed to disallow nulls
 *
 * @param  {Boolean}  requireHTTPS true to require a https validation, false otherwise
 * @return {Function}   the validation function
 */
export declare const createURLConstraint: (requireHTTPS?: boolean) => (data: any, field: EntityField, value: any) => I18NArguments | null;
