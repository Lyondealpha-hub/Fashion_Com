

export interface itemsInterface {
    id : number,
    title : string,
    price : number,
    description : string,
    url : string,
    itemCate : string,
    
}

export type AddToCart_btn={
    id : string,
}

export interface mainState {
    notification : number,
    Orderitem: itemsInterface[]
    
}

export interface products {
    Allitems : itemsInterface[]
}
