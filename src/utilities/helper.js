

export const searchRestaurant = (collection, text) => {
  const Restaurants = collection.filter((card) => {
    return card?.data?.data?.name?.toLowerCase().includes(text.toLowerCase())
  })
  return Restaurants;

}