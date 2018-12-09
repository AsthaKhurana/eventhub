//adding new event

var data='';
var json_str;
var str='';
var myDataStorage;
var i = 1;
var name;

//to store events for future use
var event = [];

var formToJSON = elements => [].reduce.call(elements, (data, element) => {

if (isValidElement(element)) {
    data[element.name] = element.value;
  }
  return data;

}, {});

var isValidElement = element => {
  return element.name && element.value;
};

//function for submit button
function handleFormSubmit(event) {
  //preventing page from reloading every time
  event.preventDefault();
  //data is the json output
  var data = formToJSON(form.elements);
  console.log(data);
  console.log(typeof data);
  //appending it to the html file
  const dataContainer = document.getElementsByClassName('display')[0];
  //stringfying the json object
  json_str = JSON.stringify(data);
  console.log("json_str = " + json_str);
  var obj = JSON.parse(json_str);
  //calling functon that store data for future use
  var name = populateStorage(obj);
  console.log(name);
};
//storing data for future use
// using HTML5 locL Storage
//function to populate localStorage --- change key and value pairs in the setItem function to set arrays
function populateStorage(obj) {
  localStorage.setItem('name',obj.name );
  localStorage.setItem('description',obj.description );
  localStorage.setItem('date',obj.date);

  return(localStorage.getItem('name'));
}

console.log(name);
//retreiving data from localStorage ---- chan
event.push(localStorage.getItem('name'));

//calling function for submit button
var form = document.getElementById('addNew');
form.addEventListener('submit', handleFormSubmit);

//Issue: cannot access contents of obj outside of the submit button event handler function
//console.log(obj);
