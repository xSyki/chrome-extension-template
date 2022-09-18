chrome.runtime.onInstalled.addListener(() => {
  console.log('installed')

  chrome.contextMenus.create({
    id: 'sampleContextMenu',
    title: 'Sample Context Menu',
    type: 'normal',
    contexts: ['all'],
  })
  chrome.bookmarks.onCreated.addListener(() => {
    console.log('bookmark created')
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log(info)
  console.log(tab)

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(Number(tabs[0].id), {
      message: 'A new page has been created',
    })
  })
})

export {}
