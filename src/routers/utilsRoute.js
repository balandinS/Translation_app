import {useNavigation} from '@react-navigation/native';

export default (route, params) => {
  const navigation = useNavigation();
  if (typeof route === 'string') navigation.navigate(route);
};
