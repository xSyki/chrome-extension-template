const elms = document.getElementsByTagName('*')

for (let i = 0; i < elms.length; i++) {
  const myChildren = elms[i].childNodes
  for (let j = 0; j < myChildren.length; j++) {
    if (myChildren[j].nodeType === 3) {
      myChildren[j].nodeValue =
        myChildren[j]?.nodeValue?.replace(/Syki/i, 'Syki 😎') || null
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
