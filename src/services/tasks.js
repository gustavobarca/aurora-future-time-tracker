import api from './api';

export async function getTasksBySections(sections) {
  const assigneeGid = '1160321445511285'; // Gustavo Barca
  const workspaceGid = '516216748503279'; // fitcard.com.br

  let sectionsString = '';
  
  sections.forEach((section, index) => {
    const isLast = index === sections.length - 1;
    sectionsString += isLast ? section : `${section},`;
  });

  const params = `?sections.any=${sectionsString}&assignee.any=${assigneeGid}`;
  const { data } = await api.get(`/workspaces/${workspaceGid}/tasks/search${params}`);

  return data.data;
}