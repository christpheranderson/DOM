window.onload = function() {
  //WRITE THE CODE FOR EACH PROMPT BELOW EACH ALERT
  alert('Access the page title');
  var pageTitle = document.getElementById('page-title');
  console.log(pageTitle)
  
  alert('Access the list');
  var awesomeList = document.getElementById('awesome-list');
  console.log(awesomeList);

  alert('Add a fourth item to the list');
  var li = document.createElement('li');
  var textNode = document.createTextNode('Hello World.');
  li.appendChild(textNode);
  awesomeList.appendChild(li);
   

  alert('Move the image to after the list');
   var picture = document.getElementById('image-container');
   picture.remove()
   document.body.appendChild(picture)

  alert('Make the page title red (by adding a class to the page title)');
  document.gete

  alert('Make the list items blue (add classes to each list item, not to the ul element) HINT: You\'ll need a for loop');


  alert('Make the description green');


  alert('Add a red footer paragraph to the page with the id "page-footer"');

};
