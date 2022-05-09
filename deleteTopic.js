const { PubSub } = require('@google-cloud/pubsub');

function main() {
    const topicNameOrId = 'topic';
    const projectId = 'project-dr-consulta';
    const keyFilename = '/home/$YOUR_USER/dr-consulta/project-dr-consulta-8f6927cd8d19.json';
    
    const pubSubClient = new PubSub({ projectId, keyFilename });
  
    async function deleteTopic() {
      await pubSubClient.topic(topicNameOrId).delete();
      console.log(`Topico ${topicNameOrId} deletado com seucesso.`);
    }
  
    deleteTopic().catch(console.error);
  }
  
  main(...process.argv.slice(2));