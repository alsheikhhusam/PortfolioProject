targetScope = 'subscription'

param resourceGroupName string = 'portfolio-rg'
param location string = 'eastus'
param webAppName string = uniqueString(resourceGroupName, 'my-portfolio-webapp')
@allowed([ 'Free', 'Standard' ])
param sku string = 'Free'
param linuxFxVersion string = 'node|20-lts'
param repositoryUrl string = 'https://github.com/alsheikhhusam/PortfolioProject/tree/main/my-portfolio'
param branch string = 'azure-prod'

module appServiceDeploy './appservice.bicep' = {
  name: 'deployAppService'
  scope: resourceGroup(resourceGroupName)
  params: {
    location: location
    webAppName: webAppName
    sku: sku
    linuxFxVersion: linuxFxVersion
    repositoryUrl: repositoryUrl
    branch: branch
  }
}
