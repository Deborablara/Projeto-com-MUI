import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../contexts";


export const MenuLateral: React.FC<{children: React.ReactNode}> = ({children}) => {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext()

  return (

    <>
     <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" >
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar sx={{height: theme.spacing(12), width: theme.spacing(12)}} src="https://scontent.fria4-1.fna.fbcdn.net/v/t1.6435-9/157713342_1740738006107615_1145814731721220464_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UYudyg6Ek1sAX9CWnRU&_nc_ht=scontent.fria4-1.fna&oh=00_AT-0GMKiEj_4yN2DAqW4A5zmwfFzbvPd3wV3W8gk9Dpk9A&oe=62E3AC82" />
          </Box>

          <Divider/>

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                 <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial"/>
              </ListItemButton>
            </List>
          </Box>
        </Box>
     </Drawer>
     <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
      {children}
     </Box>
    </>
     
  )
}