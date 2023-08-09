export const environment = {
    production: true,
    apiGateWay: 'https://bff-web.deepin.chat',
    identity: {
        url: 'https://id.deepin.chat',
        clientId: 'web_chat_client',
        redirect_uri: 'https://deepin.chat/callback/signin',
        silent_redirect_uri: 'https://deepin.chat/callback/silent',
        post_logout_redirect_uri: 'https://deepin.chat/callback/logout',
    }
};
