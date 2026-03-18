import { EmplRepository } from "../src/repository/EmplRepository";

async function main() {
    const emplRepository = new EmplRepository();
    const employees = await emplRepository.getAllEmployees();
    console.log(employees);
}

main();