import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import QuizIcon from '@mui/icons-material/Quiz';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import StoreIcon from '@mui/icons-material/Store';
import CallIcon from '@mui/icons-material/Call';
import logo from "../../assets/church_logo.png"
import { Home } from '../sub_components/home/home';
import Tooltip from '@mui/material/Tooltip';
import { Footer } from '../footer/footer';
import { Routing } from '../../App';
import { useAppContext } from '../Context';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { observer } from 'mobx-react-lite';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export const MiniDrawer = observer(() => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { store, api } = useAppContext();

  const currentUser = store.auth.meJson;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const home = () => {
    window.scroll(0, 0)
    navigate("/")
    handleDrawerClose()
  }
  const about = () => {
    window.scroll(0, 0)
    navigate("/about")
    handleDrawerClose()
  }
  const events = () => {
    window.scroll(0, 0)
    navigate("/events")
    handleDrawerClose()
  }
  const testimonials = () => {
    window.scroll(0, 0)
    navigate("/testimonials")
    handleDrawerClose()
  }
  const trinity = () => {
    window.scroll(0, 0)
    navigate("/client-trinity")
    handleDrawerClose()
  }
  const shop = () => {
    window.scroll(0, 0)
    navigate("/store")
    handleDrawerClose()
  }
  const contact = () => {
    window.scroll(0, 0)
    navigate("/contact")
    handleDrawerClose()
  }
  const create = () => {
    window.scroll(0, 0)
    navigate("/create")
    handleDrawerClose()
  }
  const login = () => {
    window.scroll(0, 0)
    navigate("/login")
    handleDrawerClose()
  }



  const logOut = async () => {
    if (!window.confirm("Are you sure you want to log out?")) return;
    await signOut(auth);
    store.auth.logOut();
    window.scroll(0, 0)
    navigate("/login")
  }






  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "#ffff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon style={{ color: "#000" }} />
          </IconButton>

          <div style={{ width: "100%", padding: "4px" }}>
            <img style={{ float: "right", marginLeft: "10px", height: "50px" }} src={logo} alt="" />
            {!currentUser ? <></> : <h5 onClick={logOut} className=" uk-margin-small-right" style={{ float: "left", marginLeft: "10px", marginTop: "1rem", textTransform: "uppercase", fontWeight: "700", cursor: "pointer" }} >{"Hello "} {currentUser?.fullName}</h5>}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
        PaperProps={{
          sx: {
            backgroundColor: "000",
          }
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: "#000", }} /> : <ChevronLeftIcon style={{ color: "#000" }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List style={{ marginTop: "5rem" }}>
          <Tooltip title="Home" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={home}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon style={{ color: "#000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="About us" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={about}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <InfoIcon style={{ color: "#000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="About us" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Events" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={events}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <EventIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Events" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Testimonials" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={testimonials}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <QuizIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Testimonials" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Trinity" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={trinity}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LibraryMusicIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Trinity" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="e-Store" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={shop}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <StoreIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="e-Store" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          <Tooltip title="Contact Us" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={contact}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <CallIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Contact Us" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
          {!!currentUser ? <></>

            :

            <>
              <Tooltip title="Create Account" placement="right-start">
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton onClick={create}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <AccountCircleIcon style={{ color: "000" }} />
                    </ListItemIcon>
                    <ListItemText style={{ color: "#000" }} primary="Create Account" sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            </>}
          <Tooltip title="Login" placement="right-start">
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton onClick={login}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LoginIcon style={{ color: "000" }} />
                </ListItemIcon>
                <ListItemText style={{ color: "#000" }} primary="Login" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routing />
        <Footer />
      </Box>
      <div id="modal-example" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <form onSubmit={logOut}>
            <h2 className="uk-modal-title" style={{ textTransform: "uppercase" }}>Authentication</h2>
            <p>Are you sure you want to log out</p>
            <p className="uk-text-right">
              <button className="uk-button uk-button-default uk-modal-close" type="button">No</button>
              <button className="uk-button uk-button-primary" type='submit'>Yes</button>
            </p>
          </form>

        </div>
      </div>
    </Box>
  );
})