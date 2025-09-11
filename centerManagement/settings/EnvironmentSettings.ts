interface EnvironmentSettings {
  baseURL: string;
  homeURL: string;
}

const enviroments: Record<string, EnvironmentSettings> = {
  qa:  { 
    baseURL: 'https://secure-sso.apap.com.do/auth/realms/digitalizacion/protocol/openid-connect/auth?response_type=code&client_id=portal-corporativo-frontend&state=emguLmRnSERKOUt3Ym53cERSdzNBTWlWZjFMfjFrazMyMzdEZ2toSWpqYlB1&redirect_uri=https%3A%2F%2Fmf-solicitudes-workflow-digitalops-qa.apps.x966bdcl.eastus2.aroapp.io&scope=openid%20profile%20email&code_challenge=V0c6x6trPZC-TlSWM7PO85l6lLuYPMf2DLdB7bCypFs&code_challenge_method=S256&nonce=emguLmRnSERKOUt3Ym53cERSdzNBTWlWZjFMfjFrazMyMzdEZ2toSWpqYlB1',
    homeURL: 'https://mf-solicitudes-workflow-digitalops-qa.apps.x966bdcl.eastus2.aroapp.io/dashboard/home'
  },
  cert:{ 
    baseURL: '',
    homeURL: ''
  }
};

export default enviroments[process.env.ENV || 'qa'];