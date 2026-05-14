"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ booking }) {
    // console.log(bookingId)

    const handleCancelBookin = async () => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`http://localhost:5000/booking/${booking._id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
        })
        const data = await res.json()
        // console.log(data)
        window.location.reload()
    }
    return (
        <AlertDialog>
            <Button variant='outline' className={'rounded border-red-400 text-red-500'}>Cancel</Button>            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{booking.destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBookin} slot="close" variant="danger">
                                Confirm Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}