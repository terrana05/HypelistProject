import "./styles.css";
//Write array below

// let people = [
//   { firstName: "Omari", lastName: "Prass" },
//   { firstName: "Melody", lastName: "Suero" },
//   { firstName: "Groana", lastName: "Melendez" },
//   { firstName: "Maxwell", lastName: "Williams" }
// ];

export default function App() {
  //   let firstNames = [
  //     "Omari",
  //     "Melody",
  //     "Keturah",
  //     "Aldo",
  //     "Reginea",
  //     "Amori",
  //     "Laurent",
  //     "Ye",
  //     "Matt",
  //     "Judy",
  //     "Sami",
  //     "Maxwell",
  //     "Groana",
  //     "Aland",
  //     "Jean",
  //     "Lorena"
  //   ];

  let people = [
    {
      firstName: "Omari",
      lastName: "Prass",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Melody",
      lastName: "Suero",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Keturah",
      lastName: "Allen",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Aldo",
      lastName: "Terrana",
      borough: "New Jersey",
      favColor: ""
    },
    {
      firstName: "Reginea",
      lastName: "Walker",
      borough: "Queens",
      favColor: ""
    },
    {
      firstName: "Amori",
      lastName: "Steele",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Laurent",
      lastName: "Benjamin",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Ye",
      lastName: "(☞ﾟヮﾟ)☞Paing",
      borough: "Queens",
      favColor: ""
    },
    {
      firstName: "Matt",
      lastName: "Schupack",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Judy",
      lastName: "Truong",
      borough: "Brooklyn",
      favColor: ""
    },
    {
      firstName: "Sami",
      lastName: "Lieberman",
      borough: "Manhattan",
      favColor: ""
    },
    {
      firstName: "Maxwell",
      lastName: "Williams",
      borough: "New Jersey",
      favColor: ""
    },
    {
      firstName: "Groana",
      lastName: "Melendez",
      borough: "Bronx",
      favColor: ""
    },
    { firstName: "Aland", lastName: "Kuang", borough: "Phoenix", favColor: "" },
    {
      firstName: "Jean",
      lastName: "Saldarriaga",
      borough: "Manhattan",
      favColor: ""
    },
    {
      firstName: "Lorena",
      lastName: "Castillo",
      borough: "Manhattan",
      favColor: ""
    }
  ];

  // let lastNames = [
  //   "Prass",
  //   "Suero",
  //   "Allen",
  //   "Terrana",
  //   "Walker",
  //   "Steele",
  //   "Benjamin",
  //   "(☞ﾟヮﾟ)☞Paing",
  //   "Schupack",
  //   "Truong",
  //   "Lieberman",
  //   "Williams",
  //   "Melendez",
  //   "Kuang",
  //   "Saldarriaga",
  //   "Castillo"
  // ];
  return (
    <div className="App">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Borough</th>
        </tr>

        {people.map(function (person, i) {
          return (
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.borough}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
