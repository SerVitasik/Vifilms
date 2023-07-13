import classes from "./Search.module.scss";
const Search = ({loop}) => {
    return (
        <form className={classes['search']}>
            <input type="text" placeholder="Search Movies, Series..." className={classes['search__input']}/>
            <a href="#"><img src={loop} className={classes['search__loop']} alt="loop"/></a>
        </form>
    );
};
export default Search;