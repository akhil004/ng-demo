import { zip } from "rxjs";

export class Details {
    brandName: string;
    deviceName: string;
    color: string;
    capacity: string;
    issue: string;
    userInfo: {
        name: string;
        mobile: string;
    };
    date: string;
    userAddress:{
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        email: string;
    };
    paymentTransID: string;
    
}