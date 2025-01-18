import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { Colors } from '../../../shared/tokens';

export default function CoursePage() {
	const { alias } = useLocalSearchParams();
	return (
		<View>
			<Text style={{ color: Colors.white }}>Страница курса {alias}</Text>
		</View>
	);
}
