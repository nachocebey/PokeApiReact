export const checkButtonState = (e, max) => {
  let buttonState = true;
  if (e === max) {
    buttonState = false;
  }
  return buttonState
}

export const removeItemFromArray = (e, array) => {
  const index = array.indexOf(e);
  if (index !== -1) {
    array.splice(index, 1);
  }

  return array
}

export default removeItemFromArray;
