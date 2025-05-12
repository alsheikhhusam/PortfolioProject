param staticWebAppName string
param swalocation string
param sku string

resource swa 'Microsoft.Web/staticSites@2022-09-01' = {
  name: staticWebAppName
  location: swalocation

  sku: {
    name: sku
    tier: sku
  }

  properties: {
    repositoryUrl:'https://github.com/alsheikhhusam/PortfolioProject'
    branch: 'azure-prod'

    buildProperties: {
      appLocation: '/my-portfolio'
      outputLocation: '.next'
      apiLocation: '/my-portfolio/api'
    }
  }
}

@description('Output the default hostname')
output endpoint string = swa.properties.defaultHostname
