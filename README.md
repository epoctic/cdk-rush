# CDK-RUSH

This repository is meant to serve as an example of how the Rush monorepo toolset can be used to ease some of the pain experienced when working with AWS CDK.
It also serves as a useful testing ground for various solutions and questions posed in the aws-cdk Slack channel.

## Getting Started

Requirements:
- Node 18+ ([fnm](https://github.com/Schniz/fnm) recommended)
- [Rush](https://www.npmjs.com/package/@microsoft/rush) v5 installed globally (specific version auto-installs after first rush command is run within the monorepo)
- AWS Account with AWS CDK [bootstrapped](https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html)

Recommended:
- Billing alarms!

Need:
1. AWS CLI credentials (SSO, AKIA/ASIA keys, instance credentials, etc)


Stacks live in one of this monorepos "projects". 

Projects:
- platform

## Goals

Keep default platform deployment as close to zero cost as possible. That means no KMS keys, no long lived NAT Gateway, no ENIs, no EIPs, etc.
Those resources (except for the one NAT Gateway that will be created prior to spinning up other dependent resources) will all be in other downstream stacks that should be deleted after any testing is completed.
