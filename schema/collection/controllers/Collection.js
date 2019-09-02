'use strict';

/**
 * Collection.js controller
 *
 * @description: A set of functions called "actions" for managing `Collection`.
 */

module.exports = {

  /**
   * Retrieve collection records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.collection.search(ctx.query);
    } else {
      return strapi.services.collection.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a collection record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.collection.fetch(ctx.params);
  },

  /**
   * Count collection records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.collection.count(ctx.query);
  },

  /**
   * Create a/an collection record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.collection.add(ctx.request.body);
  },

  /**
   * Update a/an collection record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.collection.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an collection record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.collection.remove(ctx.params);
  }
};
