import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { withRouter } from '../components/withRouter';
import './topbar.css'
   const handleLogout = () => {
        localStorage.clear();
        this.props.history.push('/')
    }
const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Fundoo</Heading>
         <div className="topbarCenter">
        <div className="searchbar">
           <SearchIcon className="searchIcon" />
          <input
            placeholder="Search"
            className="searchInput"
          />
           <div className="other-icon">
                    <div className="refresh-icon">
                        <RefreshIcon />
                    </div>
                    <div className="gridView">
                        <GridViewIcon />
                    </div>
                    <div className="setting">
                        <SettingsIcon />
                    </div>
                    <div className="apps">
                        <AppsIcon />
                    </div>
                            <div className="logout">
                    <button type="submit"  onClick={handleLogout}
                    >Logout</button>

                              </div>
                </div>
                
        </div>
       
      </div>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;