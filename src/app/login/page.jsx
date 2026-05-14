'use client'
import { Card, Separator } from '@heroui/react'
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from 'react-icons/fc';
import { redirect } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries())
        // console.log(user)

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });
        // console.log(data, error)
        if (data) {
            toast.success('Login Successful')
            redirect('/')
        }
    }

    const handleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className='max-w-7xl mx-auto '>
            <h2 className='text-center font-bold text-2xl'>Login Your Account</h2>
            <Card className='border rounded w-2xl mx-auto my-7 space-y-2'>
                <Form onSubmit={onSubmit} className="flex  flex-col gap-4">
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
                            Login
                        </Button>
                    </div>
                </Form>
                <div className='flex items-center gap-2'>
                    <Separator className='flex-1' />
                    <span>Or sign up with</span>
                    <Separator className='flex-1' />
                </div>
                <Button onClick={handleLogin} variant='outline' className={'w-full rounded'}><FcGoogle />Sign Up With Google</Button>
            </Card>
        </div>
    )
}

export default LoginPage
