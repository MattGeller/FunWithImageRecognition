// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
    apiKey: '{e1fb6f596ca44bd2ac0bd6a608906b9e}'
});

// predict the contents of an image by passing in a url
app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
    function(response) {
        console.log(response);
    },
    function(err) {
        console.error(err);
    }
);
