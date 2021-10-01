import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryDetails.css'
const CategoryDetails = (props) => {
    const { name, picture, description, price, id } = props.product;
    return (
        <Link to={"/product/" + id} style={{ textDecoration: 'none', color:'black' }}>
            <div className="category-conatainer">
                <div className="category-item">
                    <img src={picture} alt="" />
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <h3>${price}</h3>
                </div>
            </div>
        </Link>
    );
};

export default CategoryDetails;