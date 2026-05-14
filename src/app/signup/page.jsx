'use client'
import { Card, Separator } from '@heroui/react'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const router =useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        // console.log(user)

        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
        });
        // console.log(data,error)
        if (data) {
            toast.success('SignUp Successful')
            e.target.reset()
            router.push('/login')
        }
        if(error){
            toast.error(error.message)
        }

    }
    const handleSignUp = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-2'>
                <h1 className='text-2xl font-bold'>Create Account</h1>
                <p>Start your adventure with Wanderlust</p>
            </div>
            <Card className='border rounded w-2xl mx-auto my-7 space-y-2'>
                <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                    >
                        <Label>Image Url</Label>
                        <Input placeholder="Enter Your image url" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <div className="flex gap-2">
                        <Button type="submit" className={'w-full'}>
                            <Check />
                            Create Account
                        </Button>
                    </div>
                </Form>
                <div className='flex items-center gap-2'>
                    <Separator className='flex-1' />
                    <span>Or sign up with</span>
                    <Separator className='flex-1' />
                </div>
                <Button onClick={handleSignUp} variant='outline' className={'w-full rounded'}><FcGoogle />Sign Up With Google</Button>
                <div className='text-center'>
                    <h1>Already have an account? <Link href={'/login'} className='text-blue-700 font-bold'>Sign In</Link></h1>
                </div>
            </Card>
        </div>
    )
}

export default SignUpPage