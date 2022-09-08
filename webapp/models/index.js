// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HighSchool, Player } = initSchema(schema);

export {
  HighSchool,
  Player
};