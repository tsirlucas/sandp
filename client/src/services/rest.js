export const checkPalindrome = (text) => {
  return fetch('http://localhost:3000/check-palindrome', {
    body: JSON.stringify({text}),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => {
    return res.status === 200;
  });
};
