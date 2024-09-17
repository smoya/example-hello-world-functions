// hello there!
// 
// I'm a serverless function that you can deploy as part of your site.
// I'll get deployed to AWS Lambda, but you don't need to know that. 
// You can develop and deploy serverless functions right here as part
// of your site. Netlify Functions will handle the rest for you.


exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'World'
    console.log('This is a log line');
    console.error('This is an error log line');

    if (event.queryStringParameters.die) {
        throw new Error('forced to die :-(');
    }
    
    return {
        statusCode: 200,
        body: `Hello ${subject}!`,
    }
}
