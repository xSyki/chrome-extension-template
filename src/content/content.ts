const elms = document.getElementsByTagName('*')

for (let i = 0; i < elms.length; i++) {
  const myChildred = elms[i].childNodes
  for (let j = 0; j < myChildred.length; j++) {
    if (myChildred[j].nodeType === 3) {
      myChildred[j].nodeValue =
        myChildred[j]?.nodeValue?.replace(/Syki/i, 'Syki 😎') || null
    }
  }
}

const images = document.getElementsByTagName('img')

for (let y = 0; y < images.length; y++) {
  images[y].src = 'https://syki.pl/logo192.png'
}

chrome.runtime.onMessage.addListener((req) => {
  console.log(req)
})

export {}
