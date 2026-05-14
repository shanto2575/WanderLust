import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Image from 'next/image'

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;

    if (!user) {
        return (
            <div className='flex items-center justify-center h-96 text-4xl font-bold'>
                No Data
            </div>
        )
    }

    return (
        <div className='flex items-center justify-center my-6'>
            <div className='border rounded-2xl p-5 space-y-3 text-center'>
                <Image
                    src={user.image || "/avatar.png"}
                    alt={user.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto"
                />
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default ProfilePage