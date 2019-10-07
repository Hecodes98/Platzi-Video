/* eslint-disable array-callback-return */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable arrow-parens */
import React from "react";
import { connect } from "react-redux";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/app.scss";

const Home = ({ mylist, trends, originals, results }) => {
  return (
    <>
      <Search />

      {results.length > 0 && (
        <Categories title="Resultados">
          <Carousel>
            {results.map(item => (
              <CarouselItem key={item.id} {...item} isList={false} />
            ))}
          </Carousel>
        </Categories>
      )}

      {mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map(item => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} isList={false} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} isList={false} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
    results: state.results
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
