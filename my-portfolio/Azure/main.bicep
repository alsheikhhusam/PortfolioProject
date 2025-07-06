param resourceGroupName string = 'portfolio-rg'
param location string = 'eastus'
param webAppName string = uniqueString(resourceGroupName, 'my-portfolio-webapp')
@allowed([ 'F1', 'S1' ])
param sku string = 'S1'
param linuxFxVersion string = 'node|20-lts'
param repositoryUrl string = 'https://github.com/alsheikhhusam/PortfolioProject/tree/main/my-portfolio'
param branch string = 'azure-prod'

var appServicePlanName = toLower('AppServicePlan-${webAppName}')
var webSiteName = toLower('wapp-${webAppName}')

resource appServicePlan 'Microsoft.Web/serverfarms@2023-01-01' = {
  name: appServicePlanName
  location: location
  kind: 'linux'
  sku: {
    name: sku
  }
  properties: {
    reserved: true
  }
}

resource appService 'Microsoft.Web/sites@2023-01-01' = {
  name: webSiteName
  location: location
  kind: 'app,linux'
  properties: {
    serverFarmId: appServicePlan.id
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: linuxFxVersion
    }
  }
}

resource sourceControl 'Microsoft.Web/sites/sourcecontrols@2023-01-01' = {
  parent: appService
  name: 'web'
  properties: {
    repoUrl: repositoryUrl
    branch: branch
    isManualIntegration: false
    deploymentRollbackEnabled: true
    isGitHubAction: true
  }
}
