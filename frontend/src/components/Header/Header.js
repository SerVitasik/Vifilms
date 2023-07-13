import Container from "../UI/Container";
import Navigation from "./Navigation";
import classes from "./Header.module.scss";
import Search from "../UI/Search";
import { useSelector } from 'react-redux';

const Header = ({logo, loop}) => {

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
    <header className={classes.header}>
        <Container>
            <div className={classes['header__content']}>
                <div className={classes['header__left']}>
                    <img className={classes['header__logo']} src={logo} alt="logo" />
                    <Navigation />
                </div>
                <div className={classes['header__right']}>
                    <Search loop={loop}/>
                    {isAuthenticated ? <img src="" alt="user logo"/> : <p>Log In</p>}
                </div>
            </div>
        </Container>
    </header>
    );
};

export default Header;