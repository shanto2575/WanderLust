import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-5'>
            <ul className='flex gap-5'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/destinations'}>Destinations</NavLink></li>
                <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
                <li><NavLink href={'/admin'}>Admin</NavLink></li>
                <li><NavLink href={'/add-destination'}>Add Destination</NavLink></li>
            </ul>
            <Link href={'/'}>
                <Image
                    src={'/assets/logo.png'}
                    width={400}
                    height={400}
                    alt='logo'
                    className='text-sm w-40'
                />
            </Link>
            <ul className='flex gap-5'>
                <li><NavLink href={'/profile'}> Profile</NavLink></li>
                <li><NavLink href={'/login'}>Login</NavLink></li>
                <li><NavLink href={'/signup'}>Sign Up</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar
