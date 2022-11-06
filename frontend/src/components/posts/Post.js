"use strict";

function addPosts(e) {
  fetch("../../../../backend/data/farmData.json")
  .then(response => {
      if (response.ok)
          return response.json()
      else{
          throw new Error(`HTTP error! status: ${response.status}`)
      }
  })
  .then(json => {
          let postArray = [];
          let texts = [];
          //passing through the variables needed to render the correct information
          json.categories[e.target.id].topicList.forEach(elem => {
              elem.listPosts.forEach(post => {
                postArray = postArray.concat('User: '+post.author+'  -  Text: '+post.text);
                texts.push(post.text);
              })        
          })
  })
  .catch(error => {
      console.log(error)
  }) 
}