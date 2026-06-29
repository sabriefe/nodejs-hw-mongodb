import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  const mongoUri =
    'mongodb://filintaefese_db_user:Ml6mGQdyg7pcpIHd@ac-7mgnenb-shard-00-00.vokikfe.mongodb.net:27017,ac-7mgnenb-shard-00-01.vokikfe.mongodb.net:27017,ac-7mgnenb-shard-00-02.vokikfe.mongodb.net:27017/contactsdb?ssl=true&replicaSet=atlas-46vzjn-shard-0&authSource=admin&appName=Cluster0';

  try {
    await mongoose.connect(mongoUri);

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};