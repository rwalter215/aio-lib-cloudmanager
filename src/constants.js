/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = {
  basePath: '/api/programs',
  rels: {
    self: 'self',
    pipelines: 'http://ns.adobe.com/adobecloud/rel/pipelines',
    execution: 'http://ns.adobe.com/adobecloud/rel/execution',
    executions: 'http://ns.adobe.com/adobecloud/rel/executions',
    metrics: 'http://ns.adobe.com/adobecloud/rel/pipeline/metrics',
    cancel: 'http://ns.adobe.com/adobecloud/rel/pipeline/cancel',
    advance: 'http://ns.adobe.com/adobecloud/rel/pipeline/advance',
    executionId: 'http://ns.adobe.com/adobecloud/rel/execution/id',
    environments: 'http://ns.adobe.com/adobecloud/rel/environments',
    stepLogs: 'http://ns.adobe.com/adobecloud/rel/pipeline/logs',
    logs: 'http://ns.adobe.com/adobecloud/rel/logs',
    logsDownload: 'http://ns.adobe.com/adobecloud/rel/logs/download',
    logsTail: 'http://ns.adobe.com/adobecloud/rel/logs/tail',
    variables: 'http://ns.adobe.com/adobecloud/rel/variables',
    ipAllowlists: 'http://ns.adobe.com/adobecloud/rel/ipAllowlists',
    ipAllowlistBindings: 'http://ns.adobe.com/adobecloud/rel/ipAllowlistBindings',
    commerceCommandExecution: 'http://ns.adobe.com/adobecloud/rel/commerceCommandExecution',
    commerceCommandExecutionId: 'http://ns.adobe.com/adobecloud/rel/commerceCommandExecution/id',
    pipelineCache: 'http://ns.adobe.com/adobecloud/rel/cache',
  },
  config: {
    programId: 'cloudmanager_programid',
  },
  problemTypes: {
    'http://ns.adobe.com/adobecloud/validation-exception': {
      prefix: () => 'Validation Error(s)',
      extraDetailsKey: 'validationErrors',
    },
    'http://ns.adobe.com/adobecloud/ipallowlist-generic-exception': {
      prefix: () => 'IP Allowlist Error(s)',
      extraDetailsKey: 'ipAllowlistErrors',
    },
    other: {
      prefix: (problem) => `${problem.title || 'Uncategorized Error'}(s)`,
    },
  },
}
