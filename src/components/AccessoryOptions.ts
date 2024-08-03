export interface AccessoryOption {
    label: string;
    src: string | null;
}

export type AccessoryOptions = {
    hat: AccessoryOption[];
    accessory: AccessoryOption[];
    hand: AccessoryOption[];
    head: AccessoryOption[];
    outfit: AccessoryOption[];
    background: AccessoryOption[];
};

export const accessoriesOptions: AccessoryOptions = {

    head: [
        { label: "None", src: "/PFP/head/head4.png" },
        { label: "Head 1", src: "/PFP/head/head1.png" },
        { label: "Head 2", src: "/PFP/head/head2.png" },
        { label: "Head 3", src: "/PFP/head/head3.png" },
        { label: "Head 4", src: "/PFP/head/head4.png" },
        { label: "Head 5", src: "/PFP/head/head5.png" },
        { label: "Head 6", src: "/PFP/head/head6.png" },
        { label: "Head 7", src: "/PFP/head/head7.png" },
        { label: "Head 8", src: "/PFP/head/head8.png" },
        { label: "Head 9", src: "/PFP/head/head9.png" },
        { label: "Head 10", src: "/PFP/head/head10.png" },
        { label: "Head 11", src: "/PFP/head/head11.png" },
        { label: "Head 12", src: "/PFP/head/head12.png" },
        { label: "Head 13", src: "/PFP/head/head13.png" },
        { label: "Head 14", src: "/PFP/head/head14.png" },
        { label: "Head 15", src: "/PFP/head/head15.png" },
        { label: "Head 16", src: "/PFP/head/head16.png" },
    ],
    hand: [
        { label: "None", src: null },
        { label: "Hand 1", src: "/PFP/hand/hand1.png" },
        { label: "Hand 2", src: "/PFP/hand/hand2.png" },
        { label: "Hand 3", src: "/PFP/hand/hand3.png" },
        { label: "Hand 4", src: "/PFP/hand/hand4.png" },
        { label: "Hand 5", src: "/PFP/hand/hand5.png" },
        { label: "Hand 6", src: "/PFP/hand/hand6.png" },
        { label: "Hand 7", src: "/PFP/hand/hand7.png" },
        { label: "Hand 8", src: "/PFP/hand/hand8.png" },
        { label: "Hand 9", src: "/PFP/hand/hand9.png" },
        { label: "Hand 10", src: "/PFP/hand/hand10.png" },
        { label: "Hand 11", src: "/PFP/hand/hand11.png" },
        { label: "Hand 12", src: "/PFP/hand/hand12.png" },
        { label: "Hand 13", src: "/PFP/hand/hand13.png" },
        { label: "Hand 14", src: "/PFP/hand/hand14.png" },
        { label: "Hand 15", src: "/PFP/hand/hand15.png" },
        { label: "Hand 16", src: "/PFP/hand/hand16.png" },

    ],
    hat: [
        { label: "None", src: null },
        { label: "Hat 1", src: "/PFP/hat/hat1.png" },
        { label: "Hat 2", src: "/PFP/hat/hat2.png" },
        { label: "Hat 3", src: "/PFP/hat/hat3.png" },
        { label: "Hat 4", src: "/PFP/hat/hat4.png" },
        { label: "Hat 5", src: "/PFP/hat/hat5.png" },
        { label: "Hat 6", src: "/PFP/hat/hat6.png" },
        { label: "Hat 7", src: "/PFP/hat/hat7.png" },
        { label: "Hat 8", src: "/PFP/hat/hat8.png" },
        { label: "Hat 9", src: "/PFP/hat/hat9.png" },
        { label: "Hat 10", src: "/PFP/hat/hat10.png" },
        { label: "Hat 11", src: "/PFP/hat/hat11.png" },
        { label: "Hat 12", src: "/PFP/hat/hat12.png" },
        { label: "Hat 13", src: "/PFP/hat/hat13.png" },
        { label: "Hat 14", src: "/PFP/hat/hat14.png" },
        { label: "Hat 15", src: "/PFP/hat/hat15.png" },
        { label: "Hat 16", src: "/PFP/hat/hat16.png" },
    ],
    outfit: [
        { label: "None", src: '/PFP/outfit/body.png' },
        { label: "Outfit 1", src: "/PFP/outfit/outfit1.png" },
        { label: "Outfit 2", src: "/PFP/outfit/outfit2.png" },
        { label: "Outfit 3", src: "/PFP/outfit/outfit3.png" },
        { label: "Outfit 4", src: "/PFP/outfit/outfit4.png" },
        { label: "Outfit 5", src: "/PFP/outfit/outfit5.png" },
        { label: "Outfit 6", src: "/PFP/outfit/outfit6.png" },
        { label: "Outfit 7", src: "/PFP/outfit/outfit7.png" },
        { label: "Outfit 8", src: "/PFP/outfit/outfit8.png" },
        { label: "Outfit 9", src: "/PFP/outfit/outfit9.png" },
        { label: "Outfit 10", src: "/PFP/outfit/outfit10.png" },
        { label: "Outfit 11", src: "/PFP/outfit/outfit11.png" },
        { label: "Outfit 12", src: "/PFP/outfit/outfit12.png" },
        { label: "Outfit 13", src: "/PFP/outfit/outfit13.png" },
        { label: "Outfit 14", src: "/PFP/outfit/outfit14.png" },
        { label: "Outfit 15", src: "/PFP/outfit/outfit15.png" },
        { label: "Outfit 16", src: "/PFP/outfit/outfit16.png" },
    ],
    accessory: [
        { label: "None", src: null },
        { label: "Accessory 1", src: "/PFP/accessory/accessory1.png" },
        { label: "Accessory 2", src: "/PFP/accessory/accessory2.png" },
        { label: "Accessory 3", src: "/PFP/accessory/accessory3.png" },
        { label: "Accessory 4", src: "/PFP/accessory/accessory4.png" },
        { label: "Accessory 5", src: "/PFP/accessory/accessory5.png" },
        { label: "Accessory 6", src: "/PFP/accessory/accessory6.png" },
        { label: "Accessory 7", src: "/PFP/accessory/accessory7.png" },
        { label: "Accessory 8", src: "/PFP/accessory/accessory8.png" },
        { label: "Accessory 9", src: "/PFP/accessory/accessory9.png" },
        { label: "Accessory 10", src: "/PFP/accessory/accessory10.png" },
        // Add other Accessory here...
    ],
    background: [
        { label: "#1398FD", src: "#1398FD" },
        { label: "#206B0F", src: "#206B0F" },
        { label: "#FF00CF", src: "#FF00CF" },
        { label: "#131C6A", src: "#131C6A" },
        { label: "#FDDD10", src: "#FDDD10" },
        { label: "#FF5C00", src: "#FF5C00" },
        { label: "#FF0000", src: "#FF0000" },
        { label: "#9A53FF", src: "#9A53FF" },
        { label: "#2BFF00", src: "#2BFF00" },
        { label: "#B76A5F", src: "#B76A5F" },
        { label: "#E6FFB8", src: "#E6FFB8" },
        { label: "#B7E5FF", src: "#B7E5FF" },
        { label: "#036265", src: "#036265" },
        { label: "#241512", src: "#241512" },
        { label: "#2400FF", src: "#2400FF" },
        { label: "#141414", src: "#141414" },
    ],
};
