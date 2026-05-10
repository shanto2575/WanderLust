"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

export function DeleteAlert({destination}) {
        const {_id, imageUrl, destinationName, country, price, duration } = destination;

        const handleDelete=async()=>{
            const res=await fetch(`http://localhost:5000/destination/${_id}`,{
                method:'DELETE',
                headers:{
                    "Content-type":'application/json'
                }
            })
            const data=await res.json()
            redirect('/destination')
            // console.log(data)
        }

    return (
        <AlertDialog>
            <Button variant="danger" className={'rounded flex items-center'}><FaTrash/> Cencel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cencel Destination permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{destinationName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Confirm Cencel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}