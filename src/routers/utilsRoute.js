export default (route, params, navigation) => {
  if (typeof route === 'string') navigation.navigate(route);
};
