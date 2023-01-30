import Logo from '../assets/images/logo.svg';

const LogoStyle = {
    width: '150px',
    height: '50px'
}

const ButtonFree = {
    color: 'hsl(321, 100%, 78%)',
    background: 'transparent',
    border: '1px solid hsl(321, 100%, 78%)',
    padding: '0 15px',
    borderRadius: '30px',
    width: '150px'
}


const NavBar = () =>{
    return(
        <div className="h-20 flex w-full">
            <div className='flex w-11/12 m-auto justify-between flex-row'>
                <img style={LogoStyle} src={Logo}/>
                <button className="hover:opacity-75" style={ButtonFree}>Try It Free</button>
            </div>
        </div>
    )
}



export default NavBar;