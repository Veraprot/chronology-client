export const formatDate = (dateString) => {
  let year = dateString.substring(0,4);
    let month = dateString.substring(4,6);
    let day = dateString.substring(6,8);
    let date = new Date(year, month-1, day); 

    return date.toISOString().split('T')[0]
}
