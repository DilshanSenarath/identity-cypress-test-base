/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import { CommonUtils } from "../utils";

/// <reference types="cypress" />

/**
 * Custom command to select DOM element by `data-testid` attribute.
 *
 * @deprecated Deprecated since version 0.2.5. Use `cy.dataComponentId()` instead.
 *
 * @example
 *    cy.dataTestId("<RAW_TEST_ID>") -> [data-testid=<RAW_TEST_ID>]
 *
 * @param {string} value - Attribute value.
 * @param {string} options - Query options. i.e timeout etc.
 * @returns {Cypress.CanReturnChainable}
 */
Cypress.Commands.add("dataTestId", (value: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable
    & Cypress.Withinable & Cypress.Shadow>): Cypress.CanReturnChainable => {

    return cy.get(CommonUtils.resolveDataTestId(value), options);
});

/**
 * Custom command to select DOM element by `data-componentid` attribute.
 *
 * @example
 *    cy.dataComponentId("<RAW_TEST_ID>") -> [data-componentid=<RAW_TEST_ID>]
 *
 * @param {string} value - Attribute value.
 * @param {string} options - Query options. i.e timeout etc.
 * @returns {Cypress.CanReturnChainable}
 */
Cypress.Commands.add("dataComponentId", (value: string, options?: Partial<Cypress.Loggable & Cypress.Timeoutable
    & Cypress.Withinable & Cypress.Shadow>): Cypress.CanReturnChainable => {

    return cy.get(CommonUtils.resolveDataTestId(value), options);
});
