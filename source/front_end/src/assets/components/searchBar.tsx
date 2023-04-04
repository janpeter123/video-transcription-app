import { useState } from "react";
import REST_API_URL from "../../config";
import "../styles/searchBar.css";
import { useNavigate } from "react-router-dom";

function SearchBar(props: any) {
  const regexPattern: string = "(https://)?(www.)(youtube|(youtu.be)).com/";
  const re = new RegExp(regexPattern);

  const [inputValue, setInputValue] = useState("");
  const [isValid, setValid] = useState<boolean | undefined>(undefined);
  const [metaData,setMetaData] = useState({});
  const navigate = useNavigate();

  return (
    <div className="input-group mb-3 searchbar">
      <input
        type="text"
        className="form-control"
        placeholder="YouTube URL"
        aria-label="YouTube URL"
        aria-describedby="button-addon2"
        onChange={(e) => {

          const url = e.target.value; 
          setInputValue(url);
          setValid(re.test(url));
        }}
      ></input>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="search-button"
        onClick={(e) => {
          navigate(`/process?url=${inputValue}`)
        }}
        disabled={!isValid}
      >
        Button
      </button>
    </div>
  );
}

export default SearchBar;
