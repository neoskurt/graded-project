import axios from 'axios';
import { describe, it, expect } from 'vitest';

describe('API Response Test', () => {
  it('should get a successful response from the API', async () => {
    const url = 'https://6669b0262e964a6dfed6338f.mockapi.io/api/manga/all/manga'; // Change this URL to your MockAPI URL

    try {
      const response = await axios.get(url);
      expect(response.status).toBe(200);
      expect(response.data).toBeInstanceOf(Array); // Assuming the response is an array
      expect(response.data.length).toBeGreaterThan(0); // Assuming there is at least one item
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('nom');
      expect(response.data[0]).toHaveProperty('auteur');
      expect(response.data[0]).toHaveProperty('description');
      expect(response.data[0]).toHaveProperty('img');
    } catch (error) {
      console.error('API request failed', error);
      throw error;
    }
  });
});
