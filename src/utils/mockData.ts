import { Item } from "../types/item";

export const mockItems: Item[] = [
    {
        id: "1",
        title: "Lost Golden Retriever",
        description:
            "Friendly golden retriever, answers to Max. Last seen near Central Park.",
        imageUrl:
            "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80",
        status: "lost",
        location: "Central Park, NY",
        date: new Date("2024-03-10"),
        contact: "+1 (555) 0123",
        userId: "1",
        solvedStatus: "pending",
    },
    {
        id: "2",
        title: "Found iPhone 13",
        description: "Found in blue case near the subway station.",
        imageUrl:
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80",
        status: "found",
        location: "Times Square Station",
        date: new Date("2024-03-12"),
        contact: "+1 (555) 0124",
        userId: "1",
        solvedStatus: "solved",
    },
    {
        id: "3",
        title: "Lost Keys",
        description: "Bundle of keys with a red keychain.",
        imageUrl:
            "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80",
        status: "lost",
        date: new Date("2024-03-15"),
        location: "Downtown Brooklyn",
        contact: "+1 (555) 0125",
        userId: "1",
        solvedStatus: "pending",
    },

    {
        id: "4",
        title: "Found Wallet",
        description: "Black leather wallet found on the sidewalk.",
        imageUrl:
            "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?auto=format&fit=crop&q=80",
        status: "found",
        location: "5th Avenue, NY",
        date: new Date("2024-03-17"),
        contact: "+1 (555) 0126",
        userId: "2",
        solvedStatus: "pending",
    },
    {
        id: "5",
        title: "Lost Backpack",
        description: "Blue backpack with school books inside.",
        imageUrl:
            "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&q=80",
        status: "lost",
        location: "Union Square",
        date: new Date("2024-03-19"),
        contact: "+1 (555) 0127",
        userId: "2",
        solvedStatus: "pending",
    },
];
