import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/index";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import CardWrapper from "./../../components/CardWrapper/index";
import { useStyles } from "./styles";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
};

export default function Trending() {
  const [movie, setMovie] = useState([]);
  const [tv, setTV] = useState([]);
  const [person, setPerson] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(endpoints.trendingMovie);
      setMovie(response.data.results);
    };
    const fetchTV = async () => {
      const response = await api.get(endpoints.trendingTV);
      setTV(response.data.results);
    };
    const fetchPerson = async () => {
      const response = await api.get(endpoints.trendingPerson);
      setPerson(response.data.results);
    };
    fetchTV();
    fetchMovie();
    fetchPerson();
  }, [setMovie, setTV, setPerson]);

  return (
    <div>
      <Menu />
      <p>Filmes em alta no Dia</p>
      <Carousel
        ssr
        partialVisbile
        deviceType={"desktop"}
        itemClass="image-item"
        responsive={responsive}
      >
        {movie.map((image) => {
          return (
            <Link draggable={false} to={`/filme/${image.id}`}>
              <img
                className={classes.img}
                key={image.id}
                draggable={false}
                style={{ width: "100%", height: "100%", margin: 3 }}
                src={endpoints.image + image.backdrop_path}
                alt={image.title}
              />
            </Link>
          );
        })}
      </Carousel>
      <p>Series em alta no Dia</p>
      <CardWrapper lista={tv.slice(0, 10)} link={""} height={505} width={350} />
      <p>Pessoa em alta no Dia</p>
      <CardWrapper
        lista={person.slice(0, 5)}
        link={""}
        height={505}
        width={350}
      />
    </div>
  );
}
