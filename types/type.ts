import { ReactNode } from "react"

export type menuItemType = {
    name: string,
    icon: React.ComponentType<any>,
    url: string
}

export type checkpointMap = {
    checkpoint: string,
    url: string,
}