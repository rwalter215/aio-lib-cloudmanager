<!--
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
-->

[![Version](https://img.shields.io/npm/v/@.svg)](https://npmjs.org/package/@adobe/aio-lib-cloudmanager)
[![Downloads/week](https://img.shields.io/npm/dw/@.svg)](https://npmjs.org/package/@adobe/aio-lib-cloudmanager)
[![Build Status](https://travis-ci.com/.svg?branch=master)](https://travis-ci.com/@adobe/aio-lib-cloudmanager)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/@adobe/aio-lib-cloudmanager/master.svg?style=flat-square)](https://codecov.io/gh/@adobe/aio-lib-cloudmanager/)

# Adobe I/O Cloud Manager Library

JavaScript SDK wrapping the [Adobe Cloud Manager API](https://www.adobe.io/apis/experiencecloud/cloud-manager/docs.html).

### Installing

```bash
$ npm install @adobe/aio-lib-cloudmanager
```

### Usage
1) Initialize the SDK

```javascript
const sdk = require('@adobe/aio-lib-cloudmanager')

async function sdkTest() {
  //initialize sdk
  const client = await sdk.init('<orgId>', 'x-api-key', '<valid auth token>')
}
```

2) Call methods using the initialized SDK

```javascript
const sdk = require('@adobe/aio-lib-cloudmanager')

async function sdkTest() {
  // initialize sdk
  const client = await sdk.init('<orgId>', 'x-api-key', '<valid auth token>')

  // call methods
  try {
    // get... something
    const result = await client.getSomething({})
    console.log(result)

  } catch (e) {
    console.error(e)
  }
}
```

## Classes

<dl>
<dt><a href="#CloudManagerAPI">CloudManagerAPI</a></dt>
<dd><p>This class provides methods to call your Cloud Manager APIs.
Before calling any method initialize the instance by calling the <code>init</code> method on it
with valid values for tenantId, apiKey and accessToken</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#init">init(orgId, apiKey, accessToken, baseUrl)</a> ⇒ <code><a href="#CloudManagerAPI">Promise.&lt;CloudManagerAPI&gt;</a></code></dt>
<dd><p>Returns a Promise that resolves with a new CloudManagerAPI object.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#ListProgramOptions">ListProgramOptions</a> : <code>object</code></dt>
<dd><p>Options to the listPipeline function</p>
</dd>
<dt><a href="#EmbeddedProgram">EmbeddedProgram</a> : <code>object</code></dt>
<dd><p>A lightweight representation of a Program</p>
</dd>
<dt><a href="#Pipeline">Pipeline</a> : <code>object</code></dt>
<dd><p>A representation of a CI/CD Pipeline</p>
</dd>
<dt><a href="#PipelinePhase">PipelinePhase</a> : <code>object</code></dt>
<dd><p>Describes a phase of a pipeline</p>
</dd>
<dt><a href="#PipelineExecution">PipelineExecution</a> : <code>object</code></dt>
<dd><p>A representation of an execution of a CI/CD Pipeline.</p>
</dd>
<dt><a href="#PipelineStepMetrics">PipelineStepMetrics</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Metric">Metric</a> : <code>object</code></dt>
<dd><p>A representation of a specific metric generated by a CI/CD Pipeline step.</p>
</dd>
<dt><a href="#Environment">Environment</a> : <code>object</code></dt>
<dd><p>A representation of an Environment known to Cloud Manager.</p>
</dd>
<dt><a href="#Variable">Variable</a> : <code>object</code></dt>
<dd><p>A named value than can be set on an Environment or Pipeline</p>
</dd>
<dt><a href="#LogOptionRepresentation">LogOptionRepresentation</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DownloadedLog">DownloadedLog</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PipelineUpdate">PipelineUpdate</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="CloudManagerAPI"></a>

## CloudManagerAPI
This class provides methods to call your Cloud Manager APIs.
Before calling any method initialize the instance by calling the `init` method on it
with valid values for tenantId, apiKey and accessToken

**Kind**: global class  

* [CloudManagerAPI](#CloudManagerAPI)
    * [.orgId](#CloudManagerAPI+orgId) : <code>string</code>
    * [.apiKey](#CloudManagerAPI+apiKey) : <code>string</code>
    * [.accessToken](#CloudManagerAPI+accessToken) : <code>string</code>
    * [.baseUrl](#CloudManagerAPI+baseUrl) : <code>string</code>
    * [.init(orgId, apiKey, accessToken, baseUrl)](#CloudManagerAPI+init) ⇒ [<code>Promise.&lt;CloudManagerAPI&gt;</code>](#CloudManagerAPI)
    * [.listPrograms()](#CloudManagerAPI+listPrograms) ⇒ <code>Promise.&lt;Array.&lt;EmbeddedProgram&gt;&gt;</code>
    * [.listPipelines(programId, options)](#CloudManagerAPI+listPipelines) ⇒ <code>Promise.&lt;Array.&lt;Pipeline&gt;&gt;</code>
    * [.startExecution(programId, pipelineId)](#CloudManagerAPI+startExecution) ⇒ <code>string</code>
    * [.getCurrentExecution(programId, pipelineId)](#CloudManagerAPI+getCurrentExecution) ⇒ [<code>PipelineExecution</code>](#PipelineExecution)
    * [.getExecution(programId, pipelineId, executionId)](#CloudManagerAPI+getExecution) ⇒ [<code>PipelineExecution</code>](#PipelineExecution)
    * [.getQualityGateResults(programId, pipelineId, executionId, action)](#CloudManagerAPI+getQualityGateResults) ⇒ [<code>PipelineStepMetrics</code>](#PipelineStepMetrics)
    * [.cancelCurrentExecution(programId, pipelineId)](#CloudManagerAPI+cancelCurrentExecution) ⇒ <code>object</code>
    * [.advanceCurrentExecution(programId, pipelineId)](#CloudManagerAPI+advanceCurrentExecution) ⇒ <code>object</code>
    * [.listEnvironments(programId)](#CloudManagerAPI+listEnvironments) ⇒ [<code>Array.&lt;Environment&gt;</code>](#Environment)
    * [.getExecutionStepLog(programId, pipelineId, executionId, action, logFile, outputStream)](#CloudManagerAPI+getExecutionStepLog) ⇒ [<code>Array.&lt;Environment&gt;</code>](#Environment)
    * [.listAvailableLogOptions(programId, environmentId)](#CloudManagerAPI+listAvailableLogOptions) ⇒ [<code>Array.&lt;LogOptionRepresentation&gt;</code>](#LogOptionRepresentation)
    * [.downloadLogs(programId, environmentId, service, name, days, outputDirectory)](#CloudManagerAPI+downloadLogs) ⇒ [<code>Array.&lt;DownloadedLog&gt;</code>](#DownloadedLog)
    * [.deletePipeline(programId, pipelineId)](#CloudManagerAPI+deletePipeline) ⇒ <code>object</code>
    * [.updatePipeline(programId, pipelineId, changes)](#CloudManagerAPI+updatePipeline) ⇒ [<code>Pipeline</code>](#Pipeline)
    * [.getDeveloperConsoleUrl(programId, environmentId)](#CloudManagerAPI+getDeveloperConsoleUrl) ⇒ <code>string</code>
    * [.getEnvironmentVariables(programId, environmentId)](#CloudManagerAPI+getEnvironmentVariables) ⇒ [<code>Array.&lt;Variable&gt;</code>](#Variable)
    * [.setEnvironmentVariables(programId, environmentId, variables)](#CloudManagerAPI+setEnvironmentVariables) ⇒ <code>object</code>
    * [.getPipelineVariables(programId, pipelineId)](#CloudManagerAPI+getPipelineVariables) ⇒ [<code>Array.&lt;Variable&gt;</code>](#Variable)
    * [.setPipelineVariables(programId, pipelineId, variables)](#CloudManagerAPI+setPipelineVariables) ⇒ <code>object</code>
    * [.deleteProgram(programId)](#CloudManagerAPI+deleteProgram) ⇒ <code>object</code>
    * [.deleteEnvironment(programId, environmentId)](#CloudManagerAPI+deleteEnvironment) ⇒ <code>object</code>

<a name="CloudManagerAPI+orgId"></a>

### cloudManagerAPI.orgId : <code>string</code>
The organization id

**Kind**: instance property of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
<a name="CloudManagerAPI+apiKey"></a>

### cloudManagerAPI.apiKey : <code>string</code>
The api key from your integration

**Kind**: instance property of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
<a name="CloudManagerAPI+accessToken"></a>

### cloudManagerAPI.accessToken : <code>string</code>
The access token from your integration

**Kind**: instance property of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
<a name="CloudManagerAPI+baseUrl"></a>

### cloudManagerAPI.baseUrl : <code>string</code>
The base URL for the API endpoint

**Kind**: instance property of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
<a name="CloudManagerAPI+init"></a>

### cloudManagerAPI.init(orgId, apiKey, accessToken, baseUrl) ⇒ [<code>Promise.&lt;CloudManagerAPI&gt;</code>](#CloudManagerAPI)
Initializes a CloudManagerAPI object and returns it.

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Promise.&lt;CloudManagerAPI&gt;</code>](#CloudManagerAPI) - a CloudManagerAPI object  

| Param | Type | Description |
| --- | --- | --- |
| orgId | <code>string</code> | the organization id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| baseUrl | <code>string</code> | the base URL to access the API (defaults to https://cloudmanager.adobe.io) |

<a name="CloudManagerAPI+listPrograms"></a>

### cloudManagerAPI.listPrograms() ⇒ <code>Promise.&lt;Array.&lt;EmbeddedProgram&gt;&gt;</code>
Obtain a list of programs for the target organization.

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;EmbeddedProgram&gt;&gt;</code> - an array of Programs  
<a name="CloudManagerAPI+listPipelines"></a>

### cloudManagerAPI.listPipelines(programId, options) ⇒ <code>Promise.&lt;Array.&lt;Pipeline&gt;&gt;</code>
Obtain a list of pipelines for the target program.

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Pipeline&gt;&gt;</code> - an array of Pipelines  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| options | [<code>ListProgramOptions</code>](#ListProgramOptions) | options |

<a name="CloudManagerAPI+startExecution"></a>

### cloudManagerAPI.startExecution(programId, pipelineId) ⇒ <code>string</code>
Start an execution for a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>string</code> - the execution url  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+getCurrentExecution"></a>

### cloudManagerAPI.getCurrentExecution(programId, pipelineId) ⇒ [<code>PipelineExecution</code>](#PipelineExecution)
Get the current execution for a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>PipelineExecution</code>](#PipelineExecution) - the execution  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+getExecution"></a>

### cloudManagerAPI.getExecution(programId, pipelineId, executionId) ⇒ [<code>PipelineExecution</code>](#PipelineExecution)
Get an execution for a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>PipelineExecution</code>](#PipelineExecution) - the execution  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |
| executionId | <code>string</code> | the execution id |

<a name="CloudManagerAPI+getQualityGateResults"></a>

### cloudManagerAPI.getQualityGateResults(programId, pipelineId, executionId, action) ⇒ [<code>PipelineStepMetrics</code>](#PipelineStepMetrics)
Get the quality gate results for a pipeline step

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>PipelineStepMetrics</code>](#PipelineStepMetrics) - the execution  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |
| executionId | <code>string</code> | the execution id |
| action | <code>string</code> | the action name |

<a name="CloudManagerAPI+cancelCurrentExecution"></a>

### cloudManagerAPI.cancelCurrentExecution(programId, pipelineId) ⇒ <code>object</code>
Cancel current execution

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+advanceCurrentExecution"></a>

### cloudManagerAPI.advanceCurrentExecution(programId, pipelineId) ⇒ <code>object</code>
Advance current execution

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+listEnvironments"></a>

### cloudManagerAPI.listEnvironments(programId) ⇒ [<code>Array.&lt;Environment&gt;</code>](#Environment)
List environments for a program

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;Environment&gt;</code>](#Environment) - a list of environments  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |

<a name="CloudManagerAPI+getExecutionStepLog"></a>

### cloudManagerAPI.getExecutionStepLog(programId, pipelineId, executionId, action, logFile, outputStream) ⇒ [<code>Array.&lt;Environment&gt;</code>](#Environment)
Write step log to an output stream.

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;Environment&gt;</code>](#Environment) - a list of environments  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |
| executionId | <code>string</code> | the execution id |
| action | <code>string</code> | the action |
| logFile | <code>string</code> | the log file to select a non-default value |
| outputStream | <code>object</code> | the output stream to write to |

<a name="CloudManagerAPI+listAvailableLogOptions"></a>

### cloudManagerAPI.listAvailableLogOptions(programId, environmentId) ⇒ [<code>Array.&lt;LogOptionRepresentation&gt;</code>](#LogOptionRepresentation)
List the log options available for an environment

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;LogOptionRepresentation&gt;</code>](#LogOptionRepresentation) - the log options for the environment  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |

<a name="CloudManagerAPI+downloadLogs"></a>

### cloudManagerAPI.downloadLogs(programId, environmentId, service, name, days, outputDirectory) ⇒ [<code>Array.&lt;DownloadedLog&gt;</code>](#DownloadedLog)
Download log files from the environment to a specified directory.

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;DownloadedLog&gt;</code>](#DownloadedLog) - the list of downloaded logs  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |
| service | <code>string</code> | the service specification |
| name | <code>string</code> | the log name |
| days | <code>number</code> | the number of days |
| outputDirectory | <code>string</code> | the output directory |

<a name="CloudManagerAPI+deletePipeline"></a>

### cloudManagerAPI.deletePipeline(programId, pipelineId) ⇒ <code>object</code>
Delete a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy object  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+updatePipeline"></a>

### cloudManagerAPI.updatePipeline(programId, pipelineId, changes) ⇒ [<code>Pipeline</code>](#Pipeline)
Update a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Pipeline</code>](#Pipeline) - the new pipeline definition  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |
| changes | [<code>PipelineUpdate</code>](#PipelineUpdate) | the changes |

<a name="CloudManagerAPI+getDeveloperConsoleUrl"></a>

### cloudManagerAPI.getDeveloperConsoleUrl(programId, environmentId) ⇒ <code>string</code>
Get the link to the developer console

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>string</code> - the console url  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |

<a name="CloudManagerAPI+getEnvironmentVariables"></a>

### cloudManagerAPI.getEnvironmentVariables(programId, environmentId) ⇒ [<code>Array.&lt;Variable&gt;</code>](#Variable)
Get the list of variables for an environment

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;Variable&gt;</code>](#Variable) - the variables  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |

<a name="CloudManagerAPI+setEnvironmentVariables"></a>

### cloudManagerAPI.setEnvironmentVariables(programId, environmentId, variables) ⇒ <code>object</code>
Set the variables for an environment

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |
| variables | [<code>Array.&lt;Variable&gt;</code>](#Variable) | the variables |

<a name="CloudManagerAPI+getPipelineVariables"></a>

### cloudManagerAPI.getPipelineVariables(programId, pipelineId) ⇒ [<code>Array.&lt;Variable&gt;</code>](#Variable)
Get the list of variables for a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: [<code>Array.&lt;Variable&gt;</code>](#Variable) - the variables  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |

<a name="CloudManagerAPI+setPipelineVariables"></a>

### cloudManagerAPI.setPipelineVariables(programId, pipelineId, variables) ⇒ <code>object</code>
Set the variables for a pipeline

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| pipelineId | <code>string</code> | the pipeline id |
| variables | [<code>Array.&lt;Variable&gt;</code>](#Variable) | the variables |

<a name="CloudManagerAPI+deleteProgram"></a>

### cloudManagerAPI.deleteProgram(programId) ⇒ <code>object</code>
Delete a program

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |

<a name="CloudManagerAPI+deleteEnvironment"></a>

### cloudManagerAPI.deleteEnvironment(programId, environmentId) ⇒ <code>object</code>
Delete an environment

**Kind**: instance method of [<code>CloudManagerAPI</code>](#CloudManagerAPI)  
**Returns**: <code>object</code> - a truthy value  

| Param | Type | Description |
| --- | --- | --- |
| programId | <code>string</code> | the program id |
| environmentId | <code>string</code> | the environment id |

<a name="init"></a>

## init(orgId, apiKey, accessToken, baseUrl) ⇒ [<code>Promise.&lt;CloudManagerAPI&gt;</code>](#CloudManagerAPI)
Returns a Promise that resolves with a new CloudManagerAPI object.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;CloudManagerAPI&gt;</code>](#CloudManagerAPI) - a Promise with a CloudManagerAPI object  

| Param | Type | Description |
| --- | --- | --- |
| orgId | <code>string</code> | the organization id |
| apiKey | <code>string</code> | the API key for your integration |
| accessToken | <code>string</code> | the access token for your integration |
| baseUrl | <code>string</code> | the base URL to access the API (defaults to https://cloudmanager.adobe.io) |

<a name="ListProgramOptions"></a>

## ListProgramOptions : <code>object</code>
Options to the listPipeline function

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| busy | <code>boolean</code> | if true, only busy pipelines will be returned |

<a name="EmbeddedProgram"></a>

## EmbeddedProgram : <code>object</code>
A lightweight representation of a Program

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of the program. Unique within the space. |
| name | <code>string</code> | Name of the program |
| enabled | <code>boolean</code> | Whether this Program has been enabled for Cloud Manager usage |
| tenantId | <code>string</code> | Tenant Id |

<a name="Pipeline"></a>

## Pipeline : <code>object</code>
A representation of a CI/CD Pipeline

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Identifier of the pipeline. Unique within the program. |
| programId | <code>string</code> | Identifier of the program. Unique within the space. |
| name | <code>string</code> | Name of the pipeline |
| trigger | <code>string</code> | How should the execution be triggered. ON_COMMIT: each time a PR is available and the Pipeline is idle then a execution is triggered. MANUAL: triggerd through UI or API. SCHEDULE: recurring schedule (not yet implemented} |
| status | <code>string</code> | Pipeline status |
| createdAt | <code>string</code> | Create date |
| updatedAt | <code>string</code> | Update date |
| lastStartedAt | <code>string</code> | Last pipeline execution start |
| lastFinishedAt | <code>string</code> | Last pipeline execution end |
| phases | [<code>Array.&lt;PipelinePhase&gt;</code>](#PipelinePhase) | Pipeline phases in execution order |

<a name="PipelinePhase"></a>

## PipelinePhase : <code>object</code>
Describes a phase of a pipeline

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the phase |
| type | <code>string</code> | Type of the phase |
| repositoryId | <code>string</code> | Identifier of the source repository. The code from this repository will be build at the start of this phase.  Mandatory if type=BUILD |
| branch | <code>string</code> | Name of the tracked branch or a fully qualified git tag (e.g. refs/tags/v1).   Assumed to be `master` if missing. |
| environmentId | <code>string</code> | Identifier of the target environment. Mandatory if type=DEPLOY |

<a name="PipelineExecution"></a>

## PipelineExecution : <code>object</code>
A representation of an execution of a CI/CD Pipeline.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Pipeline execution identifier |
| programId | <code>string</code> | Identifier of the program. Unique within the space. |
| pipelineId | <code>string</code> | Identifier of the pipeline. Unique within the space. |
| artifactsVersion | <code>string</code> | Version of the artifacts generated during this execution |
| user | <code>string</code> | AdobeID who started the pipeline. Empty for auto triggered builds |
| status | <code>string</code> | Status of the execution |
| trigger | <code>string</code> | How the execution was triggered. |
| createdAt | <code>string</code> | Start time |
| updatedAt | <code>string</code> | Date of last status change |
| finishedAt | <code>string</code> | Date the execution reached a final state |

<a name="PipelineStepMetrics"></a>

## PipelineStepMetrics : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| metrics | [<code>Array.&lt;Metric&gt;</code>](#Metric) | metrics |

<a name="Metric"></a>

## Metric : <code>object</code>
A representation of a specific metric generated by a CI/CD Pipeline step.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | KPI result identifier |
| severity | <code>string</code> | Severity of the metric |
| passed | <code>boolean</code> | Whether metric is considered passed |
| override | <code>boolean</code> | Whether user override the failed metric |
| actualValue | <code>string</code> | Expected value for the metric |
| expectedValue | <code>string</code> | Expected value for the metric |
| comparator | <code>string</code> | Comparator used for the metric |
| kpi | <code>string</code> | KPI identifier |

<a name="Environment"></a>

## Environment : <code>object</code>
A representation of an Environment known to Cloud Manager.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | id |
| programId | <code>string</code> | Identifier of the program. Unique within the space. |
| name | <code>string</code> | Name of the environment |
| description | <code>string</code> | Description of the environment |
| type | <code>string</code> | Type of the environment |
| availableLogOptions | [<code>Array.&lt;LogOptionRepresentation&gt;</code>](#LogOptionRepresentation) | List of logs available in the environment |

<a name="Variable"></a>

## Variable : <code>object</code>
A named value than can be set on an Environment or Pipeline

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of the variable. Of a-z, A-Z, _ and 0-9 Cannot begin with a number. |
| value | <code>string</code> | Value of the variable. Read-Write for non-secrets, write-only for secrets. |
| type | <code>string</code> | Type of the variable. Default `string` if missing. `secretString` variables are encrypted at rest. Cannot be changed after creation. |

<a name="LogOptionRepresentation"></a>

## LogOptionRepresentation : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| service | <code>string</code> | Name of the service in environment. Example: author |
| name | <code>string</code> | Name of the log for service in environment. Example: aemerror |

<a name="DownloadedLog"></a>

## DownloadedLog : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | the path where the log was stored |
| url | <code>string</code> | the url of the log that was downloaded |

<a name="PipelineUpdate"></a>

## PipelineUpdate : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| branch | <code>string</code> | the new branch |
| repositoryId | <code>string</code> | the new repository id |

### Debug Logs

```bash
LOG_LEVEL=debug <your_call_here>
```

Prepend the `LOG_LEVEL` environment variable and `debug` value to the call that invokes your function, on the command line. This should output a lot of debug data for your SDK calls.

### Contributing

Contributions are welcome! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
