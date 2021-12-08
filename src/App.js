import "./styles.css";

export default function App() {
  let people = [
    {
      firstName: "Omari",
      lastName: "Prass",
      borough: "Brooklyn",
      favColor: "#1fb752",
      yearBorn: "2004",
      monthBorn: "April",
      countrytoVisit: "Japan",
      dogorCat: "Both",
      foodLove: "Pizza",
      hobby: "Playing Video Games",
      movieShow: "Gumball, Regular Show",
      career: "Website Developer"
    },
    {
      firstName: "Melody",
      lastName: "Suero",
      borough: "Brooklyn",
      favColor: "#c8a2c8",
      yearBorn: "2003",
      monthBorn: "May",
      countrytoVisit: "Japan",
      dogorCat: "Both",
      foodLove: "Everything",
      hobby: "Drawing",
      movieShow: "Courage the Cowardly Dog",
      career: "Tech/Art/Fashion"
    },
    {
      firstName: "Keturah",
      lastName: "Allen",
      borough: "Brooklyn",
      favColor: undefined,
      yearBorn: "2005",
      monthBorn: "March",
      countrytoVisit: "Boar Boar",
      dogorCat: "Dog",
      foodLove: "Everything",
      hobby: "Writing",
      movieShow: "Not Sure",
      career: "Build/Program Machines"
    },
    {
      firstName: "Aldo",
      lastName: "Terrana",
      borough: "New Jersey",
      favColor: "red",
      yearBorn: "2005",
      monthBorn: "September",
      countrytoVisit: "Japan",
      dogorCat: "Dog",
      foodLove: "Sushi",
      hobby: "Ice Skating",
      movieShow: "You",
      career: "Geneticist"
    },
    {
      firstName: "Reginea",
      lastName: "Walker",
      borough: "Queens",
      favColor: " #eb7d34",
      yearBorn: "2005",
      monthBorn: "August",
      countrytoVisit: "Not Japan",
      dogorCat: "Dog",
      foodLove: "Pizza",
      hobby: "Writing",
      movieShow: "Moana",
      career: "Fashion Designer"
    },
    {
      firstName: "Amori",
      lastName: "Steele",
      borough: "Brooklyn",
      favColor: "#A45ee5",
      yearBorn: "2004",
      monthBorn: "June",
      countrytoVisit: "Norway",
      dogorCat: "Dog",
      foodLove: "Burger",
      hobby: "Video Games",
      movieShow: "ED, edd n eddy",
      career: "Software Engineer"
    },
    {
      firstName: "Laurent",
      lastName: "Benjamin",
      borough: "Brooklyn",
      favColor: "red",
      yearBorn: "2004",
      monthBorn: "November",
      countrytoVisit: "England",
      dogorCat: "Both",
      foodLove: "Legumes",
      hobby: "Reading",
      movieShow: "N/A",
      career: "Software Engineer"
    },
    {
      firstName: "Ye ☜(ﾟヮﾟ☜)",
      lastName: "(☞ﾟヮﾟ)☞Paing",
      borough: "Queens ☜(ಠ_ಠ☜)",
      favColor: "#45FCB4",
      yearBorn: "1989 (╯°□°)╯︵ ┻━┻",
      monthBorn: "July",
      countrytoVisit: "Japan",
      dogorCat: "Both",
      foodLove: "Thai",
      hobby: "Handball",
      movieShow: "The Matrix",
      career: "Software Engineer"
    },
    {
      firstName: "Matt",
      lastName: "Schupack",
      borough: "Brooklyn",
      favColor: "bisque",
      yearBorn: "1994",
      monthBorn: "October",
      countrytoVisit: "Spain",
      dogorCat: "Cat",
      foodLove: "Sushi",
      hobby: "Baking Bread",
      movieShow: "Endeavour",
      career: "Software Engineer"
    },
    {
      firstName: "Judy",
      lastName: "Truong",
      borough: "Brooklyn",
      favColor: "#cd94f2",
      yearBorn: "1991",
      monthBorn: "January",
      countrytoVisit: "Korea",
      dogorCat: "Dog",
      foodLove: "Ramen",
      hobby: "Reading",
      movieShow: "The Mummy",
      career: "Software Engineer"
    },
    {
      firstName: "Sami",
      lastName: "Lieberman",
      borough: "Manhattan",
      favColor: "#00d0ff",
      yearBorn: "1997",
      monthBorn: "May",
      countrytoVisit: "Africa",
      dogorCat: "Both",
      foodLove: "Sushi",
      hobby: "Tennis",
      movieShow: "Modern Family",
      career: "Software Engineer"
    },
    {
      firstName: "Maxwell",
      lastName: "Williams",
      borough: "New Jersey",
      favColor: "#ebba34",
      yearBorn: "1992",
      monthBorn: "February",
      countrytoVisit: "France",
      dogorCat: "Dog",
      foodLove: "Burger and Fries",
      hobby: "Movies",
      movieShow: "Pan's L",
      career: "Teacher"
    },
    {
      firstName: "Groana",
      lastName: "Melendez",
      borough: "Bronx",
      favColor: "#40e0d0",
      yearBorn: "1984",
      monthBorn: "June",
      countrytoVisit: "Ghana",
      dogorCat: "Dog",
      foodLove: "Ice Cream",
      hobby: "Photography",
      movieShow: "The Haunting at...",
      career: "Software Engineer"
    },
    {
      firstName: "Aland",
      lastName: "Kuang",
      borough: "Phoenix",
      favColor: "#000AD4",
      yearBorn: "1994",
      monthBorn: "February",
      countrytoVisit: "Japan",
      dogorCat: "Dog",
      foodLove: "Dumplings",
      hobby: "Editing Writing Pieces",
      movieShow: "Rick and Morty",
      career: "Software Engineer"
    },
    {
      firstName: "Jean",
      lastName: "Saldarriaga",
      borough: "Manhattan",
      favColor: "#2a693b",
      yearBorn: "2005",
      monthBorn: "January",
      countrytoVisit: "Japan",
      dogorCat: "Dog",
      foodLove: "Lasagna",
      hobby: "Video Games",
      movieShow: "Scott Pilgrim Vs. The World",
      career: "Software Engineer"
    },
    {
      firstName: "Lorena",
      lastName: "Castillo",
      borough: "Manhattan",
      favColor: undefined,
      yearBorn: "2003",
      monthBorn: "May",
      countrytoVisit: "Korea",
      dogorCat: "Dog",
      foodLove: "Lo Mein",
      hobby: "Volleyball",
      movieShow: "Reign",
      career: "Digital Forensic"
    }
  ];

  return (
    <div className="App">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Borough</th>
          <th>Year Born</th>
          <th>Month Born</th>
          <th>Country to Visit</th>
          <th>Dog or Cat?</th>
          <th>Favorite Food?</th>
          <th>Hobbies</th>
          <th>Favorite Movie or Show?</th>
          <th>Career?</th>
        </tr>

        {people.map(function (person, i) {
          let personBGColor = person.favColor;

          if (person.favColor === undefined) {
            personBGColor = "grey";
          }

          return (
            <tr style={{ backgroundColor: personBGColor }}>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.borough}</td>
              <td>{person.yearBorn}</td>
              <td>{person.monthBorn}</td>
              <td>{person.countrytoVisit}</td>
              <td>{person.dogorCat}</td>
              <td>{person.foodLove}</td>
              <td>{person.hobby}</td>
              <td>{person.movieShow}</td>
              <td>{person.career}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
