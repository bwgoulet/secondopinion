import { Modal, ModalHeader, Input, ModalBody, ModalContent, ModalFooter, Button, Select, SelectItem } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function FormModal({ modal }: any) {


    const [sex, setSex] = useState<any>(new Set([]));
    const [age, setAge] = useState<string>();
    const [name, setName] = useState<string>();
    const [weight, setWeight] = useState<string>();

    const session = useSession();

    const sexData = [
        {
            name: "Male"
        },
        {
            name: "Female"
        }
    ];

    const addPatient = async () => {

        const body = {
            sex: sex.currentKey,
            age: age,
            name: name,
            weight: weight,
            doctor: session.data?.user?.email
        }

        const result = await fetch("/api/patients/add", {
            method: "POST",
            body: JSON.stringify(body)
        })

    }

    return (
        <Modal hideCloseButton={false} backdrop="opaque" isOpen={modal.isOpen} onClose={modal.onClose} isDismissable={true}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-row">
                            <div className="flex-1 items-center">
                                <p>Add a new patient</p>
                            </div>
                            {/* <div className="font-light text-sm">
                                <p>1/4</p>
                            </div> */}
                        </ModalHeader>
                        <ModalBody>
                            <Input
                                isClearable
                                type=""
                                label="Patients name"
                                variant="bordered"
                                placeholder="John Smith"
                                defaultValue="John Smith"
                                className="w-full"
                                onValueChange={setName}
                            />
                            <Input
                                isClearable
                                type="number"
                                label="Age"
                                variant="bordered"
                                placeholder="21"
                                defaultValue="21"
                                className="w-full"
                                onValueChange={setAge}
                            />
                            <Input
                                isClearable
                                type="number"
                                label="Weight (lbs)"
                                variant="bordered"
                                placeholder="130"
                                defaultValue="130"
                                className="w-full"
                                onValueChange={setWeight}
                            />
                            <Select
                                isRequired
                                label="Biological Sex"
                                placeholder=""
                                defaultSelectedKeys={["Male"]}
                                className="w-full"
                                variant="bordered"
                                selectedKeys={sex}
                                onSelectionChange={setSex}
                            >
                                {sexData.map((sex) => {
                                    return (
                                        <SelectItem key={sex.name} value={sex.name}>
                                            {sex.name}
                                        </SelectItem>
                                    )
                                })}
                            </Select>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="flat" onPress={() => {
                                addPatient();
                                modal.onClose();
                            }}>
                                Add Patient
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}