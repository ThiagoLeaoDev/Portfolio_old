import axios from 'axios';
import projectsData from './projects.json';

export const getFigmaProjects = async () => {
  try {
    const promises = projectsData.figma.map(async (projectId) => {
      const response = await axios.get(`https://api.figma.com/v1/files/${projectId.id}`, {
        headers: {
          'X-Figma-Token': process.env.NEXT_PUBLIC_FIGMA_TOKEN,
        },
      });

      const { name, thumbnailUrl } = response.data;

      return {
        id: projectId.id,
        name,
        thumbnailUrl,
      };
    });

    const projectResults = await Promise.all(promises);
    return projectResults.filter(Boolean); // Remove os valores undefined ou null
  } catch (error) {
    console.log(error);
    return [];
  }
};
