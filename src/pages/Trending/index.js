import React from "react";
import { usePesquisaContext } from "../../context/PesquisaContext";
import CardWrapper from "./../../components/CardWrapper/index";
import Menu from "../../components/Menu/index";
import Carousel from "react-multi-carousel";
import { endpoints } from "../../services/endpoints";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

export default function Trending() {
  const { dado } = usePesquisaContext();
  return (
    <div>
      <Menu />
      <Carousel
        ssr
        partialVisbile
        deviceType={"desktop"}
        itemClass="image-item"
        responsive={responsive}
      >
        {dado.map((image) => {
          console.log(image);
          return (
            <img
              draggable={false}
              style={{ width: "100%", height: "100%", margin: 3 }}
              src={endpoints.image + image.backdrop_path}
              alt={image.title}
            />
          );
        })}
      </Carousel>
      <CardWrapper lista={dado} link={""} height={505} width={350} />
    </div>
  );
}
