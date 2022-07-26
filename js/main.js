// SORT ANALYZER START CODE BY MR. V

// Global Variables
let randomArray = [];
let reversedArray = [];
let nearlySortedArray = [];
let fewUniqueArray = [];

// The initializeDataArrays function is located in file-loader.js.
// It is used to initialize the Global Data Arrays declared above from the provided data files.
initializeDataArrays();

// Test array contents - use event listener to make sure files have had time to load
document.addEventListener("click", documentClicked);

function documentClicked() {
  console.log(randomArray);
  console.log(reversedArray);
  console.log(nearlySortedArray);
  console.log(fewUniqueArray);
}
