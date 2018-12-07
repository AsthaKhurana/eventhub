// var events = {
//   [
//     number:1,
//     name:"OAS Charity Drive",
//     date:new Date(2018, 6, 12),
//     location:"SSIS SIS Donation Box 2",
//     description:"Group: Organization of Arab Students"
//   ],
//   [
//     number:1,
//     name:"SORC Locker Storage",
//     date:new Date(2018, 6, 12),
//     location:"SSIS Terrapod Room AA",
//     description:"Group: The Stamp: ACTI: Student Org Resource Center"
//   ]
// };

//adding new event

var data='';
var json_str;
var str='';

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
  //console.log(" ' " + "hi" + " ' ")
  event.preventDefault();
  //data is the json output
  data = formToJSON(form.elements);
  console.log(data);
  console.log(typeof data);
  //appending it to the html file
  const dataContainer = document.getElementsByClassName('display')[0];
  //stringfying the json object
  json_str = JSON.stringify(data);
  console.log("json_str = " + json_str);

  var obj = JSON.parse(json_str);
  document.getElementById("parsed").innerHTML = obj.name + ", " + obj.description+"," +obj.fromTime + "," +obj.toTime;
  dataContainer.textContent = json_str;
};

//calling function for submit button

var form = document.getElementById('addNew');
console.log(form);
form.addEventListener('submit', handleFormSubmit);
