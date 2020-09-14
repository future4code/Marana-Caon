import { v4 } from "uuid";

export class IdGenerator {
    public generatId(): string {
        return v4()
    }
}