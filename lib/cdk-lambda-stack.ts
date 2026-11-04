import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as path from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Define the Lambda function
    const myLambda = new lambda.Function(this, 'MyFirstLambda', {
      runtime: lambda.Runtime.PYTHON_3_12, // Choose your runtime
      handler: 'index.handler',            // filename.method
      code: lambda.Code.fromAsset(path.join(__dirname, '../src/lambda')), // code path
    });
    }
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkLambdaQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
