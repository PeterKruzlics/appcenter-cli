/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * StoreSecretResponse
 *
 */
class StoreSecretResponse {
  /**
   * Create a StoreSecretResponse.
   * @property {string} [id] Store id
   * @property {string} [name] Store Name
   * @property {string} [type] Store Type
   * @property {string} [secret] Secret Json
   * @property {string} [tenantId] Tenant Id for Intune
   */
  constructor() {
  }

  /**
   * Defines the metadata of StoreSecretResponse
   *
   * @returns {object} metadata of StoreSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StoreSecretResponse',
      type: {
        name: 'Composite',
        className: 'StoreSecretResponse',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          secret: {
            required: false,
            serializedName: 'secret',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenant_id',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StoreSecretResponse;
