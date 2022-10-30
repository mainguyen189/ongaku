let accessToken;
const clientId = 'not giving you my api';
const redirectURI = 'http://localhost:3000/';
const Spotify = {
    getACcessToken(){
        if(accessToken){
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            //clear parameter and grab new access token after expire
            window.setTimeout(()=> accessToken='', expiresIn*1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessURL=`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = accessURL;
        }
    }

};

export default Spotify;