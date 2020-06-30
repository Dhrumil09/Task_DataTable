import axios from "axios";

const url = "http://localhost:3000";

const getData = async () => {
  try {
    const { data } = await axios.get(url + "/shipments");
    return data;
  } catch {
    console.log("something went wrong");
  }
  //const mData = data.data;
};
export default getData;
