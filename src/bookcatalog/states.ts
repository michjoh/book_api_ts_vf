// interface RequestStatus {
//     isLoading: boolean;
//     data: string;
//     error: Error;
// }
//
// const x: RequestStatus =  {
//     isLoading: true,
//     data: 'asdfsadf',
//     error: new Error('asdfdsaf')
// };

// unbounded polymorphism
interface ISth {}
class A implements ISth {}
class B implements ISth {}
class C implements ISth {}

// bounded polymorphism
type RequestStatus = {state: 'loading'} | {state: 'loaded', data: string} | {state: 'error', error: Error};

const processData = (status: RequestStatus) => {
    if(status.state === 'loaded') {
        console.log(status.data);
    } else if(status.state === 'error') {
        console.log(status.error);
    } else {
        console.log(status)
    }
};

// making impossible states impossible

type Result<T, E> = {status: 'success', data: T} | {status: 'error', error: E}

const someFn = (): Result<string, Error> => {
    // throw new Error();
    return {status: 'success', data: 'asdfdsaf'}
}

sameFn().map().flatMap()