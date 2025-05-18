param swalocation string = 'eastus2'

param staticWebAppName string = 'portfolio-swa'

@allowed([ 'Free', 'Standard' ])
param sku string = 'Free'


@description('Create a static web app')
module swaModule './swa.bicep' = {
  name: 'deployStaticWebApp'

  params: {
    staticWebAppName: staticWebAppName
    swalocation: swalocation
    sku: sku
  }
}

output staticWebAppName string = swaModule.outputs.staticWebAppName
output staticWebAppUrl  string = swaModule.outputs.endpoint
