import {SafeAreaView, Text} from 'react-native';
import {createRandomPerson} from '.';

const person = createRandomPerson();
export default function Data() {
  return (
    <SafeAreaView>
      <Text>{JSON.stringify(person, null, 2)}</Text>
    </SafeAreaView>
  );
}
