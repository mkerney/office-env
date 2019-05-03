import axiosInstance from ".";

let testDataPath = '/test-data'


export function testDataCreate (data){
    return axiosInstance.post(testDataPath, data);
}
