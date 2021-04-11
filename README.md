Intro 

Managing a simple DevOps process is itself a challenge for enterprises, especially when you consider all the moving parts of this process. It could be simple enough for organizations which have simple needs, and it could be as complex with hundreds of moving parts. 

The complexity of moving from a fully manual design, development, and hosting process to an agile, fully cloud-native and automated process can be time consuming, laborious and intensive process even with expert guidance internally. 

This one-time implementation of DevOps into your routines and processes can lead to better idea-to-feature implementation, higher efficiencies and better RoI than your older process. 

When you are implementing a DevOps process, either in a greenfield project, or improving your current process, it is essential to build resiliency, avoid cloud lock-in, agility, flexibility, scalability and for performance during this juncture. 

When developers have the flexibility to choose the type of cloud, cloud environment, pipeline automation tools and languages to build secure applications which perform as planned while ensuring budgets are not exceeded, they build wonderful applications. 

At Syren, we wish to showcase our capabilities in implementing DevOps for applications designed to work in multi-cloud environments, and that too in a wide variety of application architecture styles. 

We shall over the next few weeks showcase one application at a time built on a different cloud, a different language and different tools used for DevOps. 

About this code 

This is a simple Two-Tier Architecture application developed with Node JS,  as backend api and react js for front end. This application is designed to have basic functionality to record, display and reset votes. 

Architecture 

Insert architecture diagram here. 

Setup & Requirements 

Visual Studio Code

Node Js

Running this Vote App 

// clone the project and start the project
git clone https://github.com/SyrenCloud/react-votingapp strat the api  
cd api 
npm install 
npm run dev// start the react app 
cd my-app 
npm install 
npm start 

Vote App Deployment with AWS DevOps 

The following services are required and we are using Aws as an example for the application 

App Service - EC2 

We are creating these Service using cfn (CloudFormation) templates in AWS DevOps with CI-CD Pipelines. 

Insert image AWS pipeline workflow 

 AWS cfn Template
Here's a link to the cfn template Cloud Formation Template 

AWS Work Flow 

Architecture diagram

Build Pipeline with CI 

Whenever new code is pushed to the master branch the build pipeline will be triggered 

Get the latest code from git master branch. 

Restore required dependency 

Build application 

Copying the CFN Template files to build folder This CFN Template is defined to create the required service in AWS Portal 

Create the artifact file in AWS DevOps. This will be used to deploy the application in multiple environments. 

Release Pipeline with CD 

This will contains all stages required such as the Dev, QA and Production. Each stage will have jobs and Tasks. 

Architecture diagram
We need to configure all the variables as per environment like (Dev, QA and Prod) 

CFN Template Deployment: We are creating the Resources (App Service) defined in the CFN template 

AWS App Service Deployment: We will deploy the App code from the artifact file in Build pipeline to App Service. 


While this is a simple example of using DevOps on a simple application, we shall at later dates provide examples of using DevOps in much more complex scenarios. 
