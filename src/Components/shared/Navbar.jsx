'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
    const { data: session, isPending, error, refetch } = authClient.useSession()
    // console.log(session)
    const user = session?.user;
    // console.log(user)

    const handleSingOut = async () => {
        await authClient.signOut()
    }

    return (
        <div className='flex justify-between items-center p-5'>
            <ul className='flex gap-5'>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href={'/destination'}>Destinations</NavLink></li>
                <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
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
            <ul className='flex items-center gap-5'>
                <li><NavLink href={'/profile'}> Profile</NavLink></li>
                {user ? <>
                    <li>
                        <Avatar >
                            <Avatar.Image referrerPolicy='no-referrer' alt={user.name} src={user?.image} />
                            <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                        </Avatar>
                    </li>
                    <li>
                        <Button variant='danger' onClick={handleSingOut} className={'rounded'}>LogOut</Button>
                    </li>
                </> : <>
                    <li><NavLink href={'/login'}>Login</NavLink></li>
                    <li><NavLink href={'/signup'}>Sign Up</NavLink></li>
                </>}
            </ul>
        </div>
    )
}

export default Navbar
