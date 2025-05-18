param location string = 'eastus'

param swalocation string = 'eastus2'

param staticWebAppName string = 'portfolio-swa'

@allowed([ 'Free', 'Standard' ])
param sku string = 'Free'

@description('String to make resource names unique')
var resourceToken = uniqueString(subscription().subscriptionId, location)

@description('Create a static web app')
module swaModule './swa.bicep' = {
  name: 'deployStaticWebApp'

  params: {
    staticWebAppName: '${staticWebAppName}-${resourceToken}'
    swalocation: swalocation
    sku: sku
  }
}

@description('Expose the Static Web App name')
output staticWebAppName string = swaModule.outputs.staticWebAppName
