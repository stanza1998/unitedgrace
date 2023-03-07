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

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const home = () => {
    window.scroll(0, 0)
    navigate("/")
  }
  const about = () => {
    window.scroll(0, 0)
    navigate("/about")
  }
  const events = () => {
    window.scroll(0, 0)
    navigate("/events")
  }
  const testimonials = () => {
    window.scroll(0, 0)
    navigate("/testimonials")
  }
  const trinity = () => {
    window.scroll(0, 0)
    navigate("/trinity")
  }
  const store = () => {
    window.scroll(0, 0)
    navigate("/store")
  }
  const contact = () => {
    window.scroll(0, 0)
    navigate("/contact")
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
          <div style={{ width: "100%", padding: "10px" }}>
            <img style={{ float: "right", marginLeft: "10px", height: "50px" }} src={logo} alt="" />
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
        <List style={{ marginTop: "7rem" }}>
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
              <ListItemButton onClick={store}
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
        </List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routing />
        <Footer />
      </Box>
    </Box>
  );
}