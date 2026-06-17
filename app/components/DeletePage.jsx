"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteData({ data }) {

    const { _id } = data;
    console.log("ID", _id);


    const handelDelete = async () => {

        const res = await fetch(`http://localhost:5000/destinations/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const result = await res.json();

        if (res.ok) {
            console.log("Deleted successfully", result);
        } else {
            console.log("Delete failed", result);
        }

        redirect('/destination')
        console.log(result);


    }

    return (
        <AlertDialog>
            <Button variant="danger">Delete Project</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>
                                Delete <span> </span>
                                <span className="text-red-500">
                                    {data.destinationName}
                                </span>
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                {data.description}
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="primary">
                                Cancel
                            </Button>
                            <Button onClick={handelDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}