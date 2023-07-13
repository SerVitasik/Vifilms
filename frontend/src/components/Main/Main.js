import Container from "../UI/Container";
import classes from "./Main.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from "../../store/authSlice";

const MainPage = ({backgroundImage}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authActions.login());
    }

    const logoutHandler = () => {
        dispatch(authActions.logout());
    }

    return (
        <main className={classes['main-page']} style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.37) 0%, #111 92.42%), url(${backgroundImage}), lightgray 50% / cover no-repeat`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <Container>
        Main page 
        {isAuthenticated && <p>Authenticated</p>}
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
            </Container>
        </main>
    );
};
export default MainPage;