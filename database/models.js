const formatImageUrl = queryResult => {
  let imageUrlString = queryResult.rows[0].image_url;
  let formattedToArray = imageUrlString.split(',').map( num => {
    return `https://s3-us-west-1.amazonaws.com/zillgo-gallery/P${num}.jpg`
  });
  queryResult.rows[0].image_url = formattedToArray;
  return queryResult;
}
module.exports = formatImageUrl;