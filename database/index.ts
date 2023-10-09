import Match from '../schema/types/Match';
import Player from '../schema/types/Player';
import { Group } from '../schema/types/Query';
import Team from '../schema/types/Team';
import Tournament from '../schema/types/Tournament';
import createClient from './createClient';
let database = createClient();

/*export const findGroupById = async (id: number): Promise<Group | null> => {
    const { data, error } = await database
      .from('Groups')
      .select('*')
      .filter('id', 'eq', id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  };*/

  export const findGroupById = elemenById('Groups',Group);
  export const findTeamById = elemenById('Teams',Team);
  export const findMatchById = elemenById('Matchs',Match);
  export const findPlayerById = elemenById('Players',Player);
  export const findTournamentById = elemenById('Tournaments',Tournament);

  function elemenById(table: String, type: any) {
     async (id: number): Promise<typeof type | null> => {
      const { data, error } = await database
        .from(''+table)
        .select('*')
        .filter('id', 'eq', id)
        .single();
      if (error) {
        throw error;
      }
      return data;
    };
  }
  
export default database;
