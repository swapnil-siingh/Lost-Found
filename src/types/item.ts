export type ItemStatus = "lost" | "found";
export type ItemSolvedStatus = "pending" | "solved";

export interface Item {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    status: ItemStatus;
    location: string;
    date: Date;
    contact: string;
    userId: string;
    solvedStatus: ItemSolvedStatus;
}
