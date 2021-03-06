/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import { EuiTitle, EuiSpacer } from '@elastic/eui';
import { i18n } from '@kbn/i18n';
import { CustomLinkOverview } from './CustomLink';

export const CustomizeUI = () => {
  return (
    <>
      <EuiTitle size="l">
        <h1>
          {i18n.translate('xpack.apm.settings.customizeApp', {
            defaultMessage: 'Customize app',
          })}
        </h1>
      </EuiTitle>
      <EuiSpacer size="l" />
      <CustomLinkOverview />
    </>
  );
};
