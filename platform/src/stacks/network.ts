import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  aws_ec2 as ec2
} from 'aws-cdk-lib'

interface NetworkStackProps extends cdk.StackProps {
}

export class NetworkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: NetworkStackProps){
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, 'vpc', {
      availabilityZones: cdk.Stack.of(this).availabilityZones,
      enableDnsHostnames: true,
      enableDnsSupport: true,
      ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
      natGateways: 0, // Cost saving measure
      subnetConfiguration: [
        {
          cidrMask: 20,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          cidrMask: 20,
          name: 'Private - Application',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
        {
          cidrMask: 24,
          name: 'Isolated - Database',
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
        },
      ],
    })
  }
}
