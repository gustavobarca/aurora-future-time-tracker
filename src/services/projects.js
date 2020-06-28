import api from './api';

export async function getAllProjects(teamId) {
  const { data } = await api.get(`/teams/${teamId}/projects`);

  return data.data;
}