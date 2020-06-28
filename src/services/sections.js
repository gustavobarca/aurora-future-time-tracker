import api from './api';

export async function getAllSections(projectGid) {
  const { data } = await api.get(`/projects/${projectGid}/sections`);

  return data.data
}