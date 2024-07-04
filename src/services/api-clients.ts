import axios from "axios";

export default axios.create({
  baseURL: "https://api-rawg.io/api",
  params: {
    key: "f5eeae8d873a48b69a16949f6268a638",
  },
});
