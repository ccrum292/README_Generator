const axios = require("axios");


// // function getUser(data) {
// //     axios.get('https://api.github.com/users/' + data.gitHubUsername)
// //     .then((response) => {
// //     // console.log(response.data)
// //     avatarUrl = response.data.avatar_url
// //     // console.log(avatarUrl)
    
// //   })
// //   };


// var api = axios.get('https://api.github.com/users/' + data.gitHubUsername)




// module.exports = api;

const api = {
  getUser(gitHubUsername) {
    axios.get('https://api.github.com/users/' + gitHubUsername).then((response) => {
      
      console.log(response.data.avatar_url)
  })
  }
}

module.exports = api;