export interface IProducts {
    id: number,
    title: string,
    price: number,
    decription: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }     
}