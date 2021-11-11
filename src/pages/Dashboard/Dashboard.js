import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DashboradHome from './DashbosrdHome/DashboradHome';
import Pay from './UserDashboard/Pay/Pay';
import MyOrders from './UserDashboard/MyOrders/MyOrders';
import UserReview from './UserDashboard/UserReview/UserReview';
import useAuth from '../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
    const { logout } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: "#006885", height: "100vh", color: "white" }}>
            <Toolbar >
                <h1 className="text-bold d-inline" style={{ color: "tomato" }}>MYShop</h1>
            </Toolbar>
            <Divider />

            <Link to="/home"><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">Home</Button></Link>
            <Link to={`${url}`}><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">Dashboard</Button></Link>
            <Link to={`${url}/pay`}><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">Pay</Button></Link>
            <Link to={`${url}/myOrders`}><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">My Orders</Button></Link>
            <Link to={`${url}/userReview`}><Button color="inherit" className="w-100 text-white text-decoration-none py-2 mb-2">Review</Button></Link>
            <Link to="/home"><button onClick={logout} className="btn btn-success w-100">LogOut</button></Link>


            {/* <Link to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            {admin && <Box>
                <Link to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link to={`${url}/addDoctor`}><Button color="inherit">Add Doctor</Button></Link>
            </Box>} */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboradHome></DashboradHome>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/userReview`}>
                        <UserReview></UserReview>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
