targetScope = 'subscription'

param location string = 'eastus'

param swalocation string = 'eastus2'

param resourceGroupName string = 'portfolio-rg'

param staticWebAppName string = 'portfolio-swa'

@allowed([ 'Free', 'Standard' ])
param sku string = 'Free'

@description('String to make resource names unique')
var resourceToken = uniqueString(subscription().subscriptionId, location)

@description('Create a resource group')
resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: location
}

@description('Create a static web app')
module swaModule './swa.bicep' = {
  name: 'deployStaticWebApp'
  scope: rg

  params: {
    staticWebAppName: '${staticWebAppName}-${resourceToken}'
    swalocation: swalocation
    sku: sku
  }
}
