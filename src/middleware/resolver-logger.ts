import config from 'config';
import logger from '@modules/logger';

/**
 * Logs metadata for each resolver request via middleware
 *
 * @function
 * @param {Function} resolve - Promise
 * @param {Object} parent - Parent resolver
 * @param {Object} args - User input arguments
 * @param {Object} context - Global resolver store
 * @param {AST} info - GraphQL metadata
 * @returns {Promise} - Resolves middleware function
 */
const resolverLogger = (resolve, parent, args, context, info) => {
  const cuid =
    (config.get('auth.enabled') && context.user && context.user.cuid) || null;

  logger.info({ cuid, args }, `Metadata for resolver: ${info.fieldName}`);

  return resolve();
};

export default resolverLogger;
