const { PubSub } = require('@google-cloud/pubsub');

function main() {
    const projectId = 'project-dr-consulta';
    const keyFilename = '/home/$YOUR_USER/dr-consulta/project-dr-consulta-8f6927cd8d19.json';
    
    const pubSubClient = new PubSub({ projectId, keyFilename });

    async function listAllTopics() {
        const [topics] = await pubSubClient.getTopics();
        console.log('Topicos existentes:');
        topics.forEach(topic => console.log(topic.name));
    };

    listAllTopics().catch(console.error);
};

main(...process.argv.slice(2));