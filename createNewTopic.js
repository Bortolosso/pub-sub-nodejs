const { PubSub } = require('@google-cloud/pubsub');

const projectId = 'project-dr-consulta';
const keyFilename = '/home/$YOUR_USER/dr-consulta/project-dr-consulta-8f6927cd8d19.json';
const pubSubClient = new PubSub({ projectId, keyFilename });

async function createTopic(
    topicNameOrId = 'my-topic',
) {
    const schema = pubSubClient.schema(topicNameOrId);
    const fullName = await schema.getName();

    await pubSubClient.createTopic({
        name: topicNameOrId
    });

    console.log(`Topico ${topicNameOrId} criado com o schema ${fullName}.`);
};

createTopic(...process.argv.slice(2)).catch(e => {
    console.error(e);
    process.exitCode = -1;
});