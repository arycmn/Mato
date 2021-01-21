import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container,
  LocationList,
  Input,
  Text,
  ButtonLearnMore,
  Cont,
} from "./style";
import { search } from "../../utils/icons";
import { useSelector } from "react-redux";
import Title from "../../components/atoms/Title";
import TextField from "../../components/atoms/TextField";
import Button from "../../components/atoms/Button";
import SearchFilterBox from "../../components/molecules/SearchFilterBox";
import Picture from "../../components/atoms/Picture";
import { getCampsites } from "../../store/modules/camps/thunk";

const Search = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [wantedPlaces, setWantedPlaces] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const { searchPreferences } = useSelector((state) => state);
  const { campsList } = useSelector((store) => store);
  console.log(searchPreferences);
  useEffect(() => {
    dispatch(getCampsites());
  }, []);
  useEffect(() => {
    if (campsList) {
      const newList = campsList.filter((location) =>
        location.name.includes(searchText)
      );
      setWantedPlaces(newList);
    }

    if (searchPreferences.length > 0 && campsList) {
      const filtered = campsList.filter(({ activities_id }) =>
        activities_id.find((item) => searchPreferences.includes(item))
      );

      setWantedPlaces(filtered);
    }
  }, [searchText, searchPreferences, campsList]);
  const handleClickShowFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleNavigateToLocation = (id) => () => {
    history.push(`/location/${id}`);
  };

  return (
    <Container>
      <Title text={"Pesquisa"} />
      <input
        placeholderText="Pesquisa"
        icon={search}
        type="search"
        width={50}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Button width="100px" onClick={handleClickShowFilters}>
        Filtrar
      </Button>

      {showFilters && <SearchFilterBox />}
      <LocationList minimized={showFilters}>
        {wantedPlaces?.map((location, index) => (
          <Cont onClick={handleNavigateToLocation(location.id)} key={index}>
            <Picture
              src={location.image_url}
              alt={location.name}
              width="150px"
              height="150px"
              onClick={handleNavigateToLocation(location.id)}
            />
            <Text>{location.description.split("").slice(0, 98)}. . .</Text>
            <ButtonLearnMore>Learn More</ButtonLearnMore>
          </Cont>
        ))}
      </LocationList>
    </Container>
  );
};

export default Search;
