import { Group } from '../schema/types/Query';
import createClient from './createClient';
let database = createClient();

export const findGroupById = async (id: number): Promise<Group | null> => {
    const { data, error } = await database
      .from('Groups')
      .select('*')
      .filter('id', 'eq', id)
      .single();
    if (error) {
      throw error;
    }
    return data;
  };
  

export default database;
