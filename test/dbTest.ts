import { EmplRepository } from "../src/repository/EmplRepository";

async function main() {
    const emplRepository = new EmplRepository();
    // const employees = await emplRepository.addEmployee({
    //     firstName: "John",
    //     lastName: "Doe",
    //     hireDate: new Date(),
    //     position: "Manager"
    // });
    // console.log(employees);

    const employees = await emplRepository.getEmployees();

    console.log(employees);
}

main();