// Imports the Google Cloud client library.
const { Storage } = require('@google-cloud/storage');

// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md

const projectId = 'project-dr-consulta'
const keyFilename = '/home/bortolosso/repos/dr-consulta/project-dr-consulta-8f6927cd8d19.json'

const storage = new Storage({ projectId, keyFilename });

// Makes an authenticated API request.
async function listBuckets() {
  try {
    const [buckets] = await storage.getBuckets();

    console.log('Buckets:', buckets);
    buckets.forEach(bucket => {
      console.log(bucket);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();