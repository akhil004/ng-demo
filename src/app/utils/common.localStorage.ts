export function getDetails(){
    const details = [{
        brandName: localStorage.getItem('manufacturerName'),
        deviceName: localStorage.getItem('modelName'),
        color: localStorage.getItem('color'),
        capacity: localStorage.getItem('capacity'),
        issue: localStorage.getItem('issue'),
        userInfo: JSON.parse(localStorage.getItem('userInfo')),
        userAddress: JSON.parse(localStorage.getItem('userAddress')),
        date: localStorage.getItem('date'),
        cardDetails: JSON.parse(localStorage.getItem('cardDetails')),
        paymentTransID: localStorage.getItem('paymentTransID'),
        chargeUniqueID: localStorage.getItem('chargeUniqueID'),
        flag: localStorage.getItem('flag',)
    }];
    return details;
     
}