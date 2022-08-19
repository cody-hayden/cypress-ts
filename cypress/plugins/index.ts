/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
 export const plugins: Cypress.PluginConfig = (
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  on: Cypress.PluginEvents,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  config: Cypress.ConfigOptions,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
): void | Cypress.ConfigOptions | Promise<Cypress.ConfigOptions> => {
  
};

module.exports = plugins;
require('@applitools/eyes-cypress')(module);

export default plugins;

