export const environment = {
    production: false,
    apiGateWay: 'http://localhost:10000',
    identity: {
        url: 'https://id.deepin.chat',
        clientId: 'web_chat_client',
        redirectUri: 'http://localhost:4200/callback/signin',
        silentRedirectUri: 'http://localhost:4200/callback/silent',
        postLogoutRedirectUri: 'http://localhost:4200/callback/logout',
    }
};
