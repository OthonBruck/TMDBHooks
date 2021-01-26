import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import Menu from "../../components/Menu/index";
import { usePesquisaContext } from "../../context/PesquisaContext";
import api from "../../services/api";
import { endpoints } from "../../services/endpoints";
import CardWrapper from "./../../components/CardWrapper/index";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
};

export default function Trending() {
  const { dado, setDado } = usePesquisaContext();
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const fetchDay = async () => {
      const response = await api.get(endpoints.trendingDay);
      setDado(response.data.results);
    };
    const fetchWeek = async () => {
      const response = await api.get(endpoints.trendingDay);
      setWeek(response.data.results);
    };
    fetchWeek();
    fetchDay();
  }, [setDado]);

  console.log(dado);

  return (
    <div>
      <Menu />
      <p>Em alta na Semana</p>
      <Carousel
        ssr
        partialVisbile
        deviceType={"desktop"}
        itemClass="image-item"
        responsive={responsive}
      >
        {dado.map((image) => {
          return (
            <img
              key={image.id}
              draggable={false}
              style={{ width: "100%", height: "100%", margin: 3 }}
              src={endpoints.image + image.backdrop_path}
              alt={image.title}
            />
          );
        })}
      </Carousel>
      <p>Em alta no Dia</p>
      <CardWrapper lista={week} link={""} height={505} width={350} />
    </div>
  );
}
