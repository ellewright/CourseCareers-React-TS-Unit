import { ComponentPropsWithoutRef, ElementType } from "react"
import styles from "./Button.module.css"

type ButtonProps<T extends ElementType> = {
    As?: T
    size?: "sm" | "md" | "lg"
} & ComponentPropsWithoutRef<T>

const DEFAULT_TYPE = "button"

export default function Button<T extends ElementType = typeof DEFAULT_TYPE>({ As, size = "md", className = "", ...props }: ButtonProps<T>) {
    const Component = As ?? "button"

    return (
        <Component
            {...props}
            className={`${styles.btn} ${styles[size]} ${className}`}
        />
    )
}