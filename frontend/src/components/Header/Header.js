import Container from "../UI/Container";
import Navigation from "./Navigation";
import classes from "./Header.module.scss";
import Search from "../UI/Search";

const Header = ({logo}) => {
    return (
    <header className={classes.header}>
        <Container>
            <div className={classes['header__content']}>
                <div className={classes['header__left']}>
                    <img className={classes['header__logo']} src={logo} alt="logo" />
                    <Navigation />
                </div>
                <div className={classes['header__right']}>
                    <Search/>
                </div>
            </div>
        </Container>
    </header>
    );
};

export default Header;