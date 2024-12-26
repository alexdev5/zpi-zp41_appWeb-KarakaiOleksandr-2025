export enum NavigationIdLab1 {
    Description,
    Purpose,
}

export interface NavigationRecord {
    id: NavigationIdLab1
    label: string
    children?: {
        id: number
        label: string
    }[]
}

export interface ChildSelectEvent {
    parent: NavigationIdLab1
    child: NavigationIdLab1
}
