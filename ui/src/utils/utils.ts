import { GoodItem, Goods } from 'model/util.model';

export const groupData = (data: any, groupCount: number) => {
    
    let tempGroup: any[] = [];
    const newData: any[][] = [];

    data.forEach((item: any) => {
        if (tempGroup.length < groupCount) {
            tempGroup.push(item);
        }
        else {
            newData.push(tempGroup);
            tempGroup = [item];
        }
    })
    if (tempGroup.length) {
        newData.push(tempGroup);
    }
    return newData
}

export const itemSelectedArray = (items: Goods[], idSelectedArray: string[]): GoodItem[] => {
    const serviceData: GoodItem[] = [];
    idSelectedArray.forEach((id) => {
      items.forEach((service) => {
        const foundIndex = service.items.findIndex((item) => item.id === id);
        if (foundIndex >= 0) {
          serviceData.push(service.items[foundIndex]);
        }
      });
    });
    return serviceData;
}