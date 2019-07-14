export default function () {
  (async () => {
    const result = await new Promise((resolve, reject) => {
      fetch('http://localhost:3000')
        .then(result => result.text())
        .then(text => resolve(text))
        .catch(err => reject(err))
    })
    console.log('http api test', result)
  })()
  .catch(err => console.log('error', err))
}