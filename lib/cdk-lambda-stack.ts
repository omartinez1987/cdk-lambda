
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CdkLambdaStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props?: cdk.StackProps
  ) {
    super(scope, id, props);

    // Get deployment environment
    const environment = process.env.CDK_ENV || 'dev';

    // Validate environment
    const validEnvironments = ['dev', 'qa', 'prod'];

    if (!validEnvironments.includes(environment)) {
      throw new Error(`Invalid environment: ${environment}`);
    }

    // Define Lambda function
    const myLambda = new lambda.Function(this, 'cdk_lambda', {
      functionName: `cdk_lambda_${environment}`,

      runtime: lambda.Runtime.PYTHON_3_12,

      handler: 'index.handler',

      code: lambda.Code.fromAsset(
        path.join(__dirname, 'src/lambda')
      ),

      timeout: cdk.Duration.seconds(30),

      memorySize: 256,

      environment: {
        ENVIRONMENT: environment
      }
    });
  }
}
