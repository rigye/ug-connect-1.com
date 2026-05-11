export const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function apiFetch(path, options) {
  const url = `${API_BASE}${path}`;
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'API request failed');
  }

  return response.json();
}
