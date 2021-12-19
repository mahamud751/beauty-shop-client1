import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ReceiptIcon from '@mui/icons-material/Receipt';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";


import DashboardMain from '../DashboardMain/DashboardMain';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ProductAdd from '../ProductAdd/ProductAdd';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';



const drawerWidth = 200;

function Dashboard(props) {
    const { logOut } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth()
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to="/home">
                    {['Home'].map((text, index) => (
                        <ListItem button key={text}>
                            {<HomeIcon fontSize="large" />}
                            <ListItemText primary={text} sx={{ p: 1 }} />
                        </ListItem>
                    ))}
                </Link>
                <Link to={`${url}/myOrders`}>
                    {['My Orders'].map((text, index) => (
                        <ListItem button key={text}>
                            {<ShoppingBagIcon fontSize="large" />}
                            <ListItemText primary={text} sx={{ p: 1 }} />
                        </ListItem>
                    ))}
                </Link>
                <Link to={`${url}/review`}>
                    {['Review'].map((text, index) => (
                        <ListItem button key={text}>
                            {<ReviewsIcon fontSize="large" />}
                            <ListItemText primary={text} sx={{ p: 1 }} />
                        </ListItem>
                    ))}
                </Link>
                <Link to={`${url}/payment`}>
                    {['Payment'].map((text, index) => (
                        <ListItem button key={text}>
                            {<ReceiptIcon fontSize="large" />}
                            <ListItemText primary={text} sx={{ p: 1 }} />
                        </ListItem>
                    ))}
                </Link>
                {admin && <Box>
                    <Link to={`${url}/makeAdmin`}>
                        {['Make Admin'].map((text, index) => (
                            <ListItem button key={text}>
                                {<AdminPanelSettingsIcon fontSize="large" />}
                                <ListItemText primary={text} sx={{ p: 1, textDecoration: "none" }} />
                            </ListItem>
                        ))}
                    </Link>
                    <Link to={`${url}/productAdd`}>
                        {['AddProduct'].map((text, index) => (
                            <ListItem button key={text}>
                                {<AdminPanelSettingsIcon fontSize="large" />}
                                <ListItemText primary={text} sx={{ p: 1 }} />
                            </ListItem>
                        ))}
                    </Link>
                    <Link to={`${url}/manageProducts`}>
                        {['Manage Products'].map((text, index) => (
                            <ListItem button key={text}>
                                {<AdminPanelSettingsIcon fontSize="large" />}
                                <ListItemText primary={text} sx={{ p: 1 }} />
                            </ListItem>
                        ))}
                    </Link>
                    <Link to={`${url}/manageOrders`}>
                        {['Manage Orders'].map((text, index) => (
                            <ListItem button key={text}>
                                {<AdminPanelSettingsIcon fontSize="large" />}
                                <ListItemText primary={text} sx={{ p: 1 }} />
                            </ListItem>
                        ))}
                    </Link>


                </Box>}
                <Link onClick={logOut} to="/home">
                    {['Log Out'].map((text, index) => (
                        <ListItem button key={text}>
                            {<AdminPanelSettingsIcon fontSize="large" />}
                            <ListItemText primary={text} sx={{ p: 1 }} />
                        </ListItem>
                    ))}
                </Link>


            </List>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

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
                        <DashboardMain></DashboardMain>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/productAdd`}>
                        <ProductAdd></ProductAdd>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>

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
