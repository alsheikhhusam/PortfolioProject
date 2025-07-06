param resourceGroupName string = 'portfolio-rg'
param location string = 'eastus2'
param webAppName string = uniqueString(resourceGroupName, 'my-portfolio-webapp')
@allowed([ 'F1', 'S1' ])
param sku string = 'S1'
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
