import database from "../database/";

console.log("GroupResolver.ts--1");

const groupResolver = {
  Query: {
    groups: async () => {
      try {
        const { data, error } = await database.from('Groups').select('*');
        if (error) {
          throw new Error('Impossible de récupérer les groupes');
        }
        return data.map((group) => ({
          id: group.id,
          name: group.name,
          team: group.team
        }));
        
      } catch (error) {
        console.log("GroupResolver.ts--4");
        throw new Error('Erreur lors de la récupération des groupes');
      }
    },
    group: async (_: any, { id }: any) => {
      try {
        const { data, error } = await database.from('groups').select('*').eq('id', id).single();

        if (error) {
          throw new Error('Impossible de récupérer le groupe');
        }
        return data;
      } catch (error) {
        throw new Error('Erreur lors de la récupération du groupe');
      }
    },
  }
};
  
  export default groupResolver;
  