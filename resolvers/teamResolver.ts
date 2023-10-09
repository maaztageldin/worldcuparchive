import database from "../database";

const teamResolver = {
    Query: {
      teams: async () => {
        try {
          const { data, error } = await database
          .from('Teams')
          .select('*');
          console.log(data);
          console.log(error);


          if (error) {
            throw new Error('Impossible de récupérer les teams');
          }
          return data.map((team) => ({
            id: team.id,
            name: team.name,
            abbreviation: team.abbreviation,
            flagURL: team.flagURL,
            photoURL: team.photoURL
          }));
          
        } catch (error) {
          console.log("teamResolver.ts--1");
          throw new Error('Erreur lors de la récupération des teams');
        }
      },
    },
  };
  
  export default teamResolver;
  