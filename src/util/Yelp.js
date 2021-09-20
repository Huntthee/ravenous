const apiKey = 'CEdB99SwLt2Z9owhOoj8gUEwW641rK9rnzRIgXpdMzyAD36VeZq2zIFj37VP-c4z2UdUd8oj5AQoeTfrxiHMA9ymTyPcBqDC9v9yUXtz3S0sp2XAaTVx1SujUchIYXYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
    .then(response => {
      return response.json();
    })
    .then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.imageSrc,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
          }
        });
      }
    });
  }
};

module.exports = Yelp;