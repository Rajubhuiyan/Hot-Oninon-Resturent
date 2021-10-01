import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/header/logo2.png';
import { useContext } from 'react';
import { categoryContext } from '../Home/Home';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <>
            <div>
                <Navbar>
                    <Container>
                        <img className="logo img-fluid" src={logo} alt="" />
                        <div>
                            <a className="signin-btn" href="/">Sign in</a>
                            <a className="signup-btn" href="/">Sign Up</a>
                        </div>
                    </Container>
                </Navbar>
            </div>

            <div className="second-site mt-2">
                <div>
                    <h2>Best Food Waiting For Food</h2>
                    <input placeholder="Search Food Items" className="form-control" type="text" />
                    <button className="search-btn mt-2">Search</button>
                </div>
            </div>

            <section>
                <div className="nav-style container mx-auto">
                    <nav className="mt-5">
                        <button onClick={() => setCategory('breakfast')} className="btn-style">breakfast</button>
                        <button onClick={() => setCategory('lunch')} className="btn-style middle-btn">Lunch</button>
                        <button onClick={() => setCategory('dinner')} className="btn-style">Dinner</button>
                    </nav>
                </div>
            </section>
        </>
    );
};

export default Header;