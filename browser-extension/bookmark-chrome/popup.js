
// document.addEventListener('DOMContentLoaded', function() {
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     let activeTab = tabs[0];
//     alert(activeTab.url);
//   });
// });

// document.getElementById('changeColor').addEventListener('click', function() {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       let activeTab = tabs[0];
//       alert(activeTab.url);
//       chrome.tabs.executeScript(
//           activeTab.id,
//           {code: 'document.body.style.backgroundColor = "red";'});
//     });
//   });