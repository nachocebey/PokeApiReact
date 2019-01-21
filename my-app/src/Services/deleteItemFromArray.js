const removeItemFromArray = (e, array) => {
  //var arrayCopy = [...array];
  var index = array.indexOf(e)
  if (index !== -1) {
    array.splice(index, 1);

    // this.setState({ array: arrayCopy });
  }

  return(array);
}

export default removeItemFromArray;
