const selectCase = (case) => {
  return {
    console.log("selecting case: ", case)
    type: select,
    case,
  };
};
export default selectCase;
