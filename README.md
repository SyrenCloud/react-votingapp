Intro 

Managing a simple DevOps process is itself a challenge for enterprises, especially when you consider all the moving parts of this process. It could be simple enough for organizations which have simple needs, and it could be as complex with hundreds of moving parts. 

The complexity of moving from a fully manual design, development, and hosting process to an agile, fully cloud-native and automated process can be time consuming, laborious and intensive process even with expert guidance internally. 

This one-time implementation of DevOps into your routines and processes can lead to better idea-to-feature implementation, higher efficiencies and better RoI than your older process. 

When you are implementing a DevOps process, either in a greenfield project, or improving your current process, it is essential to build resiliency, avoid cloud lock-in, agility, flexibility, scalability and for performance during this juncture. 

When developers have the flexibility to choose the type of cloud, cloud environment, pipeline automation tools and languages to build secure applications which perform as planned while ensuring budgets are not exceeded, they build wonderful applications. 

At Syren, we wish to showcase our capabilities in implementing DevOps for applications designed to work in multi-cloud environments, and that too in a wide variety of application architecture styles. 

We shall over the next few weeks showcase one application at a time built on a different cloud, a different language and different tools used for DevOps. 

About this code 

This is a simple Two-Tier Architecture application developed with Node JS,  as backend api and react js for front end. This application is designed to have basic functionality to record, display and reset data. 

Setup & Requirements :

Visual Studio Code

Node Js

Running this Starter App 

// clone the project and start the project

git clone https://github.com/SyrenCloud/react-votingapp start the api  
cd api 
npm install 
npm run dev
// start the react app 
cd my-app 
npm install 
npm start 

Vote App Deployment with AWS DevOps 

The following services are required and we are using Aws as an example for the application 

App Service - EC2 

We are creating these Service using cfn (CloudFormation) templates in AWS with CI-CD Pipelines. 

AWS pipeline workflow: 

![pipeline-workflow](https://user-images.githubusercontent.com/82216150/114331272-4bc0ed80-9b61-11eb-956d-d9959f334c02.png)


Process for creating Pipe line using cloud formation Template:

    1.Navigate to Cloudformation/CloudPipeline.yml file in repo which you have cloned
    2.Configure the parameters related git hub repository , with your account details
    3.Navigate to cloud formation console in your aws account, make sure you select region as us-east-2 which have availability zones
      for creating pipeline stack and cluster
    4.create the pipeline stack by clicking on create new stack button
    5.Select the upload template option, and browse the CloudPipeline.yml file modified above
    6.Click next and in the last step, select the checkbox to create IAM resources relavant to the pipeline stack.

Once you complete above steps, navigate to aws codepipeline window, click pipelines in left pane and you will be able to see the cloud pipeline created using
cfn template.

When you click on pipeline and navigate to details - stage, build and deploy phases will be visible where code is picked from git repo, build artifacts and deploy
the cfn template to create the cluster and publish the artifacts to service.

We can create multi stage environments , by modifying stage parameter in cloud pipeline.yml to different values like qa , prod and importing 
template to create a stack in cloud formation console.

While this is a simple example of using DevOps on a simple application, we shall at later dates provide examples of using DevOps in much more complex scenarios. 
