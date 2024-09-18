import * as cdk from 'aws-cdk-lib'
import { NetworkStack } from './stacks/network'

const environmentName = process.env.ENVIRONMENT_NAME || 'dev'
const branchName = process.env.BRANCH_NAME || 'main'

const app = new cdk.App()
const stage = new cdk.Stage(app, 'prod',{
  env: {
    account: '881605570752',
    region: 'us-east-1'
  }
})

const networkStack = new NetworkStack(stage, `${branchName}-network`, {
  tags: {
    'repo': 'cdk-rush',
    'project': 'cdk-rush/platform/network'
  }
})
