chrome.contextMenus.create({
    id: "Exempt",
    title: "Exempt",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId == "Exempt"){
        //`${info.menuItemId} ${variableName}`
        const variableName = info.selectionText;
        for (let i = 0; i <= 255; i += 10){
            chrome.tabs.create({ url: `https://google.com/search?q=%28site:***${i}%20%7C%20site:***${i+1}%20%7C%20site:***${i+2}%20%7C%20site:***${i+3}%20%7C%20site:***${i+4}%20%7C%20site:***${i+5}%20%7C%20site:***${i+6}%20%7C%20site:***${i+7}%20%7C%20site:***${i+8}%20%7C%20site:***${i+9}%29%20%26%20intext:exemption%20%26%20${variableName}` });
        }   
    }
});
