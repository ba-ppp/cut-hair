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