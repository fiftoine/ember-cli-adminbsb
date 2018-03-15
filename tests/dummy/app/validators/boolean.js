// validators/custom.js
export default function validateBoolean(options = {}) {
  if (typeof options === 'boolean') {
    options = { value: options };
  }

  return (key, newValue, oldValue, changes, content) => {
    return options.value === newValue ? true : 'This field must be '+options.value;
    // validation logic
    // return `true` if valid || error message string if invalid
  }
}
