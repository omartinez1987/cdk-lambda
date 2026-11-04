#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkLambdaStack } from '../lib/cdk-lambda-stack';

const app = new cdk.App();
const environments = {
  dev: {
    account: '639251695665',
    region: 'us-east-1'
  },
  qa: {
    account: '639251695665',
    region: 'us-east-1'
  },
  prod: {
    account: '639251695665',
    region: 'us-east-1'
  }
};

const environment =
  process.env.CDK_ENV || 'dev';

const config = environments[
  environment as keyof typeof environments
];

if (!config) {
  throw new Error(`Unknown environment: ${environment}`);
}

new CdkLambdaStack(app, 'CdkLambdaStack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
  
});
