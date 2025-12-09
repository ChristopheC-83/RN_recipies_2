import { View, Text } from "react-native";
import { s } from "./Header.style";
const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export default function Header() {
  const date = new Date();
  return (
    <View style={s.container}>
      <Text style={s.day}>{`${days[date.getDay()]},`}</Text>
      <Text style={s.date}>{` ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
}
