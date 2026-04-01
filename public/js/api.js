// API module for saving/loading quiz results via JSONBlob.com
const API = {
  BLOB_URL: 'https://jsonblob.com/api/jsonBlob/019d4a6b-a1a5-73da-b95d-793f084e7458',
  TEACHER_PASSWORD: 'math2024',

  // Save a quiz result (anyone can do this)
  async saveResult(data) {
    try {
      // Read current results
      const results = await this.getResults();

      // Add new result
      results.push({
        id: Date.now(),
        name: data.name,
        score: data.score,
        total: data.total,
        percentage: Math.round((data.score / data.total) * 100),
        quizId: data.quizId || 'unknown',
        quizTitle: data.quizTitle || 'Квіз',
        answers: data.answers,
        timeSpent: data.timeSpent,
        date: new Date().toISOString()
      });

      // Write back
      await fetch(this.BLOB_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(results)
      });

      return { success: true };
    } catch (e) {
      console.error('Failed to save result:', e);
      return { error: e.message };
    }
  },

  // Get all results (no auth needed for reading, password checked on frontend)
  async getResults() {
    try {
      const res = await fetch(this.BLOB_URL);
      if (!res.ok) return [];
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    } catch (e) {
      console.error('Failed to load results:', e);
      return [];
    }
  },

  // Clear all results
  async clearResults() {
    try {
      await fetch(this.BLOB_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([])
      });
      return { success: true };
    } catch (e) {
      return { error: e.message };
    }
  },

  // Check teacher password
  checkPassword(password) {
    return password === this.TEACHER_PASSWORD;
  }
};
