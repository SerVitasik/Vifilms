import classes from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes['nav__list']}>
                <li className={classes['nav__link']}>Home</li>
                <li className={classes['nav__link']}>Movies</li>
                <li className={classes['nav__link']}>Series</li>
                <li className={classes['nav__link']}>Trending</li>
                <li className={classes['nav__link']}>Categories</li>
            </ul>
        </nav>          
    );
  
};

export default Navigation;