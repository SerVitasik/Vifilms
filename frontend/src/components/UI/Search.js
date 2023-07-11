import classes from "./Search.module.scss";
const Search = () => {
    return (
        <form className={classes['search']}>
            <input type="text" placeholder="Search Movies, Series..." className={classes['search__input']}/>
            <button type="submit">Sub</button>
        </form>
    );
};
export default Search;