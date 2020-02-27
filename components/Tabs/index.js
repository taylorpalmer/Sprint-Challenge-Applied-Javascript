// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabComponent(topics) {
  const newTopic = document.createElement("div");
  newTopic.classList.add("tab");
  newTopic.textContent = `${topics}`;

  return newTopic;
}

const topicsTab = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    response.data.topics.forEach(response => {
      let newTopicTab = tabComponent(response);
      topicsTab.appendChild(newTopicTab);
    });
    // console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });
