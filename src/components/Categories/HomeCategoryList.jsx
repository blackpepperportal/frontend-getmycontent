import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Form, Media, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchCategoriesStart } from "../../store/actions/CategoryAction";

const HomeCategoryList = (props) => {
  useEffect(() => {
    props.dispatch(fetchCategoriesStart());
  }, []);

  return (
    <>
      {props.categories.loading ? null : (
        <div className="category-list-sec">
          <ul className="list-ustyled category-sec">
            {props.categories.data.length > 0
              ? props.categories.data.map((category, index) => {
                  return [
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
                    </Media>,
                  ];
                })
              : null}
          </ul>
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
