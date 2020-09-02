import { Employee } from "./Employee";

export class Seller extends Employee {
    private salesQuantity: number = 0;
    static SELLING_COMISSION: number = 400;

    public setSalesQuantity(quantity: number): number{
        return this.salesQuantity = quantity;
    }

    public getSalesQuantity(): number{
        return this.salesQuantity
    }

    calculateTotalSalary(): number{
        return this.getBaseSalary() + 400 + Seller.SELLING_COMISSION * this.salesQuantity
    }
}