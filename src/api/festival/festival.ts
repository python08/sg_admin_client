import api from '@/api';

export async function getAllFestivals() {
  const festivals = await api('all-festivals', 'GET');
  return festivals;
}
