import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Form, Media, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCategoriesStart } from "../../store/actions/CategoryAction";
import Slider from "react-slick";

const HomeCategoryList = (props) => {
  useEffect(() => {
    props.dispatch(fetchCategoriesStart());
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      {props.categories.loading ? null : (
        <div className="category-list-sec">
           <Slider {...settings}>
          {/* <ul className="list-ustyled category-sec"> */}
            {props.categories.data.length > 0
              ? props.categories.data.map((category, index) => {
                  return [
                    <div>
                      <ul className="list-ustyled category-sec">
                    <Media as="li">
                      <Link to={`/category/` + category.u_category_unique_id}>
                        <div className="category-img-sec">
                          <Image
                            src={category.picture}
                            className="category-img"
                          />
                        </div>
                        <Media.Body>
                          <h5>{category.name}</h5>
                          <p>
                            <strong>{category.total_users} Subscribers</strong>
                          </p>
                        </Media.Body>
                      </Link>
                    </Media>
                    </ul>
                    </div>
                  ];
                })
              : null}
          {/* </ul> */}
          </Slider>
        </div>
      )}
    </>
  );
};

const mapStateToPros = (state) => ({
  categories: state.category.categories,
});

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToPros, mapDispatchToProps)(HomeCategoryList);
