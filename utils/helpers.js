// to get current date

module.exports = {
  format_date: (date) => {
    console.log("date", date);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  },
};
