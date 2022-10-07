import axios from "axios";

const options = {
  method: "GET",
  url: "https://url-link-shortener.p.rapidapi.com/v1/links/new",
  params: { destination: "https://rapidapi.com/" },
  headers: {
    "X-RapidAPI-Key": "b6f9bc1042mshe70d0c42d42b351p133562jsn9eac2083e8ef",
    "X-RapidAPI-Host": "url-link-shortener.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const prettylink = require("prettylink");

// Init Access Token in constructor
const bitly = new prettylink.Bitly("BitlyAccessToken");
// Or use init function
bitly.init("81ed572dc60c4a0957c5e37bf50060114d88059c");
bitly
  .short("https://github.com/stu01509/pretty-link")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// const [Copied, setCopied] = useState(false);
// const [Loading, setLoading] = useState(false);
// const prettylink = require("prettylink");
// Init Access Token in constructor

// error api
// const fetchData = async () => {
//   try {
//     setLoading(true);
//     const res = await axios(
//       `https://url-link-shortener.p.rapidapi.com/v1/links/new=${InputValue}`
//     );
//     Shortlink(res.data.result.full_short_link);
//   } catch (err) {}
// };

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setCopied(false);
//   }, 1000);
//   return () => {
//     clearTimeout(timer);
//   };
// }, [Copied]);
