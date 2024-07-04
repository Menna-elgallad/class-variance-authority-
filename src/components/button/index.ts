import {cva} from "class-variance-authority";

export {default as Button} from "./Button.vue"

export const buttonVarient = cva("rounded-full transition duration-200"  , {
    variants: {
        intent : {
            primary : "bg-purple-500 text-white  hover:bg-purple-300",
            secondary : "bg-purple-100 text-purple-500  hover:bg-purple-50",
            outline : "bg-transparent  text-indigo-700 border border-purple-500 hover:bg-purple-50 " ,

        } ,
        size : {
            small : "text-sm px-2 py-0.5",
            medium : "text-base px-4 py-1",
            large : "text-lg px-6 py-1.5"
        } ,
        disabled: {
            true : "opacity-50 bg-gray-100 cursor-not-allowed"
        },
    },
    defaultVariants : {
        size : "medium"
    }
})
