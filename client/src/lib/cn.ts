import { twMerge, ClassNameValue } from "tailwind-merge";

export function cn(...classLists: ClassNameValue[]){
    return twMerge(classLists)
}