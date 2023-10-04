import database from "../database/";

const playerResolver = {
    Query: {
        players: async () => {
        try {
          const { data, error } = await database.from('Players').select('*');
          if (error) {
            throw new Error('Impossible de récupérer les players');
          }
          return data.map((player) => ({
            id: player.id,
            name: player.name,
            team: player.team
          }));
          
        } catch (error) {
          throw new Error('Erreur lors de la récupération des players');
        }
      },
    },
  };
  
  export default playerResolver;
  