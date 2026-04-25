// Intentionally insecure sample file for testing analyzer behavior.
// Do not use this code in production.
//i am insecure

function buildQuery(userId) {
  // SQL concatenation should be flagged.
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return query;
}