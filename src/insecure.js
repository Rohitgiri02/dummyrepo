// Intentionally insecure sample file for testing analyzer behavior.
// Do not use this code in production.
//i am insecure
function runDynamic(userInput) {
  // eval usage should be flagged.
  return eval(userInput);
}

function buildQuery(userId) {
  // SQL concatenation should be flagged.
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return query;
}

const hardcodedSecret = "sk_test_very_insecure_hardcoded_value";
function runDynamic(userInput) {
  // eval usage should be flagged.
  return eval(userInput);
}

function buildQuery(userId) {
  // SQL concatenation should be flagged.
  const query = "SELECT * FROM users WHERE id = '" + userId + "'";
  return query;
}
module.exports = {
  runDynamic,
  buildQuery,
  hardcodedSecret,
};
