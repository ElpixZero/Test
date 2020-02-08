export default function (url, options, timeout = 30) {
  return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
          setTimeout(() => reject(new Error('timeout')), timeout*1000)
      )
  ]);
}